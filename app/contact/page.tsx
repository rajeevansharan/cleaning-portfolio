'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12 lg:py-20">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-primary dark:text-white mb-4 tracking-tight">
              Connect with Excellence
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Tailored cleaning solutions for your home or office. Our premium care team is ready to assist you with a bespoke maintenance plan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-8">
                Request a Quote
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary/80 dark:text-slate-300">Full Name</label>
                    <input
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary/80 dark:text-slate-300">Email Address</label>
                    <input
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary/80 dark:text-slate-300">Phone Number</label>
                    <input
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="(555) 000-0000"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary/80 dark:text-slate-300">Service Type</label>
                    <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option>Residential Deep Clean</option>
                      <option>Commercial Office Care</option>
                      <option>Move-in / Move-out</option>
                      <option>Post-Construction</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary/80 dark:text-slate-300">Message</label>
                  <textarea
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your specific cleaning requirements..."
                    rows={4}
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">+1 (800) 234-5678</p>
                    <p className="text-xs text-slate-400 mt-1">Mon - Fri, 8am - 6pm</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">concierge@eliteclean.com</p>
                    <p className="text-xs text-slate-400 mt-1">24hr response guarantee</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white">Office Address</h4>
                    <p className="text-slate-600 dark:text-slate-400">1200 Luxury Way, Suite 400<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">map</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white">Service Coverage</h4>
                    <p className="text-slate-600 dark:text-slate-400">Greater LA Area, Orange County, Malibu, and Pasadena.</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-inner bg-slate-200 border border-primary/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <span className="material-symbols-outlined text-primary text-5xl mb-2">explore</span>
                    <p className="text-primary font-bold">Interactive Service Map</p>
                  </div>
                </div>
                <img
                  alt="City map"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUK_s11BqfA-iUmtejDvH_n6_ejJpqtDEJ_Bb_p8B4eq-NdFLdCpJiRo_XdvJw3XYSvt7nlO71dygAbPiYbKLmGujU7ESYsPcE4P-1mCk-le8I2bjeSs0bj3wQAhrBcYh9rGbCPIyLRHtKLb0nRtsM_FrfBOGB2o-JpANF4IPFbmMejb5UpASkmm2e6r6Koqg9Mafh8cSbxgCzKsoqSO47QebI3g-Z4jE0LnR75jXalcHYqSVp1GuyATqnuPQQla4mPgppUEVPiIT7"
                />
              </div>
            </div>
          </div>

          <section className="mt-24 py-16 border-t border-primary/5">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-primary dark:text-white mb-2 tracking-tight">Service Area Coverage</h3>
              <p className="text-slate-600 dark:text-slate-400">We proudly serve premium neighborhoods across the coast.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Beverly Hills', 'Santa Monica', 'Newport Beach', 'Laguna Niguel'].map((area) => (
                <div key={area} className="bg-primary/5 dark:bg-white/5 p-6 rounded-xl border border-primary/10 text-center">
                  <span className="text-primary dark:text-slate-300 font-bold">{area}</span>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
