"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  CaretDown,
  CheckCircle,
} from "@phosphor-icons/react";
import { faqData } from "@/data/faq";

export const TrustAndFAQ: React.FC = () => {
  const [showFaq, setShowFaq] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const reviews = [
    {
      author: "María Fernanda G.",
      time: "Hace 2 semanas",
      text: "Excelente atención. El Dr. Rodrigo es muy profesional, explica todo con paciencia y te hace sentir súper tranquilo. El consultorio es hermoso y moderno.",
      avatarBg: "bg-pink-100 text-pink-700",
      initials: "MF",
    },
    {
      author: "Lucas M.",
      time: "Hace 1 mes",
      text: "¡Un genio! Me hice limpieza y blanqueamiento y los resultados fueron increíbles. La atención es cálida y súper profesional.",
      avatarBg: "bg-sky-100 text-sky-700",
      initials: "LM",
    },
    {
      author: "Valentina R.",
      time: "Hace 3 semanas",
      text: "Siempre tuve miedo al dentista y acá la experiencia fue totalmente diferente. Te escuchan, te explican y todo el equipo es un amor. Súper recomendado.",
      avatarBg: "bg-purple-100 text-purple-700",
      initials: "VR",
    },
  ];

  return (
    <section id="resenas" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching mockup */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff2d75]">
              RESEÑAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0b192c] leading-tight flex items-center gap-2">
              <span>La confianza de nuestros pacientes nos impulsa a seguir</span>
              <span className="text-[#ff2d75]">✨</span>
            </h2>
          </div>

          {/* Google Reviews Badge matching mockup */}
          <div className="flex items-center gap-4 bg-gray-50 border border-gray-200/80 rounded-2xl px-5 py-3 shadow-sm shrink-0">
            {/* Google Logo SVG */}
            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-[#0b192c]">
                  5 estrellas
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                212 reseñas en Google
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Risus+Dental+Paraguay+2475+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0b192c] hover:text-[#ff2d75] border-l border-gray-200 pl-4 py-1"
            >
              <span>Ver todas</span>
              <ArrowRight size={12} weight="bold" />
            </a>
          </div>
        </div>

        {/* 3 Patient Review Cards matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author & Google Logo */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${rev.avatarBg} font-black text-xs flex items-center justify-center shadow-inner`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0b192c]">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-gray-400">{rev.time}</p>
                  </div>
                </div>

                {/* Tiny Google Icon */}
                <svg className="w-4 h-4 shrink-0 opacity-70" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Collapsible FAQ Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowFaq(!showFaq)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-[#ff2d75] transition-colors py-2 px-4 rounded-full border border-gray-200 hover:border-pink-200"
          >
            <span>{showFaq ? "Ocultar preguntas frecuentes" : "¿Tenés dudas? Ver preguntas frecuentes"}</span>
            <CaretDown
              size={14}
              className={`transform transition-transform ${showFaq ? "rotate-180" : ""}`}
            />
          </button>

          {showFaq && (
            <div className="max-w-3xl mx-auto mt-6 space-y-3 text-left">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#0b192c]"
                  >
                    <span>{faq.question}</span>
                    <CaretDown
                      size={14}
                      className={`shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180 text-[#ff2d75]" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
