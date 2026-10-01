import type { Metadata } from "next";
import { clinicConfig } from "@/config/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: `${clinicConfig.name} - ODONTOLOGÍA · Dr. Rodrigo Julián Melo | Recoleta, CABA`,
  description: `${clinicConfig.descriptor}. Consultorio en Paraguay 2475, Recoleta / Barrio Norte. Odontología estética, carillas, blanqueamiento, implantes y endodoncia sin dolor. 5 estrellas en Google (212 reseñas). WhatsApp: 11 2395-3349.`,
  openGraph: {
    title: `${clinicConfig.name} - ODONTOLOGÍA · Dr. Rodrigo Julián Melo`,
    description: "Somos un consultorio odontológico privado dedicado a tu bienestar y salud bucal. Atención personalizada, basada en el respeto, la paciencia y empatía. Paraguay 2475, CABA.",
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
