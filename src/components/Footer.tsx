import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 py-12 overflow-hidden bg-[#040711]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-xl font-extrabold text-white tracking-tight mb-1 block hover:text-indigo-300 transition-colors"
          >
            {PERSONAL_INFO.name}
          </a>
          <p className="text-xs text-slate-400 font-normal">
            Computer Engineering Student • Full-Stack & AI Developer • {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all hover:-translate-y-0.5"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all hover:-translate-y-0.5"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.codechef}
            target="_blank"
            rel="noreferrer"
            aria-label="CodeChef Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all hover:-translate-y-0.5"
          >
            <SiCodechef size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all hover:-translate-y-0.5"
          >
            <SiLeetcode size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-400 font-mono">
        © {new Date().getFullYear()} Vijay Sharad Khonde. Engineered with React, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
}
