import Image from "next/image";
import CountUp from "./CountUp";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-mustard">
            <span className="h-px w-10 bg-gold" />
            Residential Real Estate · Bhopal
          </p>
          <h1 className="display text-4xl leading-[1.1] sm:text-5xl xl:text-6xl">
            Three Decades of Trust.
            <br />
            <span className="gold-text">Thoughtfully Crafted Spaces.</span>
          </h1>
          <p className="mt-6 text-2xl font-medium text-ink/80">
            A vision for better living.
          </p>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-mist">
            <p>
              At Ram Enterprises, we believe a home is more than a structure—it
              is where life takes shape, memories are created, and legacies
              begin.
            </p>
            <p>
              For over 30 years, we have been creating residential spaces in
              Bhopal that bring together thoughtful planning, enduring quality
              and a commitment to doing things right.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              Explore SN Krishna
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-gold/40 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="display text-3xl text-mustard sm:text-4xl" aria-hidden>
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-xs uppercase tracking-widest text-mist">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="group relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-t-[10rem] border border-gold transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] bg-cream">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
          </div>

          <a
            href="#projects"
            className="absolute -left-4 bottom-10 border border-gold bg-white/95 px-6 py-4 shadow-lg backdrop-blur transition-colors hover:bg-cream sm:-left-8"
          >
            <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-mustard">
              Featured Project
            </span>
            <span className="display text-2xl">SN Krishna →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
