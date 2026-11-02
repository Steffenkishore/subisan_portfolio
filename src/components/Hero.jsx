import profile from "../assets/data/profile";
import profilePicture from "../../public/profile_pic.png"
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
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Subisan_Resume.pdf"
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
            <img src={profilePicture} className="rounded-xl" />

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
