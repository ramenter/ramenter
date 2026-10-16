import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { reasons } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on Experience. Driven by Trust."
          text="For over three decades, Ram Enterprises has combined experience, thoughtful planning and quality craftsmanship to create spaces designed for lasting value."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 120}>
              <div className="group h-full border border-ink/10 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-xl">
                <span className="grid h-14 w-14 place-items-center border border-gold text-2xl text-mustard transition duration-500 group-hover:bg-gold group-hover:text-ink">
                  {r.icon}
                </span>
                <h3 className="display mt-6 text-2xl">{r.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-mist">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-mustard">Our Promise</p>
          <p className="display mt-4 text-3xl md:text-4xl">
            Better planning. Better execution. Better living.
          </p>
          <p className="mt-4 text-lg text-mist">
            Ram Enterprises — Built on Trust. Designed for Life.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
