/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Zap, Cpu, Layers, BarChart, CheckCircle, Mail, Globe, Send, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhatWeBuild from './pages/WhatWeBuild';
import SubmitIdea from './pages/SubmitIdea';
import Contact from './pages/Contact';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Product', path: '/what-we-build' },
    { name: 'Campaign Goals', path: '/about' },
    { name: 'Case Study', path: '/what-we-build' },
    { name: 'FAQ', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent-dark flex items-center justify-center rounded-xl shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">MVPXLAB</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all hover:text-brand-accent",
                  location.pathname === link.path ? "text-brand-accent" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/submit-idea"
                className="bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 transition-all"
              >
                Submit Idea
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 w-full px-4 py-8 space-y-6 border-b border-white/10 bg-black/95 backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-medium text-white hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/submit-idea"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white px-5 py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-brand-accent/20"
            >
              Submit Your Idea
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent-dark flex items-center justify-center rounded-xl shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform">
                <Zap size={20} className="text-white fill-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">MVPXLAB</span>
            </Link>
            <p className="text-xl text-gray-500 max-w-sm leading-relaxed mb-12">
              Building the next generation of digital products and scalable systems.
            </p>
            <div className="flex space-x-6">
              {[Globe, Mail, Shield].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Platform</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><Link to="/about" className="text-gray-500 hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/what-we-build" className="text-gray-500 hover:text-brand-accent transition-colors">What We Build</Link></li>
              <li><Link to="/submit-idea" className="text-gray-500 hover:text-brand-accent transition-colors">Submit Idea</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Connect</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="mailto:hello@mvpxlab.com" className="text-gray-500 hover:text-brand-accent transition-colors">Email</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Location</h4>
            <p className="text-lg font-medium leading-relaxed text-gray-500">
              Innovation Hub, Tech City <br />
              London, United Kingdom
            </p>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-gray-500">
          <p>© 2026 MVPXLAB. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black font-sans text-white selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-we-build" element={<WhatWeBuild />} />
              <Route path="/submit-idea" element={<SubmitIdea />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
