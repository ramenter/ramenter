"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading eyebrow="Testimonials" title="Words From Our Clients" />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="text-center"
        >
          <span className="display text-8xl leading-none text-gold/60" aria-hidden>
            “
          </span>

          {/* slides stack in one grid cell so height = tallest slide, no layout jump */}
          <div className="-mt-8 grid" aria-live="polite">
            {testimonials.map((t, idx) => (
              <figure
                key={t.name}
                aria-hidden={idx !== i}
                className={`col-start-1 row-start-1 transition-all duration-700 ${
                  idx === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <blockquote className="text-2xl font-medium leading-relaxed md:text-3xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-mustard">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-mist">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => setI((i - 1 + n) % n)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center border border-gold text-ink transition hover:bg-gold"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-1.5 transition-all duration-500 ${
                    idx === i ? "w-10 bg-gold" : "w-4 bg-ink/15 hover:bg-gold/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((i + 1) % n)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center border border-gold text-ink transition hover:bg-gold"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
