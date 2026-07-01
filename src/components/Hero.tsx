import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import profileImg from '../assets/image.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full glass-card text-indigo-300 text-sm font-semibold mb-8 tracking-wide border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="text-gradient">
              Vijay Khonde
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
            Computer Engineering student looking for a Software Engineering role. Strong basics in Java, Data Structures, and MERN development .
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/vijay-khonde" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-300 hover:text-white transition-all hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vijay-khonde-53a40a331" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-300 hover:text-white transition-all hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.codechef.com/users/vijay_khonde" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-300 hover:text-white transition-all hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <SiCodechef size={20} />
              </a>
              <a href="mailto:khondeshad987@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full glass-card text-slate-300 hover:text-white transition-all hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative hidden lg:block"
        >
          {/* Main Image Container */}
          <div className="w-full aspect-square max-w-[480px] mx-auto relative z-10 p-3 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.15)] group">
            <div className="w-full h-full rounded-[2rem] bg-[#0f172a] overflow-hidden relative border border-white/5">
              <img
                src={profileImg}
                alt="Vijay Khonde"
                className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40 z-20 pointer-events-none" />
            </div>
          </div>

          {/* Decorative glowing rings behind */}
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[2px] border-indigo-500/10 rounded-[3rem] animate-[spin_25s_linear_infinite] -z-10" />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-[2px] border-cyan-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
