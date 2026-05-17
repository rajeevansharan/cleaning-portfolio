import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Davis',
      role: 'CEO, TechFlow Solutions',
      initials: 'JD',
      quote: '"PKS has transformed our office atmosphere. Their attention to detail is unmatched by any other service we\'ve used in the past five years."',
      featured: false
    },
    {
      name: 'Sarah Richards',
      role: 'Director, Elite Estates',
      initials: 'SR',
      quote: '"Reliability is everything in property management. PKS never misses a beat and the results are consistently flawless across all our properties."',
      featured: true
    },
    {
      name: 'Mark Thompson',
      role: 'Operations, Global Fab Co.',
      initials: 'MT',
      quote: '"Exceptional industrial cleaning. They handled our factory shutdown maintenance with incredible efficiency and expertise."',
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-light dark:bg-slate-800 p-10 rounded-3xl relative"
            >
              <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-6 right-8">
                format_quote
              </span>
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">star</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
