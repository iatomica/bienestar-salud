export interface Professional {
  id: string;
  name: string;
  role: string;
  license: string;
  specialties: string[];
  bio: string;
  image: string;
  badge?: string;
  isDirector?: boolean;
  branch: string;
}

export interface SupportStaff {
  name: string;
  role: string;
  description: string;
}

export const PROFESSIONALS: Professional[] = [
  {
    id: "dr-rodrigo-melo",
    name: "Dr. Rodrigo Julián Melo",
    role: "Odontólogo · Director en Risus Dental",
    license: "Odontología Integral · M.N. · Estética Dental",
    specialties: [
      "Odontología General y Preventiva",
      "Estética Dental y Diseño de Sonrisa",
      "Blanqueamiento Dental y Carillas",
      "Endodoncia Mecanizada",
      "Cirugía Oral e Implantes Dentales",
      "Atención Empática Sin Dolor (Fobia Dental)",
    ],
    bio: "Odontólogo con sólida formación en odontología estética y rehabilitación oral en Buenos Aires. Su filosofía en Risus Dental es transformar la visita al dentista en una experiencia agradable, segura y transparente: sin dolor, sin juzgar y con la paciencia necesaria para cada persona.",
    image: "/images/dr_rodrigo_melo.jpg",
    badge: "Odontólogo Titular",
    isDirector: true,
    branch: "Paraguay 2475, CABA",
  },
];

export const SUPPORT_TEAM: SupportStaff[] = [
  {
    name: "Consultorio Boutique Risus Dental",
    role: "Paraguay 2475 · Recoleta / Barrio Norte, CABA",
    description: "Ambiente cálido, moderno y relajante con temática estética pastel, música suave y aromaterapia para que tu consulta dental sea un momento de bienestar.",
  },
  {
    name: "Espacio Seguro e Inclusivo 🏳️‍🌈",
    role: "Atención Libre de Prejuicios",
    description: "Creemos en la odontología con respeto a la diversidad, paciencia para quienes sienten ansiedad al sillón dental y escucha activa en cada paso.",
  },
];
