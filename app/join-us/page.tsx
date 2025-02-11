"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function JoinUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600">
            Be part of our mission to create lasting positive change
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/images/pamoj5.jpeg"
                alt="Volunteer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h2>
              <p className="text-gray-600 mb-4">
                Share your skills and time to support our community programs. We welcome volunteers
                in various areas including teaching, mentoring, and program support.
              </p>
              <a
                href="mailto:contact@pamojatwaweza.org"
                className={styles.heroButton}
              >
                Volunteer With Us
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src="/images/pamoj3.jpeg"
                alt="Partner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partner With Us</h2>
              <p className="text-gray-600 mb-4">
                We collaborate with organizations and individuals who share our vision
                for community development and empowerment.
              </p>
              <a
                href="mailto:partnerships@pamojatwaweza.org"
                className={styles.heroButton}
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h2>
          <p className="text-gray-600 mb-6">
            Your support helps us continue our work in community development,
            education, and mental health support.
          </p>
          <button
            onClick={() => {
              document.querySelector('#donation-section')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className={styles.heroButton}
          >
            Support Our Cause
          </button>
        </div>
      </div>
    </div>
  );
} 