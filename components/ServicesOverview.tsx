import React from 'react';
import Link from 'next/link';
import { Building2, Briefcase, Factory, Key, Home, Sparkles } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Complete facility management and cleaning for business complexes and large venues.'
    },
    {
      icon: Briefcase,
      title: 'Office',
      description: 'Daily and weekly desk, floor, and communal area maintenance for productive environments.'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Specialized heavy-duty cleaning for warehouses, factories, and production facilities.'
    },
    {
      icon: Key,
      title: 'Real Estate',
      description: 'Move-in/move-out services and staging preparation to maximize property value.'
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Customized home cleaning plans for busy professionals and luxury residences.'
    },
    {
      icon: Sparkles,
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="h-8 w-8 text-primary dark:text-white group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
