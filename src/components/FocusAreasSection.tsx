import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Bug, Lock, Network, FileCode, Users } from "lucide-react";

const focusAreas = [
  {
    icon: Shield,
    title: "Supply Chain Attacks",
    description: "Identifying and mitigating vulnerabilities in software supply chains to prevent cascading security failures.",
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    description: "Comprehensive security assessments using advanced offensive techniques to uncover hidden vulnerabilities.",
  },
  {
    icon: Lock,
    title: "Vulnerability Research",
    description: "Deep-dive analysis into systems and applications to discover zero-day vulnerabilities.",
  },
  {
    icon: FileCode,
    title: "Open Source Security",
    description: "Auditing open-source projects and contributing to community security initiatives.",
  },
  {
    icon: Network,
    title: "Smart Contract Auditing",
    description: "Reviewing blockchain smart contracts for security flaws and logic vulnerabilities.",
  },
  {
    icon: Users,
    title: "Security Consulting",
    description: "Strategic guidance for organizations building robust security programs and incident response.",
  },
];

const FocusAreasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="focus" className="py-24 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Focus <span className="text-gradient">Areas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized expertise in critical cybersecurity domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-card border border-border card-shadow transition-all duration-300 hover:card-shadow-hover hover:border-primary/30"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <area.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
