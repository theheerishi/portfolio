"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Meteors } from "@/components/ui/meteors";

interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stats: { value: string; label: string }[];
  tags: string[];
  image: string;
  accent: string;
}

const roles: Role[] = [
  {
    company: "Alaric Design",
    title: "Head of Marketing · Founding Team",
    period: "Mar 2025 — Present",
    location: "Pune, IN · Taipei, TW",
    summary:
      "Full GTM ownership for a $6K–$7K high-ticket product line launching across Taiwan, UAE, and Singapore.",
    bullets: [
      "Contributed to a $1M pre-seed raise — structured investor pitch decks, GTM strategy, and VC outreach collateral in direct partnership with the CEO.",
      "Ran a phased test-and-learn paid media strategy across TikTok, Instagram, YouTube, and Google Ads — $5K awareness testing scaled to $20K across awareness and consideration based on asset and audience optimisation.",
      "Built and managed two international Shopify storefronts (headless on Framer) for Taiwan and UAE — owning the 2-SKU catalogue, payment gateways, and order processing for a $5K-per-unit product line.",
      "Credited contributor on the Red Dot Design Award 2025 submission (One Wire Series) — coordinated cross-functional assets, narrative, and presentation materials. It won.",
      "Managed a $100K marketing budget across paid, PR, creator partnerships, and events.",
    ],
    stats: [
      { value: "$1M", label: "Pre-seed closed" },
      { value: "$100K", label: "Budget owned" },
      { value: "3", label: "Markets launched" },
    ],
    tags: ["GTM", "Paid Media", "Fundraising", "E-Commerce", "Red Dot"],
    image: "/img/exp-alaric.webp",
    accent: "#a78bfa",
  },
  {
    company: "Integra People",
    title: "Marketing Executive",
    period: "Mar 2023 — Feb 2025",
    location: "Leeds, UK",
    summary:
      "Owned organic growth and paid media for a UK recruitment group — compounding SEO with conversion-focused campaigns.",
    bullets: [
      "Grew organic website traffic 1,400% over two years through SEO, content, and backlink strategy.",
      "Managed paid media, client relations, and vendor partnerships for a £50,000 account spanning Après Ski Leeds and Snowdonia Cheese — running festival-season campaigns across Google Ads and Meta, and sourcing 6 candidates at a 100% placement rate.",
      "Reduced CPC by 30% through audience segmentation, retargeting, and creative A/B testing across Google Ads and Meta.",
      "Built weekly performance reports in Google Analytics and Excel across paid, organic, and social — presented directly to senior management.",
      "Produced 7 SEO-optimised blog posts and ran WordPress CMS operations, collaborating with design on web content and visual assets.",
    ],
    stats: [
      { value: "1,400%", label: "Organic traffic" },
      { value: "−30%", label: "CPC" },
      { value: "£50K", label: "Account managed" },
    ],
    tags: ["SEO", "Google Ads", "Meta", "Reporting", "WordPress"],
    image: "/img/exp-integra.webp",
    accent: "#38bdf8",
  },
  {
    company: "Here & Now 365",
    title: "Marketing Intern",
    period: "Feb — Mar 2022",
    location: "Leeds, UK",
    summary:
      "Field marketing for one of the UK's leading multicultural marketing agencies.",
    bullets: [
      "Generated £5,000+ in transactions through onsite direct marketing campaigns across Wakefield, Bradford, and Dewsbury.",
      "Ran face-to-face activations — pitching, converting, and closing customers on the ground.",
    ],
    stats: [
      { value: "£5K+", label: "Transactions" },
      { value: "3", label: "Cities covered" },
    ],
    tags: ["Direct Marketing", "Field Sales", "Activations"],
    image: "/img/exp-herenow.webp",
    accent: "#f472b6",
  },
];

export default function Experience() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-24 md:py-36 border-t border-[#1e1e1e] overflow-hidden"
    >
      {/* Meteors background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <Meteors number={12} />
      </div>

      <div className="relative z-10">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs tracking-widest text-[#9a9a94] uppercase block mb-4">
            Experience
          </span>
          <TextAnimate
            animation="blurInUp"
            by="word"
            startOnView
            className="font-serif font-light text-[#e8e6e0] text-5xl md:text-7xl mb-4"
          >
            Where I&rsquo;ve worked
          </TextAnimate>
          <p className="font-sans font-light text-[#b8b8b2] text-base max-w-xl mb-12 md:mb-16">
            Three roles, two countries, one throughline — taking things from{" "}
            <span className="text-[#a78bfa]">zero to one</span>. Click a role to
            expand it.
          </p>
        </BlurFade>

        <div className="flex flex-col">
          {roles.map((role, idx) => {
            const isOpen = open === idx;
            return (
              <BlurFade key={role.company} delay={0.15 + idx * 0.08} inView>
                <div
                  className={`border-b border-[#1e1e1e] transition-colors duration-300 ${
                    isOpen ? "bg-[#0f0f0f]/60" : "hover:bg-[#0f0f0f]/40"
                  }`}
                >
                  {/* Row header */}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 py-6 md:py-8 px-2 md:px-4 text-left group"
                  >
                    <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
                      <span
                        className="font-sans text-xs tabular-nums flex-shrink-0"
                        style={{ color: role.accent }}
                      >
                        0{idx + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-serif font-light text-[#e8e6e0] text-2xl md:text-4xl group-hover:translate-x-1 transition-transform duration-300">
                          {role.company}
                        </h3>
                        <p className="font-sans text-[#ababa5] text-xs md:text-sm tracking-wide mt-1 truncate">
                          {role.title}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end flex-shrink-0">
                      <span className="font-sans text-[#bebeb8] text-sm">{role.period}</span>
                      <span className="font-sans text-[#8a8a84] text-xs tracking-widest uppercase mt-0.5">
                        {role.location}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#8a8a84] text-2xl font-light flex-shrink-0 w-8 h-8 flex items-center justify-center"
                      style={{ color: isOpen ? role.accent : undefined }}
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-2 md:px-4 pb-8 md:pb-10 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
                          <div>
                            <p className="font-sans font-light text-[#d2d2cc] text-base leading-relaxed mb-6 max-w-2xl">
                              {role.summary}
                            </p>
                            <ul className="flex flex-col gap-3 mb-6">
                              {role.bullets.map((b, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                                  className="flex gap-3 font-sans font-light text-[#bebeb8] text-sm leading-relaxed max-w-2xl"
                                >
                                  <span style={{ color: role.accent }} className="flex-shrink-0 mt-0.5">→</span>
                                  {b}
                                </motion.li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {role.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="font-sans text-[10px] tracking-widest text-[#ababa5] uppercase border border-[#2a2a2a] px-2.5 py-1"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-4">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.96 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                              className="relative h-40 md:h-48 overflow-hidden border border-[#1e1e1e]"
                            >
                              <Image
                                src={role.image}
                                alt={role.company}
                                fill
                                className="object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-700"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                              />
                            </motion.div>
                            <div className="grid grid-cols-3 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
                              {role.stats.map((s) => (
                                <div key={s.label} className="bg-[#0c0c0c] px-3 py-4 text-center">
                                  <div
                                    className="font-serif text-xl md:text-2xl font-light tabular-nums"
                                    style={{ color: role.accent }}
                                  >
                                    {s.value}
                                  </div>
                                  <div className="font-sans text-[#8a8a84] text-[9px] tracking-widest uppercase mt-1">
                                    {s.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
