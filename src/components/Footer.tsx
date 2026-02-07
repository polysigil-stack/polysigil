import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-8 text-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold overflow-hidden">
              <img src={profilePhoto} alt="Profile" className="h-full w-full object-cover" />
            </div>
            <span className="text-foreground/70">
              © {new Date().getFullYear()} Vishal Kumar. All rights reserved.
            </span>
          </div>
          <p className="text-foreground/50 text-sm">
            Securing the digital world, one vulnerability at a time.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
