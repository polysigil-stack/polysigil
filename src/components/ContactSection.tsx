import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Shield, ExternalLink, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open for collaboration, security consulting, and speaking opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Email */}
          <motion.a
            href="mailto:ceo@threadsecurity.org"
            whileHover={{ y: -8, scale: 1.02 }}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border card-shadow transition-all duration-300 hover:border-primary/30 hover:card-shadow-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">ceo@threadsecurity.org</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/vishal-kumar-0050b0233/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border card-shadow transition-all duration-300 hover:border-primary/30 hover:card-shadow-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Linkedin className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </div>
            <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* HackerOne */}
          <motion.a
            href="https://hackerone.com/vishalkumar9570"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border card-shadow transition-all duration-300 hover:border-primary/30 hover:card-shadow-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Shield className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-1">HackerOne</h3>
              <p className="text-sm text-muted-foreground">View my profile</p>
            </div>
            <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>

        {/* Company Link */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://threadsecurity.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>Visit Thread Security</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
