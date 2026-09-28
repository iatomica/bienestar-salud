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
    id: "clinica-medica",
    name: "Clínica Médica & Medicina General",
    shortDesc: "Chequeos integrales, certificados de aptitud y control de patologías crónicas.",
    fullDesc: "Atención médica integral para adultos y jóvenes. Realizamos diagnósticos clínicos tempranos, control de presión arterial, seguimiento de diabetes, solicitud e interpretación de estudios y prescripción farmacológica responsable.",
    iconName: "Heartbeat",
    featured: true,
    leadDoctor: "Dra. Marcela Rossi & Equipo Clínico",
    benefits: [
      "Atención programada sin demoras de sala",
      "Chequeos preventivos anuales y aptos físicos",
      "Seguimiento personalizado de patologías",
    ],
  },
  {
    id: "cardiologia",
    name: "Cardiología & Salud Cardiovascular",
    shortDesc: "Electrocardiograma (ECG), control de hipertensión y riesgo cardíaco.",
    fullDesc: "Prevención, diagnóstico y tratamiento de afecciones del corazón y vasos sanguíneos. Evaluación cardiovascular completa para deportistas y pacientes con factores de riesgo coronario.",
    iconName: "Activity",
    featured: true,
    leadDoctor: "Dr. Gustavo Peralta (Cardiólogo)",
    benefits: [
      "Electrocardiograma con informe en el día",
      "Apto médico deportivo y prequirúrgico",
      "Manejo y control estricto de hipertensión",
    ],
  },
  {
    id: "pediatria",
    name: "Pediatría & Control del Niño Sano",
    shortDesc: "Cuidado amoroso, seguimiento de crecimiento y vacunación para bebés y niños.",
    fullDesc: "Acompañamos el crecimiento de tus hijos desde el nacimiento hasta la adolescencia. Enfoque cálido, paciente y empático en un ambiente preparado para que las visitas médicas sean confortables.",
    iconName: "Baby",
    featured: true,
    leadDoctor: "Dra. Sofía Valenzuela (Pediatra)",
    benefits: [
      "Control mensual y semestral de crecimiento",
      "Tratamiento de afecciones respiratorias estacionales",
      "Atención cercana y contención familiar",
    ],
  },
  {
    id: "traumatologia",
    name: "Traumatología & Ortopedia",
    shortDesc: "Lesiones articulares, musculares, dolores de columna y rehabilitación.",
    fullDesc: "Diagnóstico y tratamiento de lesiones osteoarticulares, esguinces, desgarros, lumbalgias y artrosis. Articulación directa con el área de kinesiología y diagnóstico por imágenes para una rápida recuperación.",
    iconName: "Bone",
    featured: true,
    leadDoctor: "Dr. Esteban Carrizo (Traumatólogo)",
    benefits: [
      "Evaluación precisa de lesiones osteomusculares",
      "Tratamientos conservadores y no invasivos",
      "Interconsulta inmediata con Kinesiología",
    ],
  },
  {
    id: "ginecologia",
    name: "Ginecología & Salud de la Mujer",
    shortDesc: "Controles ginecológicos periódicos, PAP, colposcopía y planificación familiar.",
    fullDesc: "Espacio de confianza y contención para la salud integral femenina en todas las etapas de la vida. Diagnóstico precoz, estudios preventivos anuales y asesoramiento ginecológico personalizado.",
    iconName: "UserCircle",
    featured: false,
    leadDoctor: "Dra. Valeria Fontana (Ginecóloga)",
    benefits: [
      "Papanicolaou (PAP) y Colposcopía",
      "Control ginecológico preventivo y mamario",
      "Ambiente de máxima privacidad y confort",
    ],
  },
  {
    id: "dermatologia",
    name: "Dermatología Clínica",
    shortDesc: "Mapeo de lunares, control de manchas, acné, psoriasis y alergias cutáneas.",
    fullDesc: "Cuidado especializado de la piel, cabello y uñas. Diagnóstico y tratamiento de patologías dermatológicas agudas y crónicas con aparatología de examen no invasiva.",
    iconName: "Sparkle",
    featured: false,
    leadDoctor: "Dra. Camila Benítez (Dermatóloga)",
    benefits: [
      "Control de lunares y prevención de lesiones",
      "Tratamientos efectivos para acné y rosácea",
      "Protocolos personalizados para cada tipo de piel",
    ],
  },
  {
    id: "kinesiologia",
    name: "Kinesiología & Fisioterapia",
    shortDesc: "Rehabilitación motora, fisioterapia analgésica y reeducación postural.",
    fullDesc: "Gabinete equipado con magnetoterapia, ultrasonido, electroanalgesia y mecanoterapia para acelerar la recuperación de lesiones y aliviar dolores crónicos articulares o musculares.",
    iconName: "HandHeart",
    featured: false,
    leadDoctor: "Lic. Martín Soria (Kinesiólogo)",
    benefits: [
      "Rehabilitación postraumática y deportiva",
      "Alivio de contracturas y cervicalgias",
      "Ejercicios terapéuticos guiados",
    ],
  },
  {
    id: "diagnostico-imagenes",
    name: "Diagnóstico por Imágenes & Ecografías",
    shortDesc: "Ecografía abdominal, ginecológica, tiroidea y partes blandas con informe ágil.",
    fullDesc: "Estudios ecográficos de alta resolución para dar soporte inmediato a los médicos tratantes de las distintas especialidades, reduciendo traslados y tiempos de espera.",
    iconName: "Scan",
    featured: false,
    leadDoctor: "Dr. Hernán Gómez (Especialista en Imágenes)",
    benefits: [
      "Equipamiento de ultrasonido digital",
      "Informes médicos claros y entrega ágil",
      "Coordinación de turnos sin demoras",
    ],
  },
  {
    id: "laboratorio",
    name: "Laboratorio de Análisis Clínicos",
    shortDesc: "Extracciones matutinas, bioquímica básica y especializada con resultados online.",
    fullDesc: "Toma de muestras de sangre y orina con técnica delicada y personal capacitado. Perfiles lipídicos, glucemias, hemogramas y hormonas con resultados confiables y entrega rápida.",
    iconName: "Flask",
    featured: false,
    leadDoctor: "Bioq. Claudia M. Navarro",
    benefits: [
      "Extracciones rápidas con mínima molestia",
      "Resultados digitales directos a tu celular",
      "Cobertura por obras sociales y prepagas",
    ],
  },
  {
    id: "odontologia",
    name: "Odontología Integral",
    shortDesc: "Odontología general, limpiezas dentales, restauraciones y urgencias.",
    fullDesc: "Servicio odontológico complementario para una atención verdaderamente integral de toda tu familia, con odontólogos calificados y equipamiento moderno.",
    iconName: "ShieldCheck",
    featured: false,
    leadDoctor: "Equipo Odontológico Bienestar",
    benefits: [
      "Limpiezas dentales con ultrasonido",
      "Restauraciones estéticas y arreglos",
      "Atención programada en el consultorio",
    ],
  },
];
