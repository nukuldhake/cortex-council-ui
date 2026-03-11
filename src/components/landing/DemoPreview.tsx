import { motion } from "framer-motion";
import { BarChart3, ShieldAlert, Sun, AlertTriangle, Layers, User } from "lucide-react";

const messages = [
  { role: "user", name: "You", icon: User, color: "primary", text: "Should we launch an AI tutoring startup?" },
  { role: "agent", name: "Analyst", icon: BarChart3, color: "agent-analyst", text: "Breaking this down: the EdTech market is valued at $340B with 16% CAGR. AI tutoring specifically shows strong demand signals. Technical feasibility is high with current LLM capabilities." },
  { role: "agent", name: "Critic", icon: ShieldAlert, color: "agent-critic", text: "The assumption of strong demand needs scrutiny. Market saturation is increasing — Khan Academy, Duolingo, and Chegg all have AI features now. Differentiation will be the key challenge." },
  { role: "agent", name: "Optimist", icon: Sun, color: "agent-optimist", text: "The AI education space is exploding. Personalized learning at scale is still unsolved. There's a massive opportunity in underserved markets and specialized subjects." },
  { role: "agent", name: "Risk Assessor", icon: AlertTriangle, color: "agent-risk", text: "Key risks: regulatory scrutiny on AI in education, content accuracy liability, and high customer acquisition costs in EdTech." },
  { role: "agent", name: "Synthesizer", icon: Layers, color: "agent-synthesizer", text: "Consensus: Market opportunity exists but requires differentiation. Recommend a niche-first approach targeting specialized subjects with a small pilot before full launch." },
];

const DemoPreview = () => (
  <section id="demo" className="py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">See It in Action</h2>
        <p className="text-muted-foreground">A preview of how the council deliberates.</p>
      </motion.div>

      <motion.div
        className="glass p-1 glow-primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="px-5 py-3 border-b border-border flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-agent-critic/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-agent-risk/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-agent-optimist/60" />
          <span className="text-xs text-muted-foreground ml-2">AI Council Debate — Demo</span>
        </div>

        <div className="p-5 space-y-4 max-h-[500px] overflow-y-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={`w-8 h-8 rounded-lg bg-${msg.color}/10 flex items-center justify-center shrink-0`}>
                <msg.icon className={`w-4 h-4 text-${msg.color}`} />
              </div>
              <div className={`max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
                <span className={`text-xs font-medium text-${msg.color} mb-1 block`}>{msg.name}</span>
                <div className={`glass-subtle px-4 py-3 text-sm text-secondary-foreground leading-relaxed ${msg.role === "user" ? "bg-primary/10 border-primary/20" : ""}`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default DemoPreview;
