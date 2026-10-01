"use client";

import React from "react";
import {
  CalendarCheck,
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Smiley,
  Heart,
  Sparkle,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const CareFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Escribinos al WhatsApp",
      description: "Mandanos un mensaje al 11 2395-3349 (+54 9 11 2395-3349). Contanos qué necesitás o qué te gustaría mejorar de tu sonrisa.",
      icon: WhatsappLogo,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      number: "02",
      title: "Llegada a Paraguay 2475",
      description: "Te esperamos en nuestro consultorio boutique en Recoleta / Barrio Norte. Un espacio sereno con música suave, sin esperas incómodas.",
      icon: MapPin,
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
    {
      number: "03",
      title: "Charla & Diagnóstico Cercano",
      description: "El Dr. Rodrigo Melo evalúa tu salud bucal, escucha tus deseos y dudas sin juzgarte y diseña un plan a tu medida.",
      icon: Heart,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      number: "04",
      title: "Tu Sonrisa Libre y Sana",
      description: "Realizamos los tratamientos con la máxima delicadeza, sin dolor y con tecnología moderna. Te vas sonriendo con orgullo y confianza.",
      icon: Smiley,
      color: "text-sky-500",
      bg: "bg-sky-50",
    },
  ];

  return (
    <section className="py-20 bg-[#fffbfc] border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600">
            Paso a Paso en Risus Dental
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-charcoal mt-1">
            Una atención dental pensada para tu tranquilidad
          </h2>
          <p className="text-sm sm:text-base text-charcoal-secondary mt-3">
            Desde el primer mensaje hasta tu sonrisa terminada, cada momento está acompañado por el Dr. Rodrigo Melo.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-puff bg-white border border-pink-100 shadow-soft transition-all hover:shadow-puff hover:-translate-y-1 duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-pink-300 font-mono tracking-tighter">
                      {step.number}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon size={22} weight="fill" />
                    </div>
                  </div>

                  <h3 className="text-base font-black text-charcoal tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-pink-100 flex items-center text-[11px] font-bold text-risus-600 font-mono">
                  <span>ETAPA 0{index + 1} DE 04</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
