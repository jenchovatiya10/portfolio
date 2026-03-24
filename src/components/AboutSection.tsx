import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Rocket, Award } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Projects Delivered", value: "10+" },
  { icon: Users, label: "Engineers Mentored", value: "4+" },
  { icon: Rocket, label: "Uptime Achieved", value: "99.8%" },
  { icon: Award, label: "Star Employee", value: "2023" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Software Development Engineer II</span> and Team Leader 
              with 4+ years of experience building scalable, user-centric applications. 
              I specialize in the MERN stack with expertise in React, TypeScript, Next.js, 
              Node.js, Express, and MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At <span className="text-foreground font-medium">Infyni</span>, I led the UI team to deliver scalable 
              frontends, improved Core Web Vitals by ~30%, and mentored engineers through 
              structured code reviews and pair programming. I've contributed to platforms 
              handling 1,500+ concurrent sessions with real-time features.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about clean architecture, performance optimization, CI/CD automation, 
              and building teams that ship quality code. Recognized as{" "}
              <span className="text-primary font-medium">Star Employee of the Year (2022-2023)</span> at Xitij Infotech.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-hover p-5 text-center"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold mb-1">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
