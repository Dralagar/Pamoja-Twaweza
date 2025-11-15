"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image"
import styles from '../styles/About.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,  
    name: "Eric Kimararungu", 
    role: "Founder and Executive Director",
    image: "/images/eri.jpeg",
    bio: "Eric is the founder and CEO of Pamoja Twaweza Organization. A dedicated member of the refugee community leadership team in Kitengela, he is instrumental in partnerships, resource mobilization, and overseeing the strategic growth of the organization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/eric-kimararungu",
    }

  },
  {
    id: 2,
    name: "Annled Karimi",
    role: "Programs and Communications",
    image: "/images/ann.jpg",
    bio: "Annled joined Pamoja Twaweza organization in 2021. She is in charge of programs and also supports communications and resource mobilization.",

    socialLinks: {
      linkedin: "https://linkedin.com/in/Annled-karimi",
    }
  },
  {
    id: 3,
    name: "Ramazani Mulisho",
    role: "Finance Lead",
    image: "/images/Ramazani.jpg",
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

// Define IntersectionObserver types if needed
type IntersectionObserverInit = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
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
    }
  });
};

const AnimatedHeader = () => {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const fullText = "Our Story";
  const fullSubText = "Since our founding in 2015, Pamoja Twaweza has been at the forefront of community development in Kajiado South, bringing together people and resources to create lasting positive change.";

  useEffect(() => {
    let currentIndex = 0;
    let subIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(typeSubText, 500);
      }
    };

    const typeSubText = () => {
      if (subIndex < fullSubText.length) {
        setSubText(fullSubText.slice(0, subIndex + 1));
        subIndex++;
        setTimeout(typeSubText, 30);
      }
    };

    typeText();
  }, []);

  return (
    <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
      />
      
      {/* Floating shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-20"
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            {subText}
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </motion.div>
      </div>
    </div>
  );
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
    <div className="min-h-screen">
        <AnimatedHeader />
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
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center px-4"
                >
                  <motion.h2 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg"
                  >
                    3+ Years of Impact
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl md:text-3xl text-white font-medium max-w-2xl mx-auto drop-shadow-lg"
                  >
                    Transforming communities through unity and action
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-8 flex justify-center space-x-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </motion.div>
                </motion.div>
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
                <span className="metricValue" data-target="10">0</span>
                <p>Partner Organizations</p>
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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Transforming Lives Through Community Action
              </motion.h2>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
              >
                At Pamoja Twaweza, we believe in the power of unity and collective action to create lasting positive change in our communities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="/volunteer" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    Get Involved
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 flex justify-center space-x-4"
              >
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </motion.div>
            </motion.div>
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

          {/* New section for Education and Mental Health cards */}
          <section className={styles.aboutSection}>
            <div className={styles.card}>
              <Image
                src="/images/education.jpg"
                alt="Education"
                className={styles.cardImage}
                width={300}
                height={200}
              />
              <h2>Education</h2>
              
              <p>English literacy classes for refugees to enhance their communication skills and integration.</p>
            </div>
            <div className={styles.card}>
              <Image
                src="/images/MentalHealth.png"
                alt="Mental Health"
                className={styles.cardImage}
                width={300}
                height={200}
              />
              <h2>Mental Health</h2>
              <p>Providing mental health support to help refugees cope with trauma and stress.</p>
            </div>
          </section>

          {/* Contact Section - New interactive section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative inline-block"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Have Questions?
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto"
                />
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
              >
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              >
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center text-base sm:text-lg font-semibold">
                    Send Message
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <a 
                  href="tel:+254700000000" 
                  className="w-full sm:w-auto group flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </motion.div>

              {/* Contact Information Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 px-4"
              >
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Email Us</h3>
                  <p className="text-base sm:text-lg text-gray-700">info@pamojatwaweza.org</p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Visit Us</h3>
                  <p className="text-base sm:text-lg text-gray-700">Kitengela, Kajiado South</p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Hours</h3>
                  <p className="text-base sm:text-lg text-gray-700">Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 sm:mt-12 flex justify-center space-x-4"
              >
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-600 animate-bounce" style={{ animationDelay: '0.4s' }} />
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>
  );
}