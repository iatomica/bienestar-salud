import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import {
  MapPin,
  Phone,
  Clock,
  WhatsappLogo,
  ShieldCheck,
  Stethoscope,
} from "@phosphor-icons/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051c20] text-slate-300 pt-16 pb-12 border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-teal-900/40">
          {/* Column 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-petrol-900 border-2 border-petrol-600 shrink-0">
                <Image
                  src="/images/dra_norma_ramirez.webp"
                  alt="Dra. Norma Ramírez"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-white block leading-tight">
                  {clinicConfig.name}
                </span>
                <span className="text-xs text-cyan-300 font-medium">
                  Médica Clínica · Medicina General & Adultos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Atención médica clínica personalizada en Córdoba Capital. Enfoque preventivo, seguimiento de enfermedades crónicas y turnos programados en Pedro Goyena 1437 y Centro Médico Las Flores.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all border border-emerald-500/30 text-xs font-semibold"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>WhatsApp: (0351) 158-174000</span>
              </a>
            </div>

            <div className="p-3 bg-teal-950/60 rounded-xl border border-teal-800/40 text-[11px] text-slate-300 space-y-1">
              <div className="font-semibold text-cyan-200 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Matrícula Provincial Habilitada · MP Córdoba</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-tight">
                Certificada por el Consejo de Médicos de la Provincia de Córdoba.
              </p>
            </div>
          </div>

          {/* Column 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Servicios Clínicos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Chequeos Clínicos Integrales
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Hipertensión & Riesgo Cardíaco
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Control de Diabetes & Lípidos
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Aptos Físicos Oficiales
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Valoración Preoperatoria
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Atención del Adulto Mayor
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Cuadros Clínicos Agudos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Consultorio Los Naranjos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Consultorio Los Naranjos
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href="https://maps.google.com/?q=Pedro+Goyena+1437,+Cordoba+Capital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Pedro Goyena 1437, Barrio Los Naranjos, Córdoba</span>
              </a>
              <a
                href="tel:+543514650036"
                className="flex items-center gap-2 hover:text-white transition-colors font-medium text-slate-200"
              >
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>Teléfono: (0351) 465-0036</span>
              </a>
              <div className="flex items-start gap-2 pt-1 border-t border-teal-900/40 text-[11px]">
                <Clock size={15} className="text-slate-400 shrink-0 mt-0.5" />
                <span>Lunes a Viernes (Con turno previo)</span>
              </div>
              <p className="text-[10px] text-slate-400">
                Consultorio particular para atención integral y personalizada.
              </p>
            </div>
          </div>

          {/* Column 5: Centro Médico Las Flores */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Centro Médico Las Flores
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Centro Médico Las Flores, Córdoba</span>
              </div>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <WhatsappLogo size={16} weight="fill" className="shrink-0" />
                <span>WhatsApp: (0351) 158-174000</span>
              </a>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-300 hover:text-white transition-colors font-medium"
              >
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>Consultas: +54 9 351 817-4000</span>
              </a>
              <div className="flex items-start gap-2 pt-1 border-t border-teal-900/40 text-[11px]">
                <Clock size={15} className="text-slate-400 shrink-0 mt-0.5" />
                <span>Días y horarios coordinados por turno</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dra. Norma Ramírez. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Pedro Goyena 1437 (Los Naranjos) · Centro Médico Las Flores</span>
            <span>·</span>
            <span>Córdoba Capital, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


