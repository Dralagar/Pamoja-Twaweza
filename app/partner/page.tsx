'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Partner.module.css';

export default function Partner() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Partner with Us</title>
        <meta name="description" content="Join us as a partner and collaborate to make a difference." />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Partner with Us</h1>
            <p className={styles.subtitle}>
              We are looking for partners who share our vision and values. Let&apos;s work together to make a difference.
            </p>
          </div>

          {/* Vision and Mission Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.text}>
              To ensure all marginalized, and vulnerable persons with disability and youth in our community have access to quality vocational training, resulting in self-reliance.
            </p>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              To identify and support marginalized, and vulnerable persons with disability and youth in our community become self-reliant through facilitating timely access to quality vocational skills and livelihood opportunities.
            </p>
          </section>

          {/* Program Areas Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Program Areas</h2>
            <ul className={styles.list}>
              <li>Livelihood and Economic Empowerment</li>
              <li>Advocacy and Rights Awareness</li>
              <li>Mental Health and Psycho-social Support</li>
              <li>Youth Empowerment</li>
              <li>Support for Persons with Disability</li>
            </ul>
          </section>

          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/Partnership.jpg"
                alt="Partner with Us"
                width={500}
                height={500}
                className={styles.image}
              />
            </div>

            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>Express Your Interest</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="companyName" className={styles.label}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className={styles.label}>
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.button}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Partners Section */}
          <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
            <ul className="list-none text-lg flex justify-center gap-8">
              <li className="flex flex-col items-center">
                <Image
                  src="/images/youth-voices-logo.png"
                  alt="Youth Voices Community"
                  width={100}
                  height={100}
                  className="mb-2"
                />
                Youth Voices Community
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/pamoja-trust-logo.png"
                  alt="Pamoja Trust"
                  width={100}
                  height={100}
                  className="mb-2"
                />
                Pamoja Trust
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/refugepoint-logo.png"
                  alt="Refugepoint"
                  width={100}
                  height={100}
                  className="mb-2"
                />
                Refugepoint
              </li>
            </ul>
          </section>

          {/* Contact Information Section */}
          <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <ul className="list-none text-lg">
              <li><a href="https://web.facebook.com/profile.php?id=100095464061098&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://x.com/PamojaTwaw37933" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/pamoja-twaweza-6146232a2/?originalSubdomain=ke" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/channel/UCsBqWgvlTqposqFuwF5zUpg" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://www.instagram.com/pamojatwawezacbo?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
            <p className="mt-4">Email: <a href="mailto:info@pamojatwaweza.org">info@pamojatwaweza.org</a></p>
          </section>
        </div>
      </div>
    </>
  );
}
