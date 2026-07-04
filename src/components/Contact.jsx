// src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";

const socials = [
  { label: "GitHub", href: "https://github.com/Prativagautam", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prativa-gautam-9b92ab279/",
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-serif font-normal text-gray-900 sm:text-4xl"
        >
          Get in <span className="italic text-pink-500">touch</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-pink-400 focus:outline-none"
          />

          <Button type="submit" disabled={status === "sending"} className="mt-2">
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Thanks for reaching out — I'll get back to you soon!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">{errorMsg}</p>
          )}
        </motion.form>

        <div className="mt-10 flex justify-center gap-6">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-pink-800 transition-colors hover:text-gray-900"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}