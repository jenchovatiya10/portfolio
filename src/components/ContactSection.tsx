import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to connect — my inbox is always open!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="mailto:jenishchovatiya186@gmail.com"
            className="glass-hover px-6 py-4 flex items-center justify-center gap-3 group"
          >
            <Mail size={18} className="text-primary" />
            <span className="text-sm group-hover:text-primary transition-colors">
              jenishchovatiya186@gmail.com
            </span>
          </a>
          <a
            href="tel:+917621988173"
            className="glass-hover px-6 py-4 flex items-center justify-center gap-3 group"
          >
            <Phone size={18} className="text-primary" />
            <span className="text-sm group-hover:text-primary transition-colors">
              +91 7621988173
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <MapPin size={14} className="text-primary" />
          <span className="text-sm text-muted-foreground">Surat, India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/jenishchovatiya186"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center group"
          >
            <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://github.com/jenchovatiya10"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg glass-hover flex items-center justify-center group"
          >
            <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-xs text-muted-foreground font-mono"
        >
          Designed & Built by Jenish Chovatiya
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
