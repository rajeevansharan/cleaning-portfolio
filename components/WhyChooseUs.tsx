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

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'schedule',
      title: 'Reliable Service',
      description: 'Always on time and consistent, ensuring your space stays immaculate without interruption.'
    },
    {
      icon: 'school',
      title: 'Trained Professionals',
      description: 'Our team undergoes rigorous training and background checks for your complete peace of mind.'
    },
    {
      icon: 'eco',
      title: 'Eco-Friendly',
      description: 'We use sustainable, non-toxic products that are safe for people, pets, and the environment.'
    },
    {
      icon: 'task_alt',
      title: 'Quality Assurance',
      description: 'Regular inspections and a satisfaction guarantee ensure the highest standards every time.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-background-dark/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                borderColor: "rgba(10, 38, 66, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800/80 transition-colors duration-300 group cursor-pointer"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.1, rotate: 3 },
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="size-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6"
              >
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
