import { motion } from 'motion/react';
import { Zap, Cpu, Layers, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeBuild() {
  const capabilities = [
    {
      icon: <Zap className="text-brand-accent" size={32} />,
      title: "MVPs",
      description: "Rapidly transform your core concept into a functional, market-ready product.",
      who: "Founders with early-stage ideas.",
      outcome: "A validated product ready for feedback."
    },
    {
      icon: <Cpu className="text-brand-accent" size={32} />,
      title: "AI Apps",
      description: "Integrate cutting-edge machine learning and LLMs into your business workflows.",
      who: "Organizations looking to innovate with AI.",
      outcome: "Intelligent systems that enhance productivity."
    },
    {
      icon: <Layers className="text-brand-accent" size={32} />,
      title: "Platforms",
      description: "Robust, scalable foundations designed for high-performance digital ecosystems.",
      who: "Startups building multi-user platforms.",
      outcome: "A secure, high-performance platform."
    },
    {
      icon: <BarChart className="text-brand-accent" size={32} />,
      title: "Scalable Systems",
      description: "Optimizing and expanding your existing systems for global impact.",
      who: "Existing products needing to handle load.",
      outcome: "A resilient system that supports growth."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 bg-inherit min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 text-white text-balance">
            Clarify <br />
            <span className="text-gray-400">Capabilities</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            We specialize in building high-impact digital products and AI-powered systems. Our expertise spans across MVP development, AI integration, and large-scale platform architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl hover:bg-white/10 hover:border-brand-accent/50 hover:shadow-brand-accent/20 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                {capability.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">{capability.title}</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 flex-grow">{capability.description}</p>
              
              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-accent mt-1">Who it's for</h4>
                  <p className="text-white text-xs md:text-sm font-medium text-right">{capability.who}</p>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-accent mt-1">Outcome</h4>
                  <p className="text-white text-xs md:text-sm font-medium text-right">{capability.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Build?</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Tell us about your project and let's see how we can help you build something extraordinary.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/submit-idea"
              className="inline-flex bg-brand-accent text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-accent-dark transition-all group"
            >
              Submit Your Idea
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
