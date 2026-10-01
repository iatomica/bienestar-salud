"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  List,
  X,
  ArrowRight,
  WhatsappLogo,
  InstagramLogo,
  MapPin,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Reseñas", href: "#resenas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? "shadow-sm border-b border-gray-100 py-3"
          : "border-b border-gray-100/70 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 group">
            <div className="relative h-10 w-44">
              <Image
                src="/images/logo.svg"
                alt="Risus Dental - Odontología"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#ff2d75] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#ff2d75] hover:bg-[#e61b63] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-md shadow-pink-500/25 flex items-center gap-1.5"
            >
              <span>Reservar turno</span>
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#ff2d75] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
            >
              <span>Turno</span>
              <ArrowRight size={12} weight="bold" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden pt-4 pb-3 border-t border-gray-100 mt-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-pink-50 hover:text-[#ff2d75]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#ff2d75] text-white text-sm font-bold py-2.5 rounded-full flex items-center justify-center gap-2 shadow-md shadow-pink-500/20"
              >
                <span>Reservar turno</span>
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
