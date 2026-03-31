/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Zap, Cpu, Layers, BarChart, CheckCircle, Mail, Globe, Send } from 'lucide-react';
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
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Build', path: '/what-we-build' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-500",
      isHome 
        ? "bg-black/20 border-white/5 text-white" 
        : "bg-white/70 border-gray-100 text-gray-900"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
              isHome ? "bg-white text-black" : "bg-black text-white"
            )}>
              <span className="font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">MVPXLAB</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isHome 
                    ? (location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white")
                    : (location.pathname === link.path ? "text-black" : "text-gray-500 hover:text-black")
                )}
              >
                {link.name}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/submit-idea"
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg",
                  isHome 
                    ? "bg-white text-black hover:bg-gray-100 shadow-white/10" 
                    : "bg-black text-white hover:bg-gray-800 shadow-black/10"
                )}
              >
                Submit Your Idea
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
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
            className={cn(
              "md:hidden absolute top-20 w-full px-4 py-6 space-y-4 border-b transition-colors",
              isHome ? "bg-black border-white/10" : "bg-white border-gray-100"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-lg font-medium",
                  isHome ? "text-white" : "text-gray-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/submit-idea"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-5 py-4 rounded-2xl text-center font-bold text-lg shadow-xl",
                isHome ? "bg-white text-black" : "bg-black text-white"
              )}
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
    <footer className="bg-white border-t border-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter">MVPXLAB</span>
            </Link>
            <p className="text-xl text-gray-500 max-w-sm mb-10 leading-relaxed">
              A systems innovation lab and AI-focused venture partner transforming ideas into scalable, high-impact digital products.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all"><Globe size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Platform</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/what-we-build" className="hover:text-black transition-colors">What We Build</Link></li>
              <li><Link to="/submit-idea" className="hover:text-black transition-colors">Submit Idea</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Connect</h4>
            <ul className="space-y-4 text-lg font-medium">
              <li><a href="mailto:hello@mvpxlab.com" className="hover:text-black transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Location</h4>
            <p className="text-lg font-medium leading-relaxed">
              Innovation Hub, Tech City <br />
              London, United Kingdom
            </p>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-gray-400">
          <p>© 2026 MVPXLAB. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
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
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
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
