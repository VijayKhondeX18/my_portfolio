import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Layers,
  CheckCircle2,
  Sliders,
  Send,
  UserCheck,
  Server,
  MapPin,
  Flame,
  Radio
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  // CareNet EchoRise Interactive Simulator State
  const [density, setDensity] = useState(8);
  const [recencyDecay, setRecencyDecay] = useState(0.85);
  const [trustScore, setTrustScore] = useState(9);
  const [careNetTab, setCareNetTab] = useState<'heatmap' | 'algorithm' | 'admin'>('heatmap');

  // Calculated Risk Score: (density * 0.4) + (recencyDecay * 10 * 0.35) + (trustScore * 0.25)
  const calculatedRisk = (
    density * 0.4 +
    recencyDecay * 10 * 0.35 +
    trustScore * 0.25
  ).toFixed(2);

  // NexChat Interactive WebSocket Demo State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Vijay', text: 'Hey there! Real-time WebSocket connection established.', time: '10:42 AM', type: 'received' },
    { id: 2, sender: 'User', text: 'Awesome! Testing instant message delivery over WS protocol.', time: '10:43 AM', type: 'sent' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [nexChatTab, setNexChatTab] = useState<'demo' | 'architecture'>('demo');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'User',
      text: inputMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'sent'
    };
    setChatMessages(prev => [...prev, newMsg]);
    setInputMsg('');

    // Simulate auto response over WebSocket
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'NexChat Bot',
          text: 'ACK 200 OK — Message saved in MongoDB & broadcasted via WebSockets.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'received'
        }
      ]);
    }, 600);
  };

  const careNet = PROJECTS[0];
  const nexChat = PROJECTS[1];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Layers size={14} />
            <span>Featured Software</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Flagship Engineering <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Detailed inspection of original projects engineered with full-stack architectures, algorithms, real-time protocols, and admin workflows.
          </p>
        </motion.div>

        {/* PROJECT 1: CARENET ECHORISE (EDITORIAL FEATURED LAYOUT) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-6 sm:p-10 rounded-[2.5rem] border border-slate-800/90 mb-16 relative"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Project Info */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Project Number & Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    PROJECT 01 — FEATURED
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Community Safety</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                  {careNet.title}
                </h3>
                <h4 className="text-lg font-semibold text-indigo-400 mb-4">
                  {careNet.subtitle}
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {careNet.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-8">
                  {careNet.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Risk scoring algorithm callout */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/20 mb-8 font-mono text-xs text-indigo-200">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldAlert size={13} className="text-indigo-400" />
                    <span>Risk-Scoring Algorithm Formula</span>
                  </div>
                  <code>{careNet.algorithmDetail}</code>
                </div>
              </div>

              {/* Tech Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {careNet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={careNet.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-indigo-500/50 text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <FaGithub size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Interactive Mockup */}
            <div className="lg:col-span-6">
              <div className="bg-[#090d1c] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Interactive Preview Tabs */}
                <div className="flex border-b border-slate-800 bg-[#0d1226]">
                  <button
                    onClick={() => setCareNetTab('heatmap')}
                    className={`flex-1 py-3 px-3 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border-r border-slate-800 ${careNetTab === 'heatmap'
                      ? 'bg-[#090d1c] text-indigo-300 border-b-2 border-b-indigo-500 font-bold'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <MapPin size={14} />
                    <span>Geographic Risk Map</span>
                  </button>
                  <button
                    onClick={() => setCareNetTab('algorithm')}
                    className={`flex-1 py-3 px-3 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border-r border-slate-800 ${careNetTab === 'algorithm'
                      ? 'bg-[#090d1c] text-indigo-300 border-b-2 border-b-indigo-500 font-bold'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <Sliders size={14} />
                    <span>Algorithm Simulator</span>
                  </button>
                  <button
                    onClick={() => setCareNetTab('admin')}
                    className={`flex-1 py-3 px-3 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${careNetTab === 'admin'
                      ? 'bg-[#090d1c] text-indigo-300 border-b-2 border-b-indigo-500 font-bold'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <UserCheck size={14} />
                    <span>Admin Review</span>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {careNetTab === 'heatmap' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Flame size={14} className="text-rose-400 animate-pulse" />
                          Live Geographic Risk Density
                        </span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Active Heatmap
                        </span>
                      </div>

                      {/* Mock Interactive Map Nodes */}
                      <div className="h-52 bg-[#050814] rounded-xl border border-slate-800 relative overflow-hidden flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                        {/* Node 1 */}
                        <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/60 flex items-center justify-center animate-ping absolute" />
                          <div className="w-10 h-10 rounded-full bg-rose-500/30 border border-rose-500/80 flex items-center justify-center text-[10px] font-mono font-bold text-rose-300 relative">
                            8.8
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 mt-1 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-800">
                            Zone A (High Risk)
                          </span>
                        </div>

                        {/* Node 2 */}
                        <div className="absolute bottom-1/4 right-1/3 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/30 border border-amber-500/80 flex items-center justify-center text-[10px] font-mono font-bold text-amber-300">
                            5.4
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 mt-1 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-800">
                            Zone B (Medium Risk)
                          </span>
                        </div>

                        {/* Node 3 */}
                        <div className="absolute top-1/3 right-1/4 flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-500/80 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-300">
                            2.1
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 mt-1 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-800">
                            Zone C (Low Risk)
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400 text-[10px]">Total Reports</div>
                          <div className="text-white font-bold">142 Anonymous</div>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400 text-[10px]">Cloudinary Assets</div>
                          <div className="text-white font-bold">Verified Images</div>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <div className="text-slate-400 text-[10px]">Decay Rate</div>
                          <div className="text-indigo-400 font-bold">Exp (-0.05t)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {careNetTab === 'algorithm' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Interactive Algorithm Parameters
                        </span>
                        <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20">
                          Risk Score: {calculatedRisk} / 10
                        </span>
                      </div>

                      {/* Slider 1: Report Density */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300">Report Density (Weight: 40%)</span>
                          <span className="text-indigo-400 font-bold">{density} reports/km²</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={density}
                          onChange={(e) => setDensity(Number(e.target.value))}
                          className="w-full accent-indigo-500 bg-slate-800 rounded-lg cursor-pointer"
                        />
                      </div>

                      {/* Slider 2: Recency Decay */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300">Recency Decay Factor (Weight: 35%)</span>
                          <span className="text-sky-400 font-bold">{(recencyDecay * 10).toFixed(1)} / 10</span>
                        </div>
                        <input
                          type="range"
                          min="0.1"
                          max="1.0"
                          step="0.05"
                          value={recencyDecay}
                          onChange={(e) => setRecencyDecay(Number(e.target.value))}
                          className="w-full accent-sky-500 bg-slate-800 rounded-lg cursor-pointer"
                        />
                      </div>

                      {/* Slider 3: User Trust Level */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300">Reporter Trust Score (Weight: 25%)</span>
                          <span className="text-emerald-400 font-bold">{trustScore} / 10</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={trustScore}
                          onChange={(e) => setTrustScore(Number(e.target.value))}
                          className="w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {careNetTab === 'admin' && (
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Admin Moderation Queue Mockup
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">#CR-904: Road Obstruction</div>
                          <div className="text-slate-500 text-[11px]">Anonymous • Lat: 21.35, Long: 74.88</div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                          Approved
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">#CR-905: Streetlight Outage</div>
                          <div className="text-slate-500 text-[11px]">Anonymous • Lat: 21.36, Long: 74.89</div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px]">
                          Under Review
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECT 2: NEXCHAT (EDITORIAL SHOWCASE LAYOUT) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-panel p-6 sm:p-10 rounded-[2.5rem] border border-slate-800/90 relative"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Interactive Chat / Protocol Preview */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-[#090d1c] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex border-b border-slate-800 bg-[#0d1226]">
                  <button
                    onClick={() => setNexChatTab('demo')}
                    className={`flex-1 py-3 px-3 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border-r border-slate-800 ${nexChatTab === 'demo'
                      ? 'bg-[#090d1c] text-sky-300 border-b-2 border-b-sky-500 font-bold'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <Radio size={14} className="text-emerald-400 animate-pulse" />
                    <span>WebSocket Live Chat Demo</span>
                  </button>
                  <button
                    onClick={() => setNexChatTab('architecture')}
                    className={`flex-1 py-3 px-3 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${nexChatTab === 'architecture'
                      ? 'bg-[#090d1c] text-sky-300 border-b-2 border-b-sky-500 font-bold'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <Server size={14} />
                    <span>Full-Stack Architecture</span>
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {nexChatTab === 'demo' && (
                    <div>
                      {/* Socket Status Bar */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-emerald-400 font-semibold">ws://nexchat.api/v1/socket</span>
                        </div>
                        <span className="text-slate-500">Latency: 14ms</span>
                      </div>

                      {/* Chat Messages Log */}
                      <div className="h-48 overflow-y-auto space-y-3 pr-2 mb-4">
                        {chatMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex flex-col text-xs ${msg.type === 'sent' ? 'items-end' : 'items-start'
                              }`}
                          >
                            <span className="text-[10px] text-slate-500 font-mono mb-0.5">
                              {msg.sender} • {msg.time}
                            </span>
                            <div
                              className={`px-3.5 py-2 rounded-xl max-w-[85%] ${msg.type === 'sent'
                                ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white rounded-br-none'
                                : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-bl-none'
                                }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Send Form */}
                      <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                          type="text"
                          value={inputMsg}
                          onChange={(e) => setInputMsg(e.target.value)}
                          placeholder="Type a real-time message..."
                          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 transition-all"
                        >
                          <Send size={14} />
                        </button>
                      </form>
                    </div>
                  )}

                  {nexChatTab === 'architecture' && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="text-sky-400 font-bold mb-1">1. WebSockets Layer</div>
                        <p className="text-slate-400 text-[11px]">
                          Event-driven bidirectional connection for instant messaging & presence updates.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="text-indigo-400 font-bold mb-1">2. Node.js + Express REST API</div>
                        <p className="text-slate-400 text-[11px]">
                          Authentication endpoints, chat room creation, user profile management, & message pagination.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="text-emerald-400 font-bold mb-1">3. MongoDB Document Store</div>
                        <p className="text-slate-400 text-[11px]">
                          Indexed message collections, conversation schemas, & user authentication stores.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Project Info */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                    PROJECT 02 — REAL-TIME MERN
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Communication Tech</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                  {nexChat.title}
                </h3>
                <h4 className="text-lg font-semibold text-sky-400 mb-4">
                  {nexChat.subtitle}
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {nexChat.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-8">
                  {nexChat.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {nexChat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-300 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={nexChat.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-sky-500/50 text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <FaGithub size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
