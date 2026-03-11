import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageSquare, Brain, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const debates = [
  { id: 1, title: "AI tutoring startup viability", active: true },
  { id: 2, title: "Remote work policy decision", active: false },
  { id: 3, title: "Market expansion strategy", active: false },
  { id: 4, title: "Product pricing model", active: false },
];

interface Props {
  open: boolean;
  onToggle: () => void;
}

const DebateSidebar = ({ open, onToggle }: Props) => (
  <AnimatePresence initial={false}>
    {open && (
      <motion.aside
        className="h-full border-r border-border bg-sidebar flex flex-col shrink-0"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 260, opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <div className="p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-heading text-sm font-semibold text-foreground">CortexCouncil</span>
          </div>
          <button onClick={onToggle} className="text-muted-foreground hover:text-foreground transition-colors">
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3">
          <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 h-9 text-sm" variant="ghost">
            <Plus className="w-4 h-4 mr-2" />
            New Debate
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-4 space-y-1">
          <p className="text-xs text-muted-foreground px-2 py-2 font-medium uppercase tracking-wider">History</p>
          {debates.map((d) => (
            <button
              key={d.id}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                d.active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{d.title}</span>
            </button>
          ))}
        </div>
      </motion.aside>
    )}
  </AnimatePresence>
);

export default DebateSidebar;
