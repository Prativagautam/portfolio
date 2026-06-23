import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerClass = [
  "fixed top-0 left-0 right-0 z-50 h-16",
  "transition-all duration-500 ease-in-out",
  scrolled
    ? "bg-white/80 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-pink-50"
    : "bg-white/0 backdrop-blur-none border-b border-transparent",
].join(" ");

  return (
    <header className={headerClass}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          aria-label="Back to top"
          className="font-serif text-xl font-semibold text-gray-900 hover:text-pink-500 transition-colors duration-200"
         >
              Prativa<span className="text-pink-500">.</span>      
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;

            const linkClass = [
              "relative px-3 py-1.5 text-sm rounded-md transition-all duration-200",
              isActive
                ? "text-pink-500 font-medium"
                : "text-gray-500 hover:text-gray-900 hover:bg-black/5",
            ].join(" ");

            return (
              <a key={href} href={href} className={linkClass}>
                {label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="border-pink-400 text-pink-500 hover:bg-pink-50 hover:text-pink-600 text-sm"
          >
            <a href="#contact">Let's talk</a>
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-pink-100 shadow-md px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-pink-500 py-2 text-sm border-b border-gray-100 last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-gray-900 hover:bg-gray-700 text-white text-sm"
            >
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Let's talk
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;