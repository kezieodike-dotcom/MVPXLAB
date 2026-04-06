"use client";
import { TestimonialsColumn, Testimonial } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "MVPXLAB didn't just build our app; they architected a scalable system that handled our first 50k users without a hitch.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Sarah Chen",
    role: "CTO of NexaFlow",
  },
  {
    text: "Their AI-first approach transformed our manual underwriting process into an automated powerhouse. A true venture partner.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
    name: "James Wilson",
    role: "Founder of PayLogic",
  },
  {
    text: "Speed and quality are often at odds, but the XLAB team delivered our corporate MVP in 6 weeks with production-grade code.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Elena Rodriguez",
    role: "Product Lead at Velo",
  },
  {
    text: "We've worked with many agencies, but MVPXLAB is the only one that truly understands systems thinking at scale.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Marcus Thorne",
    role: "CEO of QuantCore",
  },
  {
    text: "The ROI on our collaboration was immediate. Their technical depth in LLMs gave us a year's head start on competitors.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "David Park",
    role: "Head of AI at Synapse",
  },
  {
    text: "Rapid prototyping at its finest. They validated our riskiest assumptions in days, rather than months of guesswork.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Chloe Adams",
    role: "Venture Director",
  },
  {
    text: "The integration between our legacy systems and the new AI modules was seamless. Precision engineering at its best.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Hassan Ali",
    role: "Founding Engineer",
  },
  {
    text: "They operate like a co-founder team. They challenges our ideas and refine them into something much better.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Saman Malik",
    role: "Strategy Director",
  },
  {
    text: "From MVP to scaling globally, MVPXLAB has been our most reliable partner throughout the journey.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Omar Raza",
    role: "Managing Director",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <div className="border border-white/10 bg-white/5 py-1 px-4 rounded-full text-sm font-medium tracking-tight text-brand-accent">
              Testimonials
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-5 text-center text-white">
            What our users say
          </h2>
          <p className="text-center mt-5 text-gray-500 text-lg">
            See what our customers have to say about their experience with MVPXLAB.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
