import { motion } from 'motion/react';
import { CheckCircle, BarChart2, Users, Code, Trophy } from 'lucide-react';

export default function About() {
  const values = [
    { title: "Systems Thinking", description: "We don't just build features; we design interconnected systems that solve complex problems." },
    { title: "AI-First Approach", description: "Harnessing the power of machine learning to automate, optimize, and innovate." },
    { title: "Scalability by Design", description: "Every product we build is architected to handle growth from day one." },
    { title: "Venture Partnership", description: "We invest our expertise and resources into the long-term success of our partners." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8 text-white">
            Who <br />
            <span className="text-gray-400">We Are</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            MVPXLAB is a systems innovation lab and AI-focused venture partner. We bridge the gap between visionary ideas and high-impact digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">What We Believe</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              In a world of fragmented solutions, we believe in the power of systems thinking. We don't just build apps; we architect digital ecosystems that are resilient, scalable, and intelligent.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to empower founders and organizations with the technical expertise and strategic partnership needed to transform bold ideas into real-world impact.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">Why We Exist</h3>
            <ul className="space-y-4 md:space-y-6">
              {values.map((value, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" size={18} />
                  <div>
                    <h4 className="font-bold text-sm md:text-base mb-1 text-white">{value.title}</h4>
                    <p className="text-gray-400 text-[11px] md:text-sm">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-20 mb-32 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-accent/5 backdrop-blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="flex justify-center mb-4"><BarChart2 className="text-brand-accent h-10 w-10" /></div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm tracking-wider uppercase font-bold">Products Launched</div>
            </div>
            <div>
              <div className="flex justify-center mb-4"><Users className="text-brand-accent h-10 w-10" /></div>
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-400 text-sm tracking-wider uppercase font-bold">Users Reached</div>
            </div>
            <div>
              <div className="flex justify-center mb-4"><Code className="text-brand-accent h-10 w-10" /></div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm tracking-wider uppercase font-bold">In-house Code</div>
            </div>
            <div>
              <div className="flex justify-center mb-4"><Trophy className="text-brand-accent h-10 w-10" /></div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-400 text-sm tracking-wider uppercase font-bold">Client Success</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-accent/20 to-brand-accent-dark/20 p-8 md:p-24 rounded-3xl text-center border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl font-bold tracking-tight mb-8 italic text-white">"We are not freelancers. We are your product and systems partner."</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are committed to the long-term success of every project we undertake. Our partnership model ensures that we are aligned with your goals and invested in your growth.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
