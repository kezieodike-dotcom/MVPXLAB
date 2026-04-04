import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import WhatWeBuild from './pages/WhatWeBuild';
import SubmitIdea from './pages/SubmitIdea';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { Menu, X } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${isActive ? 'text-brand-accent' : 'text-gray-400 hover:text-white'}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-4 text-xl font-bold border-b border-white/5 ${isActive ? 'text-brand-accent' : 'text-white'}`;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'} py-5 px-6 md:px-12 flex justify-between items-center`}>
        <NavLink to="/" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-3 relative z-[60]">
          <img src="/logo.png" className="w-12 h-12 mix-blend-screen" alt="MVPXLAB Logo" />
          <div className="-mt-1">
            MVP<span className="text-brand-accent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3em', transform: 'translateY(-1px)', display: 'inline-block' }}>X</span>LAB
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/what-we-build" className={navLinkClass}>What We Build</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink
            to="/submit-idea"
            className="bg-brand-accent text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-brand-accent-dark transition-all transform hover:scale-105"
          >
            Submit Idea
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-[60] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full justify-center px-10 space-y-2">
          <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/what-we-build" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>What We Build</NavLink>
          <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <div className="pt-8">
            <NavLink
              to="/submit-idea"
              className="block w-full bg-brand-accent text-white text-center py-5 rounded-2xl text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Submit Your Idea
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-flex items-center gap-3 text-xl font-bold text-white tracking-tighter mb-4 group">
              <img src="/logo.png" className="w-10 h-10 mix-blend-screen opacity-60 group-hover:opacity-100 transition-all" alt="MVPXLAB Logo" />
              <div className="-mt-1">MVP<span className="text-brand-accent" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3em', transform: 'translateY(-1px)', display: 'inline-block' }}>X</span>LAB</div>
            </NavLink>
            <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-xs">
              A systems innovation lab and AI-focused venture partner. Building the future of digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/" end className="text-gray-500 hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-500 hover:text-white transition-colors">About</NavLink></li>
              <li><NavLink to="/what-we-build" className="text-gray-500 hover:text-white transition-colors">What We Build</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-500 hover:text-white transition-colors">Contact</NavLink></li>
              <li><NavLink to="/submit-idea" className="text-brand-accent hover:text-brand-accent-dark transition-colors font-bold">Submit Idea →</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:mvplabx@gmail.com" className="text-gray-500 hover:text-brand-accent transition-colors flex items-center gap-2">
                  ✉ mvplabx@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.mvpxlab.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors">
                  🌐 www.mvpxlab.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=75+Sijuwuola+Street,Okota,Lagos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors leading-relaxed">
                  📍 75 Sijuwuola Street, Okota, Lagos State.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {year} MVPXLAB. All rights reserved.</p>
          <p className="text-gray-700">Built in Lagos, Nigeria 🇳🇬</p>
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
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-build" element={<WhatWeBuild />} />
            <Route path="/submit-idea" element={<SubmitIdea />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
