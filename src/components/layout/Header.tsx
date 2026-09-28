"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, Phone, MapPin, WhatsappLogo, CalendarPlus } from "@phosphor-icons/react";
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
      {/* Top micro-banner with both medical branches in Córdoba */}
      <div className="bg-petrol-950 text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-petrol-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-cyan-200">
              Bienestar Salud · Policonsultorio Córdoba
            </span>
            <span className="hidden md:inline text-slate-400">| Turnos programados y atención ágil</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
            <a
              href="https://maps.google.com/?q=Gral.+Alvear+81,+Cordoba+Capital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin size={13} className="text-cyan-300" />
              <span>Sede Central: Alvear 81 · Tel: (0351) 424-0527</span>
            </a>

            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
            >
              <WhatsappLogo size={14} weight="fill" />
              <span>Sede Especialidades: Sarmiento 480 · WA: (0351) 427-6240</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-surface/95 backdrop-blur-md ${
          isScrolled ? "shadow-soft border-b border-surface-muted" : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-petrol-900 p-1 border border-petrol-700 group-hover:scale-105 transition-transform shrink-0 shadow-xs">
              <Image
                src="/images/logo.webp"
                alt="Logo Bienestar Salud"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-charcoal group-hover:text-petrol-700 transition-colors leading-none">
                Bienestar Salud
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-charcoal-secondary">
            <Link
              href="#especialidades"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Especialidades
            </Link>
            <Link
              href="#sedes"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Nuestras 2 Sedes
            </Link>
            <Link
              href="#obras-sociales"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Obras Sociales
            </Link>
            <Link
              href="#equipo"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Profesionales
            </Link>
            <Link
              href="#atencion-agil"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Atención Sin Esperas
            </Link>
            <Link
              href="#faq"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Preguntas Frecuentes
            </Link>
          </nav>

          {/* Right Action: Direct WhatsApp & Turno Modal */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-petrol-200 text-petrol-900 hover:bg-petrol-50 font-semibold text-xs transition-colors shrink-0"
            >
              <CalendarPlus size={15} className="text-petrol-700" />
              <span>Solicitar Turno</span>
            </button>

            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all hover:shadow-sm shrink-0"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white font-semibold text-xs"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>Turno</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú principal de navegación"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-charcoal-secondary hover:text-charcoal hover:bg-surface-subtle"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-surface-muted bg-surface px-5 py-6 space-y-4 animate-fadeIn shadow-lg">
            <div className="flex flex-col space-y-3 font-medium text-sm text-charcoal">
              <Link
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Especialidades Médicas
              </Link>
              <Link
                href="#sedes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Nuestras 2 Sedes (Alvear y Sarmiento)
              </Link>
              <Link
                href="#obras-sociales"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Obras Sociales y Prepagas
              </Link>
              <Link
                href="#equipo"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Equipo de Médicos
              </Link>
              <Link
                href="#atencion-agil"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Compromiso de Atención Ágil
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2"
              >
                Preguntas frecuentes
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>Turnos WhatsApp (+54 9 351 427-6240)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-surface-muted text-charcoal text-xs font-semibold hover:bg-surface-subtle"
              >
                Coordinador de consulta online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

