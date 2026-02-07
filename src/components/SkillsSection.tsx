import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, GitBranch, Container, Cloud, Code, Lock, Bug, Shield } from "lucide-react";

const tools = [
  { icon: Terminal, name: "Linux" },
  { icon: GitBranch, name: "Git" },
  { icon: Container, name: "Docker" },
  { icon: Cloud, name: "AWS/Cloud" },
  { icon: Code, name: "Python" },
  { icon: Lock, name: "Burp Suite" },
  { icon: Bug, name: "Nuclei" },
  { icon: Shield, name: "OWASP" },
];

const skills = [
  { name: "Vulnerability Research", level: 95 },
  { name: "Penetration Testing", level: 92 },
  { name: "Blockchain Security", level: 88 },
  { name: "Network Security", level: 90 },
  { name: "Threat Intelligence", level: 85 },
  { name: "Security Automation", level: 87 },
];

const professionalSkills = [
  "Responsible Disclosure",
  "Research Documentation",
  "Team Collaboration",
  "Problem Solving",
  "Communication",
  "Report Writing",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tools & <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.05 + 0.3 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border card-shadow transition-all duration-300 hover:border-primary/30"
              >
                <tool.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Proficiency</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const radius = 42;
                const circumference = 2 * Math.PI * radius;
                const progress = (skill.level / 100) * circumference;
                const dashOffset = circumference - progress;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.05 + 0.5, duration: 0.6 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border card-shadow"
                  >
                    <div className="relative h-24 w-24">
                      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          className="text-border"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={radius}
                          className="text-primary"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="transparent"
                          strokeLinecap="round"
                          strokeDasharray={`${circumference} ${circumference}`}
                          initial={{ strokeDashoffset: circumference }}
                          animate={isInView ? { strokeDashoffset: dashOffset } : { strokeDashoffset: circumference }}
                          transition={{ delay: index * 0.1 + 0.6, duration: 1, ease: "easeOut" }}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <span className="text-xs text-center font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Project Attack Surface Management</h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card/60 p-3 shadow-sm"
            >
              <img
                src="/assets/thread-dashboard.jpg"
                alt="Thread dashboard preview"
                className="w-full rounded-xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Skills */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Professional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.05 + 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
