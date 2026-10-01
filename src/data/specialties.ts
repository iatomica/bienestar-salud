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
    id: "odontologia-general",
    name: "Odontología General & Atención Integral",
    shortDesc: "Diagnóstico completo, restauraciones estéticas, prevención y salud bucal periódica.",
    fullDesc: "Examen bucodental minucioso, detección temprana de caries, obturaciones estéticas con resinas de alta gama que mimetizan el color natural de tus dientes, y asesoramiento para mantener tu boca sana a lo largo de toda tu vida.",
    iconName: "Tooth",
    featured: true,
    leadDoctor: "Dr. Rodrigo Julián Melo",
    benefits: [
      "Atención cercana, paciente y sin apuros",
      "Restauraciones estéticas invisibles",
      "Plan de tratamiento integral personalizado",
    ],
  },
  {
    id: "estetica-dental",
    name: "Tratamientos de Estética & Diseño de Sonrisa",
    shortDesc: "Blanqueamiento dental profesional, carillas de resina y porcelana para iluminar tu sonrisa.",
    fullDesc: "Devolvemos la luminosidad, armonía y proporción a tus dientes respetando tu fisionomía y personalidad. Técnicas avanzadas de blanqueamiento ambulatorio y en consultorio, carillas directas de composite y carillas cerámicas de mínima invasión.",
    iconName: "Sparkle",
    featured: true,
    leadDoctor: "Dr. Rodrigo Julián Melo",
    benefits: [
      "Blanqueamiento no abrasivo de alta eficacia",
      "Carillas ultra-delgadas sin desgaste innecesario",
      "Resultados naturales y armónicos",
    ],
  },
  {
    id: "procedimientos-complejos",
    name: "Procedimientos Complejos & Cirugía",
    shortDesc: "Endodoncia mecanizada, implantes dentales, extracciones complejas y rehabilitación oral.",
    fullDesc: "Soluciones de alta precisión para casos que requieren intervención especializada: tratamiento de conducto con tecnología rotatoria para salvar tus piezas dentarias, colocación de implantes oseointegrados y cirugías guiadas con anestesia localizada sin dolor.",
    iconName: "Scalpel",
    featured: true,
    leadDoctor: "Dr. Rodrigo Julián Melo",
    benefits: [
      "Endodoncia mecanizada rápida y confortable",
      "Implantes dentales de titanio biocompatible",
      "Protocolos quirúrgicos amigables y seguimiento post",
    ],
  },
  {
    id: "limpieza-prevencion",
    name: "Limpieza Profunda con Ultrasonido & Periodoncia",
    shortDesc: "Eliminación de sarro, manchas por café o tabaco y desinflamación de encías.",
    fullDesc: "Limpieza dental profiláctica indolora mediante ultrasonido piezoeléctrico de última generación, pulido dental con pasta diamantada y fluoración protectora para mantener tus encías firmes, sanas y libres de sangrado.",
    iconName: "Heartbeat",
    featured: true,
    leadDoctor: "Dr. Rodrigo Julián Melo",
    benefits: [
      "Tecnología piezoeléctrica no invasiva",
      "Aliento fresco y encías sanas",
      "Eliminación efectiva de tinciones y manchas",
    ],
  },
  {
    id: "protesis-rehabilitacion",
    name: "Prótesis Dentales Fijas y Removibles",
    shortDesc: "Recuperación de la función masticatoria y estética con coronas, puentes e incrustaciones.",
    fullDesc: "Rehabilitación protésica moderna con materiales libres de metal (zirconio, disilicato de litio) para lograr la máxima durabilidad, comodidad al masticar y una integración estética perfecta con el resto de tus dientes.",
    iconName: "Crown",
    featured: false,
    leadDoctor: "Dr. Rodrigo Julián Melo",
    benefits: [
      "Materiales de última generación sin bordes oscuros",
      "Ajuste anatómico de máxima precisión",
      "Recuperación total de la masticación y fonética",
    ],
  },
  {
    id: "ortodoncia-invisible",
    name: "Alineadores Transparentes & Ortodoncia",
    shortDesc: "Corrección de apiñamiento y mordida con placas alineadoras transparentes y estéticas.",
    fullDesc: "Planificación digital de tu sonrisa para alinear tus dientes de manera casi invisible, sin brackets metálicos ni molestias. Podés retirarlos para comer y cepillarte con total comodidad y libertad.",
    iconName: "ShieldCheck",
    featured: false,
    leadDoctor: "Dr. Rodrigo Julián Melo",
    benefits: [
      "Prácticamente imperceptibles a la vista",
      "Removibles para higiene y comidas",
      "Planificación y simulación previa",
    ],
  },
];
