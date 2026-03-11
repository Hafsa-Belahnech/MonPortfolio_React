export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Mini-Blog",
    period: "2025/2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Mini-Blog interactif.",
    repo: "https://github.com/.",
  },

  {
    title: "Mini-site de cours en ligne",
    period: "2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Site pour les cours en ligne.",
    repo: "https://github.com/.",
  },

  {
    title: "Bibliothèque Cadi Ayyad",
    period: "2025",
    tags: ["SQL", "MCD/MLD/MPD", "Pl/SQL"],
    summary: "Site pour la gestion de la base de données de la bibliothèque de Cadi Ayyad",
    repo: "https://github.com/.",
  },

  {
    title: "Company network",
    period: "2025",
    tags: ["Cisco Packet Tracer", "Routing", "Switching", "VLAN", "Protocoles", "TCP/IP", "DHCP", "DNS"],
    summary: "Projet de gestion de réseau d'entreprise avec Cisco Packet Tracer",
    repo: "https://github.com/.",
  },
];
