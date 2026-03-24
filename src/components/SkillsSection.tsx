import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "Socket.io", level: 85 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, S3)", level: 82 },
      { name: "DigitalOcean", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Agora.io", level: 85 },
      { name: "Zoom SDK", level: 80 },
      { name: "Stripe", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Razorpay", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1 }}
              className="glass-hover p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-primary font-mono">
                {`// ${category.title}`}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.4 + ci * 0.1 + si * 0.05, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
