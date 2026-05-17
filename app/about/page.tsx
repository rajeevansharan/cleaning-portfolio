import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AboutPage = () => {
  const stats = [
    { value: '500+', label: 'Active Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction Rate' }
  ];

  const coreValues = [
    {
      icon: 'verified_user',
      title: 'Integrity',
      description: 'We operate with honesty and transparency in every contract and communication.'
    },
    {
      icon: 'sync',
      title: 'Consistency',
      description: 'The same high standard, every single visit. We never cut corners.'
    },
    {
      icon: 'badge',
      title: 'Professionalism',
      description: 'Uniformed, trained, and background-checked staff representing your business well.'
    },
    {
      icon: 'sentiment_satisfied',
      title: 'Customer Satisfaction',
      description: 'Our success is measured by the happiness and health of your workplace.'
    }
  ];

  const team = [
    {
      name: 'Sarah Jenkins',
      role: 'Operations Director',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwQoCWK8SYxkmTFBD6rx-7xSayvPZYDh7lQg9zXJkk2V8lYnfv3LWENmHVtv6Lpfy9zvqgRsiQyS_0Ll_nDgH3wHxE_XHxr7S85woXttQrGYJuJcy4X5CnSOO0O-1KpID_olDyKIwWAN2uVmLKz8IdvLLAkG0fSLNEFhdrBCPjLcJW2es8_puyA85nIdtaUn0gxONyJsnLBC0LTUiERXV-F_pIAhGqXRX1Rgrco4stfo08ngkIzcKDha2wYDYVLrZsll5S3Wyjpulq'
    },
    {
      name: 'Marcus Chen',
      role: 'Safety Compliance',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfPgi1YCOcoPDIMjedJ1xYeMcmhUxukLd8mADIfMmzbrHk9wBmYAR3KGXeW918bbItcJUzDIjSowa0MB8xBq_j_anAGC6TZDv0woJgYITlNXOsDomx8jyc5WK8I_MvZt0G33UuG9_3CnFF__tN4QHKiT7FvRjKHNk4kzanhgUY-TEjYMtslz8qCm5cYRYgoDoNYP8hF9zUbjJkyG386IZVb6YO_klhnU6QKgwqN52-XVbivJoB-UUggpPuKa-BgZ3AjrsoZOpdSirk'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Client Relations',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjNZ7A3vLVz_jHaFrn09t4Xtr4GpA7d621pM9CfMIblFj4MQnJtsNhhnNiZxGSfOajesY9lYiV9atIQSNhUNCp_o4J2DKr-69ChuyX2b_kBreeraiWlx6wqgZmz3fspWP94_VapMUl0Fb2pj8O06ekIHczpfRDSCGnlYPVk6tXh-sb8pJRgM0MWAgn5VVMe6bQnK8xujoLzhcD5JKwwxlUtySK1W23Qdo0Q6Oue7xZIWzliTfKHmvwyU8W1Ytu7PBOSJKQqe2D6e5-'
    },
    {
      name: 'David Thompson',
      role: 'Quality Assurance',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkJJUhL4Bdr9un72d0qWstaQ-bt0kD_Ivf7cj2av7bHt0BG-i20dUgsR5yMnLo8NfdXpuedNKX_EHAcqvUY_ZQOoujBY6CTrzrEowQGyj_lIZFdppa7svkSL92r_lAR3fIYhN9YeXDlGJD-oLv6AnjrGTzh4YqiiP8CYoESkJkhDv0O8BfCom6bi0n1M4xMiXUeBG78TbKMXK1atmxQi75LkBF0hlKqg3GRNyP7bCv46rLL8eK_4YCkZDd9cMOLJQNK7bm9mimN1_'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="px-4 md:px-20 lg:px-40 py-10">
          <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto">
            <div className="flex flex-col justify-end overflow-hidden bg-primary/10 rounded-xl min-h-[360px] relative px-8 py-12">
              <Image
                src="/assets/Images/AboutHero.png"
                alt="About Hero Background"
                fill
                priority
                className="absolute inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/80 z-10"></div>
              <div className="relative z-20">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  About PKS Services INC
                </h1>
                <p className="text-white/80 text-lg max-w-xl mt-2">
                  Setting the standard in professional facility maintenance for over a decade.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <span className="text-primary dark:text-blue-400 text-4xl font-black mb-2">{stat.value}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Story & Mission */}
            <div className="flex flex-col lg:flex-row gap-16 py-12 items-center">
              <div className="flex flex-1 flex-col gap-6">
                <div className="space-y-4">
                  <h2 className="text-primary dark:text-white text-4xl font-black leading-tight tracking-tight">
                    Our Story
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    Founded over a decade ago, we've grown from a small local team to a leading corporate cleaning partner. We recognized a gap in the market for high-standard, reliable cleaning services that large-scale businesses could trust implicitly. Today, ProClean Solutions is dedicated to excellence in every corner of the facilities we serve.
                  </p>
                </div>
                <div className="p-8 bg-primary/5 dark:bg-primary/20 rounded-xl border-l-4 border-primary">
                  <h3 className="text-primary dark:text-blue-400 text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    Our Mission
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200 text-lg italic leading-relaxed">
                    "Our mission is to provide reliable, high-quality cleaning services that help businesses maintain safe and professional environments."
                  </p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-xl overflow-hidden shadow-2xl relative w-full h-[400px]">
                  <Image
                    src="/assets/Images/ourstoryImage.png"
                    alt="Professional team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-primary dark:text-white text-3xl font-black mb-4">
                  Our Core Values
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  The pillars that define our work and our relationships with every client.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, i) => (
                  <div key={i} className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="size-12 rounded-lg bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-blue-400">
                      <span className="material-symbols-outlined">{value.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{value.title}</h4>
                    <p className="text-slate-500 text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="py-16 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div className="max-w-2xl">
                  <h2 className="text-primary dark:text-white text-3xl font-black mb-4">
                    Meet Our Experts
                  </h2>
                  <p className="text-slate-500">
                    Our dedicated team of cleaning specialists and account managers are here to ensure your facility remains spotless.
                  </p>
                </div>
                <button className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Join Our Team
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {team.map((member, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-100">
                    <img
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                      src={member.image}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                      <p className="text-white font-bold">{member.name}</p>
                      <p className="text-white/70 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
