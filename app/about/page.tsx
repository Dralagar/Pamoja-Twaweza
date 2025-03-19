"use client";

import React, { useEffect } from 'react';
import Image from "next/image"
import styles from '../styles/About.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

const teamMembers = [
  {
    id: 1,  
    name: "Eric Kimararungu",
    role: "Founder and CEO",
    image: "/images/eric.jpeg",
    bio: "Eric is the founder and CEO of Pamoja Twaweza Organization. A dedicated member of the refugee community leadership team in Kitengela, he is instrumental in partnerships, resource mobilization, and overseeing the strategic growth of the organization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/eric-kimararungu",
    }

  },
  {
    id: 2,
    name: "Annled Karimi",
    role: "Programs and Communications",
    image: "/images/Annled.jpg",
    bio: "Annled joined Pamoja Twaweza organization in 2021. She is in charge of programs and also supports communications and resource mobilization.",

    socialLinks: {
      linkedin: "https://linkedin.com/in/Annled-karimi",
    }
  },
  {
    id: 3,
    name: "Ramazani Mulisho",
    role: "Finance Lead",
    image: "/images/mwalisho.jpg",
    bio: "Ramazani, the organization's Finance lead, oversees all organization's financial matters. He also supports Advocacy and resource mobilization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ramazani-mulisho",
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

type Opportunity = {
  title: string;
  description: string;
  link: string;
  image: string;
}

const opportunities: Opportunity[] = [
  {
    title: "Volunteer With Us",
    description: "Join our community of dedicated volunteers making a real difference in Kajiado South. Whether you have a few hours or want to commit long-term, your skills and passion can help transform lives.",
    link: "/volunteer",
    image: "/images/Volunteer.png"
  },
  {
    title: "Partner With Us",
    description: "Create lasting impact through strategic partnerships. We collaborate with organizations that share our vision for community development and sustainable change.",
    link: "/partner",
    image: "/images/partnership.jpg"
  }
];

// Ensure IntersectionObserver types are defined
const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const target = entry.target as HTMLElement;
      const targetValue = parseInt(target.getAttribute("data-target") || "0", 10);

      if (isNaN(targetValue)) {
        console.error(`Invalid target value for element: ${target.textContent}`);
        return;
      }

      const increment = Math.ceil(targetValue / 100);

      const updateCount = () => {
        const currentValue = parseInt(target.innerText, 10);
        if (currentValue < targetValue) {
          target.innerText = `${currentValue + increment}`;
          setTimeout(updateCount, 10);
        } else {
          target.innerText = `${targetValue}`;
        }
      };

      updateCount();
      observer.unobserve(target);
    }
  });
};

export default function About() {
  useEffect(() => {
    console.log("useEffect is running");

    const metrics = document.querySelectorAll<HTMLElement>(".metricValue");

    if (metrics.length === 0) {
      console.error("No metric elements found");
      return;
    }

    const observer = new IntersectionObserver(callback, options);

    metrics.forEach((metric) => {
      observer.observe(metric);
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      metrics.forEach((metric) => observer.unobserve(metric));
    };
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Pamoja Twaweza</title>
        <meta name="description" content="Learn more about Pamoja Twaweza, our mission, vision, and the team dedicated to making a difference." />
      </Head>
      <main className={styles.heroSection} suppressHydrationWarning>
        {/* About Hero */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-[var(--foreground)] mb-6">Our Story</h1>
            <p className="text-xl text-[var(--foreground)] leading-relaxed">
              Since our founding in 2015, Pamoja Twaweza has been at the forefront of 
              community development in Kajiado South, bringing together people and resources 
              to create lasting positive change.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/pamoj2.jpeg"
              alt="Pamoja Twaweza Journey"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <h2 className="text-4xl font-bold mb-4">3+ Years of Impact</h2>
                <p className="text-xl max-w-2xl">Transforming communities through unity and action</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--foreground)]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className={styles.iconWrapper}>
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Unity</h3>
              <p className="text-[var(--foreground)]">Working together as one community to achieve shared goals</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Sustainability</h3>
              <p className="text-[var(--foreground)]">Creating long-lasting positive impact in our communities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">Maintaining highest standards of transparency and accountability</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Enhanced layout */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower communities through sustainable development initiatives, 
                  fostering unity and creating lasting positive change in the lives of 
                  those we serve through innovative programs and dedicated support.
                </p>
              </div>
              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A world where every community member has the opportunity to thrive, 
                  supported by strong social networks and sustainable development programs 
                  that create lasting impact for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers - New section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact in Numbers</h2>
          <div className={styles.metricsSection}>
            <div className={styles.metric}>
              <span className="metricValue" data-target="1000">0</span>+
              <p>Community Members Served</p>
            </div>
            <div className={styles.metric}>
              <span className="metricValue" data-target="6">0</span>+
              <p>Active Programs</p>
            </div>
            <div className={styles.metric}>
              <span className="metricValue" data-target="4">0</span>
              <p>Years of Service</p>
            </div>
            <div className={styles.metric}>
              <span className="metricValue" data-target="5">0</span>+
              <p>Community Partners</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.cardWrapper}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-[var(--foreground)]">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamCard}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-4 justify-center">
                        {member.socialLinks.linkedin && (
                          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                             className="hover:text-blue-400 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section - New call to action */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Whether you&apos;re looking to volunteer, partner, or support our cause, 
              there are many ways to get involved with Pamoja Twaweza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/volunteer" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Volunteer With Us
              </Link>
              <Link 
                href="/partner" 
                className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all hover:shadow-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Ways to Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {opportunities.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"

                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <Link 
                      href={item.link}
                      className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}