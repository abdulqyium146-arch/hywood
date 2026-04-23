"use client";

import Link from "next/link";
import { useState } from "react";
import { PHONE_NUMBER, PHONE_HREF, BUSINESS_NAME } from "@/data/locations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#0B1F3A" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔑</span>
            <span className="text-white font-bold text-lg leading-tight">
              {BUSINESS_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
              Home
            </Link>
            <Link href="/car-lockout" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
              Car Lockout
            </Link>
            <Link href="/car-key-replacement" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
              Key Replacement
            </Link>
            <Link href="/key-programming" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
              Key Programming
            </Link>
            <Link href="/24-hour-auto-locksmith" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
              24/7 Service
            </Link>
          </nav>

          {/* Desktop CTA */}
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
            className="hidden md:flex items-center gap-2 font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <PhoneIcon />
            {PHONE_NUMBER}
          </a>

          {/* Mobile: phone + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              style={{ backgroundColor: "#FFC107", color: "#0B1F3A" }}
              className="flex items-center gap-1 font-bold px-3 py-2 rounded-lg text-sm"
            >
              <PhoneIcon />
              Call Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-blue-800 pt-3 flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/car-lockout", label: "Car Lockout" },
              { href: "/car-key-replacement", label: "Car Key Replacement" },
              { href: "/key-programming", label: "Key Programming" },
              { href: "/24-hour-auto-locksmith", label: "24/7 Service" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
