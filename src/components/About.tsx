import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: <BookOpen className="text-indigo-400" size={32} />,
    title: 'Problem Solving',
    description: 'Regularly solving problems on CodeChef and LeetCode. Maintained a 220-day coding streak on CodeChef.',
  },
  {
    icon: <Award className="text-cyan-400" size={32} />,
    title: 'Certifications',
    description: 'Certified in Java Programming, DSA, and C Programming by CodeChef, and Web Development by Infosys SpringBoard.',
  },
  {
    icon: <Trophy className="text-teal-400" size={32} />,
    title: 'Achievements',
    description: 'Finalist in AI Buildathon Hackathon, Qualified for Round 2 in Smart India Hackathon, and Secured 23rd rank in Maharashtra in PM Yashasvi Exam.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Discover</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8 opacity-80" />
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            I am a B.Tech Computer Engineering student with a strong academic record and a deep interest in software development. 
            I regularly practice Data Structures and Algorithms on platforms like CodeChef and LeetCode to improve my algorithmic skills. 
            My passion lies in building scalable real-world backend systems using <span className="text-white font-medium">Node.js, Express, and modern databases.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
