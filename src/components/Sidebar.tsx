import { motion } from "framer-motion";
import { Linkedin, Shield, Mail, Home, User, Building2, Settings, Briefcase, MessageSquare, Moon, Sun } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "/about", label: "About" },
  { icon: Building2, href: "#companies", label: "Companies" },
  { icon: Briefcase, href: "#focus", label: "Focus Areas" },
  { icon: Settings, href: "#skills", label: "Skills" },
  { icon: MessageSquare, href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vishal-kumar-0050b0233/",
    label: "LinkedIn",
  },
  {
    icon: Shield,
    href: "https://hackerone.com/vishalkumar9570",
    label: "HackerOne",
  },
  {
    icon: Mail,
    href: "mailto:ceo@threadsecurity.org",
    label: "Email",
  },
];

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center justify-between border-r border-border bg-card/80 backdrop-blur-md py-8"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm overflow-hidden"
      >
        <img src={profilePhoto} alt="Profile" className="h-full w-full object-cover" />
      </motion.div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * index + 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <item.icon className="h-[18px] w-[18px]" />
            <span className="absolute left-14 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 transition-all duration-200 group-hover:opacity-100 pointer-events-none">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-6 border-t border-border" />

      {/* Social Links */}
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * index + 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <link.icon className="h-[18px] w-[18px]" />
            <span className="absolute left-14 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 transition-all duration-200 group-hover:opacity-100 pointer-events-none">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Theme toggle */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        onClick={toggleTheme}
        className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        {theme === "dark" ? (
          <Sun className="h-[18px] w-[18px]" />
        ) : (
          <Moon className="h-[18px] w-[18px]" />
        )}
        <span className="absolute left-14 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background opacity-0 transition-all duration-200 group-hover:opacity-100 pointer-events-none">
          {theme === "dark" ? "Light" : "Dark"}
        </span>
      </motion.button>

      {/* Bottom spacer */}
      <div className="h-10" />
    </motion.aside>
  );
};

export default Sidebar;
