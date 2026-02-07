import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: "2023",
  },
  {
    name: "Certified Information Security Manager",
    issuer: "ISACA",
    year: "2022",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2023",
  },
  {
    name: "API Security Certified",
    issuer: "APIsec University",
    year: "2024",
  },
  {
    name: "AWS Academy Data Center Technician",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    name: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Blockchain Security Professional",
    issuer: "Blockchain Council",
    year: "2024",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise
          </p>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ x: 8 }}
              className="group flex items-center gap-4 p-6 rounded-xl bg-card border border-border card-shadow transition-all duration-300 hover:border-primary/30 hover:card-shadow-hover"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
