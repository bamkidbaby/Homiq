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
          className="grid min-h-[calc(100vh-6rem)] items-center gap-14 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-24"
        >
          <div className="max-w-2xl">
            <motion.div variants={item} className="mb-6 inline-flex">
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl">
                Smart home, reimagined
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-6xl lg:text-[4.5rem]"
            >
              Control your home with calm, clarity, and intelligence.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-7 text-white/62 sm:text-lg"
            >
              Homiq brings lighting, climate, security, and routines into one
              refined app so your home feels effortless from the first tap.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-medium text-slate-950 shadow-[0_16px_40px_rgba(255,255,255,0.12)]"
              >
                Explore Features
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-xl"
              >
                Watch Demo
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 grid max-w-lg grid-cols-3 gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
            >
              {[
                { value: "120k+", label: "Homes connected" },
                { value: "99.99%", label: "Secure uptime" },
                { value: "4.9/5", label: "User rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-black/20 px-4 py-5"
                >
                  <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/42">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.07] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/92">
                    {authCopy.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    {authCopy.subtitle}
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                  Beta
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 rounded-2xl border border-white/10 bg-black/20 p-1">
                {["login", "signup"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setMode(tab)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium capitalize transition ${
                      mode === tab
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.form
                  key={mode}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                >
                  {mode === "signup" && (
                    <AuthField label="Name" placeholder="Alex Carter" />
                  )}
                  <AuthField
                    label="Email"
                    type="email"
                    placeholder="alex@homiq.app"
                  />
                  <AuthField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-2xl bg-cyan-400 px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_14px_35px_rgba(34,211,238,0.28)]"
                  >
                    {authCopy.cta}
                  </motion.button>

                  <p className="pt-1 text-center text-sm text-white/46">
                    {authCopy.helper}{" "}
                    <button
                      type="button"
                      onClick={() =>
                        setMode(mode === "login" ? "signup" : "login")
                      }
                      className="font-medium text-white transition hover:text-cyan-200"
                    >
                      {authCopy.switchLabel}
                    </button>
                  </p>
                </motion.form>
              </AnimatePresence>
            </div>
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
