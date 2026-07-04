
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";

// ── Social links ──
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Prativagautam",
    icon:GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prativa-gautam-9b92ab279/",
    icon: LinkedinIcon
  
  },
];

const paragraphs = [
  "My journey into web development started with a simple curiosity about how things work under the hood of the internet. Today, as a Frontend Developer, I focus on the intersection of aesthetics and logic.",
  "I love the challenge of taking a concept from a wireframe and watching it come alive on screen. I predominantly work with React and TypeScript, always aiming for code that is as clean as the UI it powers.",
  "I'm constantly learning, iterating, and looking for exciting projects to collaborate on.",
];

const learningItems = [
  {
    title: "Next.js",
    description: "Exploring server components, app router and full-stack React patterns.",
    isPinkBg: true,
  },
  {
    title: "Framer Motion",
    description: "Building fluid, accessible animations that enhance UX without distraction.",
    isPinkBg: false,
  },
  {
    title: "Supabase",
    description: "Learning backend as a service — auth, databases and real-time with PostgreSQL.",
    isPinkBg: true,
  },
];

// Animation Configuration Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const About = () => {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto overflow-hidden">
      
      {/* Outer Layout Grid Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        
        {/* LEFT PANEL: Header, Bio Paragraphs & Socials */}
        <div className="md:col-span-7 flex flex-col">
          
          {/* Section labels & headings are now inside the left column */}
          {/* <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3"
          >
            About me
          </motion.p> */}

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-serif font-normal text-gray-900 mb-2"
          >
            A little about <span className=" text-pink-500">myself</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="h-0.5 bg-pink-300 rounded-full mb-10"
          />

          {/* Staggered Bio Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-5"
          >
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-base text-gray-500 leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 mt-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 text-sm text-pink-800 hover:text-gray-900 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT PANEL: Currently Learning Cards (Perfect side-by-side alignment) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-5 flex flex-col gap-4 py-6" 
          // md:pt-1 balances the top alignment with your 'About Me' text baseline perfectly
        > <p>  </p>
          <motion.p 
            variants={itemVariants}
            className="text-xs font-semibold  text-gray-900 "
          >
            Currently Learning
          </motion.p>

          {learningItems.map(({ title, description, isPinkBg }, index) => (
           <motion.div
  key={index}
  variants={itemVariants}
  whileHover={{ y: -3, transition: { duration: 0.2 } }}
  className={`px-4 py-2 rounded-xl border transition-shadow duration-200 hover:shadow-sm ${
    isPinkBg
      ? "bg-pink-100 border-pink-100/60"
      : "bg-white border-gray-100"
  }`}
>
  <h3 className="text-sm font-medium text-gray-800 mb-0.5">
    {title}
  </h3>
  <p className="text-xs text-gray-400 leading-relaxed">
    {description}
  </p>
</motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;



