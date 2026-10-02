import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdabazrz', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('There was a problem submitting your message. Please try emailing directly.');
      }
    } catch {
      alert('Network error. Please feel free to email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Let's build something <span className="text-gradient">meaningful.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether you are looking for a dedicated Full-Stack & AI developer, have an exciting software role, or want to discuss a project — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/90 flex items-center gap-5 group hover:border-indigo-500/40">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Email</h3>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-bold text-white hover:text-indigo-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/90 flex items-center gap-5 group hover:border-sky-500/40">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Phone</h3>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-white hover:text-sky-300 transition-colors truncate block font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/90 flex items-center gap-5 group hover:border-emerald-500/40">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MapPin size={22} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Location</h3>
                <span className="text-base font-bold text-white block">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/90">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Connect Across Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white flex items-center justify-between text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub size={16} /> GitHub
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 flex items-center justify-between text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    <FaLinkedin size={16} /> LinkedIn
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={PERSONAL_INFO.socials.codechef}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 flex items-center justify-between text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    <SiCodechef size={16} /> CodeChef
                  </span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 text-slate-300 hover:text-orange-300 flex items-center justify-between text-xs font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    <SiLeetcode size={16} /> LeetCode
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-[2.5rem] border border-slate-800/90"
          >
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out, Vijay will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all font-normal"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all font-normal"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Full-Stack Opportunity / Project Collaboration"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all font-normal"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello Vijay, I noticed your CareNet EchoRise & NexChat projects..."
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all resize-none font-normal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-indigo-600/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 mt-2"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
