import Reveal from "./Reveal";

type Goal = { num: string; tag: string; title: string; body: string };

export default function ProjectBrief({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  goals,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  goals: Goal[];
}) {
  return (
    <section className="bg-paper px-6 py-[120px] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-[70px] max-w-[880px]">
            <div className="eyebrow mb-[18px] block">{eyebrow}</div>
            <h2 className="text-[38px] font-medium leading-[1.08] text-ink sm:text-[48px] md:text-[58px]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
            <p className="mt-6 max-w-[680px] text-[17px] leading-[1.7] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-[50px] sm:grid-cols-3">
            {goals.map((g) => (
              <div key={g.num} className="flex flex-col gap-[18px] border-t border-line pt-9">
                <div className="text-[32px] font-light italic leading-none text-aubergine">{g.num}</div>
                <div className="eyebrow">{g.tag}</div>
                <h3 className="text-[22px] font-medium leading-[1.25] text-ink">{g.title}</h3>
                <p className="text-[15px] leading-[1.65] text-ink-2">{g.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
