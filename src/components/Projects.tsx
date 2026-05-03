import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Smart Crop Advisor',
    description: 'Built a backend system to suggest suitable crops based on user input. Integrated external AI APIs (Gemini/OpenAI) to generate recommendations and assist in plant disease identification. Structured backend using modular routes and controllers.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'AI APIs'],
    liveLink: '#',
    githubLink: 'https://github.com/vijay-khonde',
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description: 'Developed a backend for sending and receiving messages with basic real-time communication. Efficiently stored and managed chat data in a MongoDB database.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    liveLink: '#',
    githubLink: 'https://github.com/vijay-khonde',
  },
  {
    id: 3,
    title: 'Simon Game',
    description: 'An interactive memory-based game. Implemented dynamic colors sequence generation using JavaScript. Applied event handling and game logic for user input validation.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    githubLink: 'https://github.com/vijay-khonde',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-[2rem] overflow-hidden group flex flex-col p-2"
            >
              <div className="relative h-56 overflow-hidden rounded-[1.5rem] border border-white/5">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 pt-6 border-t border-white/10 mt-auto">
                  <a href={project.liveLink} className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors group/link">
                    <ExternalLink size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-indigo-400 transition-colors group/link">
                    <FaGithub size={18} className="group-hover/link:scale-110 transition-transform" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
