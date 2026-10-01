"use client";

import React from "react";
import Image from "next/image";
import {
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Star,
  Sparkle,
  ArrowRight,
  Heart,
  CalendarCheck,
  ShieldCheck,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0f6] via-[#fdf2f8] to-[#ffffff] text-charcoal pt-8 sm:pt-12 pb-16 lg:pb-24">
      {/* Decorative ambient rainbow puff clouds and pastel glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_0.8px,transparent_0.8px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-pink-200 shadow-soft text-xs font-bold text-risus-600">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
            <span>🏳️‍🌈 Espacio Seguro & Libre de Juicios</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-purple-200 shadow-soft text-xs font-bold text-purple-700">
            <div className="flex text-amber-400">
              <Star size={13} weight="fill" />
              <Star size={13} weight="fill" />
              <Star size={13} weight="fill" />
              <Star size={13} weight="fill" />
              <Star size={13} weight="fill" />
            </div>
            <span>5.0 en Google</span>
            <span className="text-charcoal-muted font-normal">• 212 reseñas</span>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-charcoal-muted bg-white/60 px-3 py-1.5 rounded-full border border-pink-100">
            <MapPin size={13} className="text-risus-500" />
            <span>Paraguay 2475, CABA</span>
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-risus-600 font-mono">
                <Sparkle size={16} weight="fill" className="text-risus-500 animate-pulse" />
                Odontología Privada en Recoleta / CABA
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08] text-charcoal">
                TU SONRISA LIBRE, <br />
                <span className="rainbow-gradient-text drop-shadow-sm">
                  RADIANTE Y SIN DOLOR.
                </span>
              </h1>
            </div>

            {/* Official WhatsApp Manifesto Statement */}
            <div className="p-4 sm:p-5 rounded-puff bg-white/90 border border-pink-200 shadow-puff relative">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 to-purple-400 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Heart size={20} weight="fill" />
                </div>
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600 mb-1">
                    Nuestra Filosofía en Risus Dental
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-secondary leading-relaxed font-normal italic">
                    "{clinicConfig.manifesto}"
                  </p>
                </div>
              </div>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-pink-100 shadow-soft">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">
                    ✨
                  </div>
                  <span className="text-xs font-extrabold text-charcoal">ESTÉTICA DENTAL</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">
                  Blanqueamiento, carillas & armonía dental personalizada.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-purple-100 shadow-soft">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
                    🦷
                  </div>
                  <span className="text-xs font-extrabold text-charcoal">ATENCIÓN INTEGRAL</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">
                  Salud bucal general, prevención y limpieza ultrasónica.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-sky-100 shadow-soft">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">
                    🛡️
                  </div>
                  <span className="text-xs font-extrabold text-charcoal">ALTA COMPLEJIDAD</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">
                  Endodoncia mecanizada, implantes y cirugía sin dolor.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
              >
                <WhatsappLogo size={22} weight="fill" />
                <span>Pedir Turno por WhatsApp</span>
                <ArrowRight size={16} weight="bold" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-pink-50 border-2 border-pink-300 text-risus-600 font-extrabold text-sm sm:text-base transition-all shadow-soft hover:scale-[1.02]"
              >
                <CalendarCheck size={20} weight="bold" />
                <span>Agendar Consulta Online</span>
              </button>
            </div>

            {/* Address & Hours Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-muted pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-risus-500 shrink-0" />
                <span>Paraguay 2475, Recoleta / Barrio Norte, CABA</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Lunes a Viernes 09:00 a 20:00 hs</span>
            </div>
          </div>

          {/* Right Column: Enhanced Doctor Portrait Card with Rainbow Puff Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft decorative background circles */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-400/25 via-purple-300/25 to-sky-300/25 rounded-[36px] blur-xl" />

            <div className="relative w-full max-w-md rounded-[32px] overflow-hidden bg-white p-3 shadow-puff border-2 border-pink-200 animate-float-puff">
              {/* Doctor Enhanced Photo */}
              <div className="relative aspect-[3/4] w-full rounded-[24px] overflow-hidden bg-pink-50">
                <Image
                  src="/images/dr_rodrigo_melo.jpg"
                  alt="Dr. Rodrigo Julián Melo - Odontólogo Risus Dental"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />

                {/* Top Badge on Photo */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono font-black text-risus-600 shadow-sm border border-pink-100 flex items-center gap-1">
                    <Sparkle size={13} weight="fill" className="text-pink-500" />
                    <span>ODONTÓLOGO TITULAR</span>
                  </span>
                </div>

                {/* Verified 5.0 Stars Badge on Photo */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-100 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-black text-charcoal leading-tight">
                        Dr. Rodrigo Julián Melo
                      </h3>
                      <p className="text-[11px] text-charcoal-muted">
                        Odontología Integral & Estética Dental
                      </p>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex text-amber-400">
                        <Star size={12} weight="fill" />
                        <Star size={12} weight="fill" />
                        <Star size={12} weight="fill" />
                        <Star size={12} weight="fill" />
                        <Star size={12} weight="fill" />
                      </div>
                      <span className="text-[10px] font-bold text-risus-600">
                        212 Opiniones Google
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-pink-100 flex items-center justify-between text-[10px] font-mono text-charcoal-muted">
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <CheckCircle size={12} weight="fill" />
                      <span>Atención personalizada</span>
                    </span>
                    <span className="text-purple-600 font-bold">Paraguay 2475</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
