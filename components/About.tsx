import Image from "next/image";
import Reveal from "./Reveal";
import { photos } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-cream py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-mustard">
            <span className="h-px w-8 bg-gold" />
            About Ram Enterprises
          </p>
          <h2 className="display text-4xl leading-tight md:text-5xl">A Legacy Built on Trust.</h2>
          <div className="relative mt-12 max-w-sm">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-t-[8rem] border border-gold" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[8rem] bg-white">
              <Image
                src={photos.walkway.src}
                alt={photos.walkway.alt}
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="space-y-5 text-lg leading-relaxed text-mist">
          <p className="text-xl text-ink">
            For more than three decades, Ram Enterprises has been a trusted name in residential real
            estate and construction in Bhopal.
          </p>
          <p>
            What began with a commitment to quality and integrity has grown into a philosophy that
            guides everything we build today: create spaces that are considered in every detail,
            built with purpose, and made to stand the test of time.
          </p>
          <p>
            Our projects are shaped by an understanding that great real estate is not simply about
            buildings. It is about location, planning, design, community and the everyday experience
            of the people who call it home.
          </p>
          <p>
            From the first line drawn on a plan to the final detail of a finished space, we bring
            together experience, careful execution and a long-term perspective.
          </p>
          <div className="border-l-2 border-gold pl-6">
            <p>Because we are not simply building properties.</p>
            <p className="display mt-1 text-2xl leading-snug text-ink">
              We are creating places people can be proud to call home.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
