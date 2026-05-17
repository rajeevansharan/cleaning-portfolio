'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image
              src="/assets/Images/logo.png"
              alt="PKS Logo"
              width={100}
              height={100}
              className="object-contain w-12 h-12 md:w-[100px] md:h-[100px]"
            />
            <h2 className="text-primary dark:text-white text-xl md:text-2xl font-black tracking-tight">
              PKS
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-bold tracking-wide hover:opacity-90 transition-all"
            >
              Get Free Quote
            </Link>
            {/* Hamburger — mobile only */}
            <button
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="md:hidden p-1 text-primary dark:text-white"
              onClick={() => setIsMenuOpen((o) => !o)}
            >
              <span className="material-symbols-outlined text-3xl leading-none">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-background-dark border-b border-primary/10`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="py-3 text-slate-700 dark:text-slate-200 font-semibold text-base border-b border-slate-100 dark:border-slate-800 last:border-0 hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

