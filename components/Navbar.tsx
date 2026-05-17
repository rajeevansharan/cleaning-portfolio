'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/Images/logo.png" alt="PKS Logo" width={100} height={100} className="object-contain" />
            <h2 className="text-primary dark:text-white text-2xl font-black tracking-tight">
              PKS
            </h2>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium text-sm transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium text-sm transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium text-sm transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium text-sm transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:opacity-90 transition-all">
              Get Free Quote
            </button>
            <button 
              className="md:hidden text-primary dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-primary/10 py-4 px-4 space-y-4">
          <Link href="/" className="block text-slate-600 dark:text-slate-300 font-medium text-sm">Home</Link>
          <Link href="/services" className="block text-slate-600 dark:text-slate-300 font-medium text-sm">Services</Link>
          <Link href="/about" className="block text-slate-600 dark:text-slate-300 font-medium text-sm">About Us</Link>
          <Link href="/contact" className="block text-slate-600 dark:text-slate-300 font-medium text-sm">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
