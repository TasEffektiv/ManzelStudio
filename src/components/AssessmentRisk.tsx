import Reveal from "./Reveal";

export default function AssessmentRisk({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  cards,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  cards: { title: string; items: string[] }[];
}) {
  return (
    <section className="bg-[#f2f2f2] px-6 py-[100px] md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[60px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[58px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
              {titlePost}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {cards.map((c) => (
              <div key={c.title} className="flex flex-col gap-4 bg-white p-8 sm:p-10">
                <h3 className="text-[20px] font-medium leading-[1.2] text-ink sm:text-[22px]">{c.title}</h3>
                <ul className="flex flex-col gap-3">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[14.5px] leading-[1.6] text-ink-2">
                      <span className="mt-0.5 shrink-0 text-aubergine">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
