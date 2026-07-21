"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";
import { Ripple } from "@/components/ui/ripple";

const services = [
  "Go-to-Market Strategy",
  "Organic Growth & SEO",
  "Brand & Positioning",
  "Investor Materials & Fundraising",
  "E-Commerce Build",
];

const achievements = [
  { value: 3, suffix: "+", label: "Years" },
  { value: 5, suffix: "", label: "Markets" },
  { value: 1, prefix: "$", suffix: "M", label: "Raised" },
  { value: 1400, suffix: "%", label: "Traffic" },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-36 border-t border-[#1e1e1e]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <BlurFade delay={0.1} inView>
            <span className="font-sans text-xs tracking-widest text-[#777] uppercase">About</span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <TextAnimate animation="blurInUp" by="word" startOnView className="font-serif font-light text-[#e8e6e0] text-4xl md:text-6xl leading-tight block">
              Growth meets
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="word" startOnView className="font-serif font-light text-[#777] text-4xl md:text-6xl leading-tight block" delay={0.15}>
              execution.
            </TextAnimate>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="font-sans font-light text-[#999] text-base leading-relaxed max-w-md">
              I&rsquo;m Rishi — a Growth & GTM Marketer based in Pune, working
              across Taiwan, UAE, Singapore, and Leeds. I help teams build from{" "}
              <span className="text-[#a78bfa]">0→1</span>: first customer,
              first market, first million.
            </p>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <p className="font-sans font-light text-[#888] text-base leading-relaxed max-w-md">
              From hardware launches and pre-seed fundraising to organic growth
              and e-commerce storefronts. Currently Head of Marketing at Alaric Design.
            </p>
          </BlurFade>

          {/* Quick stats */}
          <BlurFade delay={0.38} inView>
            <div className="grid grid-cols-4 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
              {achievements.map((a) => (
                <div key={a.label} className="bg-[#0c0c0c] px-4 py-4 text-center">
                  <div className="font-serif text-[#e8e6e0] text-2xl font-light tabular-nums flex items-baseline justify-center gap-0.5">
                    {a.prefix && <span>{a.prefix}</span>}
                    <NumberTicker value={a.value} delay={0.5} className="text-[#e8e6e0]" />
                    <span>{a.suffix}</span>
                  </div>
                  <span className="font-sans text-[#777] text-[10px] tracking-widest uppercase">{a.label}</span>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* Education */}
          <BlurFade delay={0.4} inView>
            <div className="flex flex-col gap-1 font-sans text-[#777] text-sm border-l border-[#1e1e1e] pl-4">
              <span className="text-[#666] text-[10px] tracking-widest uppercase mb-2">Education</span>
              <span className="text-[#999]">MSc International Marketing Management — University of Leeds, UK</span>
              <span className="text-[#999]">Bachelor&rsquo;s, Business & Hospitality Management — Pune University · 1st Class</span>
              <span className="text-[#666] text-xs mt-1">Research published on ScienceDirect</span>
            </div>
          </BlurFade>

          {/* Services */}
          <BlurFade delay={0.45} inView>
            <div className="flex flex-col">
              <span className="font-sans text-xs tracking-widest text-[#777] uppercase mb-4">Services</span>
              {services.map((s, i) => (
                <BlurFade key={s} delay={0.5 + i * 0.07} inView>
                  <div className="flex items-center justify-between py-4 border-b border-[#1e1e1e] group hover:border-[#a78bfa]/30 transition-colors duration-300">
                    <span className="font-serif text-[#e8e6e0] text-xl md:text-2xl font-light group-hover:text-[#a78bfa] transition-colors duration-300">
                      {s}
                    </span>
                    <span className="text-[#666] group-hover:text-[#a78bfa] group-hover:translate-x-1 transition-all duration-200">→</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.75} inView>
            <a href="#contact" className="inline-flex items-center gap-2 font-sans text-sm text-[#e8e6e0] group mt-2 w-fit hover:text-[#a78bfa] transition-colors duration-200">
              <span>Get in touch</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </BlurFade>
        </div>

        {/* Right */}
        <BlurFade delay={0.3} inView direction="left" className="sticky top-28">
          <div className="flex flex-col gap-6">
            {/* Portrait */}
            <ShineBorder shineColor={["#a78bfa", "#38bdf8", "#818cf8"]} borderWidth={1.5} className="w-full">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0e0e0e]">
                {/* Ripple behind image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Ripple mainCircleSize={120} mainCircleOpacity={0.15} numCircles={6} />
                </div>
                <Image
                  src="/img/portrait.webp"
                  alt="Rishi Pachore"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0c0c] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-sans text-[#e8e6e0] text-sm font-light">Hrishikesh (Rishi) Pachore</p>
                  <p className="font-sans text-[#888] text-xs tracking-widest uppercase mt-0.5">Head of Marketing · Alaric Design</p>
                </div>
              </div>
            </ShineBorder>

            {/* Quick facts */}
            <div className="border border-[#1e1e1e] p-5 flex flex-col gap-3">
              <p className="font-sans text-[10px] tracking-widest text-[#666] uppercase">Quick facts</p>
              {[
                ["Now", "Head of Marketing · Alaric Design"],
                ["Based", "Pune — working across TW, UAE, SG, UK"],
                ["Open to", "Full-time · consulting · project work"],
                ["Awards", "Red Dot Design Concept 2025 (contributor)"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 font-sans text-sm">
                  <span className="text-[#666] w-16 flex-shrink-0 text-[10px] pt-1 tracking-widest uppercase">{k}</span>
                  <span className="text-[#999] font-light">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
