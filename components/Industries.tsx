import React from 'react';
import Image from 'next/image';
const Industries = () => {
  const industries = [
    {
      title: 'Corporate Offices',
      description: 'Executive workspaces and coworking hubs.',
      image: '/assets/images/corporate office.png',
      alt: 'Modern corporate office lobby'
    },
    {
      title: 'Auto Dealerships',
      description: 'Pristine showrooms and service bays.',
      image: '/assets/images/Auto Dealerships.png',
      alt: 'Luxury car showroom'
    },
    {
      title: 'Property Management',
      description: 'Multi-unit complexes and commercial properties.',
      image: '/assets/images/Property Management.png',
      alt: 'Luxury apartment complex exterior'
    }
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-background-dark/30" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Tailored cleaning solutions for every specialized environment, from healthcare to heavy industry.
            </p>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                alt={industry.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={industry.image}
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-white text-2xl font-bold">{industry.title}</h4>
                <p className="text-white/70 text-sm mt-2">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
