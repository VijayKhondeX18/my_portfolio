
import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  Mail,
  Code2,
  Terminal,
  Copy,
  Check,
  Sparkles,
  MapPin,
  GraduationCap,
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

import { PERSONAL_INFO } from '../data/portfolioData';
import profileImg from '../assets/image.jpeg';

const CODE_SNIPPETS = {
  careNet: `const riskScore =
  density * 0.40 +
  recencyDecay * 0.35 +
  userTrustScore * 0.25;

return Number(riskScore.toFixed(2));`,

  nexChat: `socket.on("send_message", async (data) => {
  const message = await Message.create(data);

  io.to(data.roomId)
    .emit("receive_message", message);
});`,
};

export default function Hero() {
  const [activeTab, setActiveTab] =
    useState<'careNet' | 'nexChat'>('careNet');

  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* ========================================
          AMBIENT BACKGROUND
      ======================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
      </div>

      {/* Top glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-px w-[70%] -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-400/40 to-transparent" />

      {/* ========================================
          MAIN CONTAINER
      ======================================== */}

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">

        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 lg:col-span-7"
        >
          {/* Availability Badge */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/6 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Open to opportunities
          </motion.div>

          {/* Small Intro */}

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-indigo-300/80">
            Computer Engineering · Full-Stack · AI
          </p>

          {/* Main Heading */}

    <h1 className="hero-name">
  <span className="hero-name-line hero-name-white">
    Vijay

  </span>
   

  <span className="hero-name-line hero-name-gradient">
    Sharad Khonde<span className="hero-dot">.</span>
  </span>
</h1>
          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build{' '}
            <span className="font-semibold text-slate-200">
              scalable full-stack applications
            </span>{' '}
            and AI-powered experiences using modern technologies,
            thoughtful architecture, and strong problem-solving
            fundamentals.
          </p>

          {/* Technology Stack */}

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'Gemini AI',
              'DSA',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.05,
                }}
                className="tech-badge rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="btn-primary group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-bold text-white"
            >
              <span className="relative z-10">
                Explore my work
              </span>

              <ArrowRight
                size={17}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/7"
            >
              <Mail size={17} />

              Let's talk
            </a>
          </div>

          {/* Social Links */}

          <div className="mt-10 flex items-center gap-3">
            <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Find me
            </span>

            {/* GitHub */}

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 bg-white/3 p-2.5 text-slate-400 transition-all hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 bg-white/3 p-2.5 text-slate-400 transition-all hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-white"
            >
              <FaLinkedin size={17} />
            </a>

            {/* CodeChef */}

            <a
              href={PERSONAL_INFO.socials.codechef}
              target="_blank"
              rel="noreferrer"
              aria-label="CodeChef"
              className="rounded-lg border border-white/10 bg-white/3 p-2.5 text-slate-400 transition-all hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/10 hover:text-white"
            >
              <SiCodechef size={17} />
            </a>

            {/* LeetCode */}

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="rounded-lg border border-white/10 bg-white/3 p-2.5 text-slate-400 transition-all hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-500/10 hover:text-white"
            >
              <SiLeetcode size={17} />
            </a>
          </div>
        </motion.div>

        {/* ========================================
            RIGHT VISUAL
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
className="relative mx-auto w-full lg:col-span-5"
        >
          {/* Decorative Orbital Rings */}

          <div className="absolute -inset-10 -z-10 rounded-full border border-indigo-500/6" />

          <div className="absolute -inset-20 -z-10 rounded-full border border-cyan-500/4" />

          {/* ========================================
              MAIN PROFILE CARD
          ======================================== */}

          <div className="glass-card relative mx-auto max-w-[510px] overflow-hidden rounded-[26px] p-5 sm:p-6">

            {/* Top Shine */}

            <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/60 to-transparent" />

            {/* Profile */}

            <div className="flex items-center gap-5">
              <div className="profile-ring relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                <div className="relative z-10 h-full w-full overflow-hidden rounded-[26px] border border-white/10">
                  <img
                    src={profileImg}
                    alt="Vijay Sharad Khonde"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-indigo-300">
                  <GraduationCap size={14} />

                  <span>RCPIT Shirpur</span>
                </div>

                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Vijay Khonde
                </h2>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={13} />

                  <span>Shirpur, Maharashtra</span>
                </div>

                <div className="mt-3 inline-flex rounded-lg border border-indigo-400/15 bg-indigo-500/8 px-3 py-1.5 text-[11px] font-semibold text-indigo-300">
                  CGPA 8.37 / 10
                </div>
              </div>
            </div>

            {/* Divider */}

            <div className="my-6 h-px bg-white/6" />

            {/* Stats */}

            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-2xl font-bold text-white">
                  MERN
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">
                  Stack
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  AI
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">
                  Powered
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  DSA
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">
                  Focus
                </p>
              </div>
            </div>

            {/* ========================================
                CODE WINDOW
            ======================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-[#050816]/90 shadow-2xl"
            >
              {/* Window Header */}

              <div className="flex items-center justify-between border-b border-white/6 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />

                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                  <div className="ml-2 flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
                    <Terminal size={12} />

                    <span>developer.ts</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
                  title="Copy code"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check
                      size={13}
                      className="text-emerald-400"
                    />
                  ) : (
                    <Copy size={13} />
                  )}
                </button>
              </div>

              {/* Code Tabs */}

              <div className="flex border-b border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('careNet')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-mono transition-colors ${
                    activeTab === 'careNet'
                      ? 'border-b border-indigo-400 text-indigo-300'
                      : 'text-slate-600 hover:text-slate-300'
                  }`}
                >
                  <Code2 size={11} />

                  <span>CareNet</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('nexChat')}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-mono transition-colors ${
                    activeTab === 'nexChat'
                      ? 'border-b border-cyan-400 text-cyan-300'
                      : 'text-slate-600 hover:text-slate-300'
                  }`}
                >
                  <Code2 size={11} />

                  <span>NexChat</span>
                </button>
              </div>

              {/* Code */}

              <div className="min-h-[150px] overflow-x-auto p-4">
                <pre className="font-mono text-[11px] leading-6 text-slate-400">
                  <code>{CODE_SNIPPETS[activeTab]}</code>
                </pre>
              </div>

              {/* Footer */}

              <div className="flex items-center justify-between border-t border-white/5 px-4 py-2.5 text-[9px] font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Sparkles
                    size={11}
                    className="text-indigo-400"
                  />

                  <span>TypeScript</span>
                </div>

                <span>UTF-8</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================
              FLOATING GITHUB BADGE
          ======================================== */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-5 top-10 hidden rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                <FaGithub size={14} />
              </span>

              <div>
              

                <p className="text-[9px] text-slate-600">
                  Building in public
                </p>
              </div>
            </div>
          </motion.div>

          {/* ========================================
              FLOATING CODE BADGE
          ======================================== */}

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Code2 size={14} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-white">
                  Full-Stack
                </p>

                <p className="text-[9px] text-slate-600">
                  React · Node · Mongo
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#050816] to-transparent" />
    </section>
  );
}

