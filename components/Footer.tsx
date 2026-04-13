import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-2xl">cleaning_services</span>
              </div>
              <h2 className="text-white text-2xl font-black tracking-tight">CleanPro</h2>
            </div>
            <p className="text-sm leading-relaxed mb-8">
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
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>123 Clean Way, Suite 500<br />Metropolis, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>(800) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>hello@cleanpro.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} CleanPro Services Inc. All rights reserved.</p>
          <div className="flex gap-6">
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
