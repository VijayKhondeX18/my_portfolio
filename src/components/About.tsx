import { motion } from 'framer-motion';
import { BookOpen, Code, Trophy, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <Code className="text-indigo-400" size={24} />,
      title: 'Full-Stack & AI Focus',
      description: 'Building end-to-end web applications with React, Node.js, Express, MongoDB, and integrating AI services like Gemini API.',
    },
    {
      icon: <BookOpen className="text-sky-400" size={24} />,
      title: 'Algorithmic Problem Solving',
      description: 'Actively solving Data Structures & Algorithms problems daily across LeetCode, GeeksforGeeks, and CodeChef.',
    },
    {
      icon: <Trophy className="text-emerald-400" size={24} />,
      title: 'Hackathons & Buildathons',
      description: 'Secured AI Buildathon Finalist rank at GCOE Jalgaon and participated in high-impact hackathons like Adobe Hackathon.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Developer Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Driven by Code, Curiosity & <span className="text-gradient">Problem Solving</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            I am a <strong className="text-white">Computer Engineering undergraduate</strong> at R. C. Patel Institute of Technology, Shirpur. I specialize in building scalable web applications using the <strong className="text-indigo-300">MERN stack</strong> and modern <strong className="text-sky-300 font-semibold">AI APIs</strong>, with a disciplined approach to Data Structures & Algorithms.
          </p>
        </motion.div>

        {/* Visual Stat Cards Grid - EXACT NUMBERS FROM RESUME */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl text-center border border-slate-800/90 group hover:border-indigo-500/40"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 group-hover:scale-105 transition-transform text-gradient">
              {PERSONAL_INFO.cgpa}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">B.Tech CGPA</div>
            <div className="text-[11px] text-slate-500 mt-1">RCPIT Shirpur</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl text-center border border-slate-800/90 group hover:border-orange-500/40"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 group-hover:scale-105 transition-transform text-orange-400">
              200+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">LeetCode Problems</div>
            <div className="text-[11px] text-slate-500 mt-1">Solved</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-2xl text-center border border-slate-800/90 group hover:border-emerald-500/40"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 group-hover:scale-105 transition-transform text-emerald-400">
              100+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">GeeksforGeeks Problems</div>
            <div className="text-[11px] text-slate-500 mt-1">Solved</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 rounded-2xl text-center border border-slate-800/90 group hover:border-amber-500/40"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 group-hover:scale-105 transition-transform text-amber-400">
              230 Days
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">CodeChef Streak</div>
            <div className="text-[11px] text-slate-500 mt-1">Active Practice</div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
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
