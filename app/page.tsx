"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Users, Heart, BookOpen, Sparkles, MapPin, Mail, Phone } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Livelihoods",
    description: "Digital skills training, tailoring courses, and entrepreneurship programs to empower youth and promote financial inclusion.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    image: "/images/Pamoj5.jpeg"
  },
  {
    id: 2,
    title: "Mental Health",
    description: "Awareness programs and counseling services to support emotional well-being and community resilience.",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-[#F26522]",
    image: "/images/Pamoj6.jpeg"
  },
  {
    id: 3,
    title: "Education",
    description: "English literacy classes and vocational training to enhance communication skills and community integration.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-[#0089C7]",
    image: "/images/education.jpg"
  },
  {
    id: 4,
    title: "Advocacy",
    description: "We engage in advocacy to promote the rights and well-being of refugees and marginalized communities.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-[#F26522]",
    image: "/images/Advocacy.png"
  }
];

export default function ModernPamojaHome() {
  const [activeVideo, setActiveVideo] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Pamoj2.jpeg"
            alt="Pamoja Twaweza Community Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-8 left-[20px] right-[20px] md:left-[40px] md:right-auto md:bottom-12 lg:left-[120px] z-10 max-w-xl">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming Lives Through<br />Community Action
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At Pamoja Twaweza, we believe in the power of unity and collective action to create lasting positive change in our communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="group px-8 py-4 bg-[#0089C7] text-white rounded-full font-semibold text-lg hover:bg-[#0077b3] transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl">
                Get Involved
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

       
      </motion.section>

      {/* Our Focus Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#000000]">
              What We <span className="text-[#0089C7]">Do</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">Empowering communities through targeted interventions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/images/Pamoj5.jpeg",
                title: "Skills Development",
                description: "Equipping youth with digital and vocational skills for sustainable employment and entrepreneurship opportunities."
              },
              {
                image: "/images/education.jpg",
                title: "Community Education",
                description: "Providing literacy programs and educational resources to enhance learning and integration in host communities."
              },
              {
                image: "/images/Peace.jpeg",
                title: "Social Cohesion",
                description: "Building bridges between refugee and host communities through dialogue, sports, and cultural exchange programs."
              },
              {
                image: "/images/Advocacy.png",
                title: "Rights Advocacy",
                description: "Amplifying refugee voices and advocating for policies that promote dignity, protection, and equal opportunities."
              }
            ].map((focus, index) => (
              <motion.div
                key={index}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <img
                  src={focus.image}
                  alt={focus.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    {focus.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {focus.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fefce8]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#000000]">
              Our Impact <span className="text-[#0089C7]">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">See the real change we're creating in our community</p>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveVideo(!activeVideo)}
          >
            {!activeVideo ? (
              <>
                <div className="relative aspect-video">
                  <img
                    src="/images/Pamoj6.jpeg"
                    alt="Community Stories"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-12 h-12 text-[#0089C7] ml-2" fill="currentColor" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-3xl font-bold mb-2">Community Transformation</h3>
                    <p className="text-white/90 text-lg">Discover how we're empowering refugees and building stronger communities</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/x3_XElV6fbU?autoplay=1"
                  title="Pamoja Twaweza Community Stories"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#000000]">
              Our <span className="text-[#0089C7]">Programs</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">Comprehensive support for holistic community development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProgram(program.id)}
                onMouseLeave={() => setHoveredProgram(null)}
                whileHover={{ y: -10 }}
              >
                {/* Program Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-8 relative">
                  <div className={`inline-flex p-4 rounded-2xl ${program.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 absolute -top-12 left-8`}>
                    {program.icon}
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-3xl font-bold mb-4 text-[#000000] group-hover:text-[#0089C7] transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    <button className="flex items-center gap-2 text-[#0089C7] font-semibold group-hover:gap-4 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${program.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProgram === program.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-[#fefce8] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#000000]">
              Our <span className="text-[#0089C7]">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">Real stories of transformation and hope</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "150+",
                title: "Youth Empowered",
                description: "Through digital skills training and entrepreneurship programs",
                icon: "👥"
              },
              {
                number: "500+",
                title: "Families Supported",
                description: "With livelihood assistance and community resources",
                icon: "🏠"
              },
              {
                number: "30+",
                title: "Community Events",
                description: "Promoting peace, dialogue, and social cohesion",
                icon: "🤝"
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl mb-4">{impact.icon}</div>
                <div className="text-5xl font-bold text-[#0089C7] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {impact.number}
                </div>
                <h3 className="text-2xl font-bold text-[#000000] mb-3">{impact.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#000000]">
              Led By <span className="text-[#0089C7]">Community</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-6" />
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
              Refugee-led, community-driven, making real change from within
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
                <img
                  src="/images/eri.jpeg"
                  alt="Eric Kimararungu - Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Eric Kimararungu</h3>
                  <p className="text-[#FFE66D] font-semibold text-lg">Founder & Executive Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-[#6b7280] leading-relaxed">
                Founded in 2016 by members of the refugee community in Kitengela, Pamoja Twaweza represents a powerful model of self-determination and community leadership.
              </p>
              <p className="text-xl text-[#6b7280] leading-relaxed">
                Our leadership understands firsthand the challenges faced by displaced communities, bringing authentic perspectives and solutions that truly work.
              </p>
              <button className="px-8 py-4 bg-[#0089C7] text-white rounded-full font-semibold text-lg hover:bg-[#0077b3] transition-all duration-300 shadow-lg flex items-center gap-2">
                Meet Our Team
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
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
              Ready to Make a Difference?
            </h2>
            <div className="w-24 h-1 bg-[#FFE66D] mx-auto mb-8" />
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join us in creating lasting change for refugees and marginalized communities in Kitengela
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0089C7] rounded-full font-semibold text-lg hover:bg-[#FFE66D] hover:text-[#000000] transition-all duration-300 shadow-xl">
                Partner With Us
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 border-2 border-white">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-16 bg-[#333] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFE66D]">Pamoja Twaweza CBO</h3>
              <p className="text-white">Empowering communities through collective action since 2016</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#FFE66D]">Location</h4>
              <p className="text-white/80 flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Chairman Road, Next to Best Lady<br />Kajiado East, Kitengela, Kenya</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#FFE66D]">Connect</h4>
              <div className="space-y-2 text-white">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-5 h-5" />
                  <span>info@pamojatwaweza.org</span>
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-5 h-5" />
                  <span>+254 XXX XXX XXX</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}