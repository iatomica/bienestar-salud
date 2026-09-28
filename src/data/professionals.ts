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
    id: "marcela-rossi",
    name: "Dra. Marcela Rossi",
    role: "Medicina General & Clínica Médica",
    license: "MP 28419 · ME 14201",
    specialties: [
      "Clínica Médica",
      "Chequeos Preventivos",
      "Control de Hipertensión y Diabetes",
      "Aptitud Física",
    ],
    bio: "Más de 14 años de ejercicio profesional dedicados a la atención ambulatoria personalizada. Enfoque integral y preventivo para el cuidado continuo de adultos y familias en Córdoba.",
    image: "/images/dra_marcela_rossi.webp",
    badge: "Clínica Médica",
    isDirector: true,
    branch: "Sede Alvear & Sede Sarmiento",
  },
  {
    id: "gustavo-peralta",
    name: "Dr. Gustavo Peralta",
    role: "Cardiología & Evaluación Cardiovascular",
    license: "MP 31084 · ME 16540",
    specialties: [
      "Cardiología Clínica",
      "Electrocardiograma (ECG)",
      "Riesgo Quirúrgico",
      "Control Coronario",
    ],
    bio: "Especialista en prevención y control cardiovascular. Realiza estudios electrocardiográficos e informes diagnósticos ágiles para aptitud deportiva y seguimiento cardiológico.",
    image: "/images/dr_gustavo_peralta.webp",
    badge: "Cardiología",
    branch: "Sede Sarmiento (Especialidades)",
  },
  {
    id: "sofia-valenzuela",
    name: "Dra. Sofía Valenzuela",
    role: "Pediatría & Salud Infantil",
    license: "MP 29752 · ME 15112",
    specialties: [
      "Pediatría",
      "Control de Crecimiento y Desarrollo",
      "Vacunación",
      "Orientación Pediátrica",
    ],
    bio: "Vocación y ternura en la atención médica de bebés, niños y adolescentes. Prioriza la contención de los padres y el seguimiento riguroso de cada hito de desarrollo infantil.",
    image: "/images/dra_sofia_valenzuela.webp",
    badge: "Pediatría",
    branch: "Sede Alvear (Central)",
  },
  {
    id: "esteban-carrizo",
    name: "Dr. Esteban Carrizo",
    role: "Traumatología & Ortopedia",
    license: "MP 27410 · ME 13908",
    specialties: [
      "Traumatología",
      "Lesiones Articulares y Musculares",
      "Columna Vertebral",
      "Rehabilitación",
    ],
    bio: "Experto en manejo de lesiones osteoarticulares, dolores lumbares y traumatología deportiva. Trabaja en interconsulta estrecha con kinesiología para evitar cirugías innecesarias.",
    image: "/images/dr_esteban_carrizo.webp",
    badge: "Traumatología",
    branch: "Sede Sarmiento (Especialidades)",
  },
  {
    id: "valeria-fontana",
    name: "Dra. Valeria Fontana",
    role: "Ginecología & Salud Femenina",
    license: "MP 30219 · ME 15890",
    specialties: [
      "Ginecología General",
      "Papanicolaou y Colposcopía",
      "Chequeo Ginecológico Anual",
      "Salud Reproductiva",
    ],
    bio: "Atención ginecológica en un marco de calidez, respeto y privacidad. Promueve la prevención temprana y el acompañamiento empático en todas las etapas de la vida de la mujer.",
    image: "/images/dra_valeria_fontana.webp",
    badge: "Ginecología",
    branch: "Sede Sarmiento (Especialidades)",
  },
  {
    id: "martin-soria",
    name: "Lic. Martín Soria",
    role: "Kinesiología & Fisioterapia",
    license: "MP 1842",
    specialties: [
      "Kinesiología Traumatológica",
      "Rehabilitación Postural",
      "Fisioterapia Analgésica",
      "Recuperación Deportiva",
    ],
    bio: "Kinesiólogo con amplia formación en terapia física y reeducación funcional. Aplica protocolos modernos de fisioterapia para desinflamación y alivio de dolores crónicos.",
    image: "/images/lic_martin_soria.webp",
    badge: "Kinesiología",
    branch: "Sede Alvear & Sede Sarmiento",
  },
];

export const SUPPORT_TEAM: SupportStaff[] = [
  {
    name: "Recepción & Turnos Sede Alvear",
    role: "Atención al Paciente · Gral. Alvear 81",
    description: "Atención presencial y telefónica directa al (0351) 424-0527. Coordinación ágil de consultas clínicas, admisión de obras sociales y ordenamiento de sala.",
  },
  {
    name: "Coordinación WhatsApp Sede Sarmiento",
    role: "Atención Digital & Especialidades · Sarmiento 480",
    description: "Gestión directa de turnos de especialidades médicas vía WhatsApp (+54 9 351 427-6240) y teléfono (0351) 427-6240, facilitando confirmaciones y recordatorios.",
  },
];
