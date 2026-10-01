"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  WhatsappLogo,
  ArrowRight,
  ArrowLeft,
  User,
  Phone,
  CalendarBlank,
  MapPin,
  CheckCircle,
  Heart,
  Sparkle,
} from "@phosphor-icons/react";
import { SPECIALTIES } from "@/data/specialties";
import { PROFESSIONALS } from "@/data/professionals";
import { clinicConfig, OBRAS_SOCIALES } from "@/config/clinic";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialtyId?: string | null;
  initialProfessionalId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSpecialtyId = null,
  initialProfessionalId = null,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientCoverage, setPatientCoverage] = useState("Particular / Reintegros");
  const [consultationReason, setConsultationReason] = useState("");
  const [hasDentalAnxiety, setHasDentalAnxiety] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (initialSpecialtyId) {
        setSelectedSpecialtyId(initialSpecialtyId);
        setStep(2);
      } else {
        setSelectedSpecialtyId(SPECIALTIES[0].id);
        setStep(1);
      }
      setErrorMsg("");
    }
  }, [isOpen, initialSpecialtyId, initialProfessionalId]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedSpecialtyObj =
    SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];
  const doctor = PROFESSIONALS[0];

  const handleSendToWhatsApp = () => {
    if (!patientName.trim()) {
      setErrorMsg("Por favor ingresá tu nombre completo");
      return;
    }

    const text =
      `*Solicitud de Turno - Risus Dental*\n` +
      `--------------------------------\n` +
      `👤 *Paciente:* ${patientName.trim()}\n` +
      `📞 *Teléfono:* ${patientPhone || "No especificado"}\n` +
      `🦷 *Tratamiento / Motivo:* ${selectedSpecialtyObj.name}\n` +
      `👨‍⚕️ *Odontólogo:* Dr. Rodrigo Julián Melo\n` +
      `📍 *Consultorio:* Paraguay 2475, CABA (Recoleta)\n` +
      `💳 *Cobertura:* ${patientCoverage}\n` +
      (hasDentalAnxiety ? `💜 *Aviso importante:* Siento ansiedad o temor al dentista (atención con paciencia)\n` : "") +
      (consultationReason ? `📝 *Detalle:* ${consultationReason}\n` : "") +
      `--------------------------------\n` +
      `Hola Dr. Rodrigo Melo, quisiera coordinar un turno en Risus Dental con estos datos. ¡Muchas gracias!`;

    const url = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-puff shadow-modal border-2 border-pink-200 overflow-hidden text-charcoal my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <div>
              <h3 className="text-base font-black leading-tight">
                Agendar Turno · Risus Dental
              </h3>
              <p className="text-xs text-white/90">
                Dr. Rodrigo Julián Melo · Paraguay 2475, CABA
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {step === 1 ? (
            /* Step 1: Select Dental Specialty */
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-risus-600 uppercase tracking-wider">
                  Paso 1 de 2
                </span>
                <h4 className="text-lg font-black text-charcoal">
                  ¿Qué tratamiento o consulta necesitás?
                </h4>
                <p className="text-xs text-charcoal-muted">
                  Seleccioná la opción que mejor describa tu necesidad actual:
                </p>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {SPECIALTIES.map((spec) => {
                  const isSelected = selectedSpecialtyId === spec.id;
                  return (
                    <div
                      key={spec.id}
                      onClick={() => setSelectedSpecialtyId(spec.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-pink-500 bg-pink-50/70 shadow-sm"
                          : "border-pink-100 hover:border-pink-200 hover:bg-pink-50/30"
                      }`}
                    >
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-charcoal">
                          {spec.name}
                        </h5>
                        <p className="text-[11px] text-charcoal-muted line-clamp-1">
                          {spec.shortDesc}
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          isSelected ? "border-pink-500 bg-pink-500" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <CheckCircle size={14} weight="fill" className="text-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-risus-500 to-purple-500 hover:from-risus-600 hover:to-purple-600 text-white font-black text-sm shadow-md shadow-pink-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Continuar a Mis Datos</span>
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          ) : (
            /* Step 2: Patient Info */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-risus-600 uppercase tracking-wider">
                    Paso 2 de 2
                  </span>
                  <h4 className="text-lg font-black text-charcoal">
                    Tus Datos para el Dr. Rodrigo Melo
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-charcoal-muted hover:text-risus-600 flex items-center gap-1 font-semibold"
                >
                  <ArrowLeft size={13} />
                  <span>Volver</span>
                </button>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3 text-left">
                <div>
                  <label className="text-xs font-bold text-charcoal block mb-1">
                    Tu Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Ej. Lucas Rossi"
                    className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white text-xs text-charcoal focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal block mb-1">
                    Teléfono / WhatsApp de Contacto
                  </label>
                  <input
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="Ej. 11 4455-6677"
                    className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white text-xs text-charcoal focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal block mb-1">
                    Cobertura / Forma de Pago
                  </label>
                  <select
                    value={patientCoverage}
                    onChange={(e) => setPatientCoverage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white text-xs text-charcoal focus:outline-none focus:border-pink-500"
                  >
                    <option value="Particular / Reintegros">Particular (con factura para reintegro)</option>
                    <option value="OSDE">OSDE</option>
                    <option value="Swiss Medical">Swiss Medical</option>
                    <option value="Galeno">Galeno</option>
                    <option value="OMINT">OMINT</option>
                    <option value="Medifé">Medifé</option>
                    <option value="Otra Prepaga">Otra Cobertura / Prepaga</option>
                  </select>
                </div>

                {/* Special Empathetic Checkbox: Dental Fear */}
                <div
                  onClick={() => setHasDentalAnxiety(!hasDentalAnxiety)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                    hasDentalAnxiety
                      ? "bg-purple-50 border-purple-300 text-purple-900"
                      : "bg-pink-50/50 border-pink-100 text-charcoal-secondary"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={hasDentalAnxiety}
                    onChange={(e) => setHasDentalAnxiety(e.target.checked)}
                    className="mt-0.5 rounded text-pink-500 focus:ring-pink-400"
                  />
                  <div className="text-xs leading-snug">
                    <strong className="block font-bold text-charcoal">
                      💜 Siento miedo, fobia o ansiedad al dentista
                    </strong>
                    <span className="text-[11px] text-charcoal-muted">
                      El Dr. Rodrigo lo tendrá en cuenta para preparar tu sesión con mayor tiempo, pausas y total suavidad.
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal block mb-1">
                    Comentario adicional o síntoma (opcional)
                  </label>
                  <textarea
                    value={consultationReason}
                    onChange={(e) => setConsultationReason(e.target.value)}
                    rows={2}
                    placeholder="Contanos brevemente qué te gustaría tratar o si sentís dolor..."
                    className="w-full px-4 py-2 rounded-xl border border-pink-200 bg-white text-xs text-charcoal focus:outline-none focus:border-pink-500 resize-none"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>Enviar Solicitud a WhatsApp</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
