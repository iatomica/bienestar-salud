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
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#006eb2] via-[#007cc2] to-[#0082cb] text-white pt-8 pb-14 lg:py-16 xl:py-20"
    >
      {/* Background Soft Glows & Micro-Pattern */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-sky-300/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT HALF (Col 1 to 6): Typography, Doodles, Action Buttons & Trust Stats */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Eyebrow Label */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90 bg-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm border border-white/15 drop-shadow-sm">
                ODONTOLOGÍA EN BUENOS AIRES
              </span>
            </div>

            {/* Main Title: "Sonreír te cambia todo :)" with Doodles */}
            <div className="relative">
              {/* Three Pink Diagonal Brush Accents at top left */}
              <div className="absolute -top-6 -left-2 flex gap-1 transform -rotate-12">
                <span className="w-1.5 h-4 bg-[#ff2d75] rounded-full transform -rotate-12" />
                <span className="w-1.5 h-5 bg-[#ff2d75] rounded-full transform -rotate-6" />
                <span className="w-1.5 h-4 bg-[#ff2d75] rounded-full" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white drop-shadow-md">
                Sonreír <br />
                te cambia <br />
                <span className="relative inline-block">
                  todo
                  {/* Pink Smile Curve Underline */}
                  <svg
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-5 text-[#ff2d75] filter drop-shadow"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 4 4 C 30 19, 70 19, 96 4"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-[#ff2d75] ml-1.5 inline-block transform translate-y-1">
                  :)
                </span>
              </h1>

              {/* Hand-drawn note: "Tu sonrisa en buenas manos ♡" */}
              <div className="hidden sm:flex items-center gap-2 absolute top-12 right-0 sm:right-6 lg:right-0 transform rotate-[-6deg] text-sky-100 select-none drop-shadow-md pointer-events-none">
                <span className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-xs sm:text-sm font-semibold">
                  ✨ Tu sonrisa en buenas manos
                </span>
                <svg
                  className="w-5 h-5 text-sky-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-sky-50 font-normal max-w-lg leading-relaxed drop-shadow-sm">
              Cuidado dental profesional en un espacio moderno, cercano y pensado
              para vos.
            </p>

            {/* CTA Buttons: Pink pill + Dark WhatsApp pill */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="bg-[#ff2d75] hover:bg-[#e61b63] text-white text-sm sm:text-base font-bold px-7 sm:px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.03] shadow-lg shadow-pink-600/35 flex items-center gap-2"
              >
                <span>Reservar turno</span>
                <ArrowRight size={18} weight="bold" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b192c]/95 hover:bg-[#152a45] text-white text-sm sm:text-base font-bold px-6 sm:px-7 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.03] shadow-lg flex items-center gap-2 border border-white/20 backdrop-blur-sm"
              >
                <WhatsappLogo
                  size={20}
                  weight="fill"
                  className="text-emerald-400"
                />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* 4 Feature Badges in a Row matching mockup */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white text-xs sm:text-sm drop-shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Star size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  5 estrellas
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <ChatCircleDots size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  212 reseñas <br /> en Google
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <User size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  Atención <br /> personalizada
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <WhatsappLogo size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  Consultanos <br /> por WhatsApp
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT HALF (Col 7 to 12): Sized Image with Soft Edge Gradient Melting into Blue Background */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
              {/* Aspect ratio container ensuring natural crisp resolution without pixelation */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src="/images/hero_banner_clean.jpg"
                  alt="Dr. Rodrigo Julián Melo en consultorio Risus Dental"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-[70%_center] group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Left Edge Gradient Blend - Fuses smoothly into the blue section background */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#007cc2] via-[#007cc2]/50 to-transparent pointer-events-none" />

                {/* Bottom Edge subtle blend for mobile */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#007cc2] to-transparent pointer-events-none sm:hidden" />
              </div>

              {/* Floating aesthetic note top right */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#0b192c] px-3.5 py-1.5 rounded-full shadow-lg border border-pink-100 flex items-center gap-1.5 text-xs font-bold select-none">
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
