import { motion } from 'motion/react';
import { ArrowRight, Zap, Cpu, Layers, BarChart, ChevronRight, Check, Sparkles, Code, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Testimonials } from '../components/Testimonials';

const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-orange-500/5 rounded-full blur-[100px]"></div>
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <ArrowRight size={16} className="text-black" />
    </div>
  </motion.div>
);

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "MVP Development",
      description: "Rapidly transform your core concept into a functional, market-ready product with precision engineering."
    },
    {
      icon: Cpu,
      title: "AI Applications",
      description: "Integrate cutting-edge machine learning and LLMs into your business workflows for a competitive edge."
    },
    {
      icon: Layers,
      title: "System Architecture",
      description: "Robust, scalable foundations designed for high-performance digital ecosystems and long-term growth."
    },
    {
      icon: BarChart,
      title: "Product Scaling",
      description: "Optimizing and expanding your existing systems for global impact and seamless user experiences."
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/5 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles size={14} className="text-orange-500" />
              <span className="tracking-tight">Innovation Lab & Venture Partner</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
              We Build The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 animate-gradient-x">Future of Digital.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto text-balance">
              MVPXLAB transforms visionary ideas into high-impact digital products with robust architecture and AI-powered systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/submit-idea"
                className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-black/20 flex items-center justify-center group"
              >
                Submit Your Idea
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/what-we-build"
                className="w-full sm:w-auto bg-white/50 backdrop-blur-md text-black border border-gray-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
              >
                Explore Works
              </Link>
            </div>
          </motion.div>

          {/* Floating Elements / Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter"><Code size={24} /> TECH-FIRST</div>
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter"><Shield size={24} /> SECURE</div>
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter"><Globe size={24} /> GLOBAL</div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Our Capabilities</h2>
              <p className="text-xl text-gray-500 leading-relaxed">We specialize in turning complex problems into elegant, scalable digital solutions that drive real-world impact.</p>
            </div>
            <Link to="/what-we-build" className="text-black font-bold flex items-center gap-2 group">
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
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">The XLAB Process</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">A streamlined methodology designed for speed, quality, and long-term success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                className="relative"
              >
                <div className="text-8xl font-bold text-black/5 absolute -top-12 -left-4 -z-10 select-none">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-[150px]"></div>
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
            <div className="w-24 h-1 bg-white/20 mx-auto mb-12 rounded-full"></div>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              We invest our expertise and resources into the products we build, ensuring long-term success and scalability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
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
