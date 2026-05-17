'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const commercialServices = [
    {
      title: 'Office Cleaning',
      description: 'Daily or weekly maintenance for corporate headquarters and small businesses alike.',
      image: '/assets/Images/corporate office.png',
      features: ['Improved employee morale', 'Sanitized high-touch areas', 'Flexible after-hours scheduling']
    },
    {
      title: 'Auto Dealerships',
      description: "Showroom-ready floor polishing and detailing to match your brand's luxury standard.",
      image: '/assets/Images/Auto Dealerships.png',
      features: ['Mirror-finish floor care', 'Glass facade streak-free cleaning', 'Customer lounge sanitation']
    },
    {
      title: 'Industrial & Factories',
      description: 'Specialized heavy-duty cleaning for warehouses and manufacturing facilities.',
      image: '/assets/Images/Property Management.png',
      features: ['Compliance with safety standards', 'Degreasing & floor scrubbing', 'HVAC & vent cleaning']
    }
  ];

  const residentialServices = [
    {
      title: 'Regular Maintenance',
      description: 'Keep your home pristine with our weekly or bi-weekly scheduled visits.',
      image: '/assets/Images/Regular Maintenance.png',
      tag: 'MOST POPULAR',
      features: ['General dusting & vacuuming', 'Kitchen & bathroom sanitation', 'Linens & trash removal']
    },
    {
      title: 'Deep Cleaning',
      description: 'An exhaustive top-to-bottom refresh for homes that need extra attention.',
      image: '/assets/Images/Deep Cleaning.png',
      features: ['Inside cabinets & appliances', 'Baseboards & detailed crevices', 'Tile grout scrubbing']
    },
    {
      title: 'Move In / Out',
      description: 'Starting fresh in a new home or leaving a property spotless for the next tenant.',
      image: '/assets/Images/Move.png',
      features: ['Wall washing & window tracks', 'Garage & storage sweeping', 'Closet & shelf detailed cleaning']
    }
  ];

  const faqs = [
    {
      q: 'How do you screen your cleaning professionals?',
      a: 'All our staff undergo rigorous background checks, intensive professional training, and are fully insured and bonded to provide you with peace of mind.'
    },
    {
      q: 'Do you provide your own cleaning supplies?',
      a: 'Yes, we provide all eco-friendly, hospital-grade cleaning solutions and state-of-the-art equipment (HEPA vacuum cleaners, microfiber tools) at no extra cost.'
    },
    {
      q: 'What is your cancellation policy?',
      a: "We request a 24-hour notice for any cancellations or rescheduling. Cancellations with less than 24 hours' notice may be subject to a nominal fee."
    },
    {
      q: 'Are your services customized to my needs?',
      a: 'Absolutely. We perform a preliminary assessment for all commercial clients to build a custom scope of work that fits your specific industry requirements.'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Page Hero */}
        <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
          <Image
            src="/assets/Images/corporate office.png"
            alt="Corporate Office Background"
            fill
            priority
            className="absolute inset-0 object-cover"
          />
          <div className="relative z-20 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Our Premium Services
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Meticulous cleaning solutions tailored for high-end corporate environments and luxury residences.
            </p>
          </div>
        </section>

        {/* Commercial Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">corporate_fare</span>
            <h3 className="text-3xl font-bold">Commercial Cleaning</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, i) => (
              <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Residential Section */}
        <section className="bg-primary/5 dark:bg-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="material-symbols-outlined text-primary text-3xl">home</span>
              <h3 className="text-3xl font-bold">Residential Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {residentialServices.map((service, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-6 relative">
                    <Image
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={service.image}
                      fill
                    />
                    {service.tag && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {service.tag}
                      </div>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 px-4">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8 text-left inline-block">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold"
                >
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
