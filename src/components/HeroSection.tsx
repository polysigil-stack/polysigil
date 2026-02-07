import { motion } from "framer-motion";
import { ExternalLink, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 px-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/20"
            />
            <img
              src={profilePhoto}
              alt="Vishal Kumar - Cybersecurity Expert"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover card-shadow border-4 border-background"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-1 -right-1 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black border border-white/60 glow-shadow"
            >
              <img
                src="/assets/thread-security-logo-wymSYitO.png"
                alt="Thread Security"
                className="h-[90px] w-[90px] max-h-none max-w-none object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
        >
          Vishal Kumar
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-2 mb-8"
        >
          <p className="text-lg md:text-xl text-primary font-semibold">
            Founder & CEO,{" "}
            <a
              href="https://threadsecurity.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Thread Security
              <ExternalLink className="w-4 h-4" />
            </a>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Offensive Security Researcher | Supply Chain & Blockchain Security Strategist | 
            Leading Global Cyber Defense & Threat Intelligence Innovator
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#companies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="mailto:ceo@threadsecurity.org"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border text-foreground font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
