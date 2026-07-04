// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative mt-10">
      {/* Wave divider — an SVG curve sitting above the footer band */}
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-16 w-full text-pink-100"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,50 C360,120 1080,-20 1440,50 L1440,100 L0,100 Z"
        />
      </svg>

      <div className="bg-pink-100 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          

          <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-600">
            <a href="#about" className="hover:text-pink-600">
              About
            </a>
            <a href="#skills" className="hover:text-pink-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-pink-600">
              Projects
            </a>
            <a href="#milestones" className="hover:text-pink-600">
              Milestones
            </a>
            <a href="#contact" className="hover:text-pink-600">
              Contact
            </a>
          </nav>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Prativa Gautam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
