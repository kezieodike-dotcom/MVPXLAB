import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Get in <br />
            <span className="text-gray-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Have a question or want to discuss a potential partnership? We're here to help you build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-500">hello@mvpxlab.com</p>
                <p className="text-gray-500">partnerships@mvpxlab.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <p className="text-gray-500">Innovation Hub, Tech City</p>
                <p className="text-gray-500">London, United Kingdom</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                <Globe className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Social</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-black transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-black transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent</h3>
                <p className="text-gray-500 mb-8">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-accent font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                  <input
                    required
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-accent-dark transition-all flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin mr-2" size={24} />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
