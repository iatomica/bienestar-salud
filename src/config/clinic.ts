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
  email: string;
  address: string;
  neighborhood: string;
  city: string;
  province: string;
  mapsUrl: string;
  hours: string;
  branches: BranchConfig[];
}

export const clinicConfig: ClinicConfig = {
  name: "Dra. Norma Ramírez",
  shortName: "Dra. Norma Ramírez · Clínica Médica",
  tagline: "Médica Clínica · Atención Médica Integral y de Adultos",
  descriptor: "Atención médica personalizada en Barrio Los Naranjos y Centro Médico Las Flores, Córdoba Capital",
  director: "Dra. Norma S. Ramírez",
  directorTitle: "Médica Clínica · MP Córdoba",
  phone: "+543514650036",
  phoneDisplay: "(0351) 465-0036",
  whatsapp: "+54 9 351 817-4000",
  whatsappClean: "5493518174000",
  whatsappUrl: "https://wa.me/5493518174000?text=Hola%20Dra.%20Norma%20Ram%C3%ADrez,%20quisiera%20solicitar%20un%20turno%20o%20hacer%20una%20consulta%20m%C3%A9dica.",
  email: "contacto@dranormaramirez.com.ar",
  address: "Pedro Goyena 1437",
  neighborhood: "Barrio Los Naranjos",
  city: "Córdoba Capital",
  province: "Córdoba, Argentina",
  mapsUrl: "https://maps.google.com/?q=Pedro+Goyena+1437,+Cordoba+Capital",
  hours: "Lunes a Viernes de 09:00 a 19:30 hs (Con turno previo)",
  branches: [
    {
      id: "goyena",
      name: "Consultorio Los Naranjos",
      subtitle: "Consultorio Particular · Clínica Médica",
      address: "Pedro Goyena 1437",
      neighborhood: "Barrio Los Naranjos",
      city: "Córdoba Capital",
      phone: "+543514650036",
      phoneDisplay: "(0351) 465-0036",
      whatsapp: "+54 9 351 817-4000",
      whatsappClean: "5493518174000",
      whatsappUrl: "https://wa.me/5493518174000?text=Hola%20Dra.%20Norma%20Ram%C3%ADrez,%20quisiera%20solicitar%20un%20turno%20en%20el%20consultorio%20de%20Pedro%20Goyena%201437.",
      mapsUrl: "https://maps.google.com/?q=Pedro+Goyena+1437,+Cordoba+Capital",
      hours: "Lunes a Viernes de 09:00 a 19:30 hs",
      badge: "Consultorio Principal",
    },
    {
      id: "las-flores",
      name: "Centro Médico Las Flores",
      subtitle: "Atención Ambulatoria y Consultas Programadas",
      address: "Centro Médico Las Flores",
      neighborhood: "Las Flores",
      city: "Córdoba Capital",
      phone: "+54351158174000",
      phoneDisplay: "(0351) 158-174000",
      whatsapp: "+54 9 351 817-4000",
      whatsappClean: "5493518174000",
      whatsappUrl: "https://wa.me/5493518174000?text=Hola%20Dra.%20Norma%20Ram%C3%ADrez,%20quisiera%20solicitar%20un%20turno%20en%20Centro%20M%C3%A9dico%20Las%20Flores.",
      mapsUrl: "https://maps.google.com/?q=Centro+Medico+Las+Flores,+Cordoba+Capital",
      hours: "Días y horarios coordinados por turno",
      badge: "Centro Médico Las Flores",
    }
  ]
};

export const OBRAS_SOCIALES = [
  { id: "apross", name: "APROSS", color: "#006699" },
  { id: "osde", name: "OSDE", color: "#004B87" },
  { id: "swiss-medical", name: "Swiss Medical", color: "#E53935" },
  { id: "galeno", name: "Galeno", color: "#0D47A1" },
  { id: "sancor", name: "Sancor Salud", color: "#003A70" },
  { id: "medife", name: "Medifé", color: "#00838F" },
  { id: "omint", name: "OMINT", color: "#00796B" },
  { id: "pami", name: "PAMI", color: "#00838F" },
  { id: "particular", name: "Consulta Particular / Privada", color: "#0F4C5C" },
];
