'use client';
import React from 'react';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
  
} from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import MultiPaymentDonation from '../components/MultiPaymentDonation';
import Image from 'next/image';
import styles from '../styles/Donate.module.css';

// Initialize Stripe with error checking
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

// Add console warning if key is missing
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  console.warn('Stripe publishable key is missing. Please check your .env.local file.');
}

const ImpactCard = ({ title, amount, description, image }: {
  title: string;
  amount: string;
  description: string;
  image: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mb-3">{amount}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const DonationProgress = ({ raised, goal }: { raised: number; goal: number }) => {
  const progress = (raised / goal) * 100;
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Fundraising Progress</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {progress.toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>${raised.toLocaleString()} Raised</span>
          <span>Goal: ${goal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const RecurringDonationCard = () => (
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4">Become a Monthly Donor</h3>
    <p className="mb-4">Join our community of regular supporters and help make a sustained impact.</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold"
    >
      Join Monthly Giving
    </motion.button>
  </div>
);

const ImpactMetric = ({ icon, value, label }: {
  icon: string;
  value: string;
  label: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center"
  >
    <div className="text-4xl mb-2">{icon}</div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-gray-600">{label}</div>
  </motion.div>
);

export default function DonatePage() {
  return (
    <Elements stripe={stripePromise}>
      <main className={styles.mainContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/images/download.png"
              alt="Donation Hero"
              fill
              priority
              className={styles.heroImage}
            /> 
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.heroText}
            >
              <h1 className={styles.heroTitle}>Make a Difference Today</h1>
              <p className={styles.heroSubtitle}>
                Your support creates lasting change in communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className={styles.contentWrapper}>
          {/* Impact Stats */}
          <section className={styles.impactStats}>
            <div className={styles.statsGrid}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.statCard}
              >
                <span className={styles.statIcon}>🎓</span>
                <h3 className={styles.statNumber}>1,200+</h3>
                <p className={styles.statLabel}>Students Supported</p>
              </motion.div>
              {/* Add more stat cards similarly */}
            </div>
          </section>

          {/* Donation Section */}
          <section className={styles.donationSection}>
            <div className={styles.donationWrapper}>
              <div className={styles.donationForm}>
                <MultiPaymentDonation />
              </div>
              <div className={styles.donationSidebar}>
                <div className={styles.progressCard}>
                  <h3 className={styles.progressTitle}>Fundraising Progress</h3>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill} 
                      style={{ width: '75%' }}
                    />
                  </div>
                  <div className={styles.progressStats}>
                    <span>$75,000 Raised</span>
                    <span>Goal: $100,000</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stories */}
          <section className={styles.impactStories}>
            <h2 className={styles.sectionTitle}>Your Impact in Action</h2>
            
            <div className={styles.storiesGrid}>
              {/* Impact Cards */}
            </div>
          </section>

          {/* Volunteering Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Volunteering Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Community Outreach',
                  description: 'Help spread awareness in local communities',
                  icon: '🤝'
                },
                {
                  title: 'Event Organization',
                  description: 'Assist in planning and running fundraising events',
                  icon: '📅'
                },
                {
                  title: 'Social Media Management',
                  description: 'Help manage our social media presence',
                  icon: '📱'
                },
                {
                  title: 'Skills Training',
                  description: 'Share your expertise with beneficiaries',
                  icon: '📚'
                },
                {
                  title: 'Administrative Support',
                  description: 'Help with day-to-day operations',
                  icon: '📋'
                },
                {
                  title: 'Project Coordination',
                  description: 'Coordinate specific projects or initiatives',
                  icon: '🎯'
                }
              ].map((item, index) => (
                <div
                  key={`volunteer-${index}`}
                  className="p-4 border rounded-lg hover:shadow-lg transition-all cursor-pointer
                             hover:bg-blue-50 active:bg-blue-100"
                  onClick={() => {/* Add your click handler */}}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Fundraising Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Creative Fundraising Ideas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Virtual Events',
                  description: 'Online concerts, workshops, and webinars',
                  icon: '🎥'
                },
                {
                  title: 'Merchandise Sales',
                  description: 'Custom t-shirts, mugs, and accessories',
                  icon: '👕'
                },
                {
                  title: 'Skill Auctions',
                  description: 'Auction services or skills for donations',
                  icon: '🎨'
                },
                {
                  title: 'Challenge Events',
                  description: 'Sponsored walks, runs, or unique challenges',
                  icon: '🏃'
                },
                {
                  title: 'Digital Content',
                  description: 'Exclusive content for supporters',
                  icon: '📱'
                },
                {
                  title: 'Partnership Programs',
                  description: 'Collaborate with businesses for donations',
                  icon: '🤝'
                }
              ].map((item, index) => (
                <div
                  key={`fundraising-${index}`}
                  className="p-4 border rounded-lg hover:shadow-lg transition-all cursor-pointer
                             hover:bg-green-50 active:bg-green-100"
                  onClick={() => {/* Add your click handler */}}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Elements>
  );
}
