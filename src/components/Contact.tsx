import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Connect</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8 opacity-80" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Have a project in mind, a hackathon idea, or just want to connect? Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="glass-card p-6 rounded-3xl flex items-center gap-6 group hover:border-indigo-500/50">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <Mail size={24} />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:khondeshad987@gmail.com" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors truncate block">
                  khondeshad987@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl flex items-center gap-6 group hover:border-cyan-500/50">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <Phone size={24} />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                <a href="tel:+919130901803" className="text-lg font-bold text-white hover:text-cyan-400 transition-colors truncate block">
                  +91 9130901803
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl flex items-center gap-6 group hover:border-teal-500/50">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.15)]">
                <MapPin size={24} />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                <span className="text-lg font-bold text-white block truncate">Shirpur, Maharashtra</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-[2.5rem] lg:col-span-3"
          >
            <form action="https://formspree.io/f/xdabazrz" method="POST" className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/[0.05] transition-all placeholder:text-slate-600 font-light"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/[0.05] transition-all placeholder:text-slate-600 font-light"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative mt-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/[0.05] transition-all resize-none placeholder:text-slate-600 font-light"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] mt-4 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
