"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Particles } from "@/components/ui/particles";

interface Tool {
  name: string;
  note: string;
}

interface Group {
  category: string;
  accent: string;
  tools: Tool[];
}

const groups: Group[] = [
  {
    category: "Strategy & GTM",
    accent: "#a78bfa",
    tools: [
      { name: "GTM Strategy", note: "3-market high-ticket launch" },
      { name: "Positioning", note: "Premium hardware & SaaS" },
      { name: "Pricing", note: "$6–7K ASP architecture" },
      { name: "Brand Narrative", note: "Red Dot–winning story" },
      { name: "Investor Materials", note: "$1M pre-seed deck & model" },
      { name: "VC Outreach", note: "Collateral & conversations" },
      { name: "Channel Mix", note: "Paid · PR · creators · events" },
    ],
  },
  {
    category: "Growth & Paid",
    accent: "#38bdf8",
    tools: [
      { name: "Google Ads", note: "CPC −30% via A/B testing" },
      { name: "Meta Ads", note: "Festival-season campaigns" },
      { name: "TikTok Ads", note: "Awareness testing at launch" },
      { name: "LinkedIn Ads", note: "B2B lead generation" },
      { name: "SEO / SEM", note: "1,400% organic growth" },
      { name: "Content Marketing", note: "SEO-optimised programmes" },
      { name: "Marketing Automation", note: "Email flows & workflows" },
      { name: "CAC Optimisation", note: "−10% via sales-led GTM" },
    ],
  },
  {
    category: "Analytics & Data",
    accent: "#34d399",
    tools: [
      { name: "GA4", note: "Weekly exec reporting" },
      { name: "SQL", note: "Querying growth data" },
      { name: "Tableau", note: "Dashboarding" },
      { name: "Power BI", note: "Performance visualisation" },
      { name: "Looker Studio", note: "Live campaign reports" },
      { name: "SEMrush", note: "Keyword & backlink research" },
      { name: "Excel", note: "Financial models & reports" },
    ],
  },
  {
    category: "CRM & Ops",
    accent: "#f472b6",
    tools: [
      { name: "HubSpot", note: "Pipeline & nurture" },
      { name: "Salesforce", note: "CRM operations" },
      { name: "Marketo", note: "Campaign automation" },
      { name: "Zoho CRM", note: "Workflows & lead management" },
      { name: "Mailchimp", note: "Email campaigns" },
    ],
  },
  {
    category: "Design & Build",
    accent: "#facc15",
    tools: [
      { name: "Framer", note: "2 headless storefronts shipped" },
      { name: "Shopify", note: "Payments & order processing" },
      { name: "Figma", note: "Asset & deck design" },
      { name: "WordPress", note: "CMS operations" },
      { name: "Canva", note: "Rapid creative production" },
      { name: "Adobe Premiere", note: "Video editing" },
      { name: "Claude Code", note: "This site — built with AI" },
    ],
  },
];

const totalTools = groups.reduce((sum, g) => sum + g.tools.length, 0);

export default function Skills() {
  const [open, setOpen] = useState<number>(0);

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
          <span className="font-sans text-xs tracking-widest text-[#999] uppercase block mb-4">
            Toolkit
          </span>
          <TextAnimate
            animation="blurInUp"
            by="word"
            startOnView
            className="font-serif font-light text-[#f2f0ea] text-5xl md:text-7xl mb-4"
          >
            What I work with
          </TextAnimate>
          <p className="font-sans font-light text-[#b8b8b2] text-base max-w-xl mb-10">
            {totalTools} tools and skills across five disciplines — open a
            discipline to see the tools and where I&rsquo;ve used them.
          </p>
        </BlurFade>

        <div className="flex flex-col max-w-3xl">
          {groups.map((group, idx) => {
            const isOpen = open === idx;
            return (
              <BlurFade key={group.category} delay={0.15 + idx * 0.07} inView>
                <div
                  className={`border-b border-[#1e1e1e] transition-colors duration-300 ${
                    isOpen ? "bg-[#0f0f0f]/60" : "hover:bg-[#0f0f0f]/40"
                  }`}
                >
                  {/* Header row */}
                  <button
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 py-6 px-2 md:px-4 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: group.accent }}
                      />
                      <h3 className="font-serif font-light text-[#f2f0ea] text-2xl md:text-3xl group-hover:translate-x-1 transition-transform duration-300">
                        {group.category}
                      </h3>
                      <span className="font-sans text-[#999] text-xs tabular-nums">
                        {group.tools.length}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-light flex-shrink-0 w-8 h-8 flex items-center justify-center"
                      style={{ color: isOpen ? group.accent : "#999" }}
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
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-2 md:px-4 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {group.tools.map((tool, i) => (
                            <motion.div
                              key={tool.name}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + i * 0.04, duration: 0.35 }}
                              className="group/tool relative border border-[#1e1e1e] bg-[#0e0e0e]/60 backdrop-blur-sm p-4 overflow-hidden hover:border-[#333] transition-colors duration-300"
                            >
                              <span
                                className="absolute top-0 left-0 h-px w-0 group-hover/tool:w-full transition-all duration-500"
                                style={{ backgroundColor: group.accent }}
                              />
                              <p className="font-sans text-[#f2f0ea] text-base font-light">
                                {tool.name}
                              </p>
                              <p className="font-sans text-[#999] text-xs mt-1.5 leading-relaxed group-hover/tool:text-[#c8c8c2] transition-colors duration-300">
                                {tool.note}
                              </p>
                            </motion.div>
                          ))}
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
