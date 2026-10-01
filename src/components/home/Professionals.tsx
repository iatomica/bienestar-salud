"use client";

import React from "react";
import Image from "next/image";
import { PROFESSIONALS, SUPPORT_TEAM } from "@/data/professionals";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  ShieldCheck,
  Star,
  MapPin,
  CalendarCheck,
  Heart,
  InstagramLogo,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface ProfessionalsProps {
  onSelectProfessional: (profId: string) => void;
}

export const Professionals: React.FC<ProfessionalsProps> = ({ onSelectProfessional }) => {
  const doctor = PROFESSIONALS[0];
  const whatsappText = `Hola Dr. Rodrigo Melo, quisiera agendar una consulta odontológica en Risus Dental.`;
  const whatsappLink = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section id="odontologo" className="py-20 bg-[#fffbfc] border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-pink-500 animate-pulse" />
              Profesional Titular & Responsable
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-charcoal mt-1">
              Conocé al Dr. Rodrigo Julián Melo
            </h2>
            <p className="text-sm sm:text-base text-charcoal-secondary mt-3 leading-relaxed">
              Odontólogo con vocación por la estética dental, el cuidado preventivo y una relación médico-paciente cálida, cercana y basada en el respeto mutuo.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-risus-700 bg-pink-50 px-4 py-2.5 rounded-full border border-pink-200 shadow-soft">
            <ShieldCheck size={18} className="text-pink-500" />
            <span>{doctor.license}</span>
          </div>
        </div>

        {/* Doctor Showcase Spotlight Card */}
        <div className="bg-white rounded-puff border-2 border-pink-200 overflow-hidden shadow-puff mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Doctor Photo */}
            <div className="lg:col-span-5 relative h-96 sm:h-[460px] lg:h-full min-h-[440px] bg-pink-50">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-risus-600 shadow-md border border-pink-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                  {doctor.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-xs text-pink-200">{doctor.role}</p>
              </div>
            </div>

            {/* Doctor Content & Expertise */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:block">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-risus-600 uppercase tracking-wider">
                      Odontólogo · Director en Risus Dental
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 text-xs font-bold">
                      <Star size={12} weight="fill" />
                      <span className="text-charcoal font-black">5.0</span>
                      <span className="text-charcoal-muted font-normal">(212 reseñas)</span>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-charcoal tracking-tight mt-1">
                    {doctor.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-charcoal-secondary leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Core Areas */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold text-charcoal uppercase tracking-wider">
                    Áreas de Especialidad & Enfoque:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal bg-pink-50/80 px-3 py-1.5 rounded-full border border-pink-200"
                      >
                        <CheckCircle size={14} className="text-pink-500" weight="fill" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location pill */}
                <div className="pt-2 text-xs text-charcoal-muted flex items-center gap-2">
                  <MapPin size={16} className="text-risus-500 shrink-0" />
                  <span>
                    <strong>Consultorio privado en:</strong> Paraguay 2475, Recoleta / Barrio Norte, CABA.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Hablar con el Dr. Rodrigo por WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectProfessional(doctor.id)}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border-2 border-pink-200 hover:bg-pink-50 text-risus-600 text-xs sm:text-sm font-bold transition-all shadow-soft"
                >
                  <CalendarCheck size={18} />
                  <span>Agendar Consulta</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Support Strip */}
        <div className="bg-white rounded-puff border border-pink-200 p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
            <h3 className="text-base sm:text-lg font-black text-charcoal">
              Valores que definen a Risus Dental
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_TEAM.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-black text-charcoal flex items-center gap-1.5">
                      <Heart size={16} weight="fill" className="text-pink-500" />
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-risus-600 border border-pink-200">
                      Compromiso
                    </span>
                  </div>
                  <div className="text-xs font-bold text-purple-700 mb-2">
                    {item.role}
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
