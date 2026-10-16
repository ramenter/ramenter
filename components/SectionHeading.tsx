import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-mustard">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        <span className="h-px w-8 bg-gold" />
      </p>
      <h2 className="display text-4xl leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-mist">{text}</p>}
    </Reveal>
  );
}
