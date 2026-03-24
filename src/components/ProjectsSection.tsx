import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users, Zap, BarChart3, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "TTYO – Video Chat Platform",
    description:
      "Native video chat app enabling random matching, private calls, livestreams, chat, and wallet/withdrawals. Supported 1,500+ concurrent sessions.",
    highlights: [
      "Reduced call setup latency by ~35%",
      "Automated wallet settlements saving ~8 hrs/week",
    ],
    tech: ["Node.js", "React", "Socket.io", "Agora.io", "MongoDB", "Stripe"],
    icon: Users,
    color: "from-primary to-accent",
  },
  {
    title: "MegaChart – Stock Analytics",
    description:
      "Investor-focused analytics web app with real-time and historical stock data. Full-stack application with Redis caching and AWS deployment.",
    highlights: [
      "Increased API throughput by ~50% with Redis",
      "Reduced release time by ~65% with CI/CD",
    ],
    tech: ["React", "Node.js", "Redis", "AWS EC2/S3", "CI/CD"],
    icon: BarChart3,
    color: "from-accent to-primary",
  },
  {
    title: "Rayzi – Social Media App",
    description:
      "Social platform with livestreaming, video calling, chat, wallets, and withdrawals. Enabled 1,000+ simultaneous streams.",
    highlights: [
      "Reduced session drop-offs by ~20%",
      "Achieved ~99.6% payment success rate",
    ],
    tech: ["Node.js", "React", "Socket.io", "Agora.io", "MongoDB", "AWS"],
    icon: Zap,
    color: "from-primary to-accent",
  },
  {
    title: "Infyni – Learning Platform",
    description:
      "Live online learning platform offering personalized, expert-led classes with real-time messaging and video sessions.",
    highlights: [
      "Improved classroom engagement by ~22%",
      "Shortened feature go-live cycles by ~3 days",
    ],
    tech: ["Next.js", "TypeScript", "Socket.io", "Zoom/Whereby", "Razorpay"],
    icon: GraduationCap,
    color: "from-accent to-primary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass-hover p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon size={20} className="text-background" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span> {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
