import React from 'react';
import Link from 'next/link';

const ServicesOverview = () => {
  const services = [
    {
      icon: 'business',
      title: 'Commercial',
      description: 'Complete facility management and cleaning for business complexes and large venues.'
    },
    {
      icon: 'desk',
      title: 'Office',
      description: 'Daily and weekly desk, floor, and communal area maintenance for productive environments.'
    },
    {
      icon: 'factory',
      title: 'Industrial',
      description: 'Specialized heavy-duty cleaning for warehouses, factories, and production facilities.'
    },
    {
      icon: 'real_estate_agent',
      title: 'Real Estate',
      description: 'Move-in/move-out services and staging preparation to maximize property value.'
    },
    {
      icon: 'home',
      title: 'Residential',
      description: 'Customized home cleaning plans for busy professionals and luxury residences.'
    },
    {
      icon: 'cleaning',
      title: 'Janitorial',
      description: 'Ongoing custodial support including sanitation, waste removal, and restocking.'
    }
  ];

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white mb-4">
            Our Premium Services
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6">
                {service.icon}
              </span>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
              >
                Learn More
                <span className="material-symbols-outlined ml-1">chevron_right</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
