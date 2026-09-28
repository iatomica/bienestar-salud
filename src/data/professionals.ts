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
    id: "dra-norma-ramirez",
    name: "Dra. Norma S. Ramírez",
    role: "Médica Clínica · Medicina General & Adultos",
    license: "MP 26184 · Especialista en Clínica Médica",
    specialties: [
      "Clínica Médica General",
      "Control de Hipertensión y Diabetes",
      "Chequeos Clínicos Preventivos",
      "Aptos Físicos Oficiales",
      "Valoración Preoperatoria",
      "Atención de Adultos y Tercera Edad",
    ],
    bio: "Médica clínica con sólida trayectoria y vocación de servicio en Córdoba Capital. Brinda una atención médica cálida, dedicada y personalizada, orientada a la prevención de patologías, diagnóstico temprano y seguimiento longitudinal de enfermedades crónicas.",
    image: "/images/dra_norma_ramirez.webp",
    badge: "Médica Clínica",
    isDirector: true,
    branch: "Pedro Goyena 1437 & Centro Médico Las Flores",
  },
];

export const SUPPORT_TEAM: SupportStaff[] = [
  {
    name: "Consultorio Los Naranjos",
    role: "Pedro Goyena 1437 · Barrio Los Naranjos",
    description: "Atención médica programada. Turnos y consultas al teléfono fijo (0351) 465-0036 o por WhatsApp al (0351) 158-174000. Ambiente confortable y tranquilo sin demoras.",
  },
  {
    name: "Centro Médico Las Flores",
    role: "Consultas Programadas & Atención Ambulatoria",
    description: "Atención clínica ambulatoria con turnos coordinados vía WhatsApp (+54 9 351 817-4000 / 0351 158174000). Seguimiento periódico de pacientes y controles de rutina.",
  },
];

