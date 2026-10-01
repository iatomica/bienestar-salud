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
      className="relative w-full overflow-hidden bg-[#007cc2] text-white"
    >
      {/* 1. Full-bleed clean background image supplied by the user */}
      <div className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] xl:min-h-[820px] flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/hero_banner_clean.jpg"
            alt="Risus Dental - Dr. Rodrigo Julián Melo"
            fill
            priority
            quality={95}
            className="object-cover object-[68%_center] sm:object-center"
          />
          {/* Subtle mobile gradient overlay to ensure text contrast on small mobile viewports */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#007cc2]/90 via-[#007cc2]/60 to-transparent sm:hidden" />
        </div>

        {/* 2. Interactive Overlay Content Aligned to Left Negative Space */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl space-y-6 sm:space-y-7">
            {/* Eyebrow Label */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90 drop-shadow-sm">
                ODONTOLOGÍA EN BUENOS AIRES
              </span>
            </div>

            {/* Main Headline: "Sonreír te cambia todo :)" with Doodles */}
            <div className="relative">
              {/* Three Pink Diagonal Brush Accents at top left */}
              <div className="absolute -top-6 -left-3 flex gap-1 transform -rotate-12">
                <span className="w-1.5 h-4 bg-[#ff2d75] rounded-full transform -rotate-12" />
                <span className="w-1.5 h-5 bg-[#ff2d75] rounded-full transform -rotate-6" />
                <span className="w-1.5 h-4 bg-[#ff2d75] rounded-full" />
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04] text-white drop-shadow-md">
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

              {/* Hand-drawn note: "Tu sonrisa en buenas manos ♡" pointing to Doctor */}
              <div className="hidden md:flex flex-col items-center absolute -top-2 left-[310px] lg:left-[340px] xl:left-[380px] transform -rotate-[8deg] select-none text-white pointer-events-none drop-shadow-md">
                <span className="text-xs sm:text-sm font-bold italic tracking-wide leading-tight text-center text-sky-100 font-sans">
                  Tu sonrisa <br />
                  en buenas <br />
                  manos
                </span>
                {/* Cute heart outline doodle */}
                <svg
                  className="w-5 h-5 text-sky-200 mt-0.5"
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
            <p className="text-sm sm:text-base lg:text-lg text-white/95 font-medium max-w-md sm:max-w-lg leading-relaxed drop-shadow-sm">
              Cuidado dental profesional en un espacio moderno, cercano y pensado
              para vos.
            </p>

            {/* CTAs matching mockup: Pink pill + Dark WhatsApp pill */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
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
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-white text-xs sm:text-sm drop-shadow-sm">
              {/* Badge 1 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Star size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  5 estrellas
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <ChatCircleDots size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  212 reseñas <br /> en Google
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <User size={16} weight="regular" className="text-white" />
                </div>
                <span className="font-semibold text-xs leading-tight">
                  Atención <br /> personalizada
                </span>
              </div>

              {/* Badge 4 */}
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
        </div>

        {/* 3. Doodles & Badges positioned over the Doctor and Clinic on desktop */}
        {/* Right Corner Doodle: "Sonrisas reales para una vida más linda ♡" */}
        <div className="hidden lg:flex flex-col items-center absolute top-14 right-10 xl:right-16 select-none pointer-events-none drop-shadow-md transform rotate-[4deg]">
          <span className="text-xs sm:text-sm font-bold italic tracking-wide text-white/95 text-center font-sans leading-tight">
            Sonrisas <br />
            reales <br />
            para una <br />
            vida más <br />
            linda
          </span>
          <svg
            className="w-5 h-5 text-pink-200 mt-1"
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

        {/* Doctor Name Tag Badge on Doctor's Scrub Pocket */}
        <div className="hidden sm:block absolute top-[64%] left-[61%] lg:left-[61%] xl:left-[62%] transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-0.5 rounded shadow-sm border border-gray-200/80 tracking-wide">
            Dr. Rodrigo Julián Melo
          </div>
        </div>
      </div>
    </section>
  );
};
