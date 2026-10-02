import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe, Wrench, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="text-indigo-400" size={24} />,
  Cpu: <Cpu className="text-sky-400" size={24} />,
  Database: <Database className="text-emerald-400" size={24} />,
  Globe: <Globe className="text-amber-400" size={24} />,
  Wrench: <Wrench className="text-purple-400" size={24} />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoriesList = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Technical Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Core Competencies & <span className="text-gradient">Technologies</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            A comprehensive overview of programming languages, core CS fundamentals, databases, web technologies, and software engineering tools.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group hover:border-indigo-500/40"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    {ICON_MAP[category.iconName] || <Code size={24} className="text-indigo-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 cursor-default transition-all shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
