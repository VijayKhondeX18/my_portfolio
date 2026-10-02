import { motion } from 'framer-motion';
import { Award, CheckCircle, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certifications() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award size={24} className="text-amber-400" />;
      case 'CheckCircle':
        return <CheckCircle size={24} className="text-sky-400" />;
      case 'BookOpen':
        return <BookOpen size={24} className="text-emerald-400" />;
      default:
        return <Award size={24} className="text-indigo-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Award size={14} />
            <span>Verified Learning</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Certifications
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Formal technical certifications validating core computer science concepts, programming, and algorithms.
          </p>
        </motion.div>

        {/* Certifications Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group hover:border-sky-500/40"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {getIcon(cert.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800 w-max">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle size={13} /> Verified Course
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
