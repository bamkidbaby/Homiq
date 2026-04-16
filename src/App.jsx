import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Live Home Intelligence",
    description:
      "See every room, device, and automation in one elegant control layer with instant updates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 12L12 4l8 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10.75V20h10v-9.25"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14.5h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Adaptive Automation",
    description:
      "Build scenes that react to motion, schedules, and habits without ever touching a complicated dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18.364 5.636l-2.828 2.828"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M21 12h-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18.364 18.364l-2.828-2.828"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 21v-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M5.636 18.364l2.828-2.828"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M3 12h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M5.636 5.636l2.828 2.828"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "Calm Security Layer",
    description:
      "Receive contextual alerts, guest access controls, and protected remote entry designed for peace of mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3l7 3v5c0 4.75-2.857 8.902-7 10-4.143-1.098-7-5.25-7-10V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.25l1.7 1.7 3.4-3.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function AuthField({ label, type = "text", placeholder }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/20"
      />
    </label>
  );
}

export default function App() {
  const [mode, setMode] = useState("login");

  const authCopy =
    mode === "login"
      ? {
          title: "Welcome back",
          subtitle: "Step into your home dashboard with secure instant access.",
          cta: "Log In",
          helper: "New to Homiq?",
          switchLabel: "Create account",
        }
      : {
          title: "Create your space",
          subtitle:
            "Set up your smart home in minutes with a beautifully guided onboarding flow.",
          cta: "Sign Up",
          helper: "Already have an account?",
          switchLabel: "Log in",
        };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[130px]" />
        <div className="absolute right-[-6rem] top-[20%] h-[26rem] w-[26rem] rounded-full bg-white/6 blur-[140px]" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-[22rem] w-[22rem] rounded-full bg-slate-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-4 z-50 mt-4"
        >
          <div className="flex items-center justify-between rounded-[28px] border border-white/10 bg-white/6 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold tracking-[0.18em] text-cyan-200">
                H
              </span>
              <span className="text-lg font-semibold tracking-[-0.04em] text-white">
                Homiq
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="rounded-2xl border border-cyan-300/20 bg-cyan-400/90 px-4 py-2 text-sm font-medium text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300 sm:px-5"
            >
              Get Started
            </motion.a>
          </div>
        </motion.nav>

        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="relative grid min-h-screen items-center gap-16 py-20 md:grid-cols-[1.02fr_0.98fr] md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[40px]">
            <motion.div
              animate={{ x: [0, 28, -20, 0], y: [0, -18, 24, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-8rem] top-[8%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/14 blur-[120px]"
            />
            <motion.div
              animate={{ x: [0, -24, 18, 0], y: [0, 20, -16, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-6rem] top-[12%] h-[28rem] w-[28rem] rounded-full bg-indigo-300/10 blur-[140px]"
            />
            <motion.div
              animate={{ x: [0, 18, -14, 0], y: [0, 22, -10, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-8rem] left-[22%] h-[20rem] w-[20rem] rounded-full bg-white/7 blur-[130px]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_38%,rgba(255,255,255,0.02))]" />
          </div>

          <div className="max-w-2xl pt-10 md:pt-0">
            <motion.div variants={item} className="mb-7 inline-flex">
              <span className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/60 backdrop-blur-2xl">
                The intelligent home OS
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-6xl lg:text-[5rem]"
            >
              <span className="bg-gradient-to-b from-white via-white to-white/72 bg-clip-text text-transparent">
                Home control,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-white/55 bg-clip-text text-transparent">
                designed like software should be.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-8 text-white/58 sm:text-lg"
            >
              Homiq unifies climate, lighting, access, and routines into a
              single calm interface with the precision of a premium SaaS product
              and the warmth of a modern home.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.985 }}
                href="#features"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-cyan-200/20 bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_16px_55px_rgba(34,211,238,0.28)]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />
                <span className="relative">Get Started</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-2xl"
              >
                See how it works
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/42"
            >
              <div>
                <span className="text-lg font-semibold tracking-[-0.04em] text-white">
                  120k+
                </span>{" "}
                connected homes
              </div>
              <div>
                <span className="text-lg font-semibold tracking-[-0.04em] text-white">
                  4.9/5
                </span>{" "}
                user satisfaction
              </div>
              <div>
                <span className="text-lg font-semibold tracking-[-0.04em] text-white">
                  99.99%
                </span>{" "}
                reliable uptime
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-full max-w-[36rem]"
          >
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-cyan-300/12 blur-[90px]" />
            <motion.div
              initial={{ rotate: -4, opacity: 0, scale: 0.96 }}
              animate={{ rotate: -6, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-2 top-12 hidden w-48 rounded-[28px] border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:block"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                Energy Mode
              </p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-cyan-300" />
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                    68%
                  </p>
                  <p className="text-xs text-white/45">efficiency score</p>
                </div>
                <div className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-200">
                  Stable
                </div>
              </div>
            </motion.div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(255,255,255,0.04))]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/92">
                      Home overview
                    </p>
                    <p className="mt-1 text-sm text-white/45">
                      Your entire space, at a glance
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                    Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-white/10 bg-[#0b0f14] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                          Climate
                        </p>
                        <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">
                          22°
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/55">
                        Balanced
                      </div>
                    </div>
                    <div className="mt-8 h-28 rounded-[24px] bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white/65">Front door</p>
                        <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-200">
                          Locked
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="h-2 flex-1 rounded-full bg-cyan-300" />
                        <div className="h-2 w-8 rounded-full bg-white/10" />
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-white/65">Scenes</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["Away", "Evening", "Focus"].map((scene) => (
                          <span
                            key={scene}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/70"
                          >
                            {scene}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-[28px] border border-white/10 bg-black/20 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-white/65">Quick access</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      4 devices active
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "Lights", value: "86%" },
                      { name: "Security", value: "On" },
                      { name: "Music", value: "Living room" },
                    ].map((tile) => (
                      <div
                        key={tile.name}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                          {tile.name}
                        </p>
                        <p className="mt-2 text-sm font-medium text-white">
                          {tile.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-3 hidden rounded-[26px] border border-white/10 bg-white/[0.07] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:block"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                Automation
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                Good evening scene scheduled
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="features"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 sm:py-24"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Precision control without the complexity.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/58">
              Thoughtfully designed tools for the moments that matter most at
              home.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-[28px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-cyan-200">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/56">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="py-20 sm:py-24"
        >
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              About Homiq
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              A calmer relationship with the technology around you.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              Homiq is built for people who want their homes to feel more
              responsive, more secure, and more serene. We combine premium
              interface design with dependable automation so your everyday
              routines feel beautifully invisible.
            </p>
          </div>
        </motion.section>

        <footer
          id="contact"
          className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-8 text-sm text-white/45 sm:flex-row"
        >
          <p className="tracking-[-0.03em] text-white/60">
            (c) 2026 Homiq. Designed for modern living.
          </p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms
            </a>
            <a
              href="mailto:hello@homiq.app"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
