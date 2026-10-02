import { motion } from 'framer-motion';
import { Trophy, Medal, Users, Star, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Trophy className="text-amber-400" size={20} />;
      case 'rank':
        return <Medal className="text-sky-400" size={20} />;
      case 'award':
        return <Star className="text-indigo-400" size={20} />;
      case 'leadership':
        return <Users className="text-emerald-400" size={20} />;
      default:
        return <Sparkles className="text-purple-400" size={20} />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Trophy size={14} />
            <span>Honors & Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Achievements & <span className="text-gradient">Contributions</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Recognition earned across competitive state scholarship exams, hackathons, academic group leadership, and student chapter memberships.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group hover:border-amber-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    {getBadgeIcon(item.type)}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-800">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <h4 className="text-xs font-semibold text-amber-400/90 mb-3">
                  {item.organization}
                </h4>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
