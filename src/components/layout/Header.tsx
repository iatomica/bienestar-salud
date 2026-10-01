"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  List,
  X,
  MapPin,
  WhatsappLogo,
  InstagramLogo,
  CalendarPlus,
  Star,
  Heart,
  Sparkle,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeaderProps {
  onOpenBooking: (specialtyId?: string, profId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-banner: Rainbow puff gradient and key trust indicators */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-[10px] uppercase tracking-wide">
              <span>🏳️‍🌈 Espacio Seguro</span>
            </span>
            <span className="font-semibold text-white/95">
              Risus Dental · Dr. Rodrigo Julián Melo
            </span>
            <span className="hidden md:inline text-white/75">• Odontología con empatía y sin dolor</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-white/95 text-[11px] sm:text-xs">
            {/* Google reviews */}
            <div className="flex items-center gap-1 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
              <div className="flex text-amber-300">
                <Star size={12} weight="fill" />
                <Star size={12} weight="fill" />
                <Star size={12} weight="fill" />
                <Star size={12} weight="fill" />
                <Star size={12} weight="fill" />
              </div>
              <span className="font-bold">5.0</span>
              <span className="text-white/80">(212 reseñas)</span>
            </div>

            {/* Address */}
            <a
              href={clinicConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin size={13} weight="bold" />
              <span>Paraguay 2475, CABA</span>
            </a>

            {/* Instagram */}
            <a
              href={clinicConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors font-medium"
            >
              <InstagramLogo size={14} weight="bold" />
              <span className="hidden sm:inline">@risusdental</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-surface/90 backdrop-blur-md ${
          isScrolled ? "shadow-elevated border-b border-pink-100" : "border-b border-pink-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden rainbow-border-gradient group-hover:scale-105 transition-transform shrink-0 shadow-soft">
              <Image
                src="/images/logo.svg"
                alt="Risus Dental"
                width={48}
                height={48}
                className="w-full h-full object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-charcoal group-hover:text-risus-600 transition-colors leading-none">
                  Risus Dental
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-risus-100 text-risus-600 font-extrabold uppercase">
                  CABA
                </span>
              </div>
              <span className="text-xs font-semibold text-charcoal-muted mt-0.5">
                Odontología · Dr. Rodrigo Julián Melo
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-charcoal-secondary">
            <Link
              href="#especialidades"
              className="hover:text-risus-600 transition-colors focus-visible:outline-none"
            >
              Tratamientos
            </Link>
            <Link
              href="#experiencia"
              className="hover:text-risus-600 transition-colors focus-visible:outline-none"
            >
              Espacio Risus
            </Link>
            <Link
              href="#odontologo"
              className="hover:text-risus-600 transition-colors focus-visible:outline-none"
            >
              Dr. Rodrigo Melo
            </Link>
            <Link
              href="#opiniones"
              className="hover:text-risus-600 transition-colors focus-visible:outline-none"
            >
              Opiniones (212 ★)
            </Link>
            <Link
              href="#faq"
              className="hover:text-risus-600 transition-colors focus-visible:outline-none"
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="#contacto"
              className="hover:text-risus-600 transition-colors focus-visible:outline-none"
            >
              Ubicación
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all shadow-sm hover:scale-[1.02]"
            >
              <WhatsappLogo size={17} weight="fill" className="text-emerald-500" />
              <span>11 2395-3349</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-risus-500 via-pink-500 to-purple-500 hover:from-risus-600 hover:to-purple-600 text-white text-xs font-bold transition-all shadow-md shadow-pink-500/25 hover:scale-[1.03]"
            >
              <CalendarPlus size={16} weight="bold" />
              <span>Solicitar Turno</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-risus-500 text-white text-xs font-bold"
            >
              <CalendarPlus size={14} weight="bold" />
              <span>Turno</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal hover:bg-pink-50 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-pink-100 bg-white/95 backdrop-blur-xl px-4 py-6 space-y-4 shadow-elevated">
            <nav className="flex flex-col space-y-3 font-semibold text-charcoal-secondary text-sm">
              <Link
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-pink-50 hover:text-risus-600 transition"
              >
                Tratamientos Dentales
              </Link>
              <Link
                href="#experiencia"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-pink-50 hover:text-risus-600 transition"
              >
                Espacio Risus & Filosofía
              </Link>
              <Link
                href="#odontologo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-pink-50 hover:text-risus-600 transition"
              >
                Dr. Rodrigo Julián Melo
              </Link>
              <Link
                href="#opiniones"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-pink-50 hover:text-risus-600 transition"
              >
                Opiniones y Reseñas Google (5 Estrellas)
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-pink-50 hover:text-risus-600 transition"
              >
                Preguntas Frecuentes
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-pink-50 hover:text-risus-600 transition"
              >
                Dirección: Paraguay 2475, CABA
              </Link>
            </nav>

            <div className="pt-4 border-t border-pink-100 flex flex-col gap-2.5">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-500 text-white font-bold text-sm shadow-md"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Escribir por WhatsApp (11 2395-3349)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-risus-500 to-purple-500 text-white font-bold text-sm shadow-md"
              >
                <CalendarPlus size={18} weight="bold" />
                <span>Agendar Consulta con Dr. Rodrigo Melo</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
