import profile from "../assets/data/profile";
import useFadeOnScroll from "../hooks/useFadeOnScroll";
import { motion } from "motion/react";

export default function Hero() {
  useFadeOnScroll();
  return (
    <section
      id="home"
      className="relative isolate min-h-[90vh] overflow-hidden bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[120px]" />

      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Introduction */}
        <div className="order-2 lg:order-1">
          {/* Availability badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
            <span className="text-xs font-medium tracking-wide text-yellow-300 sm:text-sm">
              {profile.availability}
            </span>
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.firstName}
            {/* <span className="mt-2 block text-yellow-400">{profile.role}.</span> */}

            <h1 className="text-4xl font-bold  text-yellow-400 sm:text-5xl lg:text-6xl">
              <span className="typing-text">Data Analyst</span>
            </h1>
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-yellow-400" />
            <span className="text-sm text-gray-400">
              Based in {profile.location}
            </span>
          </div>

          <h2 className="mt-8 max-w-xl text-xl font-semibold leading-relaxed sm:text-2xl">
            {profile.tagline}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
            {profile.introduction}
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-6 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
              Explore My Work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Connect with me
            </span>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
            >
              GitHub ↗
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Right: Data visualization illustration */}
        <motion.div
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
          initial={{ opacity: 0, y: 40, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md">
            {/* Decorative rings */}
            <div className="absolute -inset-5 rounded-[2rem] border border-yellow-400/10 rotate-3" />
            <div className="absolute -inset-2 rounded-[2rem] border border-yellow-400/20 -rotate-2" />

            {/* Dashboard card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-5 shadow-2xl shadow-yellow-400/5 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs text-gray-500">DATA ANALYTICS</p>
                  <h3 className="mt-1 text-lg font-bold">Insights Dashboard</h3>
                </div>

                <div className="rounded-xl bg-yellow-400/10 p-3 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-5 5" />
                  </svg>
                </div>
              </div>

              {/* Metric cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-[#202020] p-4">
                  <p className="text-xs text-gray-500">Core Focus</p>
                  <p className="mt-2 text-lg font-bold text-yellow-400">
                    Analysis
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Find meaningful patterns
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#202020] p-4">
                  <p className="text-xs text-gray-500">Primary Tools</p>
                  <p className="mt-2 text-lg font-bold text-white">
                    Python & SQL
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Explore structured data
                  </p>
                </div>
              </div>

              {/* Decorative chart */}
              <div className="mt-5 rounded-xl border border-white/5 bg-[#202020] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Data Visualization</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Analytical workflow
                    </p>
                  </div>
                  <span className="rounded-md bg-yellow-400/10 px-2 py-1 text-xs text-yellow-400">
                    EDA
                  </span>
                </div>

                <div className="flex h-32 items-end justify-around gap-3 border-b border-l border-white/10 px-3">
                  {[42, 67, 51, 83, 60, 95, 73, 88].map((height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className={`w-full max-w-7 rounded-t-sm transition-all duration-300 hover:opacity-70 ${
                        index === 5 ? "bg-yellow-300" : "bg-yellow-400/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Python", "SQL", "Excel", "Power BI"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <p className="text-xs text-gray-500">
                  Transforming data into decisions
                </p>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -right-3 -top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/30 bg-[#1c1c1c] text-xl text-yellow-400 shadow-lg sm:-right-5">
              ✳
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
