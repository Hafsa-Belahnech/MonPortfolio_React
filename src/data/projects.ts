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
    title: "Donation & Campaign Management System",
    period: "2026",
    tags: ["Java ", "Jakarta EE", "Thymeleaf", "Antigravity CSS", "Spring Boot"],
    summary: "A solidarity management application developed with Spring Boot and Thymeleaf, designed to centralize the tracking of fundraising, donors, and non-profit campaigns.",
    repo: "https://github.com/Hafsa-Belahnech/Gestion_de_Dons_Thymeleaf_Spring_Boot.git",
  },


  {
   title: "Inventory & User Management System",
   period: "2026",
   tags: ["Java", "Jakarta EE", "Hibernate", "H2", "Tomcat"],
   summary: "A robust n-tier Java EE application using Hibernate for data persistence and deployed on Tomcat 10.",
   repo: "https://github.com/Hafsa-Belahnech/Servlet_Gestion_Produits_Utilisateurs.git",
  },

  {
   title: "Spring Security Authentication Flow",
   period: "2026",
   tags: ["Spring Security", "Spring Boot", "Java", "Thymeleaf", "JDK 17"],
   summary: "A customized authentication system featuring role-based access control (RBAC) and secure redirection logic.",
   repo: "https://github.com/Hafsa-Belahnech/Formulaire_Connexion_SpringBoot_Thymeleaf.git",
  },

  {
   title: "In-Memory Auth with Spring Security",
   period: "2026",
   tags: ["Spring Security", "In-Memory Auth", "Thymeleaf", "Java", "RBAC"],
   summary: "A secure authentication model featuring in-memory user management, role-based access control, and intelligent routing.",
   repo: "https://github.com/Hafsa-Belahnech/Authentification_Memoire_Spring_Security.git",
  },

  {
    title: "Company network",
    period: "2025",
    tags: ["Cisco Packet Tracer", "Routing", "Switching", "VLAN", "Protocols", "TCP/IP", "DHCP", "DNS"],
    summary: "Enterprise network management project using Cisco Packet Tracer",
    repo: "https://github.com/Hafsa-Belahnech/Cisco_Networking_Project.git",
  },

  {
    title: "Mini-Blog",
    period: "2025/2026",
    tags: ["PHP", "Laravel", "Bootstrap", "HTML/CSS"],
    summary: "Interactive Mini-Blog, where authentified users can add, modify, delete their articles.",},

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

];
