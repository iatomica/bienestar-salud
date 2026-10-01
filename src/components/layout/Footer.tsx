"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  WhatsappLogo,
  InstagramLogo,
  Heart,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(
    "Hola Dr. Rodrigo Melo / Risus Dental, me comunico desde la web para hacer una consulta."
  )}`;

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Reseñas", href: "#resenas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-[#09182b] text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo with White Text & Pink Smile */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-3 text-[#ff2d75]" viewBox="0 0 40 12" fill="none">
                <path
                  d="M 4 2 C 12 10, 28 10, 36 2"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-lg font-black tracking-tight text-white">
                Risus Dental
              </span>
              <span className="text-[9px] tracking-widest text-gray-400 font-semibold uppercase -mt-1">
                Odontología
              </span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#ff2d75] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons matching mockup */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/risusdental"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff2d75] text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={16} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={16} />
            </a>
            <a
              href="https://maps.google.com/?q=Paraguay+2475,+Cdad.+Autonoma+de+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-sky-500 text-white flex items-center justify-center transition-colors"
              aria-label="Ubicación"
            >
              <MapPin size={16} />
            </a>
          </div>

          {/* Right: Address */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-300 flex items-center justify-center md:justify-end gap-1.5">
              <MapPin size={14} className="text-[#ff2d75] shrink-0" />
              <span>Paraguay 2475, Cdad. Autónoma de Buenos Aires</span>
            </p>
          </div>
        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Risus Dental · Dr. Rodrigo Julián Melo. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Atención odontológica humana, ética y personalizada</span>
            <Heart size={12} weight="fill" className="text-[#ff2d75]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
