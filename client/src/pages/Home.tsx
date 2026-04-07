/*
Design reminder for this file:
Industrial luxury interface inspired by precision hardware packaging.
This page should feel machined, spacious, premium, and trustworthy.
Use oversized condensed typography, dark product-led staging, pill CTAs,
and editorial section shifts that align with the Bitkey brand language.
*/

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Download,
  Menu,
  Monitor,
  Shield,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const downloadUrl =
  "https://api.files.link/v1/p/03b07315-be79-4192-8435-f491edc7341c";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Compatibility", href: "#compatibility" },
  { label: "Security", href: "#security" },
  { label: "Support", href: "#support" },
];

const featureCards = [
  {
    title: "Improved Hardware Compatibility",
    copy:
      "Connect with more confidence across your Windows setup, with a smoother handoff between the Bitkey app and the hardware experience you already trust.",
    eyebrow: "Feature 01",
    icon: Monitor,
    accent: "from-[#b89b7c]/30 via-[#e7dcc1]/10 to-transparent",
  },
  {
    title: "Advanced Scam Detection",
    copy:
      "Surface suspicious transaction patterns earlier with calmer, more contextual warnings designed to help you slow down before signing.",
    eyebrow: "Feature 02",
    icon: Shield,
    accent: "from-[#8fd0b1]/30 via-[#cde5d9]/10 to-transparent",
  },
  {
    title: "In-Built AI Support",
    copy:
      "Get guided help directly inside the desktop app through intelligent support flows that keep education and action close together.",
    eyebrow: "Feature 03",
    icon: Bot,
    accent: "from-[#a96c83]/35 via-[#d3bcc6]/10 to-transparent",
  },
];

const trustPoints = [
  "Native Windows desktop flow for clearer transaction review",
  "Desktop-grade screen space for security details and support guidance",
  "Unified download action across every call-to-action on the page",
];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function DownloadButton({
  label,
  variant = "primary",
  className = "",
}: {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9c796] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2232]";

  const palette =
    variant === "primary"
      ? "border-[#b56c86] bg-[#b56c86] text-[#18131c] shadow-[0_16px_40px_rgba(181,108,134,0.24)] hover:-translate-y-0.5 hover:bg-[#c27792]"
      : "border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10";

  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = downloadUrl;
      }}
      className={`${base} ${palette} ${className}`}
    >
      <Download className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

function SectionBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.64rem] uppercase tracking-[0.28em] text-white/72 backdrop-blur-sm">
      {children}
    </span>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f0ede8] text-[#18161d]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 w-[calc(100%-1.5rem)] max-w-[1380px] rounded-full border border-white/10 bg-[#191d2d]/86 px-4 py-3 shadow-[0_18px_60px_rgba(10,12,20,0.35)] backdrop-blur-xl md:px-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="flex items-center gap-3 text-white transition-opacity hover:opacity-85"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1894211759025823744/AjQjEkUH_400x400.jpg"
                alt="Bitkey logo"
                className="h-9 w-9 rounded-[10px] object-cover ring-1 ring-white/12"
              />
              <div className="leading-none">
                <div className="font-display text-[1.95rem] uppercase tracking-[-0.04em]">
                  Bitkey
                </div>
                <div className="text-[0.58rem] uppercase tracking-[0.35em] text-white/55">
                  Desktop app
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-white/72 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <DownloadButton label="Download for Windows" />
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition hover:bg-white/12 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.24 }}
              className="mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-[1380px] rounded-[28px] border border-white/10 bg-[#191d2d]/94 p-5 shadow-[0_20px_70px_rgba(10,12,20,0.38)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-[0.78rem] uppercase tracking-[0.26em] text-white/82"
                  >
                    {item.label}
                  </a>
                ))}
                <DownloadButton label="Download for Windows" className="w-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#1f2232] pb-20 pt-36 text-white md:pb-28 md:pt-40">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(12,14,22,0.18), rgba(12,14,22,0.7)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663407736159/VxQmxnAxUcJwXupzdTLeow/bitkey-hero-bg-VTppYEmyoLvPtqvswTR4So.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,197,146,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(181,108,134,0.16),transparent_32%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1f2232] to-transparent" />

          <div className="container relative z-10">
            <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.9fr)] xl:gap-6">
              <motion.div
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                className="relative max-w-[760px]"
              >
                <SectionBadge>Windows desktop release</SectionBadge>
                <div className="mt-8 max-w-[180px] md:absolute md:-left-4 md:-top-24 md:max-w-[240px] md:-rotate-[18deg]">
                  <img
                    src="https://images.ctfassets.net/mtmp6hzjjvnd/4jDLE5zwFDi1W3TslPRni4/c5f7daecb26747f906aa3f1f85508e8b/homepage-bitkey-solo.webp"
                    alt="Bitkey hardware"
                    className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
                  />
                </div>
                <p className="mb-4 mt-8 text-[0.68rem] uppercase tracking-[0.42em] text-white/60 md:mt-0">
                  Self-custody, now with a desktop-grade view
                </p>
                <h1 className="max-w-[8ch] font-display text-[clamp(4.6rem,14vw,9.6rem)] uppercase leading-[0.86] tracking-[-0.06em] text-white">
                  Download the Bitkey desktop app.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                  Get a larger, clearer, more deliberate Bitkey experience on
                  Windows. Review actions with more space, connect hardware with
                  more confidence, and access new support and protection tools in
                  one focused desktop flow.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <DownloadButton label="Download for Windows" />
                  <DownloadButton label="Explore new features" variant="secondary" />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.7rem] uppercase tracking-[0.26em] text-white/62">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#d7c48f]" />
                    Improved hardware compatibility
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#9dd3b9]" />
                    Advanced scam detection
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Bot className="h-4 w-4 text-[#c795aa]" />
                    In-built AI support
                  </span>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-4 text-white/70">
                  <p className="text-[0.62rem] uppercase tracking-[0.35em] text-white/45">
                    From the makers of
                  </p>
                  <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                    <span>Square</span>
                    <span className="text-white/28">+</span>
                    <span>Cash App</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1, duration: 0.8 }}
                className="relative mx-auto w-full max-w-[680px] xl:ml-auto"
              >
                <div className="absolute -left-2 top-[9%] z-20 rounded-full border border-white/15 bg-[#111521]/85 px-4 py-3 text-[0.64rem] uppercase tracking-[0.26em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.32)] backdrop-blur-md md:-left-8">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-[#d8c58f]" />
                    Desktop-grade review
                  </div>
                </div>
                <div className="absolute -right-1 top-[22%] z-20 rounded-full border border-[#8dd2b0]/25 bg-[#121924]/84 px-4 py-3 text-[0.64rem] uppercase tracking-[0.24em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md md:-right-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#8dd2b0]" />
                    Scam alerts
                  </div>
                </div>
                <div className="absolute bottom-[9%] left-[8%] z-20 rounded-full border border-[#c88ba1]/25 bg-[#17111a]/82 px-4 py-3 text-[0.64rem] uppercase tracking-[0.24em] text-white shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-[#c88ba1]" />
                    AI-guided support
                  </div>
                </div>

                <div className="relative rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-3 shadow-[0_50px_120px_rgba(3,6,12,0.52)] backdrop-blur-xl md:p-4">
                  <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_34%)]" />
                  <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#f2eee8] text-[#1a171f] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="flex items-center justify-between border-b border-[#dfd9cf] px-5 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#c9ba94]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#c88ba1]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#8fd0b1]" />
                      </div>
                      <div className="rounded-full border border-[#d7d1c6] bg-white px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-[#5f5a62]">
                        Bitkey Desktop
                      </div>
                    </div>

                    <div className="grid gap-6 px-5 py-5 md:grid-cols-[1.15fr_0.85fr] md:px-7 md:py-7">
                      <div className="space-y-5">
                        <div>
                          <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[#807a72]">
                            Portfolio view
                          </div>
                          <div className="mt-3 font-display text-[3.4rem] uppercase leading-[0.9] tracking-[-0.06em] text-[#1b1820] md:text-[4.6rem]">
                            $10,990.12
                          </div>
                          <div className="mt-2 text-sm text-[#67616a]">
                            0.16305166 BTC · Clearer transaction review on a larger screen.
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {[
                            ["Buy", "+"],
                            ["Sell", "−"],
                            ["Send", "↑"],
                          ].map(([label, glyph]) => (
                            <div
                              key={label}
                              className="rounded-[22px] border border-[#ddd6cb] bg-white/80 px-4 py-4 shadow-[0_12px_24px_rgba(35,32,40,0.06)]"
                            >
                              <div className="text-lg text-[#222]">{glyph}</div>
                              <div className="mt-6 text-[0.62rem] uppercase tracking-[0.25em] text-[#6c6670]">
                                {label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-[24px] border border-[#ddd7cc] bg-white/78 p-4 shadow-[0_16px_28px_rgba(35,32,40,0.08)]">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="text-[0.6rem] uppercase tracking-[0.28em] text-[#8a857c]">
                                Smart support
                              </div>
                              <div className="mt-2 text-sm leading-6 text-[#544f57]">
                                “This transaction looks unusual. Want help checking destination details before you sign?”
                              </div>
                            </div>
                            <div className="rounded-full bg-[#191d2d] p-3 text-white">
                              <Bot className="h-5 w-5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-[26px] bg-[#202334] p-5 text-white shadow-[0_18px_35px_rgba(20,15,30,0.24)]">
                          <div className="text-[0.62rem] uppercase tracking-[0.28em] text-white/52">
                            Connected hardware
                          </div>
                          <img
                            src="https://images.ctfassets.net/mtmp6hzjjvnd/4jDLE5zwFDi1W3TslPRni4/c5f7daecb26747f906aa3f1f85508e8b/homepage-bitkey-solo.webp"
                            alt="Bitkey hardware floating beside desktop app interface"
                            className="mx-auto mt-4 w-full max-w-[190px] rotate-[18deg] drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
                          />
                          <div className="mt-4 rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/78">
                            Plug in, confirm, and review with more space and calmer guidance.
                          </div>
                        </div>

                        <div className="rounded-[26px] border border-[#ded7cd] bg-[#ede8df] p-5 shadow-[0_16px_28px_rgba(35,32,40,0.08)]">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-[0.6rem] uppercase tracking-[0.28em] text-[#8a847b]">
                                Release focus
                              </div>
                              <div className="mt-2 font-display text-[2rem] uppercase leading-none tracking-[-0.05em] text-[#1d1a21]">
                                Windows
                              </div>
                            </div>
                            <Wallet className="h-8 w-8 text-[#b56c86]" />
                          </div>
                          <div className="mt-4 space-y-3">
                            {trustPoints.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 rounded-[18px] border border-[#d8d0c4] bg-white/72 px-3 py-3 text-sm leading-6 text-[#57515a]"
                              >
                                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9ccfb8]" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#1f2232] pb-24 text-white">
          <div className="container">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.72fr_1fr] lg:pt-16"
            >
              <div>
                <SectionBadge>What’s new</SectionBadge>
                <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(3rem,8vw,5.8rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                  Three upgrades for a calmer desktop flow.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {featureCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.65, delay: index * 0.08 }}
                      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[0.6rem] uppercase tracking-[0.28em] text-white/62">
                            {card.eyebrow}
                          </span>
                          <div className="rounded-full border border-white/12 bg-white/10 p-2.5 text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>
                        <h3 className="mt-10 font-display text-[2rem] uppercase leading-[0.95] tracking-[-0.05em] text-white">
                          {card.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-white/72">
                          {card.copy}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="compatibility" className="bg-[#f0ede8] py-24">
          <div className="container grid gap-10 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="max-w-[640px]"
            >
              <SectionBadge>Improved hardware compatibility</SectionBadge>
              <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(3rem,7vw,5.8rem)] uppercase leading-[0.9] tracking-[-0.06em] text-[#191620]">
                More room to review. Better flow to connect.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#5a5560] md:text-lg">
                The Bitkey desktop app brings a wider, steadier view to the same
                security-first workflow. Transaction details, device prompts, and
                help states sit in one place so your next step feels more legible,
                not more complicated.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <DownloadButton label="Download the app" />
                <div className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.28em] text-[#6d6670]">
                  <ChevronDown className="h-4 w-4" />
                  Windows desktop only
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[34px] border border-[#d9d3c8] bg-[#242838] p-3 shadow-[0_28px_80px_rgba(23,18,28,0.16)]"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-[#1f2232] p-6 md:p-8">
                <div
                  className="absolute inset-0 opacity-55"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(12,14,22,0.24), rgba(12,14,22,0.5)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663407736159/VxQmxnAxUcJwXupzdTLeow/bitkey-hero-bg-VTppYEmyoLvPtqvswTR4So.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 grid gap-5 md:grid-cols-[0.7fr_1fr] md:items-center">
                  <div className="rounded-[26px] border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                    <img
                      src="https://images.ctfassets.net/mtmp6hzjjvnd/4jDLE5zwFDi1W3TslPRni4/c5f7daecb26747f906aa3f1f85508e8b/homepage-bitkey-solo.webp"
                      alt="Bitkey hardware"
                      className="mx-auto w-full max-w-[220px] rotate-[17deg] drop-shadow-[0_22px_34px_rgba(0,0,0,0.34)]"
                    />
                  </div>
                  <div className="space-y-4 text-white">
                    {[
                      ["Desktop handshake", "A steadier pairing flow between hardware prompts and on-screen review states."],
                      ["Clearer transaction context", "Larger surfaces for amounts, addresses, warnings, and next-step guidance."],
                      ["Fewer visual compromises", "A layout built for keyboard, cursor, and longer-form support interactions."],
                    ].map(([title, copy]) => (
                      <div
                        key={title}
                        className="rounded-[24px] border border-white/10 bg-[#0f1220]/52 p-4 backdrop-blur-sm"
                      >
                        <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[#d8c58f]">
                          {title}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-white/74">{copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="security" className="bg-[#eeebe5] py-24">
          <div className="container grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[34px] border border-[#d8d1c6] bg-[#1e2232] text-white shadow-[0_28px_70px_rgba(19,16,25,0.18)]"
            >
              <div
                className="absolute inset-0 opacity-78"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(14,16,25,0.25), rgba(14,16,25,0.72)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663407736159/VxQmxnAxUcJwXupzdTLeow/bitkey-feature-scam-bg-3wgMG9YV5CzoqZbdnqaE9q.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-7 md:p-9">
                <div>
                  <SectionBadge>Advanced scam detection</SectionBadge>
                  <h3 className="mt-6 max-w-[9ch] font-display text-[clamp(2.6rem,6vw,4.5rem)] uppercase leading-[0.92] tracking-[-0.055em]">
                    Warnings with more context, not more panic.
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-white/74 md:text-base">
                    The desktop experience gives protective prompts more space to
                    explain unusual activity, suspicious destinations, and higher-risk
                    decisions before you commit.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    "Expanded warning surfaces for suspicious destinations",
                    "More legible cues before hardware confirmation",
                    "Supportive copy designed to slow rushed decisions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/12 bg-[#0e1320]/48 px-4 py-3 text-sm leading-6 text-white/78 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              id="support"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative overflow-hidden rounded-[34px] border border-[#d8d1c6] bg-[#202436] text-white shadow-[0_28px_70px_rgba(19,16,25,0.18)]"
            >
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(15,17,27,0.2), rgba(15,17,27,0.7)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663407736159/VxQmxnAxUcJwXupzdTLeow/bitkey-feature-ai-bg-PTK9hiECiKfpgEigko35FJ.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-7 md:p-9">
                <div>
                  <SectionBadge>In-built AI support</SectionBadge>
                  <h3 className="mt-6 max-w-[10ch] font-display text-[clamp(2.6rem,6vw,4.5rem)] uppercase leading-[0.92] tracking-[-0.055em]">
                    Guidance where questions actually happen.
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-white/74 md:text-base">
                    Instead of leaving the app to search for help, get assistance
                    inside the desktop flow when you need clarification, recovery
                    guidance, or an extra explanation before acting.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/12 bg-[#0f1420]/54 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/10 p-3 text-[#d7c48f]">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[0.65rem] uppercase tracking-[0.28em] text-white/54">
                        Example guidance
                      </div>
                      <p className="mt-2 text-sm leading-7 text-white/78">
                        “Want help checking a receiving address, reviewing a warning,
                        or understanding what the hardware prompt means?”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="bg-[#f6f3ee] py-24">
          <div className="container">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="grid gap-8 rounded-[40px] border border-[#d9d3c7] bg-[#1d2131] px-6 py-8 text-white shadow-[0_32px_90px_rgba(18,16,23,0.18)] md:px-10 md:py-10 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <SectionBadge>Ready to install</SectionBadge>
                <h2 className="mt-6 max-w-[10ch] font-display text-[clamp(3rem,7vw,5.8rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                  Bring Bitkey to the desktop.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                  Download the Windows desktop app for a larger, calmer Bitkey
                  experience built around compatibility, protective guidance, and
                  in-app support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <DownloadButton label="Download for Windows" />
                <DownloadButton label="Get the desktop app" variant="secondary" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#1d2131] pb-12 pt-16 text-white">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(11,13,20,0.24), rgba(11,13,20,0.85)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663407736159/VxQmxnAxUcJwXupzdTLeow/bitkey-hero-bg-VTppYEmyoLvPtqvswTR4So.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="https://pbs.twimg.com/profile_images/1894211759025823744/AjQjEkUH_400x400.jpg"
                  alt="Bitkey icon"
                  className="h-12 w-12 rounded-[14px] object-cover ring-1 ring-white/14"
                />
                <div>
                  <div className="font-display text-[2.8rem] uppercase leading-none tracking-[-0.05em]">
                    Bitkey
                  </div>
                  <div className="text-[0.62rem] uppercase tracking-[0.34em] text-white/50">
                    Desktop app for Windows
                  </div>
                </div>
              </div>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/68 md:text-base">
                A desktop landing page designed to feel native to the Bitkey brand:
                dark, product-led, deliberate, and focused on trustworthy action.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/45">
                  Navigate
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[0.76rem] uppercase tracking-[0.24em] text-white/76 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/45">
                  Download
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <DownloadButton label="Download for Windows" className="w-full justify-center" />
                  <a
                    href="https://bitkey.world/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.24em] text-white/72 transition hover:text-white"
                  >
                    Visit Bitkey
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-display text-[clamp(4.2rem,12vw,8rem)] uppercase leading-none tracking-[-0.08em] text-white">
                Bitkey
              </div>
              <p className="mt-2 text-sm text-white/45">
                From the makers of Square + Cash App.
              </p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white px-6 py-5 text-[#17141c] shadow-[0_20px_40px_rgba(0,0,0,0.16)]">
              <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[#756f78]">
                Download desktop app
              </div>
              <button
                type="button"
                onClick={() => {
                  window.location.href = downloadUrl;
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1c2030] px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-[#2a3047]"
              >
                Install now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
