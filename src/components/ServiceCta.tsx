import Reveal from "./Reveal";

export default function ServiceCta({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  body,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink px-6 py-[100px] text-center text-white md:py-[130px]">
      <Reveal>
        <div className="mx-auto max-w-[820px]">
          <div className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
            {eyebrow}
          </div>
          <h2 className="mb-6 text-[34px] font-medium leading-[1.12] tracking-[-0.044em] text-white sm:text-[50px] md:text-[64px] md:leading-[1.05]">
            {titlePre}
            <em className="not-italic text-white/80">{titleEm}</em>
            {titlePost}
          </h2>
          <p className="mx-auto mb-10 max-w-[540px] text-[16px] leading-[1.6] text-[#cfc8d4]">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={primaryCta.href} className="btn-fill">
              {primaryCta.label} <span className="arr" />
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="flex h-[54px] items-center gap-3.5 border border-white px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
