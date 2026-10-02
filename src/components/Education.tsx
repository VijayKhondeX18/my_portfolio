import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <GraduationCap size={15} />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Education Timeline
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Consistently strong academic performance throughout engineering undergraduate studies and school education.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-indigo-500 border-4 border-[#050814] shadow-lg shadow-indigo-500/50" />

              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/90 group hover:border-indigo-500/40">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-indigo-400 mt-0.5">
                      {edu.institution}
                    </h4>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full w-max shrink-0">
                    <Award size={13} />
                    {edu.score}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-slate-500" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-slate-500" />
                    {edu.period}
                  </span>
                </div>

                {edu.details && (
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal pt-3 border-t border-slate-800/80">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
