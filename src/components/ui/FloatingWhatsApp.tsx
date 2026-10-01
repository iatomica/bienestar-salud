"use client";

import React, { useState } from "react";
import { WhatsappLogo, X } from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip speech bubble with rainbow puff styling */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-pink-200 shadow-puff text-xs text-charcoal max-w-xs animate-fadeIn">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>
            ¿Tenés alguna duda? <strong>Escribile directo al Dr. Rodrigo</strong>
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-pink-400 hover:text-pink-600 p-0.5 rounded-full ml-1"
            aria-label="Cerrar sugerencia"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Pulsing floating button */}
      <a
        href={clinicConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar al consultorio Risus Dental por WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 animate-ping pointer-events-none" />
        <WhatsappLogo size={32} weight="fill" className="relative z-10" />
      </a>
    </div>
  );
};
