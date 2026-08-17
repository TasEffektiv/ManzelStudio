import Reveal from "./Reveal";

export default function AssessmentBeforeOrder({
  eyebrow,
  titlePre,
  titleEm,
  items,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  items: { n: string; body: string; bold: string }[];
}) {
  return (
    <section className="bg-white px-6 py-[100px] md:px-10 md:py-[125px]">
      <Reveal>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-[100px]">
          <div>
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[30px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[40px] md:text-[48px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
          </div>
          <ul className="flex flex-col gap-6 border-t border-line pt-8">
            {items.map((item) => (
              <li key={item.n} className="flex items-start gap-5">
                <span className="text-[15px] font-medium text-muted">{item.n}</span>
                <span className="text-[15.5px] leading-[1.6] text-ink-2">
                  {item.bold && item.body.includes(item.bold) ? (
                    <>
                      {item.body.split(item.bold)[0]}
                      <strong className="font-medium text-ink">{item.bold}</strong>
                      {item.body.split(item.bold)[1]}
                    </>
                  ) : (
                    item.body
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
