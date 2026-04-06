import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  <div className="absolute inset-0 -z-10 overflow-hidden bg-inherit">
    {/* Animated Radial Gradients */}
    <div className="absolute top-[-40%] left-[-20%] w-[100%] h-[100%] bg-brand-accent/15 rounded-full blur-[150px] animate-pulse"></div>
    <div className="absolute bottom-[-40%] right-[-20%] w-[100%] h-[100%] bg-brand-accent-dark/15 rounded-full blur-[150px] animate-pulse delay-700"></div>

    {/* Focal Point Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-accent/10 rounded-full blur-[200px]"></div>

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
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Beta Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-xs font-bold mb-8 backdrop-blur-sm text-brand-accent tracking-wide"
            >
              <Sparkles size={12} className="animate-pulse" />
              <span>INVITE-ONLY BETA — APPLY NOW TO CLAIM YOUR $10K-$20K CREDIT</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.0] mb-8 text-white text-balance"
            >
              We Turn Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Scalable Systems.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto text-balance"
            >
              <span className="inline-flex items-center text-white/90 mr-1.5 font-bold">
                MVP<span className="text-brand-accent transform -translate-y-[1px]" style={{ fontFamily: "'Caveat', cursive", fontSize: "1.3em" }}>X</span>LAB
              </span>
              builds and invests in digital products and AI-powered systems designed for real-world impact.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/submit-idea"
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(253,151,6,0.5)] transition-all flex items-center justify-center group"
                >
                  Submit Your Idea
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/what-we-build"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Build With Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="mt-48 pb-20"></div>
        </div>

        <TechMarquee />
      </section>

      {/* Capabilities Section */}
      <section className="py-40 bg-inherit relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white">Our Capabilities</h2>
              <p className="text-2xl text-gray-500 leading-relaxed">We specialize in turning complex problems into elegant, scalable digital solutions that drive real-world impact.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/what-we-build" className="text-white text-lg font-bold flex items-center gap-2 group p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-accent transition-all">
                View all services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-accent" />
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden">
            <CapabilitiesCarousel features={features} />
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-40 bg-white/[0.02] overflow-hidden relative border-y border-white/5">
        {/* Background blobs for depth */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 md:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white"
            >
              The XLAB Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-gray-500 max-w-2xl mx-auto"
            >
              A streamlined methodology designed for speed, quality, and long-term success.
            </motion.p>
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="h-full"
              >
                <GlowCard
                  glowColor="blue"
                  customSize
                  className="h-full p-8 border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all duration-500 group relative overflow-hidden rounded-3xl"
                >
                  {/* Decorative number background */}
                  <div className="absolute -right-4 -bottom-4 text-9xl font-bold text-white/[0.02] group-hover:text-brand-accent/[0.05] transition-colors duration-700 select-none pointer-events-none">
                    {item.step}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-500">
                      <span className="text-brand-accent font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-brand-accent transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-500">
                      {item.desc}
                    </p>
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
      <section className="py-40 bg-inherit text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-accent rounded-full blur-[180px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 italic leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              "We are not freelancers. <br />
              We are your partner."
            </h2>
            <div className="w-32 h-1 bg-brand-accent/40 mx-auto mb-16 rounded-full shadow-[0_0_20px_rgba(253,151,6,0.5)]"></div>
            <p className="text-gray-400 text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto font-medium">
              We invest our expertise and resources into the products we build, ensuring long-term success and scalability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-inherit px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-accent/20 to-brand-accent-dark/20 rounded-[3rem] md:rounded-[4rem] p-10 md:p-32 text-center text-white relative overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(253,151,6,0.1)]"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-10 leading-tight md:leading-none">Tell Us What You <br /> Want to Build</h2>
              <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-16 max-w-2xl mx-auto font-medium">
                Ready to transform your vision into a scalable digital system? Let's start the conversation today.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/submit-idea"
                  className="inline-flex bg-white text-black px-10 md:px-16 py-6 md:py-8 rounded-[1.5rem] md:rounded-[2rem] text-xl md:text-2xl font-bold hover:shadow-2xl hover:shadow-white/20 transition-all group"
                >
                  Submit Your Idea
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform text-brand-accent" size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
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
      className="h-full flex flex-col border-white/5 bg-white/5 hover:bg-white/[0.1] transition-all duration-700 group overflow-hidden rounded-[2.5rem]"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.15 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
            <Icon size={24} />
          </div>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-10">
        <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-brand-accent transition-colors duration-500">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed mb-8 flex-1 group-hover:text-gray-300 transition-colors duration-500">{description}</p>
        <Link to="/what-we-build" className="flex items-center w-fit text-brand-accent text-sm font-bold uppercase tracking-widest group-hover:text-white transition-all transform group-hover:translate-x-2">
          Learn More <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </GlowCard>
  </motion.div>
);

const ProcessCarousel = () => {
  const doubledSteps = [...processSteps, ...processSteps];
  return (
    <div className="relative overflow-hidden py-10 -mx-4 group">
      <div className="flex animate-marquee-slow hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-8 w-fit px-4">
        {doubledSteps.map((item, index) => (
          <div key={index} className="flex-none w-[80vw]">
            <GlowCard
              glowColor="blue"
              customSize
              className="h-full p-8 border-white/5 bg-white/5 rounded-[2rem]"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-8">
                   <span className="text-brand-accent font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </div>
  );
};

const CapabilitiesCarousel = ({ features }: { features: any[] }) => {
  const doubledFeatures = [...features, ...features];
  return (
    <div className="relative overflow-hidden py-10 -mx-4 group">
      <div className="flex animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-6 w-fit px-4">
        {doubledFeatures.map((feature, index) => (
          <div key={index} className="flex-none w-[70vw]">
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
    </div>
  );
};
