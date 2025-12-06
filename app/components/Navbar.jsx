"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center px-4 md:px-6 py-3">

        {/* Desktop: Portfolio logo */}
        <div className="hidden md:flex flex-shrink-0">
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>

        {/* Desktop: Nav links (left of Free Consultation) */}
        <ul className="hidden md:flex gap-6 items-center ml-auto text-gray-700">
          <li><a href="#home" className="hover:text-black cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-black cursor-pointer">About</a></li>
          <li><a href="#skills" className="hover:text-black cursor-pointer">Skills</a></li>
          <li><a href="#services" className="hover:text-black cursor-pointer">Services</a></li>
          <li><a href="#contact" className="hover:text-black cursor-pointer">Contact</a></li>
        </ul>

        {/* Desktop: Free Consultation button */}
        <div className="hidden md:flex flex-shrink-0 ml-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Free Consultation
          </button>
        </div>

        {/* Mobile: Toggle + Portfolio on left, Free Consultation on right */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              className="text-2xl"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>

          <button className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition">
            Free Consultation
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md w-full z-40 mt-1">
          <ul className="flex flex-col px-6 py-4 gap-4">
            <li><a href="#home" onClick={handleLinkClick} className="cursor-pointer">Home</a></li>
            <li><a href="#about" onClick={handleLinkClick} className="cursor-pointer">About</a></li>
            <li><a href="#skills" onClick={handleLinkClick} className="cursor-pointer">Skills</a></li>
            <li><a href="#services" onClick={handleLinkClick} className="cursor-pointer">Services</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="cursor-pointer">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
