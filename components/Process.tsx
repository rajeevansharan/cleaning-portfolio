import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Inspection',
      description: 'We assess your space and specific cleaning needs.'
    },
    {
      number: '2',
      title: 'Quote',
      description: 'Transparent pricing with no hidden fees.'
    },
    {
      number: '3',
      title: 'Cleaning Plan',
      description: 'A customized schedule that fits your operations.'
    },
    {
      number: '4',
      title: 'Quality Check',
      description: 'Final inspection to ensure 100% satisfaction.'
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Our Seamless Process
          </h2>
          <p className="text-white/70 text-lg">
            Four simple steps to a cleaner environment.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/20"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="size-24 rounded-full bg-white text-primary flex items-center justify-center text-3xl font-black mb-8 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
