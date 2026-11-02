import about from "../assets/data/about";
import useFadeOnScroll from "../hooks/useFadeOnScroll";

const icons = {
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 6-7" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  automation: (
    <>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 18.4 2.1-2.1" />
      <path d="m16.3 7.7 2.1-2.1" />
      <circle cx="12" cy="12" r="5" />
    </>
  ),
};




function FocusCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141414] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#191919] sm:p-6">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-400/[0.04] blur-2xl transition group-hover:bg-yellow-400/10" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icons[item.icon]}
          </svg>
        </div>

        <span className="font-mono text-sm text-gray-600 transition group-hover:text-yellow-400">
          /{item.number}
        </span>
      </div>

      <h3 className="relative mt-6 text-lg font-semibold text-white">
        {item.title}
      </h3>

      <p className="relative mt-3 text-sm leading-7 text-gray-400">
        {item.description}
      </p>

      <div className="mt-5 h-px w-10 bg-yellow-400/50 transition-all duration-300 group-hover:w-full" />
    </article>
  );
}

export default function About() {
    useFadeOnScroll();
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#101010] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="fade-in relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-yellow-400" />
            <p className="text-xs font-semibold tracking-[0.3em] text-yellow-400">
              {about.eyebrow}
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {about.heading}
            <span className="text-yellow-400">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            A little about my background, my approach, and what drives me.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Introduction */}
          <div className="lg:col-span-7">
            <div className="border-l-2 border-yellow-400 pl-5 sm:pl-7">
              <h3 className="max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
                {about.highlight}
              </h3>
            </div>

            <div className="mt-7 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-8 text-gray-400 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Education summary */}
            <div className="mt-9 rounded-2xl border border-white/10 bg-[#161616] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
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
                    <path d="m22 10-10-5L2 10l10 5 10-5Z" />
                    <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
                    <path d="M22 10v6" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    Education
                  </p>

                  <h4 className="mt-2 font-semibold leading-relaxed text-white">
                    {about.education}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {about.college}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2">
                    <span className="text-xs text-gray-500">CGPA</span>
                    <span className="text-sm font-bold text-yellow-400">
                      {about.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus areas */}
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold">What I Focus On</h3>
              <span className="text-xs tracking-widest text-gray-500">
                MY APPROACH
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {about.focusAreas.map((item) => (
                <FocusCard key={item.number} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center gap-4 border-t border-white/10 pt-6">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            Driven by curiosity. Focused on accuracy. Always learning.
          </p>
        </div>
      </div>
    </section>
  );
}
