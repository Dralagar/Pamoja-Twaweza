import React from 'react';
import styles from '../styles/Privacy.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.effectiveDate}>Effective Date: [Insert Date]</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
        <p className={styles.text}>
          - <strong>Personal Information:</strong> We may collect personal information such as your name, contact details, and any other information you voluntarily provide to us.
        </p>
        <p className={styles.text}>
          - <strong>Usage Data:</strong> We collect information about how you interact with our website, including your IP address, browser type, and pages visited.
        </p>
        <p className={styles.text}>
          - <strong>Cookies and Tracking Technologies:</strong> Our website may use cookies and similar technologies to enhance user experience and analyze website traffic.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p className={styles.text}>
          - <strong>Service Delivery:</strong> To provide and manage our services, including community programs and events.
        </p>
        <p className={styles.text}>
          - <strong>Communication:</strong> To communicate with you about our activities, updates, and opportunities to get involved.
        </p>
        <p className={styles.text}>
          - <strong>Improvement:</strong> To improve our website and services based on user feedback and usage patterns.
        </p>
        <p className={styles.text}>
          - <strong>Legal Compliance:</strong> To comply with applicable laws and regulations.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Sharing Your Information</h2>
        <p className={styles.text}>
          We do not sell or rent your personal information to third parties. We may share your information with:
        </p>
        <p className={styles.text}>
          - <strong>Service Providers:</strong> Trusted third-party service providers who assist us in operating our website and conducting our activities.
        </p>
        <p className={styles.text}>
          - <strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Data Security</h2>
        <p className={styles.text}>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Your Rights</h2>
        <p className={styles.text}>
          You have the right to access, correct, or delete your personal information. You may also object to the processing of your data or request data portability. To exercise these rights, please contact us at [Insert Contact Information].
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Third-Party Links</h2>
        <p className={styles.text}>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Changes to This Policy</h2>
        <p className={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Contact Us</h2>
        <p className={styles.text}>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <address className={styles.contactInfo}>
          Pamoja Twaweza CBO<br />
          Chairman Road, Next to Best Lady<br />
          Kajiado South<br />
          Email: [Insert Email Address]<br />
          Phone: [Insert Phone Number]
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;