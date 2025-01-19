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

export default function ProgramsPage() {
  return (
    <>
      <Head>
        <title>Our Programs - Pamoja Twaweza</title>
        <meta name="description" content="Explore the diverse programs offered by Pamoja Twaweza, aimed at empowering communities and fostering sustainable development." />
      </Head>
      <nav>
        {/* Add your Navbar content here if needed */}
      </nav>
      <main className="min-h-screen bg-gradient-to-b from-[#F5F1E5] to-[#F8E19B]">
        {/* Programs Hero Section */}
        <section className="relative h-[500px]">
          <Image
            src="/images/pamoj3.jpeg"
            alt="Our Programs"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Empowering communities through comprehensive development initiatives
              </p>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#007DBB]">Transformative Initiatives</h2>
            <p className="text-xl text-[#7D7D7D]">
              Our programs are designed to create lasting impact through skill development,
              education, and community support.
            </p>
          </div>

          {/* Detailed Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className={styles.programCard}>
                <div className="relative h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#007DBB]">Get Involved</h2>
            <p className="text-xl text-[#7D7D7D] mb-12">
              Join our programs as a participant, volunteer, or supporter and help us create lasting change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#007DBB] text-white px-8 py-4 rounded-full hover:bg-[#005f8a] transition-all hover:shadow-lg">
                Apply for Programs
              </button>
              <button className="bg-[#153448] text-white px-8 py-4 rounded-full hover:bg-[#102a3a] transition-all hover:shadow-lg">
                Support Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Program Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold">Livelihood and Economic Empowerment</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Implementing skills development programs tailored to local market demands.</li>
                <li>Supporting entrepreneurship initiatives through training, mentorship, and access to resources.</li>
                <li>Facilitating training to enhance self-sufficiency and income generation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Advocacy and Rights Awareness</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Amplifying the voices of refugees and vulnerable groups through policy advocacy.</li>
                <li>Promoting the inclusion and participation of marginalized groups in decision-making processes.</li>
                <li>Educating communities on their rights and available resources.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mental Health and Psycho-social Support</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Training community members to offer peer-to-peer psycho-social support.</li>
                <li>Raising awareness about mental health to reduce stigma and promote well-being.</li>
                <li>Providing referral services to beneficiaries.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Youth Empowerment</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Engaging youth in leadership, education, and skills development activities.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Support for Persons with Disability</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Ensuring accessibility and inclusivity in all organizational programs.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}