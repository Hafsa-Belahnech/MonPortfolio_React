import { education } from "@/data/education";
import { motion, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

// Fonction pour formater les dates (ex: 2023-09 -> 09/2023)
function fmt(s?: string) {
  if (!s) return "Present";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

export default function EducationPage() {
  return (
    <section className="flex flex-col gap-10">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-gradient-primary">Education</h2>
        <p className="text-white/60 text-lg">
          My academic journey 🎓
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative border-l-2 border-primary/20 ml-4 md:ml-8 mt-6"
      >
        {education.map((e) => (
          <motion.div variants={item} key={`${e.school}-${e.start}`} className="mb-12 relative pl-8 md:pl-12">
            {/* Timeline dot */}
            <div className="absolute w-12 h-12 bg-black border-2 border-primary rounded-full -left-6 flex items-center justify-center top-0 shadow-[0_0_20px_rgba(var(--color-primary),0.6)]">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {e.degree}
                    {e.field ? <span className="text-primary/90"> in {e.field}</span> : ""}
                  </h3>
                  <h4 className="text-lg font-medium text-white/70 mt-1">{e.school}</h4>
                </div>
                <span className="glass-panel px-3 py-1.5 text-sm text-primary font-semibold border-primary/30 whitespace-nowrap">
                  {fmt(e.start)} — {fmt(e.end)}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/50 mb-6 pb-4 border-b border-white/10">
                {e.location && <span className="flex items-center gap-1">📍 {e.location}</span>}
                {e.gpa && <span className="flex items-center gap-1">⭐ GPA: {e.gpa}</span>}
              </div>

              {e.courses && e.courses.length > 0 && (
                <div className="mb-4">
                  <strong className="text-white/80 block mb-2 font-semibold">Core Courses:</strong>
                  <div className="flex flex-wrap gap-2">
                    {e.courses.slice(0, 9).map(course => (
                      <span key={course} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-white/60">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {e.highlights && e.highlights.length > 0 && (
                <ul className="list-disc ml-5 space-y-2 text-sm text-white/70 mt-4 marker:text-primary">
                  {e.highlights.map((h, index) => (
                    <li key={index} className="pl-1 tracking-wide leading-relaxed">{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
