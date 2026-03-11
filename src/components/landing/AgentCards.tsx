import { motion } from "framer-motion";
import { BarChart3, ShieldAlert, Sun, AlertTriangle, Layers } from "lucide-react";

const agents = [
  { name: "Analyst", icon: BarChart3, color: "agent-analyst", desc: "Breaks down problems with logical frameworks and data-driven reasoning." },
  { name: "Critic", icon: ShieldAlert, color: "agent-critic", desc: "Challenges assumptions and identifies weaknesses in arguments." },
  { name: "Optimist", icon: Sun, color: "agent-optimist", desc: "Highlights opportunities, growth potential, and positive outcomes." },
  { name: "Risk Assessor", icon: AlertTriangle, color: "agent-risk", desc: "Identifies risks, threats, and potential failure points." },
  { name: "Synthesizer", icon: Layers, color: "agent-synthesizer", desc: "Combines perspectives into unified, actionable recommendations." },
];

const AgentCards = () => (
  <section className="py-32 px-6 relative">
    <div className="absolute inset-0 gradient-bg opacity-50" />
    <div className="relative max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the AI Council</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Five specialized agents, each bringing a unique lens to your problem.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.name}
            className="glass p-6 group hover:border-primary/30 transition-all duration-300 cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className={`w-10 h-10 rounded-xl bg-${agent.color}/10 flex items-center justify-center mb-4 group-hover:bg-${agent.color}/20 transition-colors`}>
              <agent.icon className={`w-5 h-5 text-${agent.color}`} />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{agent.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{agent.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AgentCards;
