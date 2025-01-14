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

          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/partner.jpg"
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
        </div>
      </div>
    </>
  );
}
