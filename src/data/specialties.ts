export interface Specialty {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  featured?: boolean;
  leadDoctor: string;
  benefits: string[];
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "chequeo-clinico",
    name: "Chequeo Clínico Integral & Medicina Preventiva",
    shortDesc: "Evaluación médica periódica, diagnóstico temprano y análisis de salud general.",
    fullDesc: "Examen clínico minucioso para adultos y jóvenes. Solicitud e interpretación personalizada de análisis bioquímicos, control de signos vitales, evaluación de factores de riesgo y pautas preventivas a medida.",
    iconName: "Heartbeat",
    featured: true,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Atención con turno puntual y sin apuros",
      "Interpretación integral de análisis de sangre y orina",
      "Plan preventivo para un estilo de vida saludable",
    ],
  },
  {
    id: "hipertension-cardiovascular",
    name: "Control de Hipertensión & Riesgo Cardiovascular",
    shortDesc: "Monitoreo de presión arterial, control de lípidos y prevención coronaria.",
    fullDesc: "Diagnóstico y seguimiento riguroso de la hipertensión arterial. Ajuste farmacológico individualizado, control del colesterol y triglicéridos, y coordinación de estudios complementarios para cuidar tu corazón.",
    iconName: "Activity",
    featured: true,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Monitoreo preciso de tensión arterial en consulta",
      "Control y tratamiento de dislipemias y colesterol",
      "Acompañamiento cercano en el tratamiento continuo",
    ],
  },
  {
    id: "diabetes-metabolico",
    name: "Manejo de Diabetes & Salud Metabólica",
    shortDesc: "Control de glucemia, resistencia a la insulina y prevención de complicaciones.",
    fullDesc: "Seguimiento integral del paciente con diabetes tipo 2, prediabetes o síndrome metabólico. Educación para el autocuidado, control glicémico periódico y asesoramiento nutricional coordinado.",
    iconName: "Sparkle",
    featured: true,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Control estricto de glucosa y hemoglobina glicosilada",
      "Prevención de complicaciones vasculares y renales",
      "Ajuste personalizado del esquema de medicación",
    ],
  },
  {
    id: "aptos-fisicos",
    name: "Aptos Físicos & Certificados Médicos",
    shortDesc: "Certificaciones oficiales para gimnasios, deportes, trabajo y estudios.",
    fullDesc: "Evaluación clínica orientada a la práctica de actividad física y deportiva, laboral o escolar. Examen cardiovascular básico, control postural y expedición de certificados médicos oficiales con matrícula habilitante.",
    iconName: "ShieldCheck",
    featured: true,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Certificados oficiales con validez provincial y nacional",
      "Examen clínico exhaustivo para deportistas y aficionados",
      "Coordinación ágil con entrega rápida del apto",
    ],
  },
  {
    id: "riesgo-quirurgico",
    name: "Valoración Preoperatoria / Riesgo Quirúrgico",
    shortDesc: "Evaluación clínica previa a cirugías ambulatorias y programadas.",
    fullDesc: "Valoración clínica integral para pacientes que deben someterse a procedimientos quirúrgicos. Revisión de antecedentes, medicación habitual, signos vitales y confección del informe de riesgo clínico.",
    iconName: "UserCircle",
    featured: false,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Informe clínico claro para el equipo quirúrgico",
      "Conciliación de medicación anticoagulante y habitual",
      "Turnos prioritarios según la fecha de tu cirugía",
    ],
  },
  {
    id: "adulto-mayor",
    name: "Atención del Adulto Mayor & Polimedicación",
    shortDesc: "Cuidado geriátrico integral, control de patologías crónicas y recetas.",
    fullDesc: "Abordaje empático y paciente para personas mayores. Monitoreo conjunto de múltiples patologías, revisión y simplificación de esquemas farmacológicos, prevención de caídas y contención familiar.",
    iconName: "HandHeart",
    featured: false,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Revisión y optimización de recetas de medicamentos",
      "Ambiente tranquilo y tiempo dedicado a cada consulta",
      "Comunicación fluida con familiares y cuidadores",
    ],
  },
  {
    id: "afecciones-agudas",
    name: "Atención de Cuadros Clínicos Agudos",
    shortDesc: "Gripe, bronquitis, infecciones urinarias, trastornos gastrointestinales y dolor.",
    fullDesc: "Diagnóstico rápido y tratamiento oportuno para afecciones clínicas frecuentes: cuadros respiratorios estacionales, faringitis, infecciones de orina, malestares digestivos, cefaleas y lumbalgias.",
    iconName: "FirstAid",
    featured: false,
    leadDoctor: "Dra. Norma Ramírez",
    benefits: [
      "Resolución oportuna de síntomas molestos",
      "Prescripción médica responsable y con receta oficial",
      "Pautas de alarma y seguimiento de la recuperación",
    ],
  },
];

