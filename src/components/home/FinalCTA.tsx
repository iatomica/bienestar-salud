"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  WhatsappLogo,
  InstagramLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(
    "Hola Dr. Rodrigo Melo / Risus Dental, quisiera reservar un turno odontológico en Paraguay 2475."
  )}`;

  return (
    <section id="contacto" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-50 via-pink-50/20 to-sky-50/30 border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading and description matching mockup */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff2d75]">
                VISÍTANOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0b192c] leading-tight flex items-center gap-2">
                <span>Tu próxima sonrisa empieza acá</span>
                <span className="text-[#ff2d75]">✨</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                Estamos en el corazón de Buenos Aires. Escribinos por WhatsApp o
                seguinos en Instagram.
              </p>
            </div>

            {/* Center Column: 3D Tooth with Pink Heart matching mockup */}
            <div className="lg:col-span-3 flex justify-center py-2">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 drop-shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/tooth_heart_3d.png"
                  alt="Risus Dental Sonrisa"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: 3 Contact Rows matching mockup */}
            <div className="lg:col-span-4 space-y-3.5">
              {/* Row 1: Dirección */}
              <a
                href="https://maps.google.com/?q=Paraguay+2475,+Cdad.+Autonoma+de+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-sky-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={20} weight="fill" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-gray-800">
                      Dirección:
                    </span>
                    <span className="block text-xs text-gray-600">
                      Paraguay 2475, Cdad. Autónoma de Buenos Aires
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-400 group-hover:text-sky-500 transition-colors shrink-0 ml-2"
                />
              </a>

              {/* Row 2: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <WhatsappLogo size={20} weight="fill" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-gray-800">
                      WhatsApp:
                    </span>
                    <span className="block text-xs text-gray-600">
                      11 2395-3349
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-400 group-hover:text-emerald-500 transition-colors shrink-0 ml-2"
                />
              </a>

              {/* Row 3: Instagram */}
              <a
                href="https://www.instagram.com/risusdental"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-200 hover:border-pink-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <InstagramLogo size={20} weight="bold" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-gray-800">
                      Instagram:
                    </span>
                    <span className="block text-xs text-gray-600">
                      @risusdental · instagram.com/risusdental
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-400 group-hover:text-[#ff2d75] transition-colors shrink-0 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
