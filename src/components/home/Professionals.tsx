"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Sparkle,
  Star,
  CheckCircle,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface ProfessionalsProps {
  onSelectProfessional?: (profId: string) => void;
}

export const Professionals: React.FC<ProfessionalsProps> = () => {
  const highlights = [
    {
      title: "Trato cercano y humano",
      description: "Escucha, paciencia y empatía.",
      icon: Heart,
    },
    {
      title: "Atención personalizada",
      description: "Adaptada a tus tiempos y necesidades.",
      icon: ShieldCheck,
    },
    {
      title: "Tecnología moderna",
      description: "Para tratamientos más cómodos y seguros.",
      icon: Sparkle,
    },
    {
      title: "Resultados que se notan",
      description: "Sonrisas más sanas y más felices.",
      icon: Star,
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="relative py-16 sm:py-20 bg-gradient-to-r from-[#0070b0] via-[#0084cc] to-[#0070b0] text-white overflow-hidden"
    >
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Doctor inside Neon Pink Halo & Tooth with Heart */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-b from-sky-400/20 to-pink-500/20">
              <div className="relative w-full aspect-[252/208]">
                <Image
                  src="/images/mockup/sobre_mi_doctor.png"
                  alt="Dr. Rodrigo Julián Melo - Risus Dental"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Quote & 4 Features Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-pink-300">
                SOBRE MÍ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Hola, soy el <br />
                <span className="text-[#38bdf8]">Dr. Rodrigo Julián Melo</span>
              </h2>
              <p className="text-sm sm:text-base font-semibold text-sky-100">
                Odontología general • Estética dental • Tratamientos integrales
              </p>
            </div>

            {/* Official WhatsApp Manifesto Quote Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg">
              <p className="text-xs sm:text-sm text-sky-50 leading-relaxed italic">
                &ldquo;Somos un consultorio odontológico privado dedicado con tu
                bienestar y salud bucal. Nuestra misión es brindarte una atención
                personalizada, basada en el respeto, la paciencia y empatía,
                adaptándonos a los tiempos y necesidades de cada paciente.&rdquo;
              </p>
            </div>

            {/* 4 Feature Badges Grid matching mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0b192c]/85 border border-white/20 rounded-2xl p-3.5 flex flex-col justify-between text-left shadow-md hover:bg-[#0b192c] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#008de0] text-white flex items-center justify-center mb-2 shadow-sm">
                      <Icon size={16} weight="bold" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-300 mt-1 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
