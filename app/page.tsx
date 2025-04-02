"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import OpportunititieSectionl from './components/OpportunititieSectionl';
import { motion } from 'framer-motion';
import Link from "next/link";
import { fetchPosts } from "./lib/sanity";
import styles from './styles/Home.module.css';
import stylesModule from './styles/Home.module.css';

const teamMembers = [
  {
    id: 1,
    name: "Eric Kimararungu", 
    role: "Founder and Executive Director",
    image: "/images/eri.jpeg",
    bio: "Eric is the founder and CEO of Pamoja Twaweza Organization. A dedicated member of the refugee community leadership team in Kitengela, he is instrumental in partnerships, resource mobilization, and overseeing the strategic growth of the organization.",
    socialLinks: {
      linkedin: "",
      twitter: ""
    }
  },
  {
    id: 2,
    name: "Annled Karimi",
    role: "Program Manager",
    image: "/images/ann.jpg",  
    bio: "Annled joined Pamoja Twaweza organization in 2021. She is in charge of programs and also supports communications and resource mobilization.",
    socialLinks: {
      linkedin: ""
    }
  },
  {
    id: 3,
    name: "Ramazani Mulisho",
    role: "Finance Lead",
    image: "/images/Ramazani.jpg",
    bio: "Ramazani, the organization's Finance lead, oversees all financial matters. He also supports advocacy and resource mobilization.",
    socialLinks: {
      linkedin: ""
    }
  }
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

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  excerpt: string;
}

export default function Home() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log("Fetched posts:", data);
        if (data.length === 0) {
          console.warn("No posts found.");
        }
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  const handleNavigation = (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  }

  const handleCardClick = (card: string) => {
    setActiveCard(card === activeCard ? null : card);
  }

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Pamoja Twaweza - Empowering Refugees in Kitengela</title>
        <meta name="description" content="Discover how Pamoja Twaweza, a refugee-led organization in Kitengela, empowers communities through sustainable development and education." />
        <meta name="keywords" content="Refugee-led organization in Kitengela, Refugee empowerment, Sustainable development for refugees, Refugee education and skills training, Mental health support for refugees, Digital skills training for refugees" />
        <meta property="og:title" content="Pamoja Twaweza - Empowering Refugees in Kitengela" />
        <meta property="og:description" content="Empowering communities through sustainable development and education." />
        <meta property="og:image" content="/images/pamoj2.jpeg" />
        <meta property="og:url" content="https://pamojatwaweza.org" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.mainContainer} suppressHydrationWarning>
        <div className={styles.content}>
          {/* Hero Section */}
          <motion.section 
            className={styles.heroSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
                  onClick={() => {
                    document.querySelector('#contact-section')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Get Involved
                </button>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/pamoj2.jpeg"
                  alt="Pamoja Twaweza Community Impact - Refugee-led organization in Kitengela"
                  width={1200}
                  height={630}
                  priority
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  quality={90}
                />
              </div>
            </div>
          </motion.section>

          {/* New Layout for Advocacy, Video, and Peace */}
          <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Advocacy Program Card */}
              <motion.div 
                className="md:col-span-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick('advocacy')}
              >
                <h3 className="text-xl font-bold mb-2">Advocacy</h3>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/images/Advocacy.png"
                    alt="Advocacy"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p>
                  We engage in advocacy to promote the rights and well-being of refugees and marginalized communities. Our efforts include policy influence, community mobilization, and awareness campaigns.
                </p>
                {activeCard === 'advocacy' && (
                  <div className="mt-4">
                    <p>More detailed information about our advocacy efforts...</p>
                  </div>
                )}
              </motion.div>

              {/* Video Content Card */}
              <motion.div 
                className="md:col-span-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick('video')}
              >
                <h3 className="text-xl font-bold mb-2">Video Content</h3>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  {activeCard === 'video' ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/x3_XElV6fbU?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/Pamoj5.jpeg"
                        alt="Pamoja Twaweza Livelihoods Program - Digital skills training and entrepreneurship"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <p>
                  Explore our video content showcasing the impact of our programs and the stories of those we serve. These videos highlight our initiatives and the positive changes in the community.
                </p>
                {activeCard === 'video' && (
                  <div className="mt-4">
                    <a 
                      href="https://www.youtube.com/@pamojatwaweza9454" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 underline inline-flex items-center mt-2"
                    >
                      Explore more content on our YouTube Channel
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </motion.div>

              {/* Peace Program Card */}
              <motion.div 
                className="md:col-span-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick('peace')}
              >
                <h3 className="text-xl font-bold mb-2">Peace</h3>
                <div className="relative h-48 mb-4">
                  <Image
                    src="/images/Peace.jpeg"
                    alt="Peace"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p>
                  Our peace programs aim to foster harmony and understanding within diverse communities. We conduct workshops, dialogues, and activities that promote peaceful coexistence and conflict resolution.
                </p>
                {activeCard === 'peace' && (
                  <div className="mt-4">
                    <p>More detailed information about our peace programs...</p>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Vision and Mission Section */}
          <section className="py-16 bg-gray-100 text-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Vision Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">
                  <i className="fas fa-eye"></i> {/* Vision Icon */}
                </div>
                <h1 className="text-2xl font-bold mb-4">Our Vision</h1>
                <p className="text-lg">
                  To ensure all marginalized, and vulnerable persons with disability and youth in our community have access to quality vocational training, resulting in self-reliance.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">
                  <i className="fas fa-bullseye"></i> {/* Mission Icon */}
                </div>
                <h1 className="text-2xl font-bold mb-4">Our Mission</h1>
                <p className="text-lg">
                  To identify and support marginalized, and vulnerable persons with disability and youth in our community become self-reliant through facilitating timely access to quality vocational skills and livelihood opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className={styles.coreValuesSection}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.coreValuesGrid}>
              {[
                {
                  title: "Integrity and Ethics",
                  description: "Valuing honesty and openness and taking responsibility and accountability for our actions.",
                },
                {
                  title: "Inclusion",
                  description: "Supporting beneficiaries without discrimination.",
                },
                {
                  title: "Transparency",
                  description: "Embracing honesty and open communication.",
                },
                {
                  title: "Excellence",
                  description: "Striving to give the best.",
                },
                {
                  title: "Teamwork",
                  description: "Collaboration, open communication coordinated by a leader who motivates and initiates connections rather than dictates.",
                },
                {
                  title: "Sustainability",
                  description: "Ensuring equitable and inclusive communities as well as responsible resource management for long-term economic resilience.",
                },
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className={styles.coreValueCard}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className={styles.coreValueTitle}>{value.title}</h3>
                  <p className={styles.coreValueText}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Add OpportunitiesSection component */}
          <OpportunititieSectionl />

          {/* Commenting out MultiPaymentDonation component temporarily */}
          {/* <MultiPaymentDonation /> */}

          {/* Impact Showcase */}
          <section className={styles.impactShowcase}>
            <div className={styles.impactOverlay} />
            <div className={styles.container}>
              <h2 className={styles.impactTitle}>Our Impact Stories</h2>
              <p className={styles.heroText}>
                Making a difference in our community through sustainable development and empowerment.
              </p>
            </div>
          </section>

          {/* Who We Are */}
          <section className={styles.whoWeAreSection}>
            <div className={styles.impactOverlay} />
            <div className={styles.whoWeAreContent}>
              <h2 className={styles.whoWeAreTitle}>Who We Are</h2>
              <p className={styles.whoWeAreText}>
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
          <section id="donation-section" className={styles.programsSection}>
            <div className="container mx-auto px-4">
              <h2 className={styles.sectionTitle}>Our Programs</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Main Program */}
                <div className="space-y-8">
                  <div className={styles.programCard}>
                    <div className={styles.programImage}>
                      <Image
                        src="/images/Pamoj5.jpeg"
                        alt="Livelihoods Program"
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="rounded-2xl object-cover shadow-xl"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-4 ${styles.title}`}>Livelihoods</h3>
                      <p className={styles.heroText}>
                        Digital skills training, tailoring courses, and entrepreneurship programs to empower youth and promote financial inclusion.
                      </p>
                    </div>
                  </div>
                </div> 

                {/* Secondary Programs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Mental Health Program */}
                  <div className={styles.programCard}>
                    <div className={styles.programImage}>
                      <Image
                        src="/images/Pamoj6.jpeg"
                        alt="Pamoja Twaweza Mental Health Support - Community counseling and awareness programs"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        quality={90}
                      />
                    </div>
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-4 ${styles.title}`}>Mental Health</h3>
                      <p className={styles.heroText}>
                        Awareness programs and counseling services to support emotional well-being and community resilience.
                      </p>
                    </div>
                  </div>

                  {/* Education Program */}
                  <div className={styles.programCard}>
                    <div className={styles.programImage}>
                      <Image
                        src="/images/education.jpg"
                        alt="Pamoja Twaweza Education Programs - English literacy and vocational training"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        quality={90}
                      />
                    </div>
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-4 ${styles.title}`}>Education</h3>
                      <p className={styles.heroText}>
                        English literacy classes and vocational training to enhance communication skills and community integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className={styles.teamSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Meet the Team</h2>
              <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                  <motion.div 
                    key={member.id} 
                    className={styles.teamMemberCard}
                    whileHover={{ scale: 1.05 }}
                  >
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
                  </motion.div>
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
                Kajiado East, Kitengela, , Kenya,
              </p>
              <button 
                className={styles.heroButton}
                onClick={() => handleNavigation('/contact')}
              >
                Contact Us
              </button>
            </div>
          </section>

          <section className={`${styles.creatingChangeSection} ${styles.section}`}>
            <h2 className={styles.creatingChangeTitle}>Creating Lasting Change</h2>
            <p className={styles.creatingChangeText}>
              Through dedicated community engagement and sustainable programs, we&apos;re building a brighter future for all.
            </p>
          </section>
          <section className={styles.impactSection}>
            <h2 className={styles.sectionTitle}>Our Impact</h2>
            <p className={styles.heroText}>
              Making a difference in our community through sustainable development and empowerment.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
