import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, ImagePlus, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  profileUrl: string;
  imageUrl?: string;
  summary: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Paul Light',
    role: 'Product Strategy & Systems Lead',
    initials: 'PL',
    profileUrl: 'https://paullight.vercel.app/',
    imageUrl: '/paul-light.jpg',
    summary:
      'Shapes early ideas into clear product directions, aligning business goals with buildable systems.',
  },
  {
    name: 'Chikezie Emmanuel',
    role: 'Engineering & AI Systems Lead',
    initials: 'CE',
    profileUrl: 'https://kezieportfolio.vercel.app/',
    imageUrl: '/chikezie-emmanuel.jpg',
    summary:
      'Turns product direction into reliable technical architecture, prototypes, and scalable digital systems.',
  },
];

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-inherit min-h-screen overflow-hidden"
    >
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="absolute top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-15%] h-[360px] w-[360px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={14} />
                Meet Our Team
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white mb-8 text-balance"
              >
                The people building behind the lab.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:pb-4"
            >
              <p className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                MVPXLAB is led by builders who combine product thinking, engineering discipline, and AI-focused execution for founders and teams ready to move from idea to working system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
                  index === 1 ? 'lg:mt-16' : ''
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr] min-h-[520px] md:min-h-[430px]">
                  <div className="relative min-h-[320px] md:min-h-full overflow-hidden bg-[#111111]">
                    {member.imageUrl ? (
                      <>
                        <img
                          src={member.imageUrl}
                          alt={`${member.name} portrait`}
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 stardust opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 via-transparent to-white/5" />
                        <div className="absolute inset-6 rounded-[1.5rem] border border-dashed border-white/20 bg-black/20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/5">
                          <div className="h-24 w-24 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-3xl font-bold text-white mb-6">
                            {member.initials}
                          </div>
                          <ImagePlus size={28} className="text-brand-accent mb-4" />
                          <p className="text-sm font-bold uppercase tracking-widest text-white">
                            Photo Space
                          </p>
                          <p className="text-xs text-gray-500 mt-3 max-w-[14rem]">
                            Add a portrait image here when the team photo is ready.
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent mb-5">
                        Team Member 0{index + 1}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
                        {member.name}
                      </h2>
                      <p className="text-gray-300 font-semibold mb-8">
                        {member.role}
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        {member.summary}
                      </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/10">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Focused on helping MVPXLAB partners clarify, build, and improve digital products with practical execution.
                      </p>
                      <a
                        href={member.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all hover:border-brand-accent/50 hover:bg-brand-accent hover:text-white active:scale-[0.98] group/profile"
                      >
                        View Profile
                        <ExternalLink size={16} className="transition-transform group-hover/profile:translate-x-0.5 group-hover/profile:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Want to build with the team?
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Share the idea, product, or system you want to create and we will review the best path forward.
              </p>
            </div>
            <Link
              to="/submit-idea"
              className="inline-flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-brand-accent-dark active:scale-[0.98] transition-all group shrink-0"
            >
              Submit Idea
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
