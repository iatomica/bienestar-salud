"use client";

import React from "react";
import Image from "next/image";
import { PROFESSIONALS, SUPPORT_TEAM } from "@/data/professionals";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  IdentificationBadge,
  UserCheck,
  ShieldCheck,
  Stethoscope,
  MapPin,
  Phone,
  CalendarCheck,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface ProfessionalsProps {
  onSelectProfessional: (profId: string) => void;
}

export const Professionals: React.FC<ProfessionalsProps> = ({ onSelectProfessional }) => {
  const doctor = PROFESSIONALS[0];
  const whatsappText = `Hola Dra. Norma Ramírez, quisiera solicitar un turno para una consulta médica clínica.`;
  const whatsappLink = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section id="doctora" className="py-20 bg-background border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-petrol-600" />
              Perfil Profesional & Trayectoria
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-1">
              Sobre la Dra. Norma Ramírez
            </h2>
            <p className="text-sm sm:text-base text-charcoal-secondary mt-3 leading-relaxed">
              Médica clínica matriculada en Córdoba con vocación por la medicina familiar, la prevención temprana y el acompañamiento constante de cada persona.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-petrol-800 bg-petrol-50 px-4 py-2 rounded-xl border border-petrol-200">
            <ShieldCheck size={18} className="text-emerald-600" />
            <span>{doctor.license}</span>
          </div>
        </div>

        {/* Doctor Showcase Spotlight Card */}
        <div className="bg-surface rounded-3xl border border-petrol-200/80 overflow-hidden shadow-elevated mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Doctor Photo */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-auto min-h-[380px] bg-petrol-900">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-petrol-900 shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {doctor.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-xs text-cyan-200">{doctor.role}</p>
              </div>
            </div>

            {/* Doctor Content & Expertise */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:block">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-petrol-700 uppercase tracking-wider">
                      Médica Clínica & General
                    </span>
                    <span className="text-xs font-mono font-bold bg-petrol-50 text-petrol-800 px-2.5 py-1 rounded-md border border-petrol-200">
                      {doctor.license}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mt-1">
                    {doctor.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-charcoal-secondary leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Core Areas */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
                    Áreas de Práctica & Enfoque Clínico:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-surface-subtle px-3 py-1.5 rounded-lg border border-surface-muted"
                      >
                        <CheckCircle size={14} className="text-emerald-600" weight="fill" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Locations pill */}
                <div className="pt-2 text-xs text-slate-600 flex items-center gap-2">
                  <MapPin size={16} className="text-petrol-600 shrink-0" />
                  <span><strong>Atención presencial en:</strong> Pedro Goyena 1437 (Barrio Los Naranjos) y Centro Médico Las Flores.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-surface-muted flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Solicitar Turno con la Dra. Norma</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectProfessional(doctor.id)}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-surface-muted hover:bg-surface-subtle text-charcoal text-xs sm:text-sm font-semibold transition-all"
                >
                  <CalendarCheck size={18} className="text-petrol-700" />
                  <span>Agendar por formulario online</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Branches Strip */}
        <div className="bg-surface rounded-2xl border border-surface-muted p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="text-base sm:text-lg font-bold text-charcoal">
              Consultorios Médicos de Atención en Córdoba Capital
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_TEAM.map((branch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-subtle/80 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-charcoal flex items-center gap-1.5">
                      <MapPin size={16} className="text-petrol-700" />
                      {branch.name}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-petrol-100/70 text-petrol-800">
                      Sede Activa
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-petrol-700 mb-2">
                    {branch.role}
                  </div>
                  <p className="text-xs text-charcoal-secondary leading-relaxed">
                    {branch.description}
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


