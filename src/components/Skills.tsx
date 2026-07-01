import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'Java', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Bootstrap', 'React ', 'Tailwind (Learning)'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API Development'],
  },
  {
    title: 'Databases & Core Concepts',
    skills: ['MongoDB', 'MySQL', 'Data Structures & Algorithms', 'DBMS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center group hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
            >
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                <span className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-8 text-center text-white group-hover:text-teal-300 transition-colors">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (catIndex * 0.15) + (index * 0.05) }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:border-teal-500/50 hover:bg-teal-500/10 cursor-default transition-all text-center shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
