import experience from "../assets/data/experience";
import { motion } from "motion/react";

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18M10 12v2h4v-2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ExperienceCard({ item, index }) {
  return (
    <article className="group relative pl-10 sm:pl-14">
      {/* Timeline marker */}
      <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-400/40 bg-[#151515] text-yellow-400 transition group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
        <BriefcaseIcon />
      </div>

      {/* Timeline connector */}
      <div className="absolute bottom-0 left-[15px] top-14 w-px bg-gradient-to-b from-yellow-400/50 to-white/5" />

      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_15px_45px_rgba(250,204,21,0.06)] sm:p-7">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1 text-xs font-medium text-yellow-400">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              {item.employmentType}
            </span>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {item.role}
            </h3>

            <p className="mt-2 font-medium text-yellow-400">{item.company}</p>
          </div>

          <div className="shrink-0 sm:text-right">
            <p className="text-sm font-medium text-white/80">{item.duration}</p>
            <p className="mt-1 text-sm text-gray-500">{item.location}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          {item.description}
        </p>

        {/* Responsibilities */}
        <div className="mt-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
            Key Contributions
          </h4>

          <ul className="space-y-3">
            {item.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex items-start gap-3 text-sm leading-6 text-gray-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-yellow-400/30 hover:text-yellow-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section heading */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-yellow-400 sm:text-sm">
            {experience.eyebrow}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {experience.heading}
            <span className="text-yellow-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            {experience.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.items.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>

        {/* Closing note */}
        <div className="ml-10 mt-10 border-l-2 border-yellow-400/30 py-2 pl-6 sm:ml-14">
          <p className="text-sm leading-6 text-gray-500">
            Every experience is an opportunity to learn, improve, and create
            meaningful impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
