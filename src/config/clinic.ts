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
  name: "Bienestar Salud",
  shortName: "Bienestar Salud · Servicios Médicos",
  tagline: "Policonsultorio de Especialidades Médicas & Atención Integral",
  descriptor: "Centro de Especialidades Médicas y Diagnóstico en Córdoba Capital con turnos programados y atención ágil",
  director: "Dirección Médica Bienestar Salud",
  directorTitle: "Especialidades Médicas Integradas · Córdoba Capital",
  phone: "+543514240527",
  phoneDisplay: "(0351) 424-0527",
  whatsapp: "+54 9 351 427-6240",
  whatsappClean: "5493514276240",
  whatsappUrl: "https://wa.me/5493514276240?text=Hola%20Bienestar%20Salud,%20quisiera%20solicitar%20un%20turno%20m%C3%A9dico.",
  email: "contacto@bienestarsalud.com.ar",
  address: "Gral. Alvear 81",
  neighborhood: "Centro",
  city: "Córdoba Capital",
  province: "Córdoba, Argentina",
  mapsUrl: "https://maps.google.com/?q=Gral.+Alvear+81,+Cordoba+Capital",
  hours: "Lunes a Viernes de 08:00 a 20:00 hs · Sábados de 08:30 a 13:00 hs",
  branches: [
    {
      id: "alvear",
      name: "Sede Central · Consultorios Alvear",
      subtitle: "Clínica Médica, Diagnóstico y Especialidades",
      address: "Gral. Alvear 81, X5021EAA",
      neighborhood: "Centro",
      city: "Córdoba Capital",
      phone: "+543514240527",
      phoneDisplay: "(0351) 424-0527",
      mapsUrl: "https://maps.google.com/?q=Gral.+Alvear+81,+Cordoba+Capital",
      hours: "Lunes a Viernes de 08:00 a 20:00 hs",
      badge: "Sede Central",
    },
    {
      id: "sarmiento",
      name: "Sede Especialidades Médicas · Sarmiento",
      subtitle: "Dirección de Especialidades y Turnos WhatsApp",
      address: "Domingo F. Sarmiento 480, X5000EYJ",
      neighborhood: "General Paz / Centro",
      city: "Córdoba Capital",
      phone: "+543514276240",
      phoneDisplay: "(0351) 427-6240",
      whatsapp: "+54 9 351 427-6240",
      whatsappClean: "5493514276240",
      whatsappUrl: "https://wa.me/5493514276240?text=Hola%20Bienestar%20Salud,%20quisiera%20solicitar%20un%20turno%20en%20Sede%20Sarmiento.",
      mapsUrl: "https://maps.google.com/?q=Domingo+F.+Sarmiento+480,+Cordoba+Capital",
      hours: "Lunes a Viernes de 08:00 a 19:30 hs",
      badge: "Especialidades Médicas",
    }
  ]
};

export const OBRAS_SOCIALES = [
  { id: "aprooss", name: "APROSS", color: "#006699" },
  { id: "osde", name: "OSDE", color: "#004B87" },
  { id: "swiss-medical", name: "Swiss Medical", color: "#E53935" },
  { id: "galeno", name: "Galeno", color: "#0D47A1" },
  { id: "sancor", name: "Sancor Salud", color: "#003A70" },
  { id: "medife", name: "Medifé", color: "#00838F" },
  { id: "omint", name: "OMINT", color: "#00796B" },
  { id: "prevencion-salud", name: "Prevención Salud", color: "#2E7D32" },
  { id: "nobis", name: "Nobis Medical", color: "#5E35B1" },
  { id: "daspu", name: "DASPU", color: "#1565C0" },
  { id: "pami", name: "PAMI (Prestadores)", color: "#FF8F00" },
  { id: "caja-abogados", name: "Caja de Abogados", color: "#455A64" },
  { id: "cpce", name: "CPCE Córdoba", color: "#6A1B9A" },
  { id: "particular", name: "Particular / Reintegros", color: "#37474F" },
];
