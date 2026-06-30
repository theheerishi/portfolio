"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "High-Ticket GTM Launch",
    category: "Go-to-Market",
    year: "2025",
    detail: "$100K budget · $6K–$7K ASP",
    tags: ["Paid Media", "PR", "Creator Partnerships"],
    image: "/img/launch.webp",
    span: "md:col-span-2",
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
  },
];

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

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
          <div className="flex justify-between items-end mb-12 md:mb-16">
            <TextAnimate animation="blurInUp" by="word" startOnView className="font-serif font-light text-[#e8e6e0] text-5xl md:text-7xl">
              Selected Work
            </TextAnimate>
            <a
              href="https://rishipachore.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-sans text-[#888] text-sm hover:text-[#e8e6e0] transition-colors duration-200 group"
            >
              Full portfolio
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <BlurFade key={project.id} delay={0.1 + idx * 0.08} inView>
              <a
                href="#"
                className={`block group relative overflow-hidden rounded-sm ${project.span}`}
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
                    <span className="text-[#666] group-hover:text-[#a78bfa] group-hover:translate-x-1 transition-all duration-300 text-xl flex-shrink-0 ml-4">→</span>
                  </div>
                </div>

                {hovered === idx && (
                  <BorderBeam size={250} duration={4} colorFrom="#a78bfa" colorTo="#38bdf8" />
                )}
                <div className="absolute inset-0 border border-[#1e1e1e] pointer-events-none" />
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
