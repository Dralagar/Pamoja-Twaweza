"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Partner.module.css';

type PartnerType = {
  id: number;
  name: string;
  logo: string;
  url: string;
  description: string;
};

export default function Partner() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    message: ''
  });

  const [partners, setPartners] = useState<PartnerType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activePartner, setActivePartner] = useState<PartnerType | null>(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchPartners = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        const mockPartners: PartnerType[] = [
          {
            id: 1,
            name: "Youth Voices Community",
            logo: "/images/youth-voices-logo.png",
            url: "https://example.com",
            description: "Empowering youth through education and advocacy programs."
          },
          {
            id: 2,
            name: "Pamoja Trust",
            logo: "/images/pamoja-trust-logo.png",
            url: "https://example.com",
            description: "Community development organization focused on housing rights."
          },
          {
            id: 3,
            name: "Refugepoint",
            logo: "/images/refugepoint-logo.png",
            url: "https://example.com",
            description: "Providing solutions for refugees and displaced people."
          },
          {
            id: 4,
            name: "Global Impact",
            logo: "/images/global-impact-logo.png",
            url: "https://example.com",
            description: "International organization driving large-scale social change."
          },
          {
            id: 5,
            name: "Local Heroes",
            logo: "/images/local-heroes-logo.png",
            url: "https://example.com",
            description: "Grassroots initiative supporting community leaders."
          },
          {
            id: 6,
            name: "Tech for Good",
            logo: "/images/tech-for-good-logo.png",
            url: "https://example.com",
            description: "Leveraging technology to solve social challenges."
          }
        ];
        setPartners(mockPartners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handlePartnerClick = (partner: PartnerType) => {
    setActivePartner(activePartner?.id === partner.id ? null : partner);
  };

  return (
    <div className="min-h-screen bg-gray-100">
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Partner with Us</h1>
            <p className={styles.subtitle}>
              We are looking for partners who share our vision and values. Let&apos;s work together to make a difference.
            </p>
          </div>

          {/* Vision and Mission Section */}
          <section className={styles.visionMissionSection}>
            <div className={styles.visionMissionContainer}>
              <div className={styles.visionMissionCard}>
                <h2 className={styles.sectionTitle}>Our Vision</h2>
                <p className={styles.text}>
                  To ensure all marginalized, and vulnerable persons with disability and youth in our community have access to quality vocational training, resulting in self-reliance.
                </p>
              </div>
              <div className={styles.visionMissionCard}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.text}>
                  To identify and support marginalized, and vulnerable persons with disability and youth in our community become self-reliant through facilitating timely access to quality vocational skills and livelihood opportunities.
                </p>
              </div>
            </div>
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

          {/* Enhanced Partners Section */}
          <section className={styles.partnersSection}>
            <h2 className={styles.sectionTitle}>Our Valued Partners</h2>
            <p className={styles.subtitle}>Collaborating with organizations that share our vision for a better community</p>
            
            {isLoading ? (
              <div className={styles.loadingSpinner}>
                <div className={styles.spinner}></div>
                <p>Loading partners...</p>
              </div>
            ) : (
              <>
                <div className={styles.partnersList}>
                  {partners.map((partner) => (
                    <div 
                      key={partner.id} 
                      className={`${styles.partnerItem} ${activePartner?.id === partner.id ? styles.active : ''}`}
                      onClick={() => handlePartnerClick(partner)}
                    >
                      <div className={styles.partnerLogoContainer}>
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={120}
                          height={120}
                          className={styles.partnerLogo}
                        />
                      </div>
                      <span className={styles.partnerName}>{partner.name}</span>
                    </div>
                  ))}
                </div>

                {activePartner && (
                  <div className={styles.partnerDetail}>
                    <h3 className={styles.partnerDetailTitle}>{activePartner.name}</h3>
                    <p className={styles.partnerDetailDescription}>{activePartner.description}</p>
                    <a 
                      href={activePartner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.partnerLink}
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Contact Information Section */}
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.socialLinks}>
              <a href="https://web.facebook.com/profile.php?id=100095464061098&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                <span>Facebook</span>
              </a>
              <a href="https://x.com/PamojaTwaw37933" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
                <span>Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/pamoja-twaweza-6146232a2/?originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/channel/UCsBqWgvlTqposqFuwF5zUpg" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/pamojatwawezacbo?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                <span>Instagram</span>
              </a>
            </div>
            <p className={styles.contactEmail}>
              Email: <a href="mailto:info@pamojatwaweza.org">info@pamojatwaweza.org</a>
            </p>
          </section>
        </div>
      </div>
  );
}