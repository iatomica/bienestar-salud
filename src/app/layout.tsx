import type { Metadata } from "next";
import { clinicConfig } from "@/config/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: `${clinicConfig.name} · Médica Clínica | Córdoba Capital`,
  description: `${clinicConfig.descriptor}. Consultorio en Pedro Goyena 1437 (Barrio Los Naranjos) y Centro Médico Las Flores. Turnos WhatsApp al (0351) 158-174000 y teléfono al (0351) 465-0036.`,
  openGraph: {
    title: `${clinicConfig.name} · Médica Clínica en Córdoba`,
    description: "Atención médica integral para jóvenes y adultos. Chequeos clínicos, control de presión arterial, diabetes y aptos físicos en Barrio Los Naranjos y Centro Médico Las Flores.",
    locale: "es_AR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-background text-charcoal">
        {children}
      </body>
    </html>
  );
}
