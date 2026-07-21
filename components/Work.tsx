"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  detail: string;
  tags: string[];
  image: string;
  span: string;
  overview: string;
  approach: string[];
  results: { value: string; label: string }[];
}

const projects: Project[] = [
  {
    id: "01",
    title: "High-Ticket GTM Launch",
    category: "Go-to-Market",
    year: "2025",
    detail: "$100K budget · $6K–$7K ASP",
    tags: ["Paid Media", "PR", "Creator Partnerships"],
    image: "/img/launch.webp",
    span: "md:col-span-2",
    overview:
      "End-to-end go-to-market for a $6,000–$7,000 ASP product line launching simultaneously into Taiwan, UAE, and Singapore — positioning, pricing, channel mix, and launch content for a premium hardware brand.",
    approach: [
      "Defined positioning and pricing architecture for three culturally distinct markets.",
      "Ran a phased test-and-learn paid strategy across TikTok, Instagram, YouTube, and Google Ads — $5K in awareness testing scaled to $20K once winning assets and audiences emerged.",
      "Built creator partnerships and PR moments in each market to seed demand before availability.",
      "Coordinated launch content across paid, organic, events, and retail touchpoints.",
    ],
    results: [
      { value: "3", label: "Markets launched" },
      { value: "$100K", label: "Budget managed" },
      { value: "Pre-orders", label: "Before GA" },
    ],
  },
  {
    id: "02",
    title: "Red Dot Design Award",
    category: "Design & Awards",
    year: "2025",
    detail: "Won — Commercial Furniture",
    tags: ["Brand Strategy"],
    image: "/img/reddot.webp",
    span: "md:col-span-1",
    overview:
      "Credited contributor on the One Wire Series submission to Red Dot — one of the world's most competitive design awards, judged in Essen, Germany.",
    approach: [
      "Coordinated cross-functional assets between design, engineering, and marketing.",
      "Shaped the product narrative and presentation materials for the jury.",
      "Managed the submission timeline end-to-end.",
    ],
    results: [
      { value: "Won", label: "Design Concept 2025" },
      { value: "Essen", label: "Judged in Germany" },
    ],
  },
  {
    id: "03",
    title: "Pre-Seed Fundraise",
    category: "Investor Relations",
    year: "2025",
    detail: "$1M closed",
    tags: ["Pitch Deck", "Financial Model"],
    image: "/img/deck.webp",
    span: "md:col-span-1",
    overview:
      "Co-built a $1M pre-seed raise in direct partnership with the CEO — translating a product roadmap and multi-market GTM into a story investors could underwrite.",
    approach: [
      "Structured the investor pitch deck — narrative, market sizing, and traction story.",
      "Built the financial model underpinning the raise.",
      "Produced VC outreach collateral and supported investor conversations.",
    ],
    results: [
      { value: "$1M", label: "Closed" },
      { value: "Pre-seed", label: "Round" },
    ],
  },
  {
    id: "04",
    title: "Organic Growth Programme",
    category: "SEO & Content",
    year: "2023–2025",
    detail: "1,400% traffic growth",
    tags: ["SEO", "Content", "GA4"],
    image: "/img/seo.webp",
    span: "md:col-span-1",
    overview:
      "A two-year organic growth programme at Integra People — compounding SEO and content to reduce dependence on paid acquisition.",
    approach: [
      "Produced SEO-optimised content and ran WordPress CMS operations with a backlink strategy.",
      "Reduced CPC 30% on supporting paid campaigns via segmentation, retargeting, and A/B testing.",
      "Built weekly GA4 and Excel performance reports across paid, organic, and social — presented to senior management.",
    ],
    results: [
      { value: "1,400%", label: "Traffic growth" },
      { value: "−30%", label: "CPC" },
      { value: "−10%", label: "CAC" },
    ],
  },
  {
    id: "05",
    title: "E-Commerce Storefronts",
    category: "Design & Build",
    year: "2025",
    detail: "Multi-market · TW & UAE",
    tags: ["Framer", "Shopify"],
    image: "/img/storefront.webp",
    span: "md:col-span-2",
    overview:
      "Two regional e-commerce storefronts for Taiwan and UAE — built headless on Framer with Shopify powering commerce, for a $5,000-per-unit product line.",
    approach: [
      "Designed and built both storefronts with an agency partner — design, copy, build, and checkout flow end-to-end.",
      "Owned the 2-SKU product catalogue, payment gateway configuration, and order processing.",
      "Localised content and pricing for each market.",
    ],
    results: [
      { value: "2", label: "Live storefronts" },
      { value: "$5K", label: "Per-unit ASP" },
    ],
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="work" className="relative px-6 md:px-12 py-24 md:py-36 border-t border-[#1e1e1e] overflow-hidden">
      {/* Flickering grid background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={3}
        gridGap={8}
        color="#a78bfa"
        maxOpacity={0.04}
        flickerChance={0.08}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]" />

      <div className="relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="flex justify-between items-end mb-4">
            <TextAnimate animation="blurInUp" by="word" startOnView className="font-serif font-light text-[#e8e6e0] text-5xl md:text-7xl">
              Selected Work
            </TextAnimate>
          </div>
          <p className="font-sans font-light text-[#888] text-base max-w-xl mb-12 md:mb-16">
            Five projects, real numbers. Click any card for the full story.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <BlurFade key={project.id} delay={0.1 + idx * 0.08} inView>
              <button
                type="button"
                onClick={() => setActive(project)}
                className={`block w-full text-left group relative overflow-hidden rounded-sm cursor-pointer ${project.span}`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative w-full h-64 md:h-80 overflow-hidden bg-[#111]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-sans text-[#888] text-xs tracking-widest uppercase mb-1">{project.category} · {project.year}</p>
                      <h3 className="font-serif font-light text-[#e8e6e0] text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="font-sans text-[#a78bfa] text-sm font-light">{project.detail}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="font-sans text-[10px] tracking-widest text-[#888] uppercase border border-[#2a2a2a] bg-[#0c0c0c]/80 backdrop-blur-sm px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-[#666] group-hover:text-[#a78bfa] group-hover:translate-x-1 transition-all duration-300 text-xl flex-shrink-0 ml-4">↗</span>
                  </div>
                </div>

                {hovered === idx && (
                  <BorderBeam size={250} duration={4} colorFrom="#a78bfa" colorTo="#38bdf8" />
                )}
                <div className="absolute inset-0 border border-[#1e1e1e] pointer-events-none" />
              </button>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Case study overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-0 md:p-8"
            onClick={close}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:max-w-3xl max-h-[92vh] md:max-h-[85vh] overflow-y-auto bg-[#0e0e0e] border border-[#2a2a2a]"
            >
              {/* Hero image */}
              <div className="relative h-52 md:h-72">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent" />
                <button
                  onClick={close}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#2a2a2a] text-[#999] hover:text-[#e8e6e0] hover:border-[#a78bfa]/50 transition-colors duration-200 text-lg"
                  aria-label="Close"
                >
                  ✕
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-sans text-[#999] text-xs tracking-widest uppercase mb-2">
                    {active.category} · {active.year}
                  </p>
                  <h3 className="font-serif font-light text-[#e8e6e0] text-3xl md:text-5xl">
                    {active.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-8">
                {/* Results strip */}
                <div className="grid grid-cols-3 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
                  {active.results.map((r) => (
                    <div key={r.label} className="bg-[#0c0c0c] px-4 py-5 text-center">
                      <div className="font-serif text-[#a78bfa] text-xl md:text-3xl font-light">{r.value}</div>
                      <div className="font-sans text-[#666] text-[9px] md:text-[10px] tracking-widest uppercase mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <span className="font-sans text-xs tracking-widest text-[#777] uppercase block mb-3">Overview</span>
                  <p className="font-sans font-light text-[#bbb] text-base leading-relaxed">{active.overview}</p>
                </div>

                <div>
                  <span className="font-sans text-xs tracking-widest text-[#777] uppercase block mb-3">Approach</span>
                  <ul className="flex flex-col gap-3">
                    {active.approach.map((a, i) => (
                      <li key={i} className="flex gap-3 font-sans font-light text-[#999] text-sm leading-relaxed">
                        <span className="text-[#a78bfa] flex-shrink-0 mt-0.5">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pb-2">
                  {active.tags.map((tag) => (
                    <span key={tag} className="font-sans text-[10px] tracking-widest text-[#888] uppercase border border-[#2a2a2a] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
