import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <Image
          alt="Professional Cleaning"
          className="w-full h-full object-cover object-right sm:object-top"
          src={heroImage}
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-4 sm:mb-6">
            Professional Commercial Cleaning Services You Can Trust
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-7 sm:mb-10">
            Delivering reliable, high-quality cleaning solutions for offices, industrial facilities, and residential properties.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link href="/contact" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:scale-105 transition-transform flex items-center justify-center">
              Get Quote
            </Link>
            <Link href="/services" className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-white/30 transition-all flex items-center justify-center">
              Our Services
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 hero-badges-grid">
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-base sm:text-lg flex-shrink-0">verified_user</span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Licensed</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-base sm:text-lg flex-shrink-0">policy</span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Insured</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-base sm:text-lg flex-shrink-0">badge</span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Expert Staff</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-base sm:text-lg flex-shrink-0">thumb_up</span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

