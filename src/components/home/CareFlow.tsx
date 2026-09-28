"use client";

import React from "react";
import {
  CalendarCheck,
  Stethoscope,
  FileText,
  WhatsappLogo,
  CheckCircle,
  MapPin,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const CareFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Solicitá tu Turno Previo",
      description: "Escribinos directamente al WhatsApp (+54 9 351 817-4000 / 0351 158-174000) o llamá a Pedro Goyena al (0351) 465-0036.",
      icon: WhatsappLogo,
    },
    {
      number: "02",
      title: "Elegí el Consultorio",
      description: "Coordiná tu visita en el Consultorio Particular de Pedro Goyena 1437 (Barrio Los Naranjos) o en Centro Médico Las Flores según tu cercanía.",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Consulta Médica Dedicada",
      description: "La Dra. Norma Ramírez te recibe con tiempo y calidez, realiza el examen clínico correspondiente y evalúa tu salud de forma integral.",
      icon: Stethoscope,
    },
    {
      number: "04",
      title: "Recetas, Estudios y Seguimiento",
      description: "Indicación de tratamiento con recetario oficial, solicitud de estudios pertinentes y coordinación de controles periódicos.",
      icon: FileText,
    },
  ];

  return (
    <section id="atencion-agil" className="py-20 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700">
            Circuito de Atención Médica
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-1">
            Tu consulta médica organizada, simple y sin demoras
          </h2>
          <p className="text-sm sm:text-base text-charcoal-secondary mt-3">
            Atención clínica pensada para brindarte tranquilidad, previsibilidad y un trato profesional cercano en Córdoba Capital.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-surface-subtle/80 border border-surface-muted transition-all hover:bg-surface hover:shadow-soft group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-petrol-700/30 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-petrol-700 flex items-center justify-center border border-surface-muted shadow-sm group-hover:scale-105 transition-transform">
                      <Icon size={20} weight="duotone" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-charcoal tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/70 flex items-center text-[11px] font-semibold text-petrol-800">
                  <span>Paso {index + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


