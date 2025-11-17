"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, BookOpen, Users, Briefcase, Scale, Brain, Target, Accessibility, ArrowRight, CheckCircle } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Digital Skills Training",
    category: "Livelihoods",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    image: "/images/Pamoj5.jpeg",
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
    icon: <Heart className="w-8 h-8" />,
    color: "bg-[#F26522]",
    image: "/images/Pamoj6.jpeg",
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
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    image: "/images/Pamoj4.jpeg",
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
    icon: <Briefcase className="w-8 h-8" />,
    color: "bg-[#F26522]",
    image: "/images/Pamoj8.jpeg",
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
    title: "Economic Empowerment",
    category: "Livelihoods",
    icon: <Target className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    description: "Implementing skills development programs tailored to local market demands.",
    image: "/images/Pamoj7.jpeg",
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
    icon: <Scale className="w-8 h-8" />,
    color: "bg-[#F26522]",
    description: "Amplifying the voices of refugees and vulnerable groups through policy advocacy.",
    image: "/images/Pamoj1.jpeg",
    details: [
      "Policy advocacy training",
      "Community rights education",
      "Inclusive decision-making",
      "Resource awareness",
      "Leadership development"
    ]
  },
  {
    id: 7,
    category: "Mental Health",
    title: "Psycho-social Support", 
    icon: <Brain className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    description: "Training community members to offer peer-to-peer psycho-social support.",
    image: "/images/MentalHealth.png",
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
    icon: <Users className="w-8 h-8" />,
    color: "bg-[#F26522]",
    description: "Engaging youth in leadership, education, and skills development activities.",
    image: "/images/empower.png",
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
    icon: <Accessibility className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    description: "Ensuring accessibility and inclusivity in all organizational programs.",
    image: "/images/Pwd.jpg",
    details: [
      "Accessibility improvements",
      "Inclusive programming",
      "Assistive technology",
      "Skills training",
      "Advocacy support"
    ]
  }
];

export default function ModernProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Livelihoods", "Health & Wellness", "Education", "Advocacy", "Youth Development", "Inclusion"];

  const filteredPrograms = activeCategory === "All" 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Pamoj2.jpeg"
            alt="Programs Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-[#FFE66D]">Programs</span>
            </h1>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive programs designed to empower, educate, and transform lives in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#0089C7] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Program Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-4 right-4 p-3 rounded-2xl ${program.color} text-white shadow-lg`}>
                    {program.icon}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#000000] group-hover:text-[#0089C7] transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2 mb-6">
                    {program.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#0089C7] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProgram(program)}
                    className="flex items-center gap-2 text-[#0089C7] font-semibold group-hover:gap-4 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#fefce8] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#000000]">
              Program <span className="text-[#0089C7]">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "9", label: "Active Programs", icon: "🎯" },
              { number: "500+", label: "Participants Trained", icon: "👥" },
              { number: "95%", label: "Satisfaction Rate", icon: "⭐" },
              { number: "200+", label: "Lives Transformed", icon: "✨" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-[#0089C7] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0089C7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFE66D] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26522] rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Programs
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-8" />
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Whether you want to participate, volunteer, or support our programs, there's a place for you in our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0089C7] rounded-full font-semibold text-lg hover:bg-[#FFE66D] hover:text-[#000000] transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 border-2 border-white">
                Become a Volunteer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className={`inline-flex p-3 rounded-2xl ${selectedProgram.color} text-white mb-4`}>
                {selectedProgram.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#000000]">{selectedProgram.title}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedProgram.description}</p>
              
              <h3 className="text-xl font-bold mb-4 text-[#0089C7]">What You'll Learn</h3>
              <div className="space-y-3">
                {selectedProgram.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0089C7] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full px-8 py-4 bg-[#0089C7] text-white rounded-full font-semibold text-lg hover:bg-[#0077b3] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                Enroll in This Program
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}