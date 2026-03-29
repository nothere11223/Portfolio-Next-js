"use client";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Focus", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-5">
      <div className="max-w-6xl mx-auto neo px-5 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-white font-bold text-lg md:text-xl">
            Muhammad Abdullah
          </a>

          <div className="hidden md:flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="neo-button px-4 py-2 text-sm text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden neo-button w-11 h-11 flex items-center justify-center text-white text-xl"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pt-4">
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="neo-button px-4 py-3 text-center text-sm text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}