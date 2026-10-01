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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Doctor inside Neon Pink Halo & Floating 3D Tooth */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Playful top annotation */}
            <div className="absolute -top-4 left-4 z-20 transform -rotate-6 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-semibold text-white shadow-md">
              ✨ Más que dientes, personas :)
            </div>

            {/* Circular Doctor Portrait with Glowing Neon Pink Arch */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#ff2d75] shadow-[0_0_35px_rgba(255,45,117,0.5)] bg-pink-500/20 group">
              <Image
                src="/images/dr_rodrigo_portrait_square.jpg"
                alt="Dr. Rodrigo Julián Melo - Risus Dental"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating 3D Tooth with Heart at bottom left */}
            <div className="absolute -bottom-4 -left-2 sm:left-4 z-20 w-24 h-24 drop-shadow-2xl animate-float">
              <Image
                src="/images/tooth_heart_3d.png"
                alt="Sonrisa y Cuidado Dental"
                fill
                className="object-contain"
              />
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
