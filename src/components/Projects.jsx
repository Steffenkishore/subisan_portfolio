import projectsData from "../assets/data/projects";
import { motion } from "motion/react";

const icons = {
  dashboard: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
      <path d="m12 16 2-2 2 2 3-3" />
    </>
  ),

  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </>
  ),

  automation: (
    <>
      <path d="M12 8V4H8" />
      <path d="M4.93 4.93a8 8 0 1 0 13.14 0" />
      <path d="M12 12v5l3 2" />
    </>
  ),
};

function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-400/40">
      {/* Project visual */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#1a1a1a] sm:h-56">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.10),transparent_65%)]" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <span className="absolute left-5 top-5 font-mono text-xs tracking-widest text-gray-500">
          PROJECT / {project.id}
        </span>

        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-400/30 bg-[#202020] text-yellow-400 shadow-2xl shadow-yellow-400/5 transition duration-500 group-hover:scale-110 group-hover:rotate-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icons[project.icon]}
          </svg>
        </div>

        <span className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-400">
          {project.category}
        </span>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-yellow-400">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-5 space-y-3">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-3">
              <span className="mt-1 text-yellow-400" aria-hidden="true">
                ↗
              </span>
              <span className="text-sm text-gray-300">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Technology tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-xs text-gray-400 transition-colors hover:border-yellow-400/30 hover:text-yellow-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links: rendered only when supplied */}
        {(project.github || project.demo) && (
          <div className="mt-auto flex flex-wrap gap-4 border-t border-white/[0.08] pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-yellow-400"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-yellow-400/[0.035] blur-[120px]" />

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 rounded-full bg-yellow-400" />
              <p className="text-xs font-semibold tracking-[0.3em] text-yellow-400">
                {projectsData.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Projects That Turn Data{" "}
              <span className="text-yellow-400">Into Value.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
            {projectsData.description}
          </p>
        </div>

        {/* Project cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footer statement */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-gray-400">
            {projectsData.footer}
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            Let's connect
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
