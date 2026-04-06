import { motion } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Zap, Cpu, Layers, BarChart, ChevronRight, Check, Sparkles, Code, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Testimonials } from '../components/Testimonials';
import { GlowCard } from '../components/ui/spotlight-card';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const StardustBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
    {/* Animated Radial Gradients */}
    <div className="absolute top-[-40%] left-[-20%] w-[100%] h-[100%] bg-brand-accent/15 rounded-full blur-[150px] animate-pulse"></div>
    <div className="absolute bottom-[-40%] right-[-20%] w-[100%] h-[100%] bg-brand-accent-dark/15 rounded-full blur-[150px] animate-pulse delay-700"></div>

    {/* Focal Point Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-[200px]"></div>

    {/* Central Perspective Line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-brand-accent/30 via-brand-accent/10 to-transparent"></div>

    {/* Moving Particles Overlay */}
    <div className="absolute inset-0 stardust opacity-40 animate-slow-pan"></div>

    {/* Bottom Horizon Shadow */}
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

    {/* Grain Filter for Texture */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
  </div>
);


const processSteps = [
  { step: "01", title: "Submit your idea", desc: "Tell us what you want to build and why it matters." },
  { step: "02", title: "Review & Validate", desc: "Our team analyzes the feasibility and market potential." },
  { step: "03", title: "Design & Build", desc: "Rapid prototyping and development of your core product." },
  { step: "04", title: "Scale Together", desc: "Continuous optimization and growth as your partner." }
];

const TechMarquee = () => {
  const items = [
    "REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "THREE.JS",
    "NODE.JS", "PYTHON", "TENSORFLOW", "AWS", "SUPABASE", "GRAPHQL", "POSTGRESQL"
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/5 border-y border-white/10 py-5 backdrop-blur-md z-20 flex">
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        <div className="flex items-center justify-around flex-shrink-0 w-full">
          {items.map((item, i) => (
            <div key={i} className="flex items-center mx-8 text-white/50 font-bold tracking-widest text-sm md:text-base">
              <span className="w-2 h-2 rounded-full bg-brand-accent/50 mr-4"></span>
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-around flex-shrink-0 w-full">
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center mx-8 text-white/50 font-bold tracking-widest text-sm md:text-base">
              <span className="w-2 h-2 rounded-full bg-brand-accent/50 mr-4"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "MVP Development",
      description: "Rapidly transform your core concept into a functional, market-ready product with precision engineering.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Cpu,
      title: "AI Applications",
      description: "Integrate cutting-edge machine learning and LLMs into your business workflows for a competitive edge.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: Layers,
      title: "System Architecture",
      description: "Robust, scalable foundations designed for high-performance digital ecosystems and long-term growth.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: BarChart,
      title: "Product Scaling",
      description: "Optimizing and expanding your existing systems for global impact and seamless user experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden px-4">
        <StardustBackground />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs font-bold mb-8 backdrop-blur-sm text-brand-accent tracking-wide">
              <Sparkles size={12} className="animate-pulse" />
              <span>INVITE-ONLY BETA — APPLY NOW TO CLAIM YOUR $10K-$20K CREDIT</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-white text-balance">
              We Turn Ideas Into <br />
              Scalable Systems.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto text-balance">
              <span className="inline-flex items-center text-white/90 mr-1.5 font-bold">
                MVP<span className="text-brand-accent transform -translate-y-[1px]" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.3em" }}>X</span>LAB
              </span>
              builds and invests in digital products and AI-powered systems designed for real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/submit-idea"
                className="w-full sm:w-auto bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-[0_0_30px_rgba(253,151,6,0.4)] transition-all flex items-center justify-center group"
              >
                Submit Your Idea
              </Link>
              <Link
                to="/what-we-build"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Build With Us
              </Link>
            </div>
          </motion.div>

          {/* Increased Hero Spacing to separate CTA from TechMarquee */}
          <div className="mt-48 pb-20"></div>
        </div>

        <TechMarquee />
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">Our Capabilities</h2>
              <p className="text-xl text-gray-500 leading-relaxed">We specialize in turning complex problems into elegant, scalable digital solutions that drive real-world impact.</p>
            </div>
            <Link to="/what-we-build" className="text-white font-bold flex items-center gap-2 group">
              View all services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile horizontal carousel */}
          <div className="md:hidden">
            <CapabilitiesCarousel features={features} />
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">The XLAB Process</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">A streamlined methodology designed for speed, quality, and long-term success.</p>
          </div>

          {/* ── Mobile horizontal carousel ── */}
          <div className="md:hidden">
            <ProcessCarousel />
          </div>

          {/* ── Desktop grid ── */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <GlowCard
                  glowColor="blue"
                  customSize
                  className="h-full p-8 border-white/5 bg-white/5 hover:bg-white/[0.07] transition-colors group"
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-white/5 mb-6 group-hover:text-brand-accent/20 transition-colors duration-500 select-none">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Vision Statement */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 italic leading-tight">
              "We are not freelancers. <br />
              We are your product and systems partner."
            </h2>
            <div className="w-24 h-1 bg-brand-accent/20 mx-auto mb-12 rounded-full"></div>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              We invest our expertise and resources into the products we build, ensuring long-term success and scalability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-accent/20 to-brand-accent-dark/20 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Tell Us What You <br /> Want to Build</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Ready to transform your vision into a scalable digital system? Let's start the conversation today.
              </p>
              <Link
                to="/submit-idea"
                className="inline-flex bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-gray-200 hover:scale-105 transition-all group shadow-2xl shadow-white/10"
              >
                Submit Your Idea
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

const FeatureCard = ({ icon: Icon, title, description, image, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="h-full"
  >
    <GlowCard
      glowColor="orange"
      customSize
      className="h-full flex flex-col border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all duration-500 group overflow-hidden"
    >
      <div className="relative h-32 md:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-accent/20 backdrop-blur-md flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
            <Icon size={index === 0 ? 20 : 24} />
          </div>
        </div>
      </div>

      <div className="p-3 md:p-6 flex-1 flex flex-col relative z-10">
        <h3 className="text-base md:text-xl font-bold mb-2 tracking-tight text-white">{title}</h3>
        <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed mb-4 flex-1">{description}</p>
        <Link to="/what-we-build" className="flex items-center w-fit text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
          Learn More <ArrowRight size={12} className="ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </GlowCard>
  </motion.div>
);

const ProcessCarousel = () => {
  // Duplicate steps for infinite motion
  const doubledSteps = [...processSteps, ...processSteps];

  return (
    <div className="relative overflow-hidden py-4 -mx-4 group">
      {/* Linear Continuous Motion Container */}
      <div className="flex animate-marquee-slow hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-6 w-fit px-4">
        {doubledSteps.map((item, index) => (
          <div key={index} className="flex-none w-[75vw] lg:w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlowCard
                glowColor="blue"
                customSize
                className="h-full p-6 border-white/5 bg-white/5"
              >
                <div className="relative z-10">
                  <div className="text-4xl md:text-6xl font-bold text-white/5 mb-3 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-sm md:text-xl font-bold mb-2 tracking-tight text-white">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[10px] md:text-sm">{item.desc}</p>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Side gradients */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

const CapabilitiesCarousel = ({ features }: { features: any[] }) => {
  // Duplicate features to create an infinite loop effect
  const doubledFeatures = [...features, ...features];

  return (
    <div className="relative overflow-hidden py-4 -mx-4 group">
      {/* Linear Continuous Motion Container */}
      <div className="flex animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-4 w-fit px-4">
        {doubledFeatures.map((feature, index) => (
          <div key={index} className="flex-none w-[60vw]">
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              index={index % features.length}
            />
          </div>
        ))}
      </div>
      
      {/* Side gradients to fade cards in/out smoothly */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};
