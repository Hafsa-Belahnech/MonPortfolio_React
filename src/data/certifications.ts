export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string; // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA ",
    issuer: "MLIA Edu",
    issueDate: "2026-03",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fmliaedu%2Etoubkalit%2Ecom%2Fverify-certificate%2F28-02b048ac-a1c7-4813-9c0a-51bbc6fbac4a-713662&urlhash=N-96&isSdui=true",
    skills: ["Hibernate", "JPA", "JPQL", "HQL"],
    tags: ["JEE", "Java"],
    image: "/certs/Certif.png",
    imageAlt: "Badge Hibernate & JPA",
    status: "active",
  },
  {
    title: "React",
    issuer: "MLIA Edu",
    issueDate: "2026-03",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-02b048ac-a1c7-4813-9c0a-51bbc6fbac4a-699069",
    skills: ["React", "JavaScript", "JSX", "Hooks"],
    tags: ["React", "Frontend"],
    image: "/certs/CertificationReact.png",
    imageAlt: "Certification React",
    status: "active",
  },
];
