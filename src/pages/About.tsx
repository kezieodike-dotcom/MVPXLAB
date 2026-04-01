import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

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
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Who We Are
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            MVPXLAB is a systems innovation lab and AI-focused venture partner. We bridge the gap between visionary ideas and high-impact digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">What We Believe</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              In a world of fragmented solutions, we believe in the power of systems thinking. We don't just build apps; we architect digital ecosystems that are resilient, scalable, and intelligent.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our mission is to empower founders and organizations with the technical expertise and strategic partnership needed to transform bold ideas into real-world impact.
            </p>
          </div>
          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Why We Exist</h3>
            <ul className="space-y-6">
              {values.map((value, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">{value.title}</h4>
                    <p className="text-gray-500 text-sm">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-black text-white p-12 md:p-24 rounded-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-8 italic">"We are not freelancers. We are your product and systems partner."</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are committed to the long-term success of every project we undertake. Our partnership model ensures that we are aligned with your goals and invested in your growth.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
