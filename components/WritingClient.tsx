"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { WarpBackground } from "@/components/ui/warp-background";
import { TextAnimate } from "@/components/ui/text-animate";
import { HyperText } from "@/components/ui/hyper-text";
import { useState } from "react";

interface Article {
  title: string;
  description: string;
  date: string;
  url: string;
  tag: string;
}

export default function WritingClient({ articles }: { articles: Article[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <WarpBackground
        className="absolute inset-0"
        gridColor="rgba(167,139,250,0.04)"
        beamSize={3}
        beamDuration={6}
        beamsPerSide={3}
      >
        <div />
      </WarpBackground>

      <div className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <BlurFade delay={0.1} inView>
          <div className="flex justify-between items-end mb-12 md:mb-16">
            <div>
              <span className="font-sans text-xs tracking-widest text-[#777] uppercase block mb-4">
                Writing
              </span>
              <TextAnimate
                animation="blurInUp"
                by="word"
                startOnView
                className="font-serif font-light text-[#e8e6e0] text-5xl md:text-7xl"
              >
                On Growth
              </TextAnimate>
            </div>
            <a
              href="https://rishipachore.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-sans text-[#888] text-sm hover:text-[#e8e6e0] transition-colors duration-200 group"
            >
              All articles
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-4">
          {articles.length === 0 ? (
            <BlurFade delay={0.15} inView>
              <p className="font-sans text-[#666] text-sm">No articles yet — check back soon.</p>
            </BlurFade>
          ) : (
            articles.map((article, idx) => (
              <BlurFade key={idx} delay={0.15 + idx * 0.1} inView>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1e1e1e] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 group-hover:border-[#2a2a2a] transition-colors duration-300">
                    {hovered === idx && (
                      <BorderBeam size={300} duration={4} colorFrom="#a78bfa" colorTo="#38bdf8" />
                    )}

                    <div className="flex md:flex-col gap-3 md:gap-2 md:min-w-[120px]">
                      <span className="font-sans text-[#777] text-xs tracking-widest uppercase">
                        {article.date}
                      </span>
                      <span className="font-sans text-[10px] tracking-widest text-[#a78bfa] uppercase border border-[#a78bfa]/30 px-2 py-0.5 w-fit">
                        {article.tag}
                      </span>
                    </div>

                    <div className="flex-1">
                      <HyperText
                        className="font-serif font-light text-[#e8e6e0] text-xl md:text-2xl leading-snug mb-3"
                        duration={600}
                        startOnView
                      >
                        {article.title}
                      </HyperText>
                      <p className="font-sans font-light text-[#888] text-sm leading-relaxed">
                        {article.description}
                      </p>
                    </div>

                    <span className="hidden md:block text-[#666] group-hover:text-[#a78bfa] group-hover:translate-x-1 transition-all duration-300 text-xl flex-shrink-0">
                      →
                    </span>
                  </div>
                </a>
              </BlurFade>
            ))
          )}

          {/* Substack CTA */}
          <BlurFade delay={0.3} inView>
            <div className="border border-dashed border-[#1e1e1e] bg-[#0a0a0a]/60 backdrop-blur-sm p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-[#999] text-lg font-light">More on the way</p>
                <p className="font-sans text-[#666] text-sm mt-1">
                  Subscribe on Substack — growth, GTM, and building from 0→1.
                </p>
              </div>
              <a
                href="https://rishipachore.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest text-[#a78bfa] uppercase border border-[#a78bfa]/30 px-5 py-2.5 hover:bg-[#a78bfa]/10 transition-colors duration-200 flex-shrink-0"
              >
                Subscribe →
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
