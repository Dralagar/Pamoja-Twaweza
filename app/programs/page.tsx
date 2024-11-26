"use client";

import React from 'react';
import Image from "next/image";

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
    image: "/programs/digital-skills.jpg",
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
    image: "/programs/mental-health.jpg",
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
    image: "/programs/english-literacy.jpg",
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
    image: "/programs/entrepreneurship.jpg",
    description: "Business skills development and entrepreneurship support for community members.",
    details: [
      "Business plan development",
      "Financial management",
      "Marketing strategies",
      "Product development",
      "Access to microfinance"
    ]
  }
];

export default function Programs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Programs Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/programs/hero-programs.jpg"
          alt="Our Programs"
          fill
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
          <h2 className="text-4xl font-bold mb-6">Transformative Initiatives</h2>
          <p className="text-xl text-gray-600">
            Our programs are designed to create lasting impact through skill development,
            education, and community support.
          </p>
        </div>

        {/* Detailed Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                    {program.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-3">
                  {program.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join our programs as a participant, volunteer, or supporter and help us create lasting change in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg">
              Apply for Programs
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all hover:shadow-lg">
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 