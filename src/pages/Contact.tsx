import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, Loader2, CheckCircle, ExternalLink } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save directly to Firestore for logging
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      // 2. Send to Email via Formspree
      // Note: You will need to verify your email at formspree.io once you receive the first submission
      await fetch("https://formspree.io/f/mvplabx@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: `Contact Form: New Message from ${name}`,
          message: `
            Name: ${name}
            Email: ${email}
            
            Message:
            ${message}
          `
        })
      });

      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error saving contact message:", error);
      // Fallback: Build a mailto link
      const subject = encodeURIComponent(`Message from ${name} via MVPXLAB Contact Form`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:mvplabx@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
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
            Have a project idea or want to discuss a potential partnership? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-10">
            {/* Email */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-brand-accent" size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <a
                  href="mailto:mvplabx@gmail.com"
                  className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                >
                  mvplabx@gmail.com
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <Globe className="text-brand-accent" size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Website</h3>
                <a
                  href="https://www.mvpxlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                >
                  www.mvpxlab.com
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-brand-accent" size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <a
                  href="https://maps.google.com/?q=75+Sijuwuola+Street,Okota,Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                >
                  <span>75 Sijuwuola Street,<br />Okota, Lagos State.</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-brand-accent font-bold">⚡ Fast Response:</span> We typically reply within 24–48 hours on business days. For urgent inquiries, email us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-8">
                  We've received your message and will get back to you at <br />
                  <span className="text-brand-accent">mvplabx@gmail.com</span> within 48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-accent font-bold underline hover:no-underline transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Your Name</label>
                  <input
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none text-white placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Your Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none text-white placeholder:text-gray-600"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all outline-none text-white placeholder:text-gray-600 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-accent-dark transition-all flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <><Loader2 className="animate-spin mr-2" size={22} /> Sending…</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-600 text-center">
                  Your information will be kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
