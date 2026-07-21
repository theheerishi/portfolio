"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Globe } from "@/components/ui/globe";

const contactMethods = [
  {
    label: "Email",
    value: "hrishikesh.pachore@gmail.com",
    href: "mailto:hrishikesh.pachore@gmail.com",
    note: null,
  },
  {
    label: "Phone (IN)",
    value: "+91 91454 88023",
    href: "tel:+919145488023",
    note: "India",
  },
  {
    label: "WhatsApp",
    value: "+44 7407 833953",
    href: "https://wa.me/447407833953",
    note: "UK · WhatsApp only",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-[#1e1e1e] overflow-hidden">
      {/* Top half — heading */}
      <div className="relative px-6 md:px-12 pt-32 md:pt-48 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Meteors number={14} />
        </div>
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(167,139,250,0.06),transparent)]" />

        <div className="relative z-10 flex flex-col gap-6">
          <BlurFade delay={0.1} inView>
            <span className="font-sans text-xs tracking-widest text-[#9a9a94] uppercase">Contact</span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="leading-none">
              <span className="font-serif font-light text-[clamp(3rem,9vw,10rem)] leading-[0.9] text-[#e8e6e0]">
                Let&rsquo;s{" "}
              </span>
              <AuroraText
                className="font-serif font-light text-[clamp(3rem,9vw,10rem)] leading-[0.9]"
                colors={["#a78bfa", "#818cf8", "#38bdf8", "#c4b5fd"]}
                speed={0.7}
              >
                work
              </AuroraText>
              <span className="font-serif font-light text-[clamp(3rem,9vw,10rem)] leading-[0.9] text-[#e8e6e0]">
                {" "}together.
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="font-sans font-light text-[#bebeb8] text-base md:text-lg leading-relaxed max-w-lg">
              Open to full-time roles, consulting, and project work in growth, GTM,
              and brand strategy. I work best with teams building something new —
              from <span className="text-[#a78bfa]">0→1</span>.
            </p>
          </BlurFade>
        </div>
      </div>

      {/* Bottom half — split contact + globe */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#1e1e1e]">
        {/* Contact details */}
        <div className="px-6 md:px-12 py-16 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-[#1e1e1e]">
          <BlurFade delay={0.1} inView>
            <span className="font-sans text-xs tracking-widest text-[#9a9a94] uppercase">Get in touch</span>
          </BlurFade>

          {contactMethods.map((method, idx) => (
            <BlurFade key={method.label} delay={0.15 + idx * 0.1} inView>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-[10px] tracking-widest text-[#555] uppercase">{method.label}</span>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 font-sans text-[#ccc] text-base md:text-lg hover:text-[#a78bfa] transition-colors duration-200"
                >
                  {method.value}
                  <span className="group-hover:translate-x-1 transition-transform duration-200 text-[#555] group-hover:text-[#a78bfa]">→</span>
                </a>
                {method.note && (
                  <span className="font-sans text-[#555] text-xs">{method.note}</span>
                )}
              </div>
            </BlurFade>
          ))}

          <BlurFade delay={0.5} inView>
            <a href="mailto:hrishikesh.pachore@gmail.com">
              <ShimmerButton
                shimmerColor="#a78bfa"
                background="rgba(12,12,12,1)"
                borderRadius="0"
                className="px-8 py-4 font-sans text-sm text-[#e8e6e0] tracking-wide mt-2"
              >
                Send a message →
              </ShimmerButton>
            </a>
          </BlurFade>
        </div>

        {/* Globe */}
        <div className="relative flex items-center justify-center px-6 md:px-12 py-16 bg-[#080808] overflow-hidden min-h-[380px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(167,139,250,0.04),transparent)]" />
          <div className="relative w-full max-w-sm aspect-square">
            <Globe className="w-full h-full" />
          </div>
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="font-sans text-[#555] text-xs tracking-widest uppercase">
              Pune · Taiwan · UAE · Singapore · Leeds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
