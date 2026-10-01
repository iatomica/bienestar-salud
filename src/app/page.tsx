"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Specialties } from "@/components/home/Specialties";
import { Professionals } from "@/components/home/Professionals";
import { TrustAndFAQ } from "@/components/home/TrustAndFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BookingModal } from "@/components/booking/BookingModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [targetSpecialtyId, setTargetSpecialtyId] = useState<string | null>(null);

  const handleOpenBooking = (specialtyId?: string) => {
    setTargetSpecialtyId(specialtyId || null);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setTargetSpecialtyId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header / Navbar matching mockup */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section with Dr. Rodrigo Julian Melo and clinic visual */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Nuestros Servicios: 6 Vibrant Gradient Cards with 3D Icons */}
        <Specialties
          onSelectSpecialty={(specId) => handleOpenBooking(specId)}
        />

        {/* 4. Sobre Mí: Dr. Rodrigo Melo in circular pink neon halo + manifesto & 4 highlights */}
        <Professionals />

        {/* 5. Reseñas: 5 Stars Google Badge & 3 Patient Reviews */}
        <TrustAndFAQ />

        {/* 6. Visítanos: Tooth with Heart & 3 Contact Rows (Dirección, WhatsApp, Instagram) */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 7. Footer matching mockup */}
      <Footer />

      {/* Interactive Booking Modal & Floating WhatsApp */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialSpecialtyId={targetSpecialtyId}
      />
      <FloatingWhatsApp />
    </div>
  );
}
