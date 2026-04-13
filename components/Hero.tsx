import React from 'react';
import Image from 'next/image';
import heroImage from '../public/assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <Image
          alt="Professional Cleaning"
          className="w-full h-full object-cover object-top"
          src={heroImage}
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Professional Commercial Cleaning Services You Can Trust
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-10">
            Delivering reliable, high-quality cleaning solutions for offices, industrial facilities, and residential properties.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-base font-bold hover:scale-105 transition-transform">
              Get Free Quote
            </button>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-white/30 transition-all">
              Our Services
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-lg">verified_user</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Licensed</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-lg">policy</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Insured</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-lg">badge</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Expert Staff</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary bg-white p-1.5 rounded-full text-lg">thumb_up</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
