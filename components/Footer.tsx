import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Image src="/assets/Images/logo.png" alt="PKS Logo" width={100} height={100} className="object-contain w-12 h-12 lg:w-[100px] lg:h-[100px]" />
              <h2 className="text-white text-2xl font-black tracking-tight">PKS</h2>
            </div>
            <p className="text-sm leading-relaxed mb-6 sm:mb-8">
              The leading choice for premium commercial and residential cleaning services since 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-sm">call</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 sm:mb-6">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary flex-shrink-0">call</span>
                <span>647 466 6658</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary flex-shrink-0">public</span>
                <span>pksservices.ca</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary flex-shrink-0">mail</span>
                <span className="break-all">pksservicesinc@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary flex-shrink-0">location_on</span>
                <span>Markham, Ontario</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} PKS Services Inc. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

