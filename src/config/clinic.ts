export interface BranchConfig {
  id: string;
  name: string;
  subtitle: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  whatsapp?: string;
  whatsappClean?: string;
  whatsappUrl?: string;
  mapsUrl: string;
  hours: string;
  badge: string;
}

export interface ClinicConfig {
  name: string;
  shortName: string;
  tagline: string;
  descriptor: string;
  director: string;
  directorTitle: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappClean: string;
  whatsappUrl: string;
  instagram: string;
  instagramHandle: string;
  googleRating: number;
  googleReviewsCount: number;
  email: string;
  address: string;
  neighborhood: string;
  city: string;
  province: string;
  mapsUrl: string;
  hours: string;
  manifesto: string;
  branches: BranchConfig[];
}

export const clinicConfig: ClinicConfig = {
  name: "Risus Dental",
  shortName: "Risus Dental · Odontología",
  tagline: "Tu sonrisa libre, sana y radiante · Odontología integral y estética en CABA",
  descriptor: "Consultorio odontológico privado en Paraguay 2475, Cdad. Autónoma de Buenos Aires. Odontología general, estética y procedimientos complejos con paciencia y respeto.",
  director: "Dr. Rodrigo Julián Melo",
  directorTitle: "Odontólogo · M.N. · Estética Dental y Atención Integral",
  phone: "+541123953349",
  phoneDisplay: "11 2395-3349",
  whatsapp: "+54 9 11 2395-3349",
  whatsappClean: "5491123953349",
  whatsappUrl: "https://wa.me/5491123953349?text=Hola%20Dr.%20Rodrigo%20Melo%20(Risus%20Dental),%20quisiera%20solicitar%20un%20turno%20o%20hacer%20una%20consulta%20odontol%C3%B3gica.",
  instagram: "https://www.instagram.com/risusdental",
  instagramHandle: "@risusdental",
  googleRating: 5.0,
  googleReviewsCount: 212,
  email: "contacto@risusdental.com",
  address: "Paraguay 2475",
  neighborhood: "Recoleta / Barrio Norte",
  city: "Cdad. Autónoma de Buenos Aires",
  province: "CABA, Argentina",
  mapsUrl: "https://maps.google.com/?q=Paraguay+2475,+Ciudad+Autonoma+de+Buenos+Aires",
  hours: "Lunes a Viernes de 09:00 a 20:00 hs (Atención con turno previo)",
  manifesto: "Somos un consultorio odontológico privado dedicado con tu bienestar y salud bucal. Nuestra misión es brindarte una atención personalizada, basada en el respeto, la paciencia y empatía, adaptándonos a los tiempos y necesidades de cada paciente.",
  branches: [
    {
      id: "recoleta",
      name: "Consultorio Risus Dental",
      subtitle: "Consultorio Odontológico Privado · Paraguay 2475",
      address: "Paraguay 2475",
      neighborhood: "Recoleta / Barrio Norte",
      city: "Cdad. Autónoma de Buenos Aires",
      phone: "+541123953349",
      phoneDisplay: "11 2395-3349",
      whatsapp: "+54 9 11 2395-3349",
      whatsappClean: "5491123953349",
      whatsappUrl: "https://wa.me/5491123953349?text=Hola%20Dr.%20Rodrigo%20Melo%20(Risus%20Dental),%20quisiera%20solicitar%20un%20turno%20en%20Paraguay%202475.",
      mapsUrl: "https://maps.google.com/?q=Paraguay+2475,+Ciudad+Autonoma+de+Buenos+Aires",
      hours: "Lunes a Viernes de 09:00 a 20:00 hs (Con turno previo)",
      badge: "Sede Principal",
    }
  ]
};

export const OBRAS_SOCIALES = [
  { id: "osde", name: "OSDE", color: "#004B87" },
  { id: "swiss-medical", name: "Swiss Medical", color: "#E53935" },
  { id: "galeno", name: "Galeno", color: "#0D47A1" },
  { id: "omint", name: "OMINT", color: "#00796B" },
  { id: "medife", name: "Medifé", color: "#00838F" },
  { id: "sancor", name: "Sancor Salud", color: "#003A70" },
  { id: "ioma", name: "IOMA / Reintegros", color: "#0284C7" },
  { id: "particular", name: "Atención Particular & Financiación", color: "#EC4899" },
];
