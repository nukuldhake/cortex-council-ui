import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/workspace");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <motion.div
        className="relative glass p-8 w-full max-w-md glow-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 justify-center mb-8">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-semibold text-foreground">CortexCouncil</span>
        </div>

        <h1 className="font-heading text-2xl font-bold text-center text-foreground mb-2">Create your account</h1>
        <p className="text-sm text-muted-foreground text-center mb-8">Start deliberating with AI agents.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 bg-muted/50 border-border h-11 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-muted/50 border-border h-11 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-muted/50 border-border h-11 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Sign in</Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
