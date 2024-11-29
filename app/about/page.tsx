"use client";

import React from 'react';
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Director",
    image: "/team/member1.jpg",
    bio: "Leading our community initiatives with over 10 years of experience in social development.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson"
    }
  },
  {
    id: 2,
    name: "David Kimani",
    role: "Program Manager",
    image: "/team/member2.jpg",
    bio: "Specializing in youth empowerment and educational program development.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/david-kimani"
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

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50" suppressHydrationWarning>
      {/* About Hero - More focused on organization history */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
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
              <h2 className="text-4xl font-bold mb-4">8+ Years of Impact</h2>
              <p className="text-xl max-w-2xl">Transforming communities through unity and action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - New section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Unity</h3>
            <p className="text-gray-600">Working together as one community to achieve shared goals</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
            <p className="text-gray-600">Creating long-lasting positive impact in our communities</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Community Members Served</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Active Programs</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">8</div>
            <p className="text-gray-600">Years of Service</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
            <p className="text-gray-600">Community Partners</p>
          </div>
        </div>
      </section>

      {/* Team Section - Keep existing implementation */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Leadership Team</h2>
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

      {/* Join Us Section - New call to action */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Whether you&apos;re looking to volunteer, partner, or support our cause, 
            there are many ways to get involved with Pamoja Twaweza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg">
              Volunteer With Us
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all hover:shadow-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}