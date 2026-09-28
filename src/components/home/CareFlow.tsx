"use client";

import React from "react";
import {
  CalendarCheck,
  Stethoscope,
  FileText,
  WhatsappLogo,
  CheckCircle,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const CareFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Solicitá tu Turno Ágil",
      description: "Escribinos directamente al WhatsApp (+54 9 351 427-6240) o llamá a Sede Central al (0351) 424-0527. Seleccionamos el especialista adecuado según tu síntoma.",
      icon: WhatsappLogo,
    },
    {
      number: "02",
      title: "Confirmación y Horario Puntual",
      description: "Recibís la confirmación con fecha, hora exacta y sede (Alvear 81 o Sarmiento 480). Protocolo escalonado para evitar demoras en sala de espera.",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "Consulta Médica Humanizada",
      description: "Tu médico te escucha con dedicación, realiza el examen clínico correspondiente y responde todas tus dudas en un ambiente confortable.",
      icon: Stethoscope,
    },
    {
      number: "04",
      title: "Estudios, Recetas y Seguimiento",
      description: "Resolvé ecografías, electrocardiograma o análisis en nuestras sedes. Te brindamos recetas oficiales y seguimiento cercano de tu evolución.",
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
            Cuidamos cada etapa de tu visita en Córdoba Capital, combinando agilidad tecnológica y calidez humana.
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

