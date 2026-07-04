// src/components/Projects.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/lib/icons";

// Import images as ES modules so Vite bundles them correctly
import truthlensImg from "@/assets/Truthlens.png";
import movieAppImg from "@/assets/MovieApp.png";
import currencyImg from "@/assets/CurrencyConverter.png";

const projects = [
  {
    id: "truthlens",
    name: "TruthLens",
    description:
      "Detects misinformation using LSTM algorithms and provides fact-checking resources.",
    image: truthlensImg,
    tech: ["React", "Python", "LSTM", "NLP"],
    github: "https://github.com/Prativagautam/TruthLens",
    demo: null,
  },
  {
    id: "movie-app",
    name: "MovieApp",
    description: "Browse and search for movies with detailed information.",
    image: movieAppImg,
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Prativagautam/RAC-Movie-App",
    demo: "https://react-movie-app-one-khaki.vercel.app/",
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description: "Converts currencies in real-time using a public API.",
    image: currencyImg,
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Prativagautam/Currency-Converter",
    demo: "https://currency-converter-rose-five.vercel.app/",
  },
];

function ProjectRow({ project, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button asChild variant="outline">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>

          {project.demo ? (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          ) : (
            <Button disabled>
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 px-6">
      {/* Pink blob accents — decorative, hidden from screen readers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
