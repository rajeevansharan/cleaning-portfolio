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

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Davis',
      role: 'CEO, TechFlow Solutions',
      image: '/assets/Images/person1.jpeg',
      quote: '"PKS has transformed our office atmosphere. Their attention to detail is unmatched by any other service we\'ve used in the past five years."',
      featured: false
    },
    {
      name: 'Sarah Richards',
      role: 'Director, Elite Estates',
      image: '/assets/Images/person2.jpeg',
      quote: '"Reliability is everything in property management. PKS never misses a beat and the results are consistently flawless across all our properties."',
      featured: true
    },
    {
      name: 'Mark Thompson',
      role: 'Operations, Global Fab Co.',
      image: '/assets/Images/person3.jpeg',
      quote: '"Exceptional industrial cleaning. They handled our factory shutdown maintenance with incredible efficiency and expertise."',
      featured: false
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-background-dark/50 overflow-hidden" id="testimonials">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-background-light dark:bg-slate-800 p-10 rounded-3xl relative flex flex-col justify-between h-full cursor-pointer transition-colors duration-300 border border-transparent hover:border-primary/5"
            >
              <div>
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined select-none">star</span>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-8">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
