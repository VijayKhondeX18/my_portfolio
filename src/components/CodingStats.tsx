import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Terminal, Flame } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';
import { CODING_STATS } from '../data/portfolioData';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold text-white text-4xl sm:text-5xl tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function CodingStats() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SiLeetcode':
        return <SiLeetcode size={32} className="text-orange-400" />;
      case 'SiGeeksforgeeks':
        return <SiGeeksforgeeks size={32} className="text-emerald-400" />;
      case 'SiCodechef':
        return <SiCodechef size={32} className="text-amber-400" />;
      default:
        return <Terminal size={32} className="text-indigo-400" />;
    }
  };

  return (
    <section id="coding" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            <Flame size={14} className="animate-pulse" />
            <span>Problem Solving</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Competitive Programming <span className="text-gradient">Milestones</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Consistent algorithmic practice across competitive programming platforms building core logic, space-time complexity analysis, and Data Structures mastery.
          </p>
        </motion.div>

        {/* Coding Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {CODING_STATS.map((stat, idx) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-slate-800/90 flex flex-col justify-between group hover:border-amber-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    {getIcon(stat.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    {stat.platform}
                  </span>
                </div>

                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-base font-bold text-slate-200 mb-1">
                  {stat.label}
                </h3>
              </div>

              {stat.link && (
                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-300 transition-colors"
                  >
                    <span>View Platform Profile</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
