"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setScrolled(scrollY > 40);
      setProgress(max > 0 ? scrollY / max : 0);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-gold/40 bg-white/90 py-3 backdrop-blur-md"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="Ram Enterprises home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-mustard after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-outline !px-5 !py-2.5">
            Enquire
          </a>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center text-ink xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-4 pt-3 xl:hidden">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/30 py-3 text-sm font-medium uppercase tracking-[0.2em] text-ink/85 hover:text-mustard"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gold"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
