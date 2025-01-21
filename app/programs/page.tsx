"use client";

import React from 'react';
import Image from "next/image";
import Head from 'next/head';
import styles from '../styles/Program.module.css';

type Program = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string[];
};

const programs: Program[] = [
  {
    id: 1,
    title: "Digital Skills Training",
    category: "Livelihoods",
    image: "/images/pamoj5.jpeg",
    description: "Comprehensive training in digital literacy, computer skills, and online tools for youth empowerment.",
    details: [
      "Basic computer operations",
      "Microsoft Office Suite",
      "Internet and email usage",
      "Social media for business",
      "Digital marketing fundamentals"
    ]
  },
  {
    id: 2,
    title: "Mental Health Support",
    category: "Health & Wellness",
    image: "/images/pamoj6.jpeg",
    description: "Community-based mental health awareness and support programs.",
    details: [
      "Counseling services",
      "Support group sessions",
      "Mental health awareness workshops",
      "Stress management training",
      "Youth mental health first aid"
    ]
  },
  {
    id: 3,
    title: "English Literacy",
    category: "Education",
    image: "/images/pamoj4.jpeg",
    description: "English language courses for refugees and community members to enhance communication skills.",
    details: [
      "Basic English conversation",
      "Reading and writing skills",
      "Business English",
      "IELTS preparation",
      "Cultural integration support"
    ]
  },
  {
    id: 4,
    title: "Entrepreneurship Training",
    category: "Livelihoods",
    image: "/images/pamoj8.jpeg",
    description: "Business skills development and entrepreneurship support for community members.",
    details: [
      "Business plan development",
      "Financial management",
      "Marketing strategies",
      "Product development",
      "Access to microfinance"
    ]
  },
  {
    id: 5,
    title: "Livelihood and Economic Empowerment",
    category: "Livelihoods",
    description: "Implementing skills development programs tailored to local market demands. Supporting entrepreneurship initiatives through training, mentorship, and access to resources. Facilitating training to enhance self-sufficiency and income generation.",
    image: "/images/livelihood.jpg",
    details: [
      "Skills development training",
      "Business mentorship",
      "Resource access support",
      "Market analysis",
      "Income generation strategies"
    ]
  },
  {
    id: 6,
    title: "Advocacy and Rights Awareness", 
    category: "Advocacy",
    description: "Amplifying the voices of refugees and vulnerable groups through policy advocacy. Promoting the inclusion and participation of marginalized groups in decision-making processes. Educating communities on their rights and available resources.",
    image: "/images/advocacy.jpg",
    details: [
      "Policy advocacy training",
      "Community rights education",
      "Inclusive decision-making",
      "Resource awareness",
      "Leadership development",
      "Resource access",
      "Stakeholder collaboration"
    ]
  },
  {
    id: 7,
    category: "Mental Health",
    title: "Mental Health and Psycho-social Support", 
    description: "Training community members to offer peer-to-peer psycho-social support. Raising awareness about mental health to reduce stigma and promote well-being. Providing referral services to beneficiaries.",
    image: "/images/mental_health.jpg",
    details: [
      "Peer support training",
      "Mental health awareness",
      "Stigma reduction",
      "Counseling services",
      "Referral support"
    ]
  },
  {
    id: 8,
    category: "Youth Development",
    title: "Youth Empowerment",
    description: "Engaging youth in leadership, education, and skills development activities.",
    image: "/images/youth_empowerment.jpg",
    details: [
      "Leadership training",
      "Educational support",
      "Skills development",
      "Youth mentorship",
      "Recreational activities"
    ]
  },
  {
    id: 9,
    category: "Inclusion",
    title: "Support for Persons with Disability",
    description: "Ensuring accessibility and inclusivity in all organizational programs.",
    image: "/images/disability_support.jpg",
    details: [
      "Accessibility improvements",
      "Inclusive programming",
      "Assistive technology",
      "Skills training",
      "Advocacy support"
    ]
  }
];

const programAreas = [
  {
    title: "Livelihood and Economic Empowerment",
    icon: "/images/livelihood.jpg",
    details: [
      "Implementing skills development programs tailored to local market demands.",
      "Supporting entrepreneurship initiatives through training, mentorship, and access to resources.",
      "Facilitating training to enhance self-sufficiency and income generation."
    ]
  },
  {
    title: "Advocacy and Rights Awareness",
    icon: "/images/advocacy.png",
    details: [
      "Amplifying the voices of refugees and vulnerable groups through policy advocacy.",
      "Promoting the inclusion and participation of marginalized groups in decision-making processes.",
      "Educating communities on their rights and available resources."
    ]
  },
  {
    title: "Mental Health and Psycho-social Support",
    icon: "/images/MentalHealth.png",
    details: [
      "Training community members to offer peer-to-peer psycho-social support.",
      "Raising awareness about mental health to reduce stigma and promote well-being.",
      "Providing referral services to beneficiaries."
    ]
  },
  {
    title: "Youth Empowerment",
    icon: "/images/YouthEmpowerment.jpg",
    details: [
      "Engaging youth in leadership, education, and skills development activities."
    ]
  },
  {
    title: "Support for Persons with Disability",
    icon: "/images/disability_support.jpg",
    details: [
      "Ensuring accessibility and inclusivity in all organizational programs."
    ]
  }
];

export default function Programs() {
  return (
    <>
      <Head>
        <title>Programs - Pamoja Twaweza</title>
        <meta name="description" content="Explore our diverse programs aimed at empowering communities and fostering sustainable development." />
      </Head>
      <main className="bg-gray-100">
        <section className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-8 text-center text-[var(--primary-blue)]">Our Programs</h1>
          <p className="text-xl text-center text-[var(--text-secondary)] mb-12">
            Discover the various programs we offer to support and empower our community.
          </p>
          <div className={styles.programGrid}>
            {programs.map((program) => (
              <div key={program.id} className={styles.programCard}>
                <div className="relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-[var(--primary-blue)]">{program.title}</h2>
                  <p className="text-[var(--text-secondary)]">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[var(--primary-blue)]">Get Involved</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Join our programs as a participant, volunteer, or supporter and help us create lasting change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--primary-blue)] text-white px-8 py-4 rounded-full hover:bg-[var(--accent-orange)] transition-all hover:shadow-lg">
                Apply for Programs
              </button>
              <button className="bg-[var(--accent-yellow)] text-[var(--text-black)] px-8 py-4 rounded-full hover:bg-[var(--accent-orange)] transition-all hover:shadow-lg">
                Support Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Program Areas Section */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--primary-blue)]">Our Program Areas</h2>
          <div className={styles.programAreasGrid}>
            {programAreas.map((area, index) => (
              <div key={index} className={`${styles.programAreaCard} ${index === 0 ? styles.fullRow : index === 1 ? styles.halfRow : styles.singleRow}`}>
                <div className="flex items-center mb-4">
                  <Image src={area.icon} alt={`${area.title} icon`} width={24} height={24} className="mr-2" />
                  <h3 className="text-xl font-bold text-[var(--primary-blue)]">{area.title}</h3>
                </div>
                <ul className="list-disc list-inside text-lg text-[var(--text-secondary)]">
                  {area.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}