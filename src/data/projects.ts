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
    title: "To-Do List",
    period: "2025",
    tags: ["HTML5", "CSS3", "JavaScript (ES6)"],
    summary: "Une application web pour gérer les tâches quotidiennes.",
    repo: "https://github.com/Hafsa-Belahnech/Ma-To-Do-List-HTML_CSS_JS.git",
  },



  {
    title: "Mini-Blog",
    period: "2025/2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Mini-Blog interactif.",
  },

  {
    title: "Mini-site de cours en ligne",
    period: "2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Site pour les cours en ligne.",

  },

  {
    title: "Bibliothèque Cadi Ayyad",
    period: "2025",
    tags: ["SQL", "MCD/MLD/MPD", "Pl/SQL"],
    summary: "Site pour la gestion de la base de données de la bibliothèque de Cadi Ayyad",
  },

  {
    title: "Company network",
    period: "2025",
    tags: ["Cisco Packet Tracer", "Routing", "Switching", "VLAN", "Protocoles", "TCP/IP", "DHCP", "DNS"],
    summary: "Projet de gestion de réseau d'entreprise avec Cisco Packet Tracer",
  },
];
