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
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const ClinicExperience: React.FC = () => {
  return (
    <section id="sedes" className="py-20 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photographic Gallery with WebP Medical Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-56 sm:h-64 bg-slate-100">
                <Image
                  src="/images/medical_care_consultation.webp"
                  alt="Consulta médica dedicada y personalizada en Bienestar Salud"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Atención Clínica Humanizada
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-40 sm:h-48 bg-slate-100">
                <Image
                  src="/images/medical_diagnostics_ecography.webp"
                  alt="Equipamiento de diagnóstico y ecografía en Bienestar Salud"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Diagnóstico & Ecografía
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-40 sm:h-48 bg-slate-100">
                <Image
                  src="/images/hero_medical_banner.webp"
                  alt="Consultorios médicos confortables en Córdoba"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Consultorios Climatizados
                </div>
              </div>

              {/* Dual Branch Highlight Box */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-petrol-800 to-petrol-900 text-white flex flex-col justify-between h-56 sm:h-64 border border-petrol-700 shadow-soft">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center mb-3">
                    <MapPin size={20} weight="duotone" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Dos Sedes Céntricas en Córdoba
                  </h4>
                  <p className="text-xs text-petrol-200 mt-2 leading-relaxed">
                    Sede Central (Alvear 81) y Dirección de Especialidades (Sarmiento 480). Facilidad de acceso y consultorios modernos.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 pt-2 border-t border-white/10">
                  <CheckCircle size={14} weight="fill" />
                  <span>Turnos sincronizados por WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Environmental description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-petrol-600" />
              Compromiso Clínico & Atención al Paciente
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-tight">
              Una experiencia médica pensada para tu tranquilidad y bienestar
            </h2>

            <p className="text-sm sm:text-base text-charcoal-secondary leading-relaxed">
              En Bienestar Salud entendemos que tu salud no puede esperar en salas colmadas. Reorganizamos la atención médica en Córdoba con un sistema de turnos programados, médicos comprometidos y dos centros coordinados para brindarte un servicio ágil, cálido y eficiente.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <Clock size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Puntualidad y Turnos Escalonados
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Asignamos intervalos reales entre pacientes para evitar esperas excesivas en sala y garantizar que el profesional médico te dedique el tiempo necesario en cada consulta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <Stethoscope size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Cuerpo Médico Interdisciplinario
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Médicos clínicos, cardiólogos, pediatras, traumatólogos y ginecólogos en constante interconsulta para ofrecerte un diagnóstico preciso y un tratamiento integral.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Atención por Obras Sociales & Particulares
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Convenios con las principales obras sociales (APROSS, OSDE, Swiss Medical, Galeno, Medifé, etc.) y aranceles particulares transparentes para que el acceso a la salud sea simple.
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
                <span>Pedir Turno por WhatsApp (Sarmiento 480)</span>
              </a>

              <a
                href="tel:+543514240527"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-slate-100 text-charcoal font-semibold text-xs sm:text-sm border border-slate-200 transition-all"
              >
                <span>Llamar a Sede Alvear: (0351) 424-0527</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

