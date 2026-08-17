import Reveal from "./Reveal";

export default function Suburbs({
  eyebrow,
  titlePre,
  titleEm,
  body,
  chips,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  body: string;
  chips: string[];
}) {
  return (
    <section className="bg-paper px-6 py-[100px] md:px-10 md:py-[125px]">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-[100px]">
          <div>
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[30px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[40px] md:text-[48px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
          </div>
          <div>
            <p className="mb-7 text-[16px] leading-[1.65] text-ink-2">{body}</p>
            <div className="flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span
                  key={c}
                  className="border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
