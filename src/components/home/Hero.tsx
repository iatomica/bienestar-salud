"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Phone,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  FirstAid,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#072429] via-[#0d3b42] to-[#082a30] text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#388288_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      {/* Main Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 lg:pb-16 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cyan-200 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Policonsultorio de Especialidades Médicas</span>
          </div>

          <span className="hidden sm:inline-block text-xs font-medium text-cyan-100/70">
            Córdoba Capital · 2 Sedes: Alvear 81 y Sarmiento 480
          </span>
        </div>

        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Big Typographic Banner Title & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-cyan-300 flex items-center gap-2">
                <FirstAid size={18} weight="fill" className="text-cyan-300" />
                Bienestar Salud · Servicios Médicos
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-[1.08]">
                ESPECIALIDADES MÉDICAS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-teal-100 to-emerald-200 drop-shadow-sm">
                  CON ATENCIÓN ÁGIL Y SIN ESPERAS
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              Cuidamos tu salud y la de tu familia en Córdoba. Clínica médica, cardiología, pediatría, traumatología, ginecología y diagnóstico, con un sistema de turnos programados diseñado para brindarte el tiempo y respeto que merecés.
            </p>

            {/* Flyer-inspired Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">2 SEDES EN CBA</div>
                  <div className="text-[11px] text-slate-300">Alvear y Sarmiento</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-500/30">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">TURNOS ÁGILES</div>
                  <div className="text-[11px] text-slate-300">Sin antesalas colmadas</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">OBRAS SOCIALES</div>
                  <div className="text-[11px] text-slate-300">APROSS, OSDE, Swiss, etc.</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Direct WhatsApp Consultation */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsappLogo size={22} weight="fill" className="text-emerald-950" />
                <span>Pedir Turno por WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all"
              >
                <CalendarCheck size={18} />
                <span>Coordinar Consulta Online</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-slate-300/90">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                Atención médica personalizada
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-cyan-300" />
                Sede Central: Alvear 81 · Tel: (0351) 424-0527
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={16} className="text-cyan-300" />
                Sede Sarmiento 480 · Tel: (0351) 427-6240
              </span>
            </div>
          </div>

          {/* Right Column: Panoramic Medical Banner Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/15 to-white/5 p-2 backdrop-blur-md border border-white/20 shadow-2xl group">
              <div className="relative rounded-[22px] overflow-hidden bg-[#0c373d] h-[360px] sm:h-[430px]">
                {/* Modern High-Tech Clinic Banner Image */}
                <Image
                  src="/images/hero_medical_banner.webp"
                  alt="Consultorios médicos de Bienestar Salud en Córdoba"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle gradient vignette to blend typography and cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Top Status Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-cyan-200 border border-white/15 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Policonsultorio Integral
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-white/90 text-petrol-900 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    Córdoba
                  </span>
                </div>

                {/* Floating Bottom Card: Clinic Location & Care Commitment */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-left shadow-xl space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                        <MapPin size={14} className="text-cyan-400" />
                        Dos Sedes en Córdoba Capital
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 mt-0.5">
                        Alvear 81 · Domingo F. Sarmiento 480
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 shrink-0">
                      Turno Programado
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="text-cyan-300 font-semibold">10+ Especialidades Médicas</span>
                    <span>APROSS · OSDE · Prepagas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Info Bar */}
      <div className="bg-[#051c20] border-t border-white/10 py-3 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">●</span>
            <span className="font-medium text-white">Línea directa WhatsApp de Especialidades:</span>
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white underline font-semibold flex items-center gap-1"
            >
              +54 9 351 427-6240
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Sede Central: Alvear 81 · Tel (0351) 424-0527</span>
            <span>·</span>
            <span>Lunes a Viernes 08:00 a 20:00 hs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

