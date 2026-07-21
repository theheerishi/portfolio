"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Animate in after the page reveal
    gsap.from(nav, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 2,
      ease: "power3.out",
    });

    // Hide on scroll down, show on scroll up
    let lastY = 0;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 80) {
        gsap.to(nav, { y: -80, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.to(nav, { y: 0, duration: 0.4, ease: "power3.out" });
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 md:px-12 py-6"
    >
      <a
        href="/"
        className="font-serif text-[#e8e6e0] text-lg tracking-wide hover:opacity-60 transition-opacity duration-200"
      >
        Rishi.
      </a>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative font-sans text-[#ababa5] text-sm tracking-wide hover:text-[#a78bfa] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#a78bfa] group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
