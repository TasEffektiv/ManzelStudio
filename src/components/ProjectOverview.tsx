import Reveal from "./Reveal";

export default function ProjectOverview({
  eyebrow,
  titlePre,
  titleEm,
  paragraphs,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  paragraphs: string[];
}) {
  return (
    <section className="bg-white px-6 pb-[120px] pt-[130px] md:px-10">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[90px]">
          <div>
            <span className="mb-[22px] block h-px w-[50px] bg-ink" />
            <div className="eyebrow mb-[18px] block">{eyebrow}</div>
            <h2 className="text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px] md:text-[62px]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
          </div>
          <div>
            {paragraphs.map((p, i) => (
              <p
                key={p}
                className={
                  i === 0
                    ? "mb-[22px] max-w-[600px] text-[21px] font-normal leading-[1.5] text-ink"
                    : "mb-[22px] max-w-[600px] text-[17px] leading-[1.7] text-ink-2"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
