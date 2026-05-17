'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative rounded-3xl overflow-hidden bg-primary p-8 sm:p-12 md:p-24 text-center shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={scaleUp}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(10,38,66,1)0%,rgba(20,76,132,1)100%)] opacity-90"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-2xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-8"
            >
              Get a Free Cleaning Quote Today
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-base sm:text-lg mb-8 sm:mb-12"
            >
              Experience the difference that professional expertise and premium care can make for your facility.
            </motion.p>
            <motion.button 
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-primary px-7 sm:px-10 py-3.5 sm:py-5 rounded-full text-base sm:text-lg font-black hover:scale-105 transition-all shadow-2xl cursor-pointer"
            >
              Schedule My Inspection
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
