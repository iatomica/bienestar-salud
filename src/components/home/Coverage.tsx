"use client";

import React, { useState } from "react";
import { OBRAS_SOCIALES } from "@/config/clinic";
import {
  WhatsappLogo,
  CheckCircle,
  CreditCard,
  FileText,
  ShieldCheck,
  MagnifyingGlass,
  ArrowRight,
  Info,
  Sparkle,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const Coverage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOS, setSelectedOS] = useState<string>("osde");

  const filteredObrasSociales = OBRAS_SOCIALES.filter((os) =>
    os.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentOS = OBRAS_SOCIALES.find((os) => os.id === selectedOS) || OBRAS_SOCIALES[0];

  const whatsappInquiryUrl = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(
    `Hola Dr. Rodrigo Melo, quisiera consultar opciones de pago y reintegros con mi prepaga ${currentOS.name} en Risus Dental.`
  )}`;

  return (
    <section id="obras-sociales" className="py-20 bg-white border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600 flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} weight="fill" className="text-pink-500" />
            Transparencia & Opciones de Pago
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-charcoal mt-1">
            Atención Particular, Prepagas & Reintegros
          </h2>
          <p className="text-sm sm:text-base text-charcoal-secondary mt-3">
            Atención odontológica privada y personalizada en Paraguay 2475, CABA. Emitimos factura oficial para reintegros con tu prepaga y ofrecemos planes de pago claros y accesibles.
          </p>
        </div>

        {/* Interactive Coverage Explorer */}
        <div className="max-w-4xl mx-auto bg-pink-50/40 rounded-puff border border-pink-200 p-6 sm:p-8 shadow-soft">
          {/* Search Input */}
          <div className="relative mb-6">
            <MagnifyingGlass size={18} className="absolute left-4 top-3.5 text-pink-400" />
            <input
              type="text"
              placeholder="Buscá tu prepaga u obra social (ej. OSDE, Swiss Medical, Galeno, Medifé...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-pink-200 bg-white text-sm text-charcoal focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none transition-all"
            />
          </div>

          {/* Obras Sociales Pills Grid */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {filteredObrasSociales.map((os) => {
              const isSelected = selectedOS === os.id;
              return (
                <button
                  key={os.id}
                  type="button"
                  onClick={() => setSelectedOS(os.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-risus-500 to-purple-500 text-white shadow-md shadow-pink-500/20"
                      : "bg-white text-charcoal-secondary border border-pink-200 hover:border-pink-300"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: os.color }}
                  />
                  <span>{os.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Coverage Card */}
          <div className="rounded-2xl bg-white border border-pink-200 p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-100 pb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-sm"
                  style={{ backgroundColor: currentOS.color }}
                >
                  {currentOS.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-black text-charcoal">{currentOS.name}</h3>
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle size={14} weight="fill" />
                    <span>Factura oficial para gestión de reintegro</span>
                  </span>
                </div>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Info details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-charcoal-muted">
              <div className="flex items-start gap-2">
                <FileText size={16} className="text-pink-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5">Comprobante Oficial:</strong>
                  Emisión de factura electrónica detallada por cada prestación odontológica.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CreditCard size={16} className="text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5">Medios de Pago:</strong>
                  Efectivo, transferencia bancaria, tarjetas de débito y crédito, y Mercado Pago.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sparkle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5">Financiación en Cuotas:</strong>
                  Planes de pago para tratamientos de estética, ortodoncia invisible e implantes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
