import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { ExternalLink } from "lucide-react";

// Fonction utilitaire pour formater la date
function mmYYYY(s: string) {
  if (!s) return "";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  // Calcul si la certification est expirée
  const isExpired =
    c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "glass-card flex flex-col h-full group bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-white/30 cursor-pointer",
        (isExpired || c.status === "revoked") && "opacity-70 grayscale-[0.8]"
      )}
    >
      {/* Haut : Image de la certification en grand, contenu 100% visible */}
      <div className="w-full h-56 md:h-64 bg-white/10 p-4 sm:p-6 flex items-center justify-center relative overflow-hidden shrink-0">
        {c.image ? (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            loading="lazy"
            className="w-full h-full object-contain relative z-10 transition-transform duration-500 drop-shadow-xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-7xl relative z-10 transition-transform duration-500">
            📜
          </div>
        )}
      </div>

      {/* Bas : Contenu texte */}
      <div className="p-6 flex flex-col grow relative z-20">
        <h3 className="font-bold text-xl leading-snug text-white mb-2 group-hover:text-primary transition-colors">
          {c.title}
        </h3>
        <p className="text-sm font-semibold text-white/70 mb-4">{c.issuer}</p>

        <p className="text-xs text-white/50 mb-5 bg-white/5 p-3 rounded-xl border border-white/5 self-start">
          Issued : {mmYYYY(c.issueDate)}
          {c.expiryDate
            ? ` • Expires : ${mmYYYY(c.expiryDate)}`
            : " • Permanent"}
          {c.credentialId && (
            <span className="block mt-1 font-mono text-[10px] text-white/40">ID : {c.credentialId}</span>
          )}
        </p>

        {/* Compétences */}
        {c.skills && c.skills.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {c.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="text-xs bg-primary/20 border border-primary/30 text-white/90 px-3 py-1.5 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
            {c.skills.length > 4 && (
              <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2 py-1.5 rounded-lg">
                +{c.skills.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Actions et Status */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
          {c.credentialUrl ? (
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold flex items-center gap-1.5 text-white/90 hover:text-primary transition-colors bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10"
            >
              <ExternalLink className="w-4 h-4" />
              Verify
            </a>
          ) : (
            <span className="text-sm text-white/30 italic">
              No public link
            </span>
          )}

          <div className="flex gap-2">
            {isExpired && (
              <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-900/40 border border-rose-500/30 px-3 py-1.5 rounded-xl">
                Expired
              </span>
            )}
            {c.status === "revoked" && (
              <span className="text-xs font-bold uppercase tracking-wider text-orange-300 bg-orange-900/40 border border-orange-500/30 px-3 py-1.5 rounded-xl">
                Revoked
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
