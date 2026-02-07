import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  "Apple", "Google", "BlackBerry", "Mozilla", "BBC", "PayPal",
  "Vimeo", "Adobe", "Xiaomi", "Stripe", "Elastic", "Sony",
  "MetaMask", "AWS VDP", "Linux Foundation", "Epic Games",
  "Frontegg", "Amazon VRP", "TikTok"
];

const CompanyLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center px-10 py-4 select-none">
      <span className="text-xl md:text-2xl font-bold text-foreground/80 whitespace-nowrap tracking-tight hover:text-foreground transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

const MarqueeRow = ({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) => {
  const duplicated = [...companies, ...companies];

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((company, index) => (
          <CompanyLogo key={`${company}-${index}`} name={company} />
        ))}
      </motion.div>
    </div>
  );
};

const CompaniesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="companies" className="py-24 text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Companies I've <span className="text-primary">Hacked</span>
          </h2>
          <p className="text-background/60 text-lg max-w-2xl mx-auto">
            Identified and reported critical vulnerabilities to industry-leading organizations worldwide
          </p>
        </motion.div>
      </div>

      {/* Marquee row */}
      <MarqueeRow direction="left" speed={35} />

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-10 text-foreground/60 text-sm px-8"
      >
        And many more through responsible disclosure programs
      </motion.p>
    </section>
  );
};

export default CompaniesSection;
