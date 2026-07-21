"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Particles } from "@/components/ui/particles";

type Category =
  | "All"
  | "Strategy & GTM"
  | "Growth & Paid"
  | "Analytics & Data"
  | "CRM & Ops"
  | "Design & Build";

interface Tool {
  name: string;
  category: Exclude<Category, "All">;
  note: string;
}

const tools: Tool[] = [
  // Strategy & GTM
  { name: "GTM Strategy", category: "Strategy & GTM", note: "3-market high-ticket launch" },
  { name: "Positioning", category: "Strategy & GTM", note: "Premium hardware & SaaS" },
  { name: "Pricing", category: "Strategy & GTM", note: "$6–7K ASP architecture" },
  { name: "Brand Narrative", category: "Strategy & GTM", note: "Red Dot–winning story" },
  { name: "Investor Materials", category: "Strategy & GTM", note: "$1M pre-seed deck & model" },
  { name: "VC Outreach", category: "Strategy & GTM", note: "Collateral & conversations" },
  { name: "Channel Mix", category: "Strategy & GTM", note: "Paid · PR · creators · events" },
  // Growth & Paid
  { name: "Google Ads", category: "Growth & Paid", note: "CPC −30% via A/B testing" },
  { name: "Meta Ads", category: "Growth & Paid", note: "Festival-season campaigns" },
  { name: "TikTok Ads", category: "Growth & Paid", note: "Awareness testing at launch" },
  { name: "LinkedIn Ads", category: "Growth & Paid", note: "B2B lead generation" },
  { name: "SEO / SEM", category: "Growth & Paid", note: "1,400% organic growth" },
  { name: "Content Marketing", category: "Growth & Paid", note: "SEO-optimised programmes" },
  { name: "Marketing Automation", category: "Growth & Paid", note: "Email flows & workflows" },
  { name: "CAC Optimisation", category: "Growth & Paid", note: "−10% via sales-led GTM" },
  // Analytics & Data
  { name: "GA4", category: "Analytics & Data", note: "Weekly exec reporting" },
  { name: "SQL", category: "Analytics & Data", note: "Querying growth data" },
  { name: "Tableau", category: "Analytics & Data", note: "Dashboarding" },
  { name: "Power BI", category: "Analytics & Data", note: "Performance visualisation" },
  { name: "Looker Studio", category: "Analytics & Data", note: "Live campaign reports" },
  { name: "SEMrush", category: "Analytics & Data", note: "Keyword & backlink research" },
  { name: "Excel", category: "Analytics & Data", note: "Financial models & reports" },
  // CRM & Ops
  { name: "HubSpot", category: "CRM & Ops", note: "Pipeline & nurture" },
  { name: "Salesforce", category: "CRM & Ops", note: "CRM operations" },
  { name: "Marketo", category: "CRM & Ops", note: "Campaign automation" },
  { name: "Zoho CRM", category: "CRM & Ops", note: "Workflows & lead management" },
  { name: "Mailchimp", category: "CRM & Ops", note: "Email campaigns" },
  // Design & Build
  { name: "Framer", category: "Design & Build", note: "2 headless storefronts shipped" },
  { name: "Shopify", category: "Design & Build", note: "Payments & order processing" },
  { name: "Figma", category: "Design & Build", note: "Asset & deck design" },
  { name: "WordPress", category: "Design & Build", note: "CMS operations" },
  { name: "Canva", category: "Design & Build", note: "Rapid creative production" },
  { name: "Adobe Premiere", category: "Design & Build", note: "Video editing" },
  { name: "Claude Code", category: "Design & Build", note: "This site — built with AI" },
];

const categories: Category[] = [
  "All",
  "Strategy & GTM",
  "Growth & Paid",
  "Analytics & Data",
  "CRM & Ops",
  "Design & Build",
];

const accents: Record<Exclude<Category, "All">, string> = {
  "Strategy & GTM": "#a78bfa",
  "Growth & Paid": "#38bdf8",
  "Analytics & Data": "#34d399",
  "CRM & Ops": "#f472b6",
  "Design & Build": "#facc15",
};

export default function Skills() {
  const [selected, setSelected] = useState<Category>("All");

  const visible =
    selected === "All" ? tools : tools.filter((t) => t.category === selected);

  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 py-24 md:py-36 border-t border-[#1e1e1e] overflow-hidden"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        staticity={60}
        ease={70}
        size={0.3}
        color="#38bdf8"
      />

      <div className="relative z-10">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs tracking-widest text-[#777] uppercase block mb-4">
            Toolkit
          </span>
          <TextAnimate
            animation="blurInUp"
            by="word"
            startOnView
            className="font-serif font-light text-[#e8e6e0] text-5xl md:text-7xl mb-4"
          >
            What I work with
          </TextAnimate>
          <p className="font-sans font-light text-[#888] text-base max-w-xl mb-10">
            {tools.length} tools and skills across five disciplines — hover any
            card to see where I&rsquo;ve used it.
          </p>
        </BlurFade>

        {/* Category filter */}
        <BlurFade delay={0.2} inView>
          <div className="flex flex-wrap gap-2 mb-10">
            <LayoutGroup id="skill-filters">
              {categories.map((cat) => {
                const isActive = selected === cat;
                const accent = cat === "All" ? "#e8e6e0" : accents[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setSelected(cat)}
                    className={`relative font-sans text-xs tracking-widest uppercase px-4 py-2.5 border transition-colors duration-200 ${
                      isActive
                        ? "text-[#0c0c0c] border-transparent"
                        : "text-[#888] border-[#2a2a2a] hover:text-[#e8e6e0] hover:border-[#444]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0"
                        style={{ backgroundColor: accent }}
                        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </LayoutGroup>
          </div>
        </BlurFade>

        {/* Tool grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map((tool) => {
              const accent = accents[tool.category];
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative border border-[#1e1e1e] bg-[#0e0e0e]/60 backdrop-blur-sm p-4 md:p-5 overflow-hidden cursor-default hover:border-[#333] transition-colors duration-300"
                >
                  <span
                    className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: accent }}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-sans text-[#e8e6e0] text-sm md:text-base font-light">
                      {tool.name}
                    </p>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 opacity-60"
                      style={{ backgroundColor: accent }}
                    />
                  </div>
                  <p className="font-sans text-[#666] text-[11px] md:text-xs mt-2 leading-relaxed group-hover:text-[#999] transition-colors duration-300">
                    {tool.note}
                  </p>
                  <p
                    className="font-sans text-[9px] tracking-widest uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: accent }}
                  >
                    {tool.category}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
