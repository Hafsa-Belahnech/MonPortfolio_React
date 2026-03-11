export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [


  {
    school: "Université Cadi Ayyad",
    degree: "Licence",
    field: "Systèmes d'Informations Répartis",
    location: "Marrakech",
    start: "2024-09",
    end: "2026-07",
    courses: ["Java", "Réseaux", "Administration Linux", "SGBD", "Développement web", "UML", "IHM", "JEE"],
    highlights: ["Projets et Travaux pratiques enrichissants"],
  },

  {
    school: "Université Cadi Ayyad",
    degree: "DEUST",
    field: "Mathématiques Informatique Physique et Chimie",
    location: "Marrakech",
    start: "2023-09",
    end: "2025-06",
    courses: ["Analyse", "Algèbre", "Mécanique", "Electricité", "Electronique", "Chimie", "Optique", "Algorithmes", "Programmation en C"],
  },


];
