import { type Metadata } from 'next';
import React from 'react';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Pamoja Twaweza - Community Empowerment',
  description: 'Empowering communities through sustainable development, mental health awareness, education, and advocacy.',
};

export default function Home() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Transforming Lives Through Community Action
          </h1>
          <p className="text-lg text-gray-600">
            At Pamoja Twaweza, we believe in the power of unity and collective action
            to create lasting positive change in our communities.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Join Our Cause
          </button>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/community-hero.jpg"
            alt="Community Impact"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-full"
            priority
          />
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="relative h-[600px] mt-16">
        <h2 className="text-center text-4xl font-bold mb-8">Our Impact Stories</h2>
        <div className="relative w-full h-full">
          <Image
            src="/impact-showcase.jpg"
            alt="Community Impact"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white/90 p-8 rounded-lg max-w-md backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Creating Lasting Change</h3>
              <p className="text-gray-700">
                Through dedicated community engagement and sustainable programs,
                we're building a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 mb-6">
            Pamoja Twaweza is a community-based organization dedicated to empowering
            communities through sustainable development initiatives, mental health
            support, and educational programs.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Learn More About Our Mission
          </button>
        </div>
      </section>

      {/* Our Programs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Program Column */}
            <div className="space-y-6">
              <div className="relative aspect-video">
                <Image
                  src="/livelihoods.jpg"
                  alt="Livelihoods Program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Livelihoods</h3>
                <p className="text-gray-600">
                  We offer digital skills training for youth, tailoring and dressmaking
                  courses, entrepreneurship training, and promote financial inclusion
                  through savings and loans associations.
                </p>
              </div>
            </div>

            {/* Secondary Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/mental-health.jpg"
                    alt="Mental Health Programs"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Mental Health</h3>
                  <p className="text-gray-600">
                    We conduct awareness programs to support mental health within
                    the community.
                  </p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/education.jpg"
                  alt="Education Programs"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Education</h3>
                  <p>
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
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Advocacy</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-64 relative rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/advocacy.jpg"
              alt="Advocacy Initiatives"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600">
              We engage in advocacy efforts to raise awareness of refugee issues
              and promote policy changes that benefit our community members.
            </p>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Community Outreach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Making an Impact</h3>
              <p className="text-gray-600">
                In terms of community outreach, we have extensive experience
                implementing initiatives across these areas, ensuring active
                engagement and support for the community.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/outreach.jpg"
                alt="Community Outreach"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Join Us in our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Pamoja Twaweza CBO<br />
            Chairman Road, Next to Best Lady<br />
            Kajiado South
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team member cards would go here */}
          </div>
        </div>
      </section>
    </div>
  );
}