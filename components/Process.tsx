'use client';

import React from 'react';
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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Inspection',
      description: 'We assess your space and specific cleaning needs.'
    },
    {
      number: '2',
      title: 'Quote',
      description: 'Transparent pricing with no hidden fees.'
    },
    {
      number: '3',
      title: 'Cleaning Plan',
      description: 'A customized schedule that fits your operations.'
    },
    {
      number: '4',
      title: 'Quality Check',
      description: 'Final inspection to ensure 100% satisfaction.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-primary text-white overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6">
            Our Seamless Process
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Four simple steps to a cleaner environment.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line - desktop only */}
          <motion.div 
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          />

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Step Badge */}
                <motion.div 
                  variants={scaleUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="size-24 rounded-full bg-white text-primary flex items-center justify-center text-3xl font-black mb-8 cursor-pointer shadow-lg"
                >
                  {step.number}
                </motion.div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
