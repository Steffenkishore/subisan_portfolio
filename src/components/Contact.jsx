import { useState } from "react";
import contact from "../assets/data/contact";
import { motion } from "motion/react";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function ContactDetail({ icon, label, value, href }) {
  return (
    <a
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-yellow-400/30 hover:bg-yellow-400/[0.03] sm:p-5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.07] text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <p className="mt-2 break-words text-sm font-medium text-gray-200 transition group-hover:text-yellow-400 sm:text-base">
          {value}
        </p>
      </div>
    </a>
  );
}

function SocialLink({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-gray-400 transition hover:border-yellow-400/40 hover:text-yellow-400"
    >
      {name}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Web3Forms integration will be added here later.
    setStatus(
      "Your form is ready, but email delivery is not enabled yet. Web3Forms integration is required to send your message.",
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/20";

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-yellow-400 sm:text-sm">
            {contact.eyebrow}
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's turn ideas
            <br />
            into <span className="text-yellow-400">impact.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            {contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Contact details */}
          <div className="flex flex-col">
            <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">
              <h3 className="text-xl font-semibold">
                Get in touch<span className="text-yellow-400">.</span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                I'm always interested in meaningful projects, new opportunities,
                and connecting with people who love working with data.
              </p>

              <div className="mt-7 space-y-3">
                <ContactDetail
                  icon={<MailIcon />}
                  label="Email me"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />

                <ContactDetail
                  icon={<PhoneIcon />}
                  label="Call me"
                  value={contact.phone}
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                />

                <ContactDetail
                  icon={<LocationIcon />}
                  label="Location"
                  value={contact.location}
                  href="https://www.google.com/maps/search/?api=1&query=Chennai%2C+Tamil+Nadu%2C+India"
                />
              </div>

              <div className="mt-7 rounded-xl border border-yellow-400/20 bg-yellow-400/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  </span>

                  <p className="text-sm font-medium text-yellow-400">
                    {contact.availability}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Find me online
                </p>

                <div className="flex flex-wrap gap-3">
                  {contact.socialLinks.map((social) => (
                    <SocialLink key={social.name} {...social} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-8 lg:p-9">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Send a message
              </p>

              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Let's talk<span className="text-yellow-400">.</span>
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in the details below and I'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-gray-300"
                >
                  Your name <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email address <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject <span className="text-yellow-400">*</span>
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message <span className="text-yellow-400">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-32 resize-y`}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                Prepare Message
                <SendIcon />
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-yellow-400/20 bg-yellow-400/[0.05] p-4 text-sm leading-6 text-yellow-200"
                >
                  {status}
                </p>
              )}

              <p className="text-center text-xs leading-5 text-gray-600">
                Your message will be sent once email integration is configured.
              </p>
            </form>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Subisan R. Built with curiosity and
            data.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
