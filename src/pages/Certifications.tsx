import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/component/CertificationCard";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return certifications
      .filter((c) => {
        // On crée une grande chaîne de recherche avec toutes les infos
        const searchStr = [
          c.title,
          c.issuer,
          ...(c.tags ?? []),
          ...(c.skills ?? []),
        ]
          .join(" ")
          .toLowerCase();

        return searchStr.includes(q.toLowerCase());
      })
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [q]);

  return (
    <section className="flex flex-col gap-10">
      {/* En-tête avec titre et barre de recherche */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-2xl">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gradient-primary">Certifications</h2>
          <p className="text-white/60 text-lg">
            My official skill validations recognized by the industry.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search (e.g., Java, React, SQL...)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="glass-input px-4 py-3 w-full md:w-80 shadow-lg"
          aria-label="Filter certifications"
        />
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {list.length > 0 ? (
            list.map((c) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={`${c.title}-${c.issueDate}`}
              >
                <CertificationCard c={c} />
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/50 text-center col-span-full py-16 glass-panel rounded-2xl"
            >
              No certifications match your search.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
