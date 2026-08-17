import Image from "next/image";

export default function AssessmentHero({
  image,
  eyebrow,
  titlePre,
  titleEm,
  lead,
  primaryCta,
  secondaryCta,
}: {
  image: string;
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}) {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden md:min-h-[600px]">
      <Image src={image} alt={`${titlePre}${titleEm}`} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-28 md:px-10">
        <div className="max-w-[720px]">
          <div className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            {eyebrow}
          </div>
          <h1 className="mb-7 text-[36px] font-medium leading-[1.1] tracking-[-0.044em] text-white sm:text-[50px] md:text-[64px] md:leading-[1.05]">
            {titlePre}
            <em className="not-italic text-white/90">{titleEm}</em>
          </h1>
          <p className="mb-9 max-w-[580px] text-[17px] leading-[1.6] text-white/90 md:text-[18px]">{lead}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={primaryCta.href} className="btn-fill">
              {primaryCta.label} <span className="arr" />
            </a>
            <a
              href={secondaryCta.href}
              className="flex h-[54px] items-center gap-3.5 border border-white px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
