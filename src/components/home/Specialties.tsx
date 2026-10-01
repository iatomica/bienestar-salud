"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export interface SpecialtiesProps {
  onSelectSpecialty: (specialtyId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({
  onSelectSpecialty,
}) => {
  const services = [
    {
      id: "odontologia-general",
      title: "Odontología general",
      description:
        "Prevención, diagnóstico y tratamientos integrales para una sonrisa sana.",
      gradient: "from-[#ff3868] to-[#ff2256]",
      arrowColor: "text-[#ff2d75]",
      icon: "/images/mockup/service_1_general.png",
    },
    {
      id: "atencion-integral",
      title: "Atención integral",
      description: "Cuidado completo en todas las etapas de tu vida.",
      gradient: "from-[#00bbf0] to-[#0092cf]",
      arrowColor: "text-[#0092cf]",
      icon: "/images/mockup/service_2_integral.png",
    },
    {
      id: "estetica-dental",
      title: "Estética dental",
      description:
        "Carillas, blanqueamiento y tratamientos estéticos para una sonrisa única.",
      gradient: "from-[#ff8fa3] to-[#ff758f]",
      arrowColor: "text-[#ff758f]",
      icon: "/images/mockup/service_3_estetica.png",
    },
    {
      id: "implantes-dentales",
      title: "Implantes dentales",
      description:
        "Soluciones duraderas para recuperar tu sonrisa y funcionalidad.",
      gradient: "from-[#a29bfe] to-[#8075ea]",
      arrowColor: "text-[#8075ea]",
      icon: "/images/mockup/service_4_implantes.png",
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia",
      description:
        "Tratamientos modernos y personalizados para todas las edades.",
      gradient: "from-[#ff3377] to-[#e61e60]",
      arrowColor: "text-[#e61e60]",
      icon: "/images/mockup/service_5_ortodoncia.png",
    },
    {
      id: "limpieza-dental",
      title: "Limpieza dental",
      description:
        "Prevención y salud bucal con una limpieza profesional.",
      gradient: "from-[#38c8f8] to-[#02a9ea]",
      arrowColor: "text-[#02a9ea]",
      icon: "/images/mockup/service_6_limpieza.png",
    },
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching mockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff2d75]">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0b192c] leading-tight">
              Odontología completa <br className="hidden sm:block" />
              para cada etapa de tu vida
            </h2>
          </div>

          <div className="max-w-md space-y-4 lg:text-right">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Desde la prevención hasta los tratamientos más complejos, te
              acompañamos con una atención personalizada, tecnología moderna y
              un enfoque humano.
            </p>
            <button
              onClick={() => onSelectSpecialty("general")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0b192c] hover:text-[#ff2d75] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:border-[#ff2d75]"
            >
              <span>Conocé todos los servicios</span>
              <ArrowRight size={14} weight="bold" />
            </button>
          </div>
        </div>

        {/* 6 Vibrant Cards Grid matching mockup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectSpecialty(service.id)}
              className={`bg-gradient-to-b ${service.gradient} rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group relative overflow-hidden`}
            >
              {/* Subtle light reflection overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div>
                {/* 3D Icon */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-white text-center leading-snug">
                  {service.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-[11px] sm:text-xs text-white/90 text-center mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom White Circle with Arrow */}
              <div className="pt-4 flex justify-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className={service.arrowColor}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
