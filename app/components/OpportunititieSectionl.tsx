'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Opportunity = {
  title: string;
  description: string;
  link: string;
  icon: string;
  bgColor: string;
}

const opportunities: Opportunity[] = [
  {
    title: "Volunteer Opportunities",
    description: "Join our team of dedicated volunteers in Kajiado South. Make a direct impact through teaching, community outreach, and youth mentorship programs.",
    link: "/volunteer",
    icon: "🤝",
    bgColor: "bg-orange-50"
  },
  {
    title: "Partnership Programs",
    description: "Collaborate with us through strategic partnerships. We work with organizations and businesses to create sustainable community development initiatives.",
    link: "/partner",
    icon: "🤲",
    bgColor: "bg-blue-50"
  },
  {
    title: "Support Our Projects",
    description: "Help fund our ongoing projects in education, healthcare, and community development. Every contribution makes a difference.",
    link: "/donate",
    icon: "💝",
    bgColor: "bg-green-50"
  }
];

const OpportunitiesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how you can contribute to positive change in our community
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`${item.bgColor} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all h-full`}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {item.description}
                </p>
                <Link 
                  href={item.link}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium group"
                >
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
