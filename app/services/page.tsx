'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const commercialServices = [
    {
      title: 'Office Cleaning',
      description: 'Daily or weekly maintenance for corporate headquarters and small businesses alike.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgGnVSUwMYP2ad1w8DrOcN1lz_MbMWbhEs64n3lDs-te_3xn_wLoXEHfFHGtlNsSJpWB7Z4NyXiOPvEqCUKssGMDMjxLX93tF3T5zThEbkkDV4WBW-lIXbwv-HVcKmojJeJk4U1mbwmkJXM6xaH-9_290jLQmYiPvRzoRuIpEgEIkYN7ynV5XG2EHdIg1PaeZS8oyZQcUUxpH1HpuVzj7ATRCaGI6TKeO_UQl7j9oG_tJW5oswkaHpm6_ig2ib_E0i1HhS25armRGj',
      features: ['Improved employee morale', 'Sanitized high-touch areas', 'Flexible after-hours scheduling']
    },
    {
      title: 'Auto Dealerships',
      description: "Showroom-ready floor polishing and detailing to match your brand's luxury standard.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5iFEYNmb3Z3Rg-t169Y3VWAnulDWFhbTmzQJUYdC5ke4_zLTi1-zUNdiGLvXnJx_f3fgJwlSGfpJRzi4ukqeuwdAFMXUWd_AXIG3gH5BNDiCb1wMU_7pTKYIqM3cXKQNe6Hghz-apcHdoW25ugYreFonaHp5a9-_Mu1x8fZzZaFk9249OYbO01D_gXZXq_D1Fs8Av_ld8K-dL2P9qpZVYgHclFtDYgyraoQswXyDPwhLC8i1_vZdbSkPOJ3nqHfUqraPFDpfo2hyv',
      features: ['Mirror-finish floor care', 'Glass facade streak-free cleaning', 'Customer lounge sanitation']
    },
    {
      title: 'Industrial & Factories',
      description: 'Specialized heavy-duty cleaning for warehouses and manufacturing facilities.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1GSYk6PTbgeazttHJkoe5pRayHwi2_kPO_5qBHMH1U_cyyZ4CNJQX_INE8qPhPcrnDky4Rwe8aP9WLsekdhtTj0vtc_Lomti_ZozXfGlnwbZKJEy8N1qbtWB1T7jtlqTghj9KoKkW2TebHB9WSfFvAlCMaM5kfRisvvcHTCGWLGDVqnNa0Ajq0FrvxpbWUqLKxk3dalPUUC90C6Hr9Mnn3CwuecgzrnftOT5oc9Bxj3d71svz2JSzMjbSqPGosYOPfEdPL5byYfta',
      features: ['Compliance with safety standards', 'Degreasing & floor scrubbing', 'HVAC & vent cleaning']
    }
  ];

  const residentialServices = [
    {
      title: 'Regular Maintenance',
      description: 'Keep your home pristine with our weekly or bi-weekly scheduled visits.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8js9nyz8eqGAx0HMoHHwFULxDrjsR5POw7rzlwTzknyl883QXZVV3KmxeKtRWcX5PyYxa3fcMGR5pnCm0jQEK_tLuFnrwocHy6Qm5Qp-H0TC9cqUWUuqIMYad7lrpUxSSd9HU0nInVfWgwaO_jDAdYyjQb9BQ24ASwaA_1gbLv5nuanEyR7qV-389GitIdk8sKE65BN8f5Zd64H6EdPbdwWf_OYIUvTww_-gu-sh2kIg5gsdwDC0fV8HOIG-IpYDqRMg3SPTRHxPD',
      tag: 'MOST POPULAR',
      features: ['General dusting & vacuuming', 'Kitchen & bathroom sanitation', 'Linens & trash removal']
    },
    {
      title: 'Deep Cleaning',
      description: 'An exhaustive top-to-bottom refresh for homes that need extra attention.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChljTFM-xBsVHi8nK-objmME49KN9nzrpJHx40EYROXlJ7Yu3_Xo4jrieOloNMzlZRrYgeLEOTKWmjfvhVlbK8YaY0bzr5AA74YllR28icsX7Se01DR24zP5T4elj3bdrjoaUEpaAtFHHjncLDV1AtcaYzG8jHWmVwEwsc6LiZBCaYU1j35xs3Kl7oEF4rvzmLm-w15dt9pLnF2bT-DQLuRXvELjYa8OMX-eygNZXdSbaeFdfehpNmGrxoYjszoUyROz-fhwb8gV1T',
      features: ['Inside cabinets & appliances', 'Baseboards & detailed crevices', 'Tile grout scrubbing']
    },
    {
      title: 'Move In / Out',
      description: 'Starting fresh in a new home or leaving a property spotless for the next tenant.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbUos_ZyAhCO7noed-exrK_zP7fVx7msECWSANkXBKHg16hB-2vsHhD5buSQHb7kUxzLMRufRGdRE1s19lLCmP4foaaeGcKqmTm9Am1OEVxkRZMhoBqbsMmZ3-SdcetGVFEVfVHijZcVuOjHGotx7sa50v6azfUQ9alsgqYZZM9UjaiByNu157KUlU1YEpwvdL_tw98OD19-7ZsZem_AYsNfCPKyz5RMYC4kCu0ih2hKyyb9hSqzxudcsg7G3lAQn6QC4NUStpvhyi',
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
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKMuFehKRTliHaodm7dXEZjKNyv1Ghw79xoBjCxXsORjRaiux7mIF7D5KJLQqDwjl935Tj-7-r-GKHvvNMEbw0EtW_I03uAiIO-dSGTR0VwiGGnbCsiPPxfT_qP2zdW1_xnjEDSYO0mdoL1Y3yzh5qIPD2aQXZtylHKx6RYR1xcAkW97xT9Upbts6onLzP6rADh8LGiM0bWDCqTIYeLFTaMXj5H_6x9OqCP7pEsLT0jvpSel_CZH2oP9gmi2C-B9OTytmrig811IRM")`
            }}
          ></div>
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
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url("${service.image}")` }}
                ></div>
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
                  <button className="w-full bg-primary/10 text-primary py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                    Request Quote
                  </button>
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
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={service.image}
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
                        <span className="material-symbols-outlined text-primary">done</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto px-8 py-3 bg-primary text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all">
                    Select Service
                  </button>
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
