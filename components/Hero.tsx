'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroImage from '../public/assets/images/hero.png';

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

const Hero = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-primary/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            alt="Professional Cleaning"
            className="w-full h-full object-cover object-right sm:object-top"
            src={heroImage}
            width={1920}
            height={1080}
            priority
          />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.75 }}
            className="text-white text-3xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Professional Commercial Cleaning Services You Can Trust
          </motion.h1>

          {/* Subparagraph */}
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-7 sm:mb-10"
          >
            Delivering reliable, high-quality cleaning solutions for offices, industrial facilities, and residential properties.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.55 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-lg active:scale-95"
            >
              Get Quote
            </Link>
            <Link 
              href="/services" 
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-white/30 transition-all duration-200 flex items-center justify-center active:scale-95"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Verification Badges Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 hero-badges-grid"
          >
            {[
              { icon: 'verified_user', label: 'Licensed' },
              { icon: 'policy', label: 'Insured' },
              { icon: 'badge', label: 'Expert Staff' },
              { icon: 'thumb_up', label: 'Guaranteed' }
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 sm:gap-3 text-white"
              >
                <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-base sm:text-lg flex-shrink-0">
                  {badge.icon}
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
