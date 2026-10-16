"use client";

import type { FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contact, projects } from "@/lib/data";

const field =
  "w-full border-b border-ink/25 bg-transparent py-3 text-lg text-ink outline-none transition-colors placeholder:text-mist/70 focus:border-gold";

const digits = contact.phone.replace(/\D/g, "");

export default function Contact() {
  // No backend: the enquiry is handed to WhatsApp as a pre-filled message.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      "Hello Ram Enterprises,",
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Interested in: ${d.get("interest")}`,
      d.get("message"),
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${digits}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  const info = [
    { label: "Call Us", value: contact.phone, href: `tel:+${digits}` },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Project Site", value: contact.site },
  ];

  return (
    <section id="contact" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Talk About Your Next Address"
          text="Tell us what you are looking for and continue the conversation with our team on WhatsApp."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            {info.map((c) => {
              const body = (
                <>
                  <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-mustard">
                    {c.label}
                  </span>
                  <span className="mt-1 block break-words text-xl font-semibold">{c.value}</span>
                </>
              );
              const cls = "block border border-gold/40 bg-white p-6 transition-colors";
              return c.href ? (
                <a key={c.label} href={c.href} className={`${cls} hover:border-gold`}>
                  {body}
                </a>
              ) : (
                <div key={c.label} className={cls}>
                  {body}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="grid gap-8 border border-gold/40 bg-white p-8 sm:grid-cols-2 md:p-12"
            >
              <input required name="name" autoComplete="name" placeholder="Full name" aria-label="Full name" className={field} />
              <input required type="tel" name="phone" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" className={field} />
              <select name="interest" aria-label="Interested in" className={`${field} sm:col-span-2`}>
                {[...projects.map((p) => p.name), "General enquiry"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <textarea name="message" rows={4} placeholder="Your message (optional)" aria-label="Message" className={`${field} resize-none sm:col-span-2`} />
              <button type="submit" className="btn btn-primary sm:col-span-2 sm:justify-self-start">
                Send on WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
