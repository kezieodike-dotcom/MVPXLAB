"use client";
import React from "react";
import { motion } from "motion/react";
import { GlowCard } from "./spotlight-card";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <GlowCard 
                  key={i}
                  glowColor="orange"
                  customSize
                  className="p-8 border-white/5 bg-white/5 max-w-xs w-full"
                >
                  <div className="relative z-10">
                    <div className="text-gray-400 leading-relaxed text-sm mb-6">{text}</div>
                    <div className="flex items-center gap-3">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover border border-white/10"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <div className="font-bold tracking-tight leading-5 text-white text-sm">{name}</div>
                        <div className="leading-5 tracking-tight text-gray-500 text-xs">{role}</div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
