import { motion } from "framer-motion";
import { MessageSquare, Users, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Submit Your Problem",
    description: "Enter a problem, idea, or decision you need analyzed by the AI council.",
  },
  {
    icon: Users,
    title: "Agents Deliberate",
    description: "Five specialized AI agents debate the problem from different perspectives.",
  },
  {
    icon: Lightbulb,
    title: "Get Structured Insights",
    description: "The system evaluates arguments and produces actionable recommendations.",
  },
];

const HowItWorks = () => (
  <section className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Three simple steps to multi-perspective AI analysis.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="glass p-8 text-center group hover:border-primary/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-sm font-medium text-primary mb-2">Step {i + 1}</div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
