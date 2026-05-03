"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-deep-red shadow-lg";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-2xl text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
            Casa Milano
          </span>
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans">
            Ristorante Italiano
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                pathname === href
                  ? "text-gold border-b border-gold pb-0.5"
                  : "text-cream hover:text-gold"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="ml-4 px-5 py-2 border border-gold text-gold font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-deep-red transition-all duration-300"
          >
            Book a Table
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-deep-red border-t border-gold/20 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                pathname === href ? "text-gold" : "text-cream hover:text-gold"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="mt-2 px-8 py-3 border border-gold text-gold font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-deep-red transition-all duration-300"
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
