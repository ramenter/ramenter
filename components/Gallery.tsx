import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { gallery } from "@/lib/data";

// Tile spans by position; the rest are single cells. grid-flow-dense packs the gaps.
const spans = ["col-span-2 row-span-2", "col-span-2", "row-span-2", "row-span-2", "row-span-2"];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Life at SN Krishna"
          text="The clubhouse, temple, turf, landscaped walkways and homes: a glimpse of the community taking shape on Kolar Road."
        />

        <div className="grid grid-flow-dense auto-rows-[11rem] grid-cols-2 gap-3 md:auto-rows-[15rem] md:gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 80} className={spans[i] ?? ""}>
              <figure className="group relative h-full overflow-hidden border border-gold/40 bg-cream">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    i < 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"
                  }
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 bg-white/95 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-ink">
                  {img.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-mist">Images are for representation only.</p>
      </div>
    </section>
  );
}
