"use client";

import React from 'react';
import Image from 'next/image';
import styles from './styles/Home.module.css';
import axios from 'axios';
import MultiPaymentDonation from './components/MultiPaymentDonation';
import OpportunitiesSection from './components/OpportunititieSectionl';

const teamMembers = [
  {
    id: 1,
    name: "Eric",
    role: "Executive Director",
    image: "/team/member1.jpg",
    bio: "Leading our community initiatives with over 10 years of experience in social development.",
    socialLinks: {
      linkedin: "",
      twitter: ""
    }
  },
  {
    id: 2,
    name: "Anneled Karemi",
    role: "Program Manager",
    image: "/team/member2.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 3,
    name: "Ramazaan Mwalisho",
    role: "",
    image: "/team/member3.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 4,
    name: "Ramazaan Mwalisho",
    role: "Communications Manager",
    image: "/team/member3.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 5,
    name: "Anneled Karemi",
    role: "Program Manager",
    image: "/team/member2.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 6,
    name: "Ramazaan Mwalisho",
    role: "Communications Manager",
    image: "/team/member3.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 7,
    name: "Anneled Karemi",
    role: "Program Manager",
    image: "/team/member2.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 8,
    name: "Anneled Karemi",
    role: "Program Manager",
    image: "/team/member2.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/david-kimani"
    }
  },
] satisfies TeamMember[];

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin: string;
    twitter?: string;
  };
};

export default function Home() {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className={styles.mainContainer} suppressHydrationWarning>
      <div className={styles.content}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Transforming Lives Through Community Action
              </h1>
              <p className={styles.heroText}>
                At Pamoja Twaweza, we believe in the power of unity and collective action
                to create lasting positive change in our communities.
              </p>
              <button 
                className={styles.heroButton}
                onClick={() => handleNavigation('/join-us')}
              >
                Join Our Cause
              </button>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/pamoj1.jpeg"
                alt="Community Impact"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Add OpportunitiesSection component */}
        <OpportunitiesSection />

        {/* Add MultiPaymentDonation component */}
        <MultiPaymentDonation />

        {/* Impact Showcase */}
        <section className={styles.impactShowcase}>
          <h2 className={styles.impactTitle}>Our Impact Stories</h2>
          <div className="relative w-full h-full">
            <Image
              src="/images/pamoj7.jpeg"
              alt="Community Impact"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="object-cover"
            />
            <div className={styles.impactOverlay} />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className={styles.impactCard}>
                <h3 className={styles.sectionTitle}>Creating Lasting Change</h3>
                <p className={styles.heroText}>
                  Through dedicated community engagement and sustainable programs,
                  we&apos;re building a brighter future for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className={`${styles.section} container mx-auto px-4 py-24`}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <div className="max-w-2xl">
            <p className={styles.heroText}>
              Pamoja Twaweza is a community-based organization dedicated to empowering
              communities through sustainable development initiatives, mental health
              support, and educational programs.
            </p>
            <button 
              className={styles.heroButton}
              onClick={() => handleNavigation('/about')}
            >
              Learn More About Our Mission
            </button>
          </div>
        </section>

        {/* Programs Section */}
        <section className={styles.programsSection}>
          <div className="container mx-auto px-4">
            <h2 className={styles.sectionTitle}>Our Programs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Main Program */}
              <div className="space-y-8">
                <div className="relative aspect-video">
                  <Image
                    src="/images/pamoj5.jpeg"
                    alt="Livelihoods Program"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="rounded-2xl object-cover shadow-xl"
                  />
                </div>
                <div className={styles.programCard}>
                  <div className="p-8">
                    <h3 className={styles.sectionTitle}>Livelihoods</h3>
                    <p className={styles.heroText}>
                      We offer digital skills training for youth, tailoring and dressmaking
                      courses, entrepreneurship training, and promote financial inclusion
                      through savings and loans associations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Programs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mental Health Program */}
                <div className={styles.programCard}>
                  <div className="relative aspect-video">
                    <Image
                      src="/images/pamoj6.jpeg"
                      alt="Mental Health Programs"
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 ${styles.title}`}>Mental Health</h3>
                    <p className={styles.heroText}>
                      We conduct awareness programs to support mental health within
                      the community.
                    </p>
                  </div>
                </div>

                {/* Education Program */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/pamoj3.jpeg"
                    alt="Education Programs"
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className={styles.impactOverlay}>
                    <h3 className={`text-2xl font-bold mb-4 text-[var(--secondary-light)]`}>Education</h3>
                    <p className="text-[var(--secondary-light)]/90 leading-relaxed">
                      English literacy classes for refugees to enhance their
                      communication skills and integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className="container mx-auto px-4">
            <h2 className={styles.sectionTitle}>Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamMemberCard}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className={styles.impactOverlay} />
                    <div className={styles.socialLinks}>
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                           className={styles.socialIcon}>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={styles.title}>{member.name}</h3>
                    <p className="text-[var(--primary-blue)] font-medium mb-3">{member.role}</p>
                    <p className={styles.heroText}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`${styles.section} container mx-auto px-4 py-24 text-center`}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <p className={styles.heroText}>
              Pamoja Twaweza CBO<br />
              Chairman Road, Next to Best Lady<br />
              Kajiado South
            </p>
            <button 
              className={styles.heroButton}
              onClick={() => handleNavigation('/contact')}
            >
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}