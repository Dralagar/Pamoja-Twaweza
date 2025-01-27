'use client';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import MultiPaymentDonation from '../components/MultiPaymentDonation';
import Image from 'next/image';
import styles from '../styles/Donate.module.css';

// Initialize Stripe with error handling and logging
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

// Add console warning if key is missing
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  console.warn('Stripe publishable key is missing. Please check your .env.local file.');
}

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

          {/* Footer */}
          <footer className="mt-16 p-6 bg-blue-600 text-white">
            <p className="text-center">&copy; {new Date().getFullYear()} Nonprofit Name. All Rights Reserved.</p>
          </footer>
        </div>
      </main>
    </Elements>
  );
}
