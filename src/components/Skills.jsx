
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  ClipboardCheck,
  Server,
  Wrench,
  Lightbulb,
} from "lucide-react";

const skillGroups = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Forms & Validation",
    icon: ClipboardCheck,
    skills: ["React Hook Form", "Zod"],
  },
  {
    category: "Backend & APIs",
    icon: Server,
    skills: ["Firebase", "REST APIs", "MySQL"],
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vite"],
  },
  {
    category: "Development Approach",
    icon: Lightbulb,
    skills: ["Responsive Design", "Accessibility", "Reusable Components"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-16 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium tracking-widest uppercase text-pink-500 mb-3"
      >
        Skills
      </motion.p>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-serif font-normal text-gray-900 mb-2"
      >
        What I work{" "}
        <span className="italic text-pink-500">with</span>
      </motion.h2>

      {/* Pink rule */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        className="h-0.5 bg-pink-300 rounded-full mb-12"
      />

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillGroups.map(({ category, icon: Icon, skills }) => (
          <motion.div
            key={category}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
            className="group relative p-5 rounded-2xl bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-pink-200 hover:shadow-[0_8px_24px_rgba(244,114,168,0.10)] transition-all duration-300"
          >

            {/* Subtle pink top accent line — only visible on hover */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            {/* Category header */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:bg-pink-100 group-hover:border-pink-200 transition-all duration-200">
                <Icon size={15} className="text-pink-400 group-hover:text-pink-500 transition-colors duration-200" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                {category}
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 group-hover:bg-pink-100 transition-colors duration-200 mb-4" />

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={[
                    "text-xs font-medium px-3 py-1 rounded-full border transition-all duration-200",
                    // First pill is slightly more prominent — acts as primary skill
                    index === 0
                      ? "bg-pink-50 border-pink-200 text-pink-500 group-hover:bg-pink-100 group-hover:border-pink-300"
                      : "bg-gray-50 border-gray-200 text-gray-500 group-hover:bg-pink-50 group-hover:border-pink-100 group-hover:text-pink-400",
                  ].join(" ")}
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;



