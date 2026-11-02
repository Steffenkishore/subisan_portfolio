import certifications from "../assets/data/certifications";
import { motion } from "motion/react";

const icons = {
  python: (
    <>
      <path d="M12 3H8a3 3 0 0 0-3 3v3h7v2H5a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h4v-4h7a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-4V3Z" />
      <circle cx="9" cy="6.5" r=".6" fill="currentColor" />
      <circle cx="15" cy="17.5" r=".6" fill="currentColor" />
    </>
  ),
  cloud: <path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 19 18Z" />,
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 3 6-7" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  brain: (
    <path d="M12 4a4 4 0 0 0-7 3 4 4 0 0 0-1 7 4 4 0 0 0 4 6h4Zm0 0a4 4 0 0 1 7 3 4 4 0 0 1 1 7 4 4 0 0 1-4 6h-4M8 8v3m8-3v3M8 16h2m4 0h2" />
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3m6 0h4" />
    </>
  ),
};

function CertificateIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {icons[name] || icons.chart}
    </svg>
  );
}

function CertificationCard({ item, index }) {
  const isInProgress = item.status === "In Progress";
  const isElite = item.status === "Elite Rank";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_15px_40px_rgba(250,204,21,0.06)] sm:p-6">
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-yellow-400/[0.04] transition group-hover:bg-yellow-400/[0.08]" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.07] text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
          <CertificateIcon name={item.icon} />
        </div>

        <span
          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
            isInProgress
              ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-400"
              : isElite
                ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
                : "border-white/10 bg-white/[0.04] text-gray-400"
          }`}
        >
          {item.status}
        </span>
      </div>

      <div className="relative mt-6 flex-1">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-yellow-400/80">
          {item.category}
        </p>

        <h3 className="text-lg font-semibold leading-snug text-white transition group-hover:text-yellow-400">
          {item.title}
        </h3>

        <p className="mt-3 text-sm text-gray-500">{item.provider}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
        <span className="text-xs text-gray-600">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(certifications.items.length).padStart(2, "0")}
        </span>

        <span className="text-xs text-gray-500">
          {isInProgress ? "Currently learning" : "Professional development"}
        </span>
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-yellow-400 sm:text-sm">
            {certifications.eyebrow}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Courses & <span className="text-yellow-400">Certifications.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            {certifications.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.items.map((item, index) => (
            <CertificationCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
          <span className="h-px w-10 bg-yellow-400/50" />
          Learning today. Building better solutions tomorrow.
        </div>
      </motion.div>
    </section>
  );
}
