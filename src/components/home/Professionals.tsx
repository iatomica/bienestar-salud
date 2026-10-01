"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Sparkle,
  Star,
} from "@phosphor-icons/react";

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
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0070b0] via-[#0084cc] to-[#0070b0] text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center"
    >
      {/* 1. Full-Height Image on Left Side with Smooth Center Gradient Fade */}
      <div
        className="absolute top-0 bottom-0 left-0 h-full w-full md:w-[65%] lg:w-[58%] xl:w-[52%] z-0 pointer-events-none select-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.85) 32%, black 100%)",
          maskImage:
            "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.85) 32%, black 100%)",
        }}
      >
        <Image
          src="/images/dr_rodrigo_sobre_mi_clean.jpg"
          alt="Dr. Rodrigo Julián Melo - Risus Dental"
          fill
          priority
          quality={100}
          className="object-cover object-[24%_center]"
        />

        {/* Soft edge gradient overlay that blends and fuses the image smoothly into the blue section background */}
        <div className="absolute inset-y-0 right-0 w-32 sm:w-48 lg:w-60 bg-gradient-to-l from-[#0070b0] via-[#0070b0]/75 to-transparent pointer-events-none" />

        {/* Mobile overlay to ensure text contrast on small mobile viewports */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0070b0]/95 via-[#0070b0]/75 to-transparent sm:hidden pointer-events-none" />
      </div>

      {/* Background Micro-Dots & Glow */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Content Layer: Positioned on the Right Half */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex justify-end">
        <div className="w-full lg:w-1/2 xl:w-[54%] space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-pink-300 bg-white/10 px-3.5 py-1 rounded-full backdrop-blur-sm border border-white/15">
              SOBRE MÍ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
              Hola, soy el <br />
              <span className="text-[#38bdf8]">Dr. Rodrigo Julián Melo</span>
            </h2>
            <p className="text-sm sm:text-base font-semibold text-sky-100">
              Odontología general • Estética dental • Tratamientos integrales
            </p>
          </div>

          {/* Official WhatsApp Manifesto Quote Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-lg">
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
                  className="bg-[#0b192c]/90 border border-white/20 rounded-2xl p-3.5 flex flex-col justify-between text-left shadow-md hover:bg-[#0b192c] transition-colors backdrop-blur-sm"
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
    </section>
  );
};
