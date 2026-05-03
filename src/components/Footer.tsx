import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 mt-20 overflow-hidden bg-white/[0.02]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-extrabold tracking-tighter text-gradient mb-3 block hover:scale-105 transition-transform origin-left w-max">
            Vijay Khonde<span className="text-white">.</span>
          </a>
          <p className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Vijay Sharad Khonde. Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/vijay-khonde-53a40a331" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all hover:-translate-y-1">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.codechef.com/users/vijay_khonde" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1">
            <SiCodechef size={20} />
          </a>
          <a href="https://github.com/vijay-khonde" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-1">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
