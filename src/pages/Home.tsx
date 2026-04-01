import { motion } from 'motion/react';
import { ArrowRight, Zap, Cpu, Layers, BarChart, ChevronRight, Check, Sparkles, Code, Globe, Shield, Target, TrendingUp, Users, Activity } from 'lucide-react';
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
    {/* Deep Purple Gradients */}
    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand-accent-dark/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
    
    {/* Central Light Ray */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-brand-accent/20 via-brand-accent/5 to-transparent"></div>
    
    {/* Noise/Stardust Texture */}
    <div className="absolute inset-0 stardust opacity-30"></div>
    
    {/* Vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
  </div>
);

const GlowingCore = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-20">
    {/* Orbital Rings */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-brand-accent/20 rounded-full scale-110"
    ></motion.div>
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-brand-accent/10 rounded-full scale-125"
    ></motion.div>
    
    {/* The Sphere */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-dark shadow-[0_0_100px_rgba(253,151,6,0.4)] overflow-hidden">
      {/* Grid Lines on Sphere */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Inner Glows */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full blur-sm animate-pulse delay-500"></div>
    </div>

    {/* Outer Glow */}
    <div className="absolute inset-0 rounded-full bg-brand-accent/20 blur-3xl -z-10"></div>
  </div>
);

const DataWidget = ({ title, icon: Icon, value, position, delay }: { title: string, icon: any, value?: string, position: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={cn(
      "absolute glass-accent p-4 rounded-2xl w-40 md:w-48 shadow-2xl z-20",
      position
    )}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-6 h-6 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent">
        <Icon size={14} />
      </div>
      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{title}</span>
    </div>
    
    {value ? (
      <div className="space-y-2">
        <div className="text-lg font-bold text-white font-mono">{value}</div>
        <div className="h-12 w-full bg-brand-accent/5 rounded-lg overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2, delay: delay + 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"
          ></motion.div>
          {/* Mock Waveform */}
          <div className="absolute inset-0 flex items-end gap-1 px-2 pb-2">
            {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
              <div key={i} className="flex-1 bg-brand-accent/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-t-brand-accent rounded-full"
          ></motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Activity size={20} className="text-brand-accent animate-pulse" />
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

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
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-white text-balance">
              We Build The <br />
              Future of Digital.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto text-balance">
              MVPXLAB transforms visionary ideas into high-impact digital products with robust architecture and AI-powered systems.
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
                Explore Works
              </Link>
            </div>
          </motion.div>

          {/* Visual Core & Widgets */}
          <div className="relative mt-20 pb-40">
            <GlowingCore />
            
            {/* Widgets */}
            <DataWidget 
              title="Targeting" 
              icon={Target} 
              position="top-0 -left-4 md:left-20" 
              delay={1} 
            />
            <DataWidget 
              title="Revenue" 
              icon={TrendingUp} 
              value="$ 16,900" 
              position="bottom-20 -left-8 md:left-0" 
              delay={1.2} 
            />
            <DataWidget 
              title="Engagement" 
              icon={Users} 
              position="bottom-10 -right-8 md:right-0" 
              delay={1.4} 
            />
            <DataWidget 
              title="App Install" 
              icon={Activity} 
              value="94.2%" 
              position="top-10 -right-4 md:right-20" 
              delay={1.6} 
            />
          </div>
        </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">The XLAB Process</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">A streamlined methodology designed for speed, quality, and long-term success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Submit your idea", desc: "Tell us what you want to build and why it matters." },
              { step: "02", title: "Review & Validate", desc: "Our team analyzes the feasibility and market potential." },
              { step: "03", title: "Design & Build", desc: "Rapid prototyping and development of your core product." },
              { step: "04", title: "Scale Together", desc: "Continuous optimization and growth as your partner." }
            ].map((item, index) => (
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
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <div className="w-12 h-12 rounded-xl bg-brand-accent/20 backdrop-blur-md flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
            <Icon size={24} />
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col relative z-10">
        <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{description}</p>
        <div className="flex items-center text-brand-accent text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
          Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </GlowCard>
  </motion.div>
);
