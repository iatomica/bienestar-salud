"use client";

import React from "react";
import {
  WhatsappLogo,
  Check,
  MapPin,
  ArrowRight,
  Sparkle,
  CalendarCheck,
  Star,
  Heart,
  InstagramLogo,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-sky-500 text-white relative overflow-hidden">
      {/* Decorative rainbow puff lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-white/25">
          <Sparkle size={13} weight="fill" />
          <span>Risus Dental · Dr. Rodrigo Julián Melo</span>
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Tu sonrisa más libre, sana y cuidada <br className="hidden sm:inline" />
          con empatía y sin dolor te espera.
        </h2>

        <p className="text-sm sm:text-base text-pink-100 max-w-2xl mx-auto leading-relaxed font-medium">
          Coordiná tu visita hoy mismo por WhatsApp al <strong className="text-white">11 2395-3349</strong>. Te esperamos en nuestro consultorio privado de Paraguay 2475, Recoleta / CABA.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-charcoal font-black text-base shadow-2xl transition-all hover:scale-[1.03]"
          >
            <WhatsappLogo size={24} weight="fill" className="text-charcoal" />
            <span>Hablar por WhatsApp (11 2395-3349)</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border-2 border-white/30 backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <CalendarCheck size={18} />
            <span>Agendar Consulta Online</span>
          </button>
        </div>

        {/* Location & Reviews Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/90">
          <a
            href={clinicConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MapPin size={16} weight="bold" />
            <span>Paraguay 2475, CABA (Recoleta / Barrio Norte)</span>
          </a>

          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <Star size={14} weight="fill" />
            <span>5.0 en Google (212 Reseñas)</span>
          </div>

          <a
            href={clinicConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <InstagramLogo size={16} weight="bold" />
            <span>@risusdental</span>
          </a>
        </div>
      </div>
    </section>
  );
};
