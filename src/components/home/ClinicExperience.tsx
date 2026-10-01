"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Sparkle,
  Clock,
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Smiley,
  InstagramLogo,
  Star,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const ClinicExperience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-white border-b border-pink-100 relative overflow-hidden">
      {/* Background soft pastel puffs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-pink-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Aesthetic Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Clinic Interior Feature Image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-puff border-2 border-pink-200 aspect-[16/10] bg-pink-50">
              <Image
                src="/images/risus_clinic_interior.jpg"
                alt="Consultorio Boutique Risus Dental - Interior en Paraguay 2475 CABA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-300">
                    Boutique Dental Studio
                  </span>
                  <h4 className="text-base font-black leading-tight drop-shadow-sm">
                    Consultorio Risus Dental · Paraguay 2475
                  </h4>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  Recoleta, CABA
                </span>
              </div>
            </div>

            {/* Sub-gallery with Doctor & Rainbow Vibe */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[24px] overflow-hidden shadow-soft border border-pink-200 aspect-video bg-pink-50">
                <Image
                  src="/images/dr_rodrigo_melo_original.png"
                  alt="Dr. Rodrigo Julián Melo en el consultorio Risus Dental"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-xl text-[10px] text-charcoal font-bold text-center">
                  Dr. Rodrigo Melo · En Sillón
                </div>
              </div>

              {/* Rainbow Puff Philosophy Box */}
              <div className="rounded-[24px] p-5 bg-gradient-to-br from-pink-500 via-purple-500 to-sky-400 text-white flex flex-col justify-between shadow-soft">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-base">🏳️‍🌈</span>
                    <span className="text-xs font-extrabold uppercase tracking-wide">
                      Espacio Inclusivo
                    </span>
                  </div>
                  <h5 className="text-sm font-black leading-snug">
                    Respeto, empatía y calidez en cada atención.
                  </h5>
                </div>
                <div className="text-[11px] font-bold flex items-center gap-1 pt-2 border-t border-white/20">
                  <Star size={13} weight="fill" className="text-amber-300" />
                  <span>5.0 estrellas en 212 reseñas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Doctor Consultation description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-pink-500 animate-pulse" />
              Filosofía & Bienestar en el Sillón Dental
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-charcoal leading-tight">
              Una experiencia dental donde tu tranquilidad y tu sonrisa son lo primero
            </h2>

            <p className="text-sm sm:text-base text-charcoal-secondary leading-relaxed">
              En <strong className="text-charcoal font-bold">Risus Dental</strong> desarmamos el miedo al dentista. Sabemos que muchas personas postergan su salud bucal por malas experiencias pasadas o temor al dolor. Por eso, diseñamos un espacio relajante, con música suave, aromaterapia y una comunicación clara y transparente.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Smiley size={20} weight="bold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Atención sin prisas ni dolor
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Nos adaptamos a tu ritmo. Hacemos las pausas necesarias y aplicamos anestesias de última generación para que no sientas molestias.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                <div className="w-9 h-9 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Heart size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Comunidad inclusiva & Espacio Seguro 🏳️‍🌈
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Un consultorio abierto a todas las identidades, cuerpos y edades. Atención cálida basada en la escucha activa y el respeto absoluto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={20} weight="bold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Puntualidad y turnos coordinados
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Sin salas de espera llenas ni demoras interminables. Tu turno está reservado exclusivamente para vos.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct contact CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-pink-50 hover:bg-pink-100 text-risus-600 border border-pink-200 font-bold text-xs transition-all"
              >
                <InstagramLogo size={18} weight="bold" />
                <span>Seguinos en Instagram (@risusdental)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
