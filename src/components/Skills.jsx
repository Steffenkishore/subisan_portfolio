import skillsData from "../assets/data/skills";
import { motion } from "motion/react";

const icons = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 6-7" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a5 5 0 0 0-6.6 6.6L3 18l3 3 5.1-5.1a5 5 0 0 0 6.6-6.6L14 12l-2-2z" />
      <path d="m16 5 3-3 3 3-3 3" />
    </>
  ),
};

function SkillCard({ category }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#191919] sm:p-7">
      {/* Decorative corner */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-400/[0.04] blur-2xl transition group-hover:bg-yellow-400/10" />

      {/* Card heading */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icons[category.icon]}
          </svg>
        </div>

        <span className="font-mono text-sm text-gray-600 transition group-hover:text-yellow-400">
          /{category.id}
        </span>
      </div>

      <h3 className="relative mt-7 text-xl font-bold leading-snug text-white">
        {category.title}
      </h3>

      <p className="relative mt-2 text-sm text-gray-500">{category.subtitle}</p>

      <div className="relative my-5 h-px bg-white/[0.08]">
        <div className="h-px w-10 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
      </div>

      {/* Skill tags */}
      <div className="relative flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="relative mt-auto pt-7">
        <p className="text-xs text-gray-600">
          {String(category.skills.length).padStart(2, "0")} skills
        </p>
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-yellow-400/[0.04] blur-[100px]" />

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 rounded-full bg-yellow-400" />
              <p className="text-xs font-semibold tracking-[0.3em] text-yellow-400">
                {skillsData.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Skills & <span className="text-yellow-400">Expertise.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
            {skillsData.description}
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.categories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-gray-400">{skillsData.footer}</p>

          <a
            href="#projects"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            See my work
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
