'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Factory, Key, Home, Sparkles } from 'lucide-react';

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

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Complete facility management and cleaning for business complexes and large venues.'
    },
    {
      icon: Briefcase,
      title: 'Office',
      description: 'Daily and weekly desk, floor, and communal area maintenance for productive environments.'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Specialized heavy-duty cleaning for warehouses, factories, and production facilities.'
    },
    {
      icon: Key,
      title: 'Real Estate',
      description: 'Move-in/move-out services and staging preparation to maximize property value.'
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Customized home cleaning plans for busy professionals and luxury residences.'
    },
    {
      icon: Sparkles,
      title: 'Janitorial',
      description: 'Ongoing custodial support including sanitation, waste removal, and restocking.'
    }
  ];

  return (
    <section className="py-8 sm:py-10 bg-background-light dark:bg-background-dark overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-1"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-white mb-4">
           Our Premium Services
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
                  borderColor: "rgba(10, 38, 66, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-primary/5 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="h-8 w-8 text-primary dark:text-white group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
