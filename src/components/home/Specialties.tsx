"use client";

import React, { useState } from "react";
import { SPECIALTIES } from "@/data/specialties";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  ArrowRight,
  UserCheck,
  Star,
  Heart,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface SpecialtiesProps {
  onSelectSpecialty: (specialtyId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    if (selectedFilter === "featured") return s.featured;
    return true;
  });

  return (
    <section id="especialidades" className="py-20 bg-[#fffbfc] border-b border-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-pink-500 animate-pulse" />
              Tratamientos & Procedimientos Odontológicos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-charcoal mt-1">
              Cuidado Dental Completo: Desde Estética hasta Alta Complejidad
            </h2>
            <p className="text-sm sm:text-base text-charcoal-secondary mt-3 leading-relaxed">
              En Risus Dental brindamos soluciones integrales adaptadas a tus tiempos. Desde blanqueamientos y carillas hasta endodoncias mecanizadas e implantes, siempre con una atención humana, paciente y sin dolor.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === "all"
                  ? "bg-gradient-to-r from-risus-500 to-purple-500 text-white shadow-md shadow-pink-500/20"
                  : "bg-white text-charcoal-secondary border border-pink-200 hover:border-pink-300"
              }`}
            >
              Todos los tratamientos ({SPECIALTIES.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter("featured")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === "featured"
                  ? "bg-gradient-to-r from-risus-500 to-purple-500 text-white shadow-md shadow-pink-500/20"
                  : "bg-white text-charcoal-secondary border border-pink-200 hover:border-pink-300"
              }`}
            >
              Principales
            </button>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((spec) => {
            const whatsappText = `Hola Dr. Rodrigo Melo, quisiera consultar o pedir turno para ${spec.name} en Risus Dental.`;
            const whatsappLink = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={spec.id}
                className={`bg-white rounded-puff border transition-all duration-300 hover:shadow-puff flex flex-col justify-between group p-6 sm:p-7 relative ${
                  spec.featured
                    ? "border-pink-200 shadow-soft"
                    : "border-pink-100 hover:border-pink-200"
                }`}
              >
                <div>
                  {/* Top Badge & Lead Doctor */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-pink-50 text-risus-600 border border-pink-200 flex items-center gap-1">
                      <UserCheck size={13} weight="bold" />
                      {spec.leadDoctor}
                    </span>
                    {spec.featured && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-sm">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg sm:text-xl font-black text-charcoal tracking-tight group-hover:text-risus-600 transition-colors leading-snug">
                    {spec.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-purple-900/80 mt-1.5">
                    {spec.shortDesc}
                  </p>

                  <p className="text-xs text-charcoal-muted mt-3 leading-relaxed">
                    {spec.fullDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="mt-4 pt-4 border-t border-pink-100 space-y-2">
                    {spec.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-charcoal-secondary">
                        <CheckCircle size={14} weight="fill" className="text-pink-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp Consultation Button */}
                <div className="mt-6 pt-4 border-t border-pink-50">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-pink-50 hover:bg-emerald-500 text-risus-700 hover:text-white border border-pink-200 hover:border-emerald-500 font-bold text-xs transition-all shadow-sm group-hover:bg-emerald-500 group-hover:text-white"
                  >
                    <WhatsappLogo size={16} weight="fill" className="text-emerald-500 group-hover:text-white transition-colors" />
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight size={13} className="ml-auto opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
