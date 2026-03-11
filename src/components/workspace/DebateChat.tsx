import { useState } from "react";
import { motion } from "framer-motion";
import { Send, PanelLeftOpen, PanelRightOpen, BarChart3, ShieldAlert, Sun, AlertTriangle, Layers, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const agentMeta: Record<string, { icon: typeof BarChart3; color: string }> = {
  Analyst: { icon: BarChart3, color: "agent-analyst" },
  Critic: { icon: ShieldAlert, color: "agent-critic" },
  Optimist: { icon: Sun, color: "agent-optimist" },
  "Risk Assessor": { icon: AlertTriangle, color: "agent-risk" },
  Synthesizer: { icon: Layers, color: "agent-synthesizer" },
};

interface Message {
  id: number;
  role: "user" | "agent";
  agent?: string;
  text: string;
  replyTo?: string;
}

const initialMessages: Message[] = [
  { id: 1, role: "user", text: "Should we launch an AI tutoring startup?" },
  { id: 2, role: "agent", agent: "Analyst", text: "The EdTech market is valued at $340B with 16% CAGR. AI tutoring shows strong demand signals with current LLM capabilities making it technically feasible." },
  { id: 3, role: "agent", agent: "Critic", text: "Market saturation is a concern. Khan Academy, Duolingo, and Chegg all have AI features. What's the actual differentiation here?", replyTo: "Analyst" },
  { id: 4, role: "agent", agent: "Optimist", text: "Personalized learning at scale remains unsolved. There's massive opportunity in underserved markets — specialized subjects, non-English languages, professional certifications." },
  { id: 5, role: "agent", agent: "Risk Assessor", text: "Key risks to consider: regulatory scrutiny on AI in education, content accuracy liability, and high CAC in EdTech. Data privacy for minors is also critical.", replyTo: "Optimist" },
  { id: 6, role: "agent", agent: "Synthesizer", text: "Market opportunity exists but requires clear differentiation. Recommend a niche-first approach targeting specialized subjects. Run a small pilot before full launch to validate demand and unit economics." },
];

interface Props {
  onToggleSidebar: () => void;
  onToggleInsights: () => void;
  sidebarOpen: boolean;
  insightsOpen: boolean;
}

const TypingIndicator = ({ agent }: { agent: string }) => {
  const meta = agentMeta[agent];
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <div className={`w-6 h-6 rounded-md bg-${meta?.color}/10 flex items-center justify-center`}>
        {meta && <meta.icon className={`w-3 h-3 text-${meta.color}`} />}
      </div>
      <span className={`text-xs text-${meta?.color}`}>{agent} is analyzing…</span>
      <div className="flex gap-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-typing-dot-1" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-typing-dot-2" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-typing-dot-3" />
      </div>
    </div>
  );
};

const DebateChat = ({ onToggleSidebar, onToggleInsights, sidebarOpen, insightsOpen }: Props) => {
  const [input, setInput] = useState("");
  const [messages] = useState<Message[]>(initialMessages);
  const [typing] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header */}
      <header className="h-14 border-b border-border flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          {!sidebarOpen && (
            <button onClick={onToggleSidebar} className="text-muted-foreground hover:text-foreground transition-colors">
              <PanelLeftOpen className="w-4 h-4" />
            </button>
          )}
          <div>
            <h2 className="font-heading text-sm font-semibold text-foreground">AI Tutoring Startup</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-agent-optimist" />
                Round 2 of 3
              </span>
              <span>•</span>
              <span>Debate Phase: Analysis</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Progress bar */}
          <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-primary rounded-full" />
          </div>
          {!insightsOpen && (
            <button onClick={onToggleInsights} className="text-muted-foreground hover:text-foreground transition-colors">
              <PanelRightOpen className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg) => {
          const meta = msg.agent ? agentMeta[msg.agent] : null;
          const Icon = meta?.icon || User;
          const isUser = msg.role === "user";
          const isSynthesizer = msg.agent === "Synthesizer";

          return (
            <motion.div
              key={msg.id}
              className={`flex gap-3 max-w-3xl mx-auto ${isUser ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                isUser ? "bg-primary/10" : `bg-${meta?.color}/10`
              }`}>
                <Icon className={`w-4 h-4 ${isUser ? "text-primary" : `text-${meta?.color}`}`} />
              </div>
              <div className={`max-w-[75%] ${isUser ? "text-right" : ""}`}>
                <span className={`text-xs font-medium mb-1 block ${isUser ? "text-primary" : `text-${meta?.color}`}`}>
                  {isUser ? "You" : msg.agent}
                  {msg.replyTo && (
                    <span className="text-muted-foreground font-normal"> → replying to {msg.replyTo}</span>
                  )}
                </span>
                <div className={`px-4 py-3 text-sm leading-relaxed rounded-2xl ${
                  isSynthesizer
                    ? "glass border-primary/20 glow-primary text-foreground"
                    : isUser
                    ? "bg-primary/10 border border-primary/20 rounded-br-md text-foreground"
                    : "glass-subtle text-secondary-foreground"
                }`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          );
        })}

        {typing && <TypingIndicator agent="Critic" />}

        {/* Final Decision Card */}
        <motion.div
          className="max-w-3xl mx-auto mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass border-primary/30 p-6 glow-primary">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-agent-synthesizer" />
              <h3 className="font-heading text-base font-semibold text-foreground">Final Consensus</h3>
              <span className="ml-auto text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                Confidence: 0.78
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Key Insights</p>
                <ul className="space-y-1 text-secondary-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-agent-optimist mt-2 shrink-0" />
                    Market opportunity exists in specialized EdTech
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-agent-risk mt-2 shrink-0" />
                    Regulatory risk present — especially for minors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-agent-analyst mt-2 shrink-0" />
                    Demand validation required before scaling
                  </li>
                </ul>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Recommended Action</p>
                <p className="text-foreground font-medium">Run a small pilot targeting a niche subject area before committing to full launch.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="max-w-3xl mx-auto flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your problem or question…"
            className="flex-1 bg-muted/50 border-border h-11 text-foreground placeholder:text-muted-foreground"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-4">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DebateChat;
