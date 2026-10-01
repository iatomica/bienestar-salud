import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import {
  MapPin,
  Clock,
  WhatsappLogo,
  ShieldCheck,
  InstagramLogo,
  Star,
  Heart,
  Sparkle,
} from "@phosphor-icons/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181324] text-slate-300 pt-16 pb-12 border-t border-pink-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden rainbow-border-gradient shrink-0 bg-white p-1">
                <Image
                  src="/images/logo.svg"
                  alt="Risus Dental"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block leading-tight">
                  {clinicConfig.name}
                </span>
                <span className="text-xs text-pink-300 font-bold">
                  Odontología · Dr. Rodrigo Julián Melo
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              "{clinicConfig.manifesto}"
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all border border-emerald-500/30 text-xs font-bold"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>WA: 11 2395-3349</span>
              </a>

              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 hover:bg-pink-500 hover:text-white transition-all border border-pink-500/30 text-xs font-bold"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="bold" />
                <span>@risusdental</span>
              </a>
            </div>

            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-pink-300 flex items-center gap-1.5">
                <Star size={14} weight="fill" className="text-amber-400" />
                <span>5.0 Estrellas · 212 Reseñas Verificadas en Google</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-tight">
                Espacio Seguro & Inclusivo 🏳️‍🌈 en Paraguay 2475, Recoleta / CABA.
              </p>
            </div>
          </div>

          {/* Column 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-300">
              Tratamientos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Odontología General
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Estética & Diseño de Sonrisa
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Blanqueamiento Dental
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Carillas de Resina & Porcelana
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Endodoncia Mecanizada
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Implantes Dentales & Cirugía
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Limpieza con Ultrasonido
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-300">
              Consultorio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#experiencia" className="hover:text-white transition-colors">
                  Filosofía Sin Dolor
                </Link>
              </li>
              <li>
                <Link href="#odontologo" className="hover:text-white transition-colors">
                  Dr. Rodrigo Julián Melo
                </Link>
              </li>
              <li>
                <Link href="#opiniones" className="hover:text-white transition-colors">
                  Reseñas Google (212 ★)
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#obras-sociales" className="hover:text-white transition-colors">
                  Reintegros & Financiación
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-300">
              Ubicación & Contacto
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a
                href={clinicConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-pink-400 shrink-0 mt-0.5" />
                <span>Paraguay 2475, Recoleta / Barrio Norte, CABA</span>
              </a>

              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsappLogo size={16} className="text-emerald-400 shrink-0" />
                <span>11 2395-3349</span>
              </a>

              <div className="flex items-start gap-2">
                <Clock size={16} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Lunes a Viernes de 09:00 a 20:00 hs (Con turno previo)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Risus Dental · Todos los derechos reservados. Consultorio Odontológico Privado Dr. Rodrigo Julián Melo.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-pink-400 font-bold">🏳️‍🌈 Espacio Seguro & Libre de Juicios</span>
            <span>Recoleta, Buenos Aires</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
