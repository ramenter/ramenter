"use client";

import Image from "next/image";
import { useRef, useState, type RefObject } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

function Facts({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px border border-gold/40 bg-gold/40">
      {items.map((s) => (
        <div key={s.label} className="bg-white p-4">
          <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-mustard">{s.label}</dt>
          <dd className="mt-1 font-medium">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

// Always rendered (closed) so the full project copy is in the server HTML for search engines.
function Details({ p, ref }: { p: Project; ref: RefObject<HTMLDialogElement | null> }) {
  const [active, setActive] = useState(0);

  return (
    <dialog
      ref={ref}
      // click on the backdrop targets the dialog element itself
      onClick={(e) => e.target === ref.current && ref.current.close()}
      aria-labelledby={`${p.slug}-title`}
      className="m-auto max-h-[92vh] w-[min(100%-1.5rem,68rem)] max-w-none overflow-y-auto rounded-sm border border-gold/50 bg-white p-0 text-ink shadow-2xl"
    >
      <button
        onClick={() => ref.current?.close()}
        aria-label="Close"
        className="fixed right-4 top-4 z-10 grid h-10 w-10 place-items-center border border-gold bg-white/90 text-xl text-ink backdrop-blur transition hover:rotate-90 hover:bg-gold md:sticky md:float-right md:-mb-10 md:mr-4 md:mt-4"
      >
        ✕
      </button>

      {/* photos are mostly portrait: show the whole image over a blurred fill of itself */}
      <div className="relative h-[55vh] bg-ink [clip-path:inset(0)]">
        <Image
          src={p.images[active].src}
          alt=""
          fill
          sizes="64px"
          className="scale-110 object-cover opacity-60 blur-2xl"
        />
        <Image
          key={p.images[active].src}
          src={p.images[active].src}
          alt={p.images[active].alt}
          fill
          sizes="(min-width: 1088px) 1088px, 100vw"
          className="animate-[fade_0.5s] object-contain"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto px-6 pt-4 md:px-10">
        {p.images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`Show ${img.label.toLowerCase()} image`}
            aria-current={i === active}
            className={`relative h-16 w-24 shrink-0 overflow-hidden border-2 transition ${
              i === active ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        ))}
      </div>
      <p className="px-6 pt-2 text-xs text-mist md:px-10">Images are for representation only.</p>

      <div className="grid gap-10 px-6 pb-10 pt-8 md:px-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-block border border-gold px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-mustard">
            {p.type}
          </span>
          <h3 id={`${p.slug}-title`} className="display mt-4 text-4xl md:text-5xl">
            {p.name}
          </h3>
          <p className="mt-2 text-lg font-medium text-mustard">{p.tagline}</p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-mist">
            <p>{p.summary}</p>
            {p.description.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <h4 className="display mt-8 text-2xl">{p.design.title}</h4>
          <p className="mt-3 text-lg leading-relaxed text-mist">{p.design.text}</p>

          <a href="#contact" onClick={() => ref.current?.close()} className="btn btn-primary mt-8">
            Enquire About {p.name}
          </a>
        </div>

        <div className="space-y-8">
          <Facts
            items={[
              ...p.facts,
              { label: "Location", value: p.location },
              { label: "Type", value: p.type },
            ]}
          />

          <div>
            <h4 className="mb-3 text-xs uppercase tracking-[0.3em] text-mustard">
              The Development Features
            </h4>
            <ul className="flex flex-wrap gap-2">
              {p.amenities.map((a) => (
                <li key={a} className="border border-ink/15 px-3 py-1.5 text-mist">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream p-6">
            <h4 className="display text-xl">{p.closing.title}</h4>
            <div className="mt-3 space-y-3 leading-relaxed text-mist">
              {p.closing.text.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();

  return (
    <>
      <Reveal>
        <article className="group grid overflow-hidden border border-gold/40 bg-white shadow-sm transition duration-500 hover:border-gold hover:shadow-xl lg:grid-cols-[1.2fr_1fr]">
          <button
            onClick={open}
            aria-label={`View ${p.name} details`}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-cream lg:aspect-auto lg:min-h-[32rem]"
          >
            <Image
              src={p.cover.src}
              alt={p.cover.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <span className="absolute left-5 top-5 bg-gold px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-ink">
              {p.type}
            </span>
          </button>

          <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-mustard">{p.location}</p>
            <h3 className="display text-4xl md:text-5xl">{p.name}</h3>
            <p className="text-lg font-medium text-mustard">{p.tagline}</p>
            <p className="text-lg leading-relaxed text-mist">{p.summary}</p>
            <Facts items={p.facts} />
            <button onClick={open} className="btn btn-outline self-start">
              View Full Details
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </article>
      </Reveal>
      <Details p={p} ref={ref} />
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Project"
          title="More About SN Krishna"
          text="A thoughtfully planned residential development by Ram Enterprises on Kolar Road, Bhopal."
        />

        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
