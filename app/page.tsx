import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesOverview from '../components/ServicesOverview';
import Industries from '../components/Industries';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
