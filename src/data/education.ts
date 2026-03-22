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
    school: "Cadi Ayyad University",
    degree: "Bachelor's Degree",
    field: "Distributed Information Systems",
    location: "Marrakech",
    start: "2024-09",
    end: "2026-07",
    courses: ["Java", "Networking", "Linux Administration", "DBMS", "Web Development", "UML", "HCI", "JEE"],
    highlights: ["Enriching projects and practical work"],
  },

  {
    school: "Cadi Ayyad University",
    degree: "DEUST",
    field: "Mathematics, Computer Science, Physics, and Chemistry",
    location: "Marrakech",
    start: "2023-09",
    end: "2025-06",
    courses: ["Calculus", "Algebra", "Mechanics", "Electricity", "Electronics", "Chemistry", "Optics", "Algorithms", "C Programming"],
  },


];
