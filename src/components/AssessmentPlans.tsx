import Reveal from "./Reveal";

type Basic = {
  name: string;
  price: string;
  unit: string;
  blurb: string;
  cta: { label: string; href: string };
  features: string[];
};

type Feature = {
  flag: string;
  name: string;
  price: string;
  unit: string;
  blurb: string;
  cta: { label: string; href: string };
  groups: { cat: string; items: { label: string; body: string }[] }[];
};

export default function AssessmentPlans({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  note,
  basic,
  feature,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  note: string;
  basic: Basic;
  feature: Feature;
}) {
  return (
    <section id="options" className="bg-ink px-6 py-[100px] text-white md:px-10 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[60px] max-w-[860px] text-center">
            <div className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.28em] text-white/65">
              {eyebrow}
            </div>
            <h2 className="text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[46px] md:text-[56px]">
              {titlePre}
              <em className="not-italic text-white/88">{titleEm}</em>
            </h2>
            <p className="mt-[22px] text-[16px] leading-[1.7] text-[#b7b3bb]">{lead}</p>
          </div>
        </Reveal>

        <div className="mx-auto flex max-w-[1080px] flex-col gap-[26px]">
          <Reveal>
            <div className="grid grid-cols-1 bg-white text-ink shadow-[0_26px_60px_rgba(0,0,0,0.3)] md:grid-cols-[320px_1fr]">
              <div className="flex flex-col justify-center border-b border-line p-9 md:border-b-0 md:border-r md:p-11">
                <div className="mb-[18px] text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
                  {basic.name}
                </div>
                <div className="flex items-baseline whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.02em] text-black sm:text-[52px]">
                  {basic.price}
                  <small className="ml-1.5 text-[15px] font-normal tracking-normal text-muted">{basic.unit}</small>
                </div>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-ink-2">{basic.blurb}</p>
                <a href={basic.cta.href} className="btn-fill mt-8 w-fit justify-center">
                  {basic.cta.label} <span className="arr" />
                </a>
              </div>
              <div className="p-9 md:p-11">
                <ul className="grid grid-cols-1 gap-x-9 gap-y-[15px] sm:grid-cols-2">
                  {basic.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-ink-2">
                      <span className="shrink-0 font-semibold text-aubergine">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative grid grid-cols-1 bg-white text-ink shadow-[0_26px_60px_rgba(0,0,0,0.3)] before:absolute before:inset-y-0 before:left-0 before:z-[3] before:w-1 before:bg-aubergine md:grid-cols-[320px_1fr]">
              <div className="absolute right-0 top-0 bg-aubergine px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white">
                {feature.flag}
              </div>
              <div className="flex flex-col justify-center border-b border-line bg-paper p-9 md:border-b-0 md:border-r md:p-11">
                <div className="mb-[18px] text-[12px] font-medium uppercase tracking-[0.24em] text-muted">
                  {feature.name}
                </div>
                <div className="flex items-baseline whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.02em] text-black sm:text-[52px]">
                  {feature.price}
                  <small className="ml-1.5 text-[15px] font-normal tracking-normal text-muted">{feature.unit}</small>
                </div>
                <p className="mt-3.5 text-[15px] leading-[1.6] text-ink-2">{feature.blurb}</p>
                <a href={feature.cta.href} className="btn-fill mt-8 w-fit justify-center">
                  {feature.cta.label} <span className="arr" />
                </a>
              </div>
              <div className="p-9 md:p-11">
                <ul className="grid grid-cols-1 gap-x-9 gap-y-[15px] sm:grid-cols-2">
                  {feature.groups.flatMap((g, gi) => [
                    <li
                      key={g.cat}
                      className={`col-span-full text-[11px] font-semibold uppercase tracking-[0.18em] text-aubergine ${
                        gi === 0 ? "" : "mt-2.5 border-t border-dashed border-line pt-4"
                      }`}
                    >
                      {g.cat}
                    </li>,
                    ...g.items.map((it) => (
                      <li key={it.label} className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-ink-2">
                        <span className="shrink-0 font-semibold text-aubergine">✓</span>
                        <span>
                          <strong className="font-semibold text-ink">{it.label}</strong> {it.body}
                        </span>
                      </li>
                    )),
                  ])}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-[1080px] text-center text-[13.5px] leading-[1.7] text-[#9b979f]">
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
