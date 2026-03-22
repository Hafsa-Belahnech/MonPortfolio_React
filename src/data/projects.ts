export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

import todoListImg from "../assets/img.jpeg";

export const projects: Project[] = [

  {
    title: "To-Do List",
    period: "2025",
    tags: ["HTML5", "CSS3", "JavaScript (ES6)"],
    summary: "A web application to manage daily tasks.",
    repo: "https://github.com/Hafsa-Belahnech/Ma-To-Do-List-HTML_CSS_JS.git",
    image: todoListImg,
  },



  {
    title: "Mini-Blog",
    period: "2025/2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Interactive Mini-Blog.",
  },

  {
    title: "Online Course Mini-Site",
    period: "2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Website for online courses.",

  },

  {
    title: "Cadi Ayyad Library",
    period: "2025",
    tags: ["SQL", "ERD/Relational Databases", "Pl/SQL"],
    summary: "Database management system website for the Cadi Ayyad library",
  },

  {
    title: "Company network",
    period: "2025",
    tags: ["Cisco Packet Tracer", "Routing", "Switching", "VLAN", "Protocols", "TCP/IP", "DHCP", "DNS"],
    summary: "Enterprise network management project using Cisco Packet Tracer",
  },
];
