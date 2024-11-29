"use client";

import React, { useEffect } from 'react';
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Eric",
    role: "Executive Director",
    image: "/team/member1.jpg",
    bio: "Leading our community initiatives with over 10 years of experience in social development.",
    socialLinks: {
      linkedin: "",
      twitter: ""
    }
  },
  {
    id: 2,
    name: "Anneled Karemi",
    role: "Program Manager",
    image: "/team/member2.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/david-kimani"
    }
  },
] satisfies TeamMember[];

// Define the type separately if you need type safety
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

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-side only code
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Transforming Lives Through Community Action
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Pamoja Twaweza, we believe in the power of unity and collective action
            to create lasting positive change in our communities.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            Join Our Cause
          </button>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/pamoj1.jpeg"
            alt="Community Impact"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-3xl shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="relative h-[700px] mt-16">
        <h2 className="text-center text-5xl font-bold mb-12">Our Impact Stories</h2>
        <div className="relative w-full h-full">
          <Image
            src="/images/pamoj7.jpeg"
            alt="Community Impact"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white/95 p-10 rounded-2xl max-w-lg backdrop-blur-sm shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Creating Lasting Change</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through dedicated community engagement and sustainable programs,
                we&apos;re building a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-10">Who We Are</h2>
        <div className="max-w-2xl">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Pamoja Twaweza is a community-based organization dedicated to empowering
            communities through sustainable development initiatives, mental health
            support, and educational programs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            Learn More About Our Mission
          </button>
        </div>
      </section>

      {/* Our Programs */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Program Column */}
            <div className="space-y-8">
              <div className="relative aspect-video">
                <Image
                  src="/images/pamoj5.jpeg"
                  alt="Livelihoods Program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold mb-6">Livelihoods</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We offer digital skills training for youth, tailoring and dressmaking
                  courses, entrepreneurship training, and promote financial inclusion
                  through savings and loans associations.
                </p>
              </div>
            </div>

            {/* Secondary Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/images/pamoj6.jpeg"
                    alt="Mental Health Programs"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Mental Health</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We conduct awareness programs to support mental health within
                    the community.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pamoj3.jpeg"
                  alt="Education Programs"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
                  <p className="text-white/90 leading-relaxed">
                    English literacy classes for refugees to enhance their
                    communication skills and integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-16">Advocacy</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-72 h-72 relative rounded-full overflow-hidden flex-shrink-0 shadow-2xl">
            <Image
              src="/images/pamoj6.jpeg"
              alt="Advocacy Initiatives"
              fill
              sizes="288px"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-600 leading-relaxed">
              We engage in advocacy efforts to raise awareness of refugee issues
              and promote policy changes that benefit our community members.
            </p>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Community Outreach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Making an Impact</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                In terms of community outreach, we have extensive experience
                implementing initiatives across these areas, ensuring active
                engagement and support for the community.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/pamoj2.jpeg"
                alt="Community Outreach"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Join Us in our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Pamoja Twaweza CBO<br />
            Chairman Road, Next to Best Lady<br />
            Kajiado South
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[320px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
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
                      {member.socialLinks?.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                           className="hover:text-blue-400 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
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
    </div>
  );
}