"use client";

import React from "react";
import Image from "next/image";
import {
  Heartbeat,
  ShieldCheck,
  Sparkle,
  Clock,
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Stethoscope,
  Phone,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const ClinicExperience: React.FC = () => {
  return (
    <section id="sedes" className="py-20 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photographic Gallery with Dra. Norma Ramírez Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-56 sm:h-64 bg-slate-100">
                <Image
                  src="/images/dra_norma_ramirez.webp"
                  alt="Dra. Norma Ramírez, médica clínica en Córdoba"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Dra. Norma Ramírez · Médica Clínica
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-40 sm:h-48 bg-slate-100">
                <Image
                  src="/images/medical_care_consultation.webp"
                  alt="Examen y control clínico exhaustivo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Examen Clínico y Control
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-40 sm:h-48 bg-slate-100">
                <Image
                  src="/images/dra_norma_consulta.webp"
                  alt="Consulta médica dedicada con la Dra. Norma Ramírez"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Consulta Médica Dedicada
                </div>
              </div>

              {/* Dual Branch Highlight Box */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-petrol-800 to-petrol-900 text-white flex flex-col justify-between h-56 sm:h-64 border border-petrol-700 shadow-soft">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center mb-3">
                    <MapPin size={20} weight="duotone" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Dos Puntos de Atención en Córdoba
                  </h4>
                  <p className="text-xs text-petrol-200 mt-2 leading-relaxed">
                    Consultorio Particular en Pedro Goyena 1437 (Barrio Los Naranjos) y atención programada en Centro Médico Las Flores.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 pt-2 border-t border-white/10">
                  <CheckCircle size={14} weight="fill" />
                  <span>Turnos coordinados por WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Doctor Consultation description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-petrol-600" />
              Vocación Médica & Cercanía Humana
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-tight">
              Una consulta médica con tiempo para escucharte y cuidarte
            </h2>

            <p className="text-sm sm:text-base text-charcoal-secondary leading-relaxed">
              La Dra. Norma Ramírez concibe la medicina clínica como una práctica de escucha activa, empatía y rigor científico. Sin apuros ni esperas interminables, cada consulta está diseñada para comprender tu situación de salud de forma integral y brindarte un plan de cuidado claro y personalizado.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <Clock size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Tiempo Exclusivo y Sin Apuros
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Consultas con duración adecuada para un examen físico minucioso, revisión exhaustiva de estudios previos y explicación clara de cada diagnóstico o indicación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <Stethoscope size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Seguimiento Longitudinal y Personalizado
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Monitoreo continuo de hipertensión arterial, diabetes y enfermedades crónicas. Tu médica de cabecera que conoce tu historia clínica a lo largo del tiempo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Obras Sociales, Prepagas y Particulares
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Atención por APROSS, OSDE, Swiss Medical, Galeno, Sancor Salud, Medifé, PAMI y consultas privadas con aranceles accesibles y emisión de factura para reintegro.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Pedir Turno por WhatsApp: (0351) 158-174000</span>
              </a>

              <a
                href="tel:+543514650036"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-slate-100 text-charcoal font-semibold text-xs sm:text-sm border border-slate-200 transition-all"
              >
                <Phone size={16} className="text-petrol-700" />
                <span>Llamar a Consultorio Pedro Goyena: (0351) 465-0036</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


