'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Industries = () => {
  const industries = [
    {
      title: 'Corporate Offices',
      description: 'Executive workspaces and coworking hubs.',
      image: '/assets/Images/corporate office.png',
      alt: 'Modern corporate office lobby'
    },
    {
      title: 'Auto Dealerships',
      description: 'Pristine showrooms and service bays.',
      image: '/assets/Images/Auto Dealerships.png',
      alt: 'Luxury car showroom'
    },
    {
      title: 'Property Management',
      description: 'Multi-unit complexes and commercial properties.',
      image: '/assets/Images/Property Management.png',
      alt: 'Luxury apartment complex exterior'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-background-dark/30 overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Tailored cleaning solutions for every specialized environment, from healthcare to heavy industry.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-primary/5"
            >
              <Image
                alt={industry.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={industry.image}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-white text-2xl font-bold">{industry.title}</h4>
                <p className="text-white/75 text-sm mt-2">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
