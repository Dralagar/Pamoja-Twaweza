"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Heart, Award, ArrowRight, Linkedin, Twitter, TrendingUp, Globe, BookOpen, Sparkles } from "lucide-react";

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
  icon: React.ReactNode;
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
    icon: <Heart className="w-8 h-8" />,
  },
  {
    title: "Partner With Us",
    description: "Create lasting impact through strategic partnerships. We collaborate with organizations that share our vision for community development and sustainable change.",
    link: "/partner",
    image: "/images/partnership.jpg",
    icon: <Users className="w-8 h-8" />,
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mission-Driven",
    description: "Every action we take is aligned with our mission to empower and uplift communities."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community-First",
    description: "We prioritize the needs and voices of the communities we serve in all our programs."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Inclusive",
    description: "We create opportunities for refugees and host communities to thrive together."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Sustainable",
    description: "We build long-term solutions that create lasting change and self-sufficiency."
  },
];

const stats = [
  { value: "500+", label: "Lives Impacted", icon: <Users className="w-6 h-6" /> },
  { value: "12+", label: "Active Programs", icon: <BookOpen className="w-6 h-6" /> },
  { value: "50+", label: "Community Partners", icon: <Award className="w-6 h-6" /> },
  { value: "8+", label: "Years of Service", icon: <Sparkles className="w-6 h-6" /> }
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Pamoj2.jpeg"
            alt="Pamoja Twaweza About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
           
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              About <span className="text-[#FFE66D]">Pamoja Twaweza</span>
            </h1>
            
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-8" />
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              A refugee-led organization operating as a community-based organization working with refugees
              and host communities in Kajiado South, Kenya. We focus on education, digital
              inclusion, and livelihoods to create lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#e0f2ff] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#0089C7] rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#0089C7] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#6b7280] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#e0f2ff] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000000]">
              Our <span className="text-[#0089C7]">Values</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#0089C7] rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:bg-[#F26522] transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#000000]">{value.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000000]">
              Meet Our <span className="text-[#0089C7]">Team</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
              Dedicated leaders committed to transforming communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#0089C7] hover:bg-[#0089C7] hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#0089C7] hover:bg-[#0089C7] hover:text-white transition-all duration-300 shadow-lg"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#000000] group-hover:text-[#0089C7] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#0089C7] font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-[#6b7280] leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fefce8]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000000]">
              Get <span className="text-[#0089C7]">Involved</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
              Join us in creating meaningful change in our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-8 relative">
                  <div className={`inline-flex p-4 rounded-2xl ${index === 0 ? 'bg-[#F26522]' : 'bg-[#0089C7]'} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 absolute -top-12 left-8`}>
                    {opportunity.icon}
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-3xl font-bold mb-4 text-[#000000] group-hover:text-[#0089C7] transition-colors duration-300">
                      {opportunity.title}
                    </h3>
                    
                    <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                      {opportunity.description}
                    </p>
                    
                    <a
                      href={opportunity.link}
                      className="inline-flex items-center gap-2 text-[#0089C7] font-semibold group-hover:gap-4 transition-all duration-300 text-lg"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-8" />
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Whether you want to volunteer, partner, or support our mission, there's a place for you at Pamoja Twaweza
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0089C7] rounded-full font-semibold text-lg hover:bg-[#FFE66D] hover:text-[#000000] transition-all duration-300 shadow-xl">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 border-2 border-white">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;