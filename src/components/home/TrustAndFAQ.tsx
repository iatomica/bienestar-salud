"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import {
  CaretDown,
  CheckCircle,
  ShieldCheck,
  CalendarBlank,
  WhatsappLogo,
  MapPin,
  Star,
  Heart,
  InstagramLogo,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const TrustAndFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trustSignals = [
    {
      title: "5.0 ★ en 212 Reseñas Google",
      description: "Pacientes reales que recomiendan nuestra atención, puntualidad y la calidez en cada procedimiento.",
      icon: Star,
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      title: "Odontología Sin Dolor & Con Empatía",
      description: "Tiempos respetados para cada persona. Cuidamos a quienes sienten fobia o miedo al dentista.",
      icon: Heart,
      color: "text-pink-500",
      bg: "bg-pink-50",
      border: "border-pink-200",
    },
    {
      title: "Paraguay 2475, CABA",
      description: "Consultorio privado en Recoleta / Barrio Norte, de fácil acceso y transporte cómodo.",
      icon: MapPin,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      title: "WhatsApp Directo 11 2395-3349",
      description: "Coordinación rápida sin intermediarios molestos, recordatorios de turno y seguimiento post.",
      icon: WhatsappLogo,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600">
              Garantía de Confianza & Calidez
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-charcoal mt-1">
              ¿Por qué elegir Risus Dental?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
              Pilares que convierten tu consulta con el Dr. Rodrigo Melo en una experiencia confortable y positiva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.title}
                  className={`p-6 rounded-puff bg-white border ${signal.border} shadow-soft hover:shadow-puff transition-all duration-200 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-2xl ${signal.bg} ${signal.color} flex items-center justify-center mb-3 shadow-sm`}>
                      <Icon size={20} weight="fill" />
                    </div>
                    <h3 className="text-sm font-black text-charcoal">{signal.title}</h3>
                    <p className="text-xs text-charcoal-muted mt-1.5 leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="opiniones" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-risus-600">
              Preguntas Habituales
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-charcoal leading-tight">
              Todo lo que necesitás saber antes de tu consulta
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-secondary leading-relaxed">
              Encontrá respuestas sobre turnos, estética dental, tratamientos complejos y formas de pago en nuestro consultorio de Paraguay 2475, CABA.
            </p>

            {/* Google Rating Box */}
            <div className="pt-4 p-5 rounded-puff bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50 border border-pink-200 space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  <Star size={16} weight="fill" />
                  <Star size={16} weight="fill" />
                  <Star size={16} weight="fill" />
                  <Star size={16} weight="fill" />
                  <Star size={16} weight="fill" />
                </div>
                <span className="text-sm font-black text-charcoal">5.0 / 5.0 en Google</span>
              </div>
              <p className="text-xs text-charcoal-secondary leading-relaxed font-medium">
                Más de 212 pacientes destacan el trato respetuoso, el ambiente libre de prejuicios y la excelencia en estética y endodoncia del Dr. Rodrigo Melo.
              </p>
              <div className="pt-2 border-t border-pink-200/60 flex items-center justify-between text-xs">
                <a
                  href={clinicConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-risus-600 hover:text-risus-700 flex items-center gap-1"
                >
                  <InstagramLogo size={14} weight="bold" />
                  <span>Ver fotos en Instagram</span>
                </a>
                <span className="text-charcoal-muted">@risusdental</span>
              </div>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-pink-300 bg-pink-50/30 shadow-soft"
                      : "border-pink-100 bg-white hover:border-pink-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-charcoal focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <CaretDown
                      size={18}
                      className={`text-risus-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-risus-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-charcoal-secondary leading-relaxed border-t border-pink-100/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
