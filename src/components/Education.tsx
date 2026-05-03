import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    role: 'B.Tech in Computer Engineering',
    institution: 'R. C. Patel Institute of Technology, Shirpur',
    period: '2024 - Present',
    description: 'Maintaining a strong academic performance with a current CGPA of 8.37.',
  },
  {
    id: 2,
    role: 'Higher Secondary Certificate (HSC)',
    institution: 'R. C. Patel Jr. College, Shirpur',
    period: 'Completed',
    description: 'Achieved 80% in board exams. Scored 84 Percentile in MHT-CET.',
  },
  {
    id: 3,
    role: 'Secondary School Certificate (SSC)',
    institution: 'R. C. Patel Secondary High School, Shirpur (Maharashtra State Board)',
    period: 'Completed',
    description: 'Graduated with an outstanding percentage of 94.60%.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Journey</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="relative border-l-2 border-indigo-500/20 ml-3 md:ml-0 md:pl-0">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-14 relative pl-8 md:pl-12"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute left-[-9px] top-2 w-4 h-4 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)] border-2 border-[#030712]" />
              
              <div className="glass-card p-8 rounded-3xl group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{edu.role}</h3>
                    <h4 className="text-cyan-400 font-medium mt-2">{edu.institution}</h4>
                  </div>
                  <span className="text-sm font-semibold mt-4 md:mt-0 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-4 py-1.5 rounded-full inline-block w-max shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed font-light mt-4">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
