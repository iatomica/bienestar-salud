import type { Metadata } from "next";
import { clinicConfig } from "@/config/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: `${clinicConfig.name} · ${clinicConfig.tagline}`,
  description: `${clinicConfig.descriptor}. Sedes en Gral. Alvear 81 y Domingo F. Sarmiento 480, Córdoba Capital. Turnos WhatsApp al +54 9 351 427-6240 y atención telefónica al (0351) 424-0527.`,
  openGraph: {
    title: `${clinicConfig.name} · Servicios Médicos & Especialidades en Córdoba`,
    description: "Policonsultorio de Especialidades Médicas en Córdoba Capital. Clínica médica, cardiología, pediatría, traumatología, ginecología y diagnóstico sin demoras.",
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
