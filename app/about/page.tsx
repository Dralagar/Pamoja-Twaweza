"use client";

import React from "react";
import Image from "next/image";
import styles from "@/app/styles/About.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin: string;
    twitter?: string;
  };
}

interface Opportunity {
  title: string;
  description: string;
  link: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Eric Kimararungu",
    role: "Founder and Executive Director",
    image: "/images/eri.jpeg",
    bio: "Eric is the founder and CEO of Pamoja Twaweza Organization. A dedicated member of the refugee community leadership team in Kitengela, he is instrumental in partnerships, resource mobilization, and overseeing the strategic growth of the organization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/eric-kimararungu",
    },
  },
  {
    id: 2,
    name: "Annled Karimi",
    role: "Programs and Communications",
    image: "/images/ann.jpg",
    bio: "Annled joined Pamoja Twaweza organization in 2021. She is in charge of programs and also supports communications and resource mobilization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/Annled-karimi",
    },
  },
  {
    id: 3,
    name: "Ramazani Mulisho",
    role: "Finance Lead",
    image: "/images/Ramazani.jpg",
    bio: "Ramazani, the organization's Finance lead, oversees all organization's financial matters. He also supports Advocacy and resource mobilization.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ramazani-mulisho",
    },
  },
];

const opportunities: Opportunity[] = [
  {
    title: "Volunteer With Us",
    description: "Join our community of dedicated volunteers making a real difference in Kajiado South. Whether you have a few hours or want to commit long-term, your skills and passion can help transform lives.",
    link: "/volunteer",
    image: "/images/Volunteer.png",
  },
  {
    title: "Partner With Us",
    description: "Create lasting impact through strategic partnerships. We collaborate with organizations that share our vision for community development and sustainable change.",
    link: "/partner",
    image: "/images/partnership.jpg",
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>About | Pamoja Twaweza</title>
        <meta name="description" content="Learn more about Pamoja Twaweza Organization." />
      </Head>

      <div className={styles.container}>
        <section className={styles.header}>
          <h1>About Pamoja Twaweza</h1>
          <p>
            Refugee Led Organisation operationg as a community-based organization working with refugees
            and host communities in Kajiado South, Kenya. We focus on education, digital
            inclusion, and livelihood to create lasting change.
          </p>
        </section>

        <section className={styles.statsSection}>
          <motion.div
            className={styles.statsContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.statBox}>
              <h2>20+</h2>
              <p>Youth Trained</p>
            </div>
            <div className={styles.statBox}>
              <h2>5</h2>
              <p>Community Programs</p>
            </div>
            <div className={styles.statBox}>
              <h2>50+</h2>
              <p>Volunteers & Partners</p>
            </div>
          </motion.div>
        </section>

        <section className={styles.teamSection}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamContainer}>
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className={styles.profileImage}
                />
                <div className={styles.cardContent}>
                  <h3>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p>{member.bio}</p>
                  <div className={styles.socialLinks}>
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.opportunitiesSection}>
          <h2>Get Involved</h2>
          <div className={styles.opportunityCards}>
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                className={styles.opportunityCard}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={opportunity.image}
                  alt={opportunity.title}
                  width={400}
                  height={200}
                  className={styles.opportunityImage}
                />
                <h3>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
                <Link href={opportunity.link} className={styles.learnMore}>
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
