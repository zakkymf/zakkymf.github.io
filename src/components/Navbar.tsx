import React, { useState } from "react";
import "../App.css";
import useActiveSection from "../hooks/useActiveSection";

function Navbar() {
  const sections = ["home", "project", "work", "contact"];
  const activeSection = useActiveSection(sections);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <div className="sticky top-0 z-50 background-color h-16 border-b border-white/10 w-full">
      <div className="flex items-center justify-between px-4 sm:px-12 h-16 w-full">
        <h1 className="text-sm font-bold text-white whitespace-nowrap">
          Zakky Muhammad Fajar
        </h1>

        <nav className="hidden sm:block">
          <ul className="flex gap-6 sm:gap-12">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`transition-colors duration-200 ${
                    activeSection === section
                      ? "text-blue-500 font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="sm:hidden bg-[#07051a] border-t border-white/10">
          <ul className="flex flex-col p-4 gap-4">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`block transition-colors duration-200 ${
                    activeSection === section
                      ? "text-blue-500 font-bold"
                      : "text-white/60 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
