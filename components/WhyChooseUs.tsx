import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'schedule',
      title: 'Reliable Service',
      description: 'Always on time and consistent, ensuring your space stays immaculate without interruption.'
    },
    {
      icon: 'school',
      title: 'Trained Professionals',
      description: 'Our team undergoes rigorous training and background checks for your complete peace of mind.'
    },
    {
      icon: 'eco',
      title: 'Eco-Friendly',
      description: 'We use sustainable, non-toxic products that are safe for people, pets, and the environment.'
    },
    {
      icon: 'task_alt',
      title: 'Quality Assurance',
      description: 'Regular inspections and a satisfaction guarantee ensure the highest standards every time.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-background-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800/80 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="size-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
