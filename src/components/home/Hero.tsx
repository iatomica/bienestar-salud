"use client";

import React from "react";
import Image from "next/image";
import {
  WhatsappLogo,
  ArrowRight,
  Star,
  ChatCircleDots,
  User,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(
    "Hola Dr. Rodrigo Melo / Risus Dental, quisiera consultar para reservar un turno odontológico."
  )}`;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-r from-[#007cc2] via-[#008de0] to-[#007cc2] text-white pt-8 pb-14 lg:pt-14 lg:pb-20"
    >
      {/* Background Pink Fluid Curves matching the reference mockup */}
      <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#ff2d75]/35 to-[#ff8fa3]/10 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Action Buttons & Trust Stats */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top eyebrow badge */}
            <div className="inline-flex items-center">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-sky-100/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/15">
                ODONTOLOGÍA EN BUENOS AIRES
              </span>
            </div>

            {/* Main title with smile curve and hand-drawn note */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Sonreír <br />
                te cambia <br />
                <span className="relative inline-block">
                  todo
                  {/* Pink Smile Curve */}
                  <svg
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-5 text-[#ff2d75]"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 5 4 C 30 18, 70 18, 95 4"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-[#ff2d75] ml-1">:)</span>
              </h1>

              {/* Hand-drawn annotation "Tu sonrisa en buenas manos" */}
              <div className="hidden sm:flex items-center gap-2 absolute top-12 right-0 sm:right-6 lg:right-2 transform rotate-[-6deg] text-sky-100 font-medium text-xs sm:text-sm select-none">
                <span className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-semibold shadow-sm">
                  ✨ Tu sonrisa en buenas manos
                </span>
                <svg
                  className="w-8 h-8 text-sky-200"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M 5 15 Q 25 10 32 28 M 32 28 L 24 26 M 32 28 L 30 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-sky-50 font-normal max-w-lg leading-relaxed pt-1">
              Cuidado dental profesional en un espacio moderno, cercano y pensado
              para vos.
            </p>

            {/* CTAs matching mockup: Pink button + Dark WhatsApp button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#ff2d75] hover:bg-[#e61b63] text-white text-base font-bold px-7 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-pink-600/30 flex items-center gap-2"
              >
                <span>Reservar turno</span>
                <ArrowRight size={18} weight="bold" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b192c] hover:bg-[#152a45] text-white text-base font-bold px-7 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-md flex items-center gap-2 border border-white/10"
              >
                <WhatsappLogo size={20} weight="fill" className="text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* 4 Feature Badges in a Row matching mockup */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white/95 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Star size={16} weight="fill" className="text-amber-300" />
                </div>
                <span className="font-bold text-xs">5 estrellas</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <ChatCircleDots size={16} weight="bold" className="text-sky-200" />
                </div>
                <span className="font-bold text-xs leading-tight">
                  212 reseñas en Google
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <User size={16} weight="bold" className="text-pink-300" />
                </div>
                <span className="font-bold text-xs leading-tight">
                  Atención personalizada
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <WhatsappLogo size={16} weight="fill" className="text-emerald-300" />
                </div>
                <span className="font-bold text-xs leading-tight">
                  Consultanos por WhatsApp
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Gemini Photography of Doctor in Clinic */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-gradient-to-tr from-sky-400/30 to-pink-300/30 backdrop-blur-sm group">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/dr_rodrigo_clinic_hero.jpg"
                  alt="Dr. Rodrigo Julián Melo - Risus Dental"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Floating aesthetic badge top right matching mockup */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0b192c] px-3.5 py-1.5 rounded-full shadow-lg border border-pink-100 flex items-center gap-1.5 text-xs font-bold">
                <span className="text-[#ff2d75]">✨</span>
                <span>Sonrisas reales para una vida más linda</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
