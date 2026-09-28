"use client";

import React from "react";
import {
  WhatsappLogo,
  Check,
  MapPin,
  Phone,
  ArrowRight,
  Stethoscope,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#062429] via-[#0b353c] to-[#07252a] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold uppercase tracking-wider border border-white/10 backdrop-blur-md">
          Dra. Norma Ramírez · Médica Clínica
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Cuidá tu salud con una atención médica <br className="hidden sm:inline" />
          cercana, humana y comprometida en Córdoba.
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Coordiná tu consulta hoy mismo por WhatsApp (+54 9 351 817-4000 / 0351 158-174000) o llamá a nuestro consultorio de Pedro Goyena al (0351) 465-0036. Atendemos obras sociales, prepagas y particulares con turnos programados.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-base shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <WhatsappLogo size={24} weight="fill" className="text-slate-950" />
            <span>Solicitar Turno por WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
          >
            <span>Coordinar Consulta Online</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Contact Strip with both locations */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <a
            href="https://maps.google.com/?q=Pedro+Goyena+1437,+Cordoba+Capital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MapPin size={16} className="text-cyan-300" />
            <span>Pedro Goyena 1437 (Los Naranjos) · Tel: (0351) 465-0036</span>
          </a>
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" className="text-emerald-400" />
            <span>Centro Médico Las Flores · WA: (0351) 158-174000</span>
          </a>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Check size={14} weight="bold" />
            Obras Sociales & Prepagas
          </span>
        </div>
      </div>
    </section>
  );
};


