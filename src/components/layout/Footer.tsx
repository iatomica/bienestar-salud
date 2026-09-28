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
  FirstAid,
} from "@phosphor-icons/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051c20] text-slate-300 pt-16 pb-12 border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-teal-900/40">
          {/* Column 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-petrol-900 p-1 border border-petrol-700 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Logo Bienestar Salud"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-white block leading-tight">
                  {clinicConfig.name}
                </span>
                <span className="text-xs text-cyan-300 font-medium">
                  {clinicConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Policonsultorio de especialidades médicas en Córdoba Capital. Atención integral para toda la familia con sistema de turnos programados para evitar demoras en sala.
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
                <span>WhatsApp: +54 9 351 427-6240</span>
              </a>
            </div>

            <div className="p-3 bg-teal-950/60 rounded-xl border border-teal-800/40 text-[11px] text-slate-300 space-y-1">
              <div className="font-semibold text-cyan-200 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Atención con Matrículas Oficiales Habilitadas</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-tight">
                Profesionales certificados por el Consejo de Médicos de la Provincia de Córdoba.
              </p>
            </div>
          </div>

          {/* Column 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Clínica Médica & General
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Cardiología & ECG
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Pediatría & Salud Infantil
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Traumatología & Ortopedia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Ginecología & Obstetricia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Kinesiología & Fisioterapia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Diagnóstico & Ecografías
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sede Central Alvear */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Sede Central (Alvear)
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href="https://maps.google.com/?q=Gral.+Alvear+81,+Cordoba+Capital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Gral. Alvear 81, X5021EAA Córdoba</span>
              </a>
              <a
                href="tel:+543514240527"
                className="flex items-center gap-2 hover:text-white transition-colors font-medium text-slate-200"
              >
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>Tel: (0351) 424-0527</span>
              </a>
              <div className="flex items-start gap-2 pt-1 border-t border-teal-900/40 text-[11px]">
                <Clock size={15} className="text-slate-400 shrink-0 mt-0.5" />
                <span>Lunes a Viernes 08:00 a 20:00 hs</span>
              </div>
              <p className="text-[10px] text-slate-400">
                Clínica Médica, Pediatría, Kinesiología y Laboratorio.
              </p>
            </div>
          </div>

          {/* Column 5: Sede Especialidades Sarmiento */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Sede Especialidades (Sarmiento)
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href="https://maps.google.com/?q=Domingo+F.+Sarmiento+480,+Cordoba+Capital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>Domingo F. Sarmiento 480, X5000EYJ</span>
              </a>
              <a
                href="tel:+543514276240"
                className="flex items-center gap-2 hover:text-white transition-colors font-medium text-slate-200"
              >
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>Tel: (0351) 427-6240</span>
              </a>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <WhatsappLogo size={16} weight="fill" className="shrink-0" />
                <span>WhatsApp: +54 9 351 427-6240</span>
              </a>
              <div className="flex items-start gap-2 pt-1 border-t border-teal-900/40 text-[11px]">
                <Clock size={15} className="text-slate-400 shrink-0 mt-0.5" />
                <span>Lunes a Viernes 08:00 a 19:30 hs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {clinicConfig.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Gral. Alvear 81 · Domingo F. Sarmiento 480</span>
            <span>·</span>
            <span>Córdoba Capital, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

