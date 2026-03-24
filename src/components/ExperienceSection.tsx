import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Development Engineer II & Team Leader",
    company: "Infyni",
    location: "Gurgaon",
    period: "Dec 2023 – Jul 2025",
    highlights: [
      "Led UI team delivering scalable frontends with Next.js and TypeScript",
      "Accelerated releases by ~25% through improved sprint planning",
      "Improved Core Web Vitals by ~30% via code-splitting and caching",
      "Mentored 4 engineers, reducing defects by ~25%",
      "Achieved ~99.8% uptime during peak usage",
      "Contributed to ~18% user signup growth within 3 months",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "AWS"],
  },
  {
    role: "Senior MERN Stack Developer & Team Leader",
    company: "Xitij Infotech",
    location: "Surat",
    period: "Jun 2021 – Nov 2023",
    highlights: [
      "Designed RESTful APIs and admin panels for social & live-streaming products",
      "Reduced API response times by ~40% with Redis caching",
      "Integrated Stripe, Razorpay, and video/streaming SDKs",
      "Improved on-time feature delivery by ~20-25%",
      "Increased onboarding signups by ~28% in six weeks",
      "Recognized as Star Employee of the Year (2022-2023)",
    ],
    tech: ["Node.js", "Express", "React", "MongoDB", "Socket.io", "AWS"],
  },
  {
    role: "Web Developer",
    company: "Codely Infotech",
    location: "Surat",
    period: "Dec 2020 – May 2021",
    highlights: [
      "Built responsive UI components with HTML, CSS, JavaScript, and Bootstrap",
      "Delivered 40+ tasks and bug fixes to production",
      "Reduced initial load time by ~40% with code-splitting",
      "Increased new user signups by ~12% within three months",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2 z-10">
                <div className="glow-dot" />
              </div>

              {/* Card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}>
                <div className="glass-hover p-6">
                  <span className="text-xs font-mono text-primary mb-2 block">{exp.period}</span>
                  <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
