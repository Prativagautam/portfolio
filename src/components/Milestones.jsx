// src/components/Milestones.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // generic icon, safe to use from lucide

// Certificate images — imported as ES modules (same reason as Projects.jsx:
// Vite needs to bundle these, raw file paths won't work in the browser)
import sajiloCertImg from "@/assets/certificates/sajilo-softwares.png";
import linuxCertImg from "@/assets/certificates/linux-fundamentals.png";
import fellowshipCertImg from "@/assets/certificates/software-fellowship.png";

const experience = {
  role: "Frontend Developer Intern",
  company: "Sajilo Softwares",
  duration: "Nov 2025 – Feb 2026",
  description:
    "At Sajilo Softwares, I contributed to multiple modules across the product, focusing on building and maintaining CRUD functionality and integrating REST APIs to keep data in sync across the application.",
  highlights: ["CRUD Operations", "GET", "PUT", "PATCH", "REST APIs"],
};

const certificates = [
  {
    id: "sajilo-internship",
    title: "Internship Completion",
    issuer: "Sajilo Softwares",
    image: sajiloCertImg,
    rotate: -3,
  },
  {
    id: "linux-fundamentals",
    title: "Linux Fundamentals",
    issuer: "Sathi Bhai",
    image: linuxCertImg,
    rotate: 2,
  },
  {
    id: "software-fellowship",
    title: "Software Fellowship",
    issuer: "Locus, Pulchowk Campus",
    image: fellowshipCertImg,
    rotate: -1.5,
  },
];
function CertificateCard({ cert, onView }) {
  return (
    <motion.button
      type="button"
      onClick={() => onView(cert)}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, rotate: cert.rotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative w-56 shrink-0 rounded-lg bg-white p-3 pb-4 text-left shadow-md hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
      aria-label={`View ${cert.title} certificate`}
    >
      {/* Washi tape accent — the "signature" detail */}
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-3 rounded-sm bg-pink-200/80"
      />

      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="h-40 w-full rounded-md object-cover"
      />

      <div className="mt-3">
        <p className="text-sm font-semibold text-gray-900">{cert.title}</p>
        <p className="text-xs text-gray-500">{cert.issuer}</p>
      </div>

      {/* Hover overlay — reveals the "View Certificate" label */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-white/85 text-sm font-medium text-pink-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        View Certificate
      </span>
    </motion.button>
  );
}

function CertificateModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[85vh] max-w-3xl overflow-auto rounded-lg bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate view"
              className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-gray-700 shadow hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={cert.image}
              alt={`${cert.title} certificate, full size`}
              className="max-h-[75vh] w-full rounded-md object-contain"
            />
            <div className="mt-3 text-center">
              <p className="font-semibold text-gray-900">{cert.title}</p>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Milestones() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="milestones" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-serif font-normal text-gray-900 sm:text-4xl"
        >
          Mile<span className="italic text-pink-500">stones</span>
        </motion.h2>

        {/* Experience — journal-style entry, not a timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl border-l-2 border-pink-200 pl-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-pink-500">
            Experience
          </p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">
            {experience.role} · {experience.company}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{experience.duration}</p>
          <p className="mt-4 leading-relaxed text-gray-600">
            {experience.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.highlights.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certificates — keepsake cards */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-pink-500">
            Certificates
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 pt-4">
            {certificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onView={setActiveCert}
              />
            ))}
          </div>
        </div>
      </div>

      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}
