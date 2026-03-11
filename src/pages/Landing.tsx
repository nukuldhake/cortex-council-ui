import { motion } from "framer-motion";
import { Brain, Sparkles, ArrowRight, Zap, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/landing/HowItWorks";
import AgentCards from "@/components/landing/AgentCards";
import DemoPreview from "@/components/landing/DemoPreview";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-semibold text-foreground">CortexCouncil</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Animated BG */}
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-32 right-[15%] w-12 h-12 rounded-xl bg-agent-analyst/10 border border-agent-analyst/20 flex items-center justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Target className="w-5 h-5 text-agent-analyst/60" />
        </motion.div>
        <motion.div
          className="absolute top-48 left-[12%] w-10 h-10 rounded-lg bg-agent-optimist/10 border border-agent-optimist/20 flex items-center justify-center"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="w-4 h-4 text-agent-optimist/60" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-[20%] w-14 h-14 rounded-2xl bg-agent-synthesizer/10 border border-agent-synthesizer/20 flex items-center justify-center"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Zap className="w-5 h-5 text-agent-synthesizer/60" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[18%] w-11 h-11 rounded-xl bg-agent-risk/10 border border-agent-risk/20 flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Users className="w-4 h-4 text-agent-risk/60" />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle mb-8 text-sm text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Multi-Agent AI Deliberation Platform
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Where AI agents{" "}
            <span className="gradient-text">debate your ideas.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A multi-agent AI system that analyzes problems from different perspectives
            and produces intelligent decisions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link to="/workspace">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base glow-primary">
                Start a Debate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#demo">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted px-8 h-12 text-base text-foreground">
                View Demo
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <HowItWorks />
      <AgentCards />
      <DemoPreview />

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-heading text-sm font-semibold text-foreground">CortexCouncil</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 CortexCouncil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
