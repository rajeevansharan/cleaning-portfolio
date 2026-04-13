import React from 'react';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(10,38,66,1)0%,rgba(20,76,132,1)100%)] opacity-90"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-4xl md:text-6xl font-black mb-8">
              Get a Free Cleaning Quote Today
            </h2>
            <p className="text-white/80 text-lg mb-12">
              Experience the difference that professional expertise and premium care can make for your facility.
            </p>
            <button className="bg-white text-primary px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition-transform shadow-2xl">
              Schedule My Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
