"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { RetroGrid } from "@/components/ui/retro-grid";

const greetings = ["Hello.", "Bonjour.", "Ciao.", "Hola.", "नमस्ते.", "こんにちは.", "Hej.", "Olá."];

const stats = [
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 5, label: "Markets", suffix: "" },
  { value: 1, label: "Pre-Seed Closed", prefix: "$", suffix: "M" },
  { value: 1400, label: "Traffic Growth", suffix: "%" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [greetingVisible, setGreetingVisible] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setGreetingVisible(false);
      setTimeout(() => {
        setGreetingIndex((i) => (i + 1) % greetings.length);
        setGreetingVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(overlayRef.current, {
        y: "-100%", duration: 1.4, ease: "power4.inOut",
        onComplete: () => setRevealed(true),
      });
      tl.from(".hero-tag", { y: 16, opacity: 0, stagger: 0.08, duration: 0.6, ease: "power3.out" }, "-=0.5");
      tl.from(".hero-cta", { opacity: 0, y: 12, stagger: 0.1, duration: 0.5, ease: "power3.out" }, "-=0.4");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0c0c0c] flex flex-col justify-between px-6 md:px-12 pt-28 pb-10 overflow-hidden"
    >
      {/* Reveal overlay */}
      <div ref={overlayRef} className="fixed inset-0 bg-[#0c0c0c] z-[80] pointer-events-none" />

      {/* Retro grid at bottom — perspective floor */}
      <RetroGrid className="absolute inset-0 z-0 opacity-20" angle={55} />

      {/* Particles on top of grid */}
      <Particles className="absolute inset-0 z-[1]" quantity={80} staticity={50} ease={70} size={0.4} color="#a78bfa" />

      {/* Top vignette */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]/80 pointer-events-none" />

      {/* Top row */}
      <div className="relative z-10 flex justify-between items-center font-sans text-xs tracking-widest text-[#777] uppercase">
        <span className="hero-tag">Pune, IN</span>
        <div className="hero-tag">
          <AnimatedShinyText className="font-sans text-xs tracking-widest uppercase">
            ✦ Available for new projects
          </AnimatedShinyText>
        </div>
        <span className="hero-tag" suppressHydrationWarning>{time} IST</span>
      </div>

      {/* Centre */}
      <div className="relative z-10 flex flex-col gap-8 py-10">
        <p className={`font-sans text-sm text-[#777] tracking-widest uppercase transition-all duration-300 ${greetingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          {greetings[greetingIndex]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
          <h1 className="font-serif font-light leading-[0.9]">
            <span className="text-[#e8e6e0] text-[clamp(3.5rem,9vw,11rem)] leading-[0.9] block">
              I&rsquo;m Rishi,
            </span>
            <span className="block text-[clamp(3.5rem,9vw,11rem)] leading-[0.9]">
              {revealed ? (
                <WordRotate
                  words={["Growth.", "GTM.", "0→1.", "Builder."]}
                  duration={2200}
                  className="font-serif font-light text-[#555] text-[clamp(3.5rem,9vw,11rem)] leading-[0.9]"
                />
              ) : (
                <span className="font-serif font-light text-[#555]">Growth.</span>
              )}
            </span>
            <span className="block text-[clamp(3.5rem,9vw,11rem)] leading-[0.9]">
              {revealed ? (
                <SparklesText
                  className="font-serif font-light text-[clamp(3.5rem,9vw,11rem)] leading-[0.9]"
                  colors={{ first: "#a78bfa", second: "#38bdf8" }}
                  sparklesCount={8}
                >
                  Marketer.
                </SparklesText>
              ) : (
                <span className="font-serif font-light text-[#e8e6e0]">Marketer.</span>
              )}
            </span>
          </h1>

          {/* Portrait */}
          <div className="hidden md:block w-40 h-52 relative overflow-hidden flex-shrink-0 self-end">
            <Image
              src="/img/portrait.webp"
              alt="Rishi Pachore"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="160px"
            />
            <div className="absolute inset-0 border border-[#2a2a2a]" />
          </div>
        </div>

        {/* Typing subtitle */}
        {revealed && (
          <TypingAnimation
            className="font-sans font-light text-[#999] text-base md:text-lg"
            duration={30}
            delay={400}
          >
            I help ambitious teams build from 0→1 — first sale to scaled growth. 3 years · 5 markets · hardware, SaaS & e-commerce.
          </TypingAnimation>
        )}

        {/* Stats */}
        {revealed && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#0c0c0c]/80 backdrop-blur-sm px-6 py-5 flex flex-col gap-1">
                <span className="font-serif text-[#e8e6e0] text-3xl font-light tabular-nums flex items-baseline gap-0.5">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <NumberTicker value={stat.value} delay={0.5} className="text-[#e8e6e0]" />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </span>
                <span className="font-sans text-[#666] text-xs tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex justify-between items-center">
        <a href="#work" className="hero-cta">
          <ShimmerButton shimmerColor="#a78bfa" background="rgba(12,12,12,0.9)" borderRadius="0" className="px-6 py-3 font-sans text-sm text-[#e8e6e0] tracking-wide">
            View Work →
          </ShimmerButton>
        </a>
        <div className="hero-cta flex items-center gap-2 font-sans text-xs text-[#666] tracking-widest uppercase">
          <span>Scroll</span>
          <span className="inline-block animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
