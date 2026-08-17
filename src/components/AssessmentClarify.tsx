import Reveal from "./Reveal";

export default function AssessmentClarify({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  body,
  items,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  body: string;
  items: { glyph: string; title: string; body: string }[];
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
              {titlePost}
            </h2>
          </div>
          <div>
            <p className="mb-8 text-[17px] leading-[30px] text-ink-2">{body}</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-[17px] text-ink">
                    {item.glyph}
                  </span>
                  <div>
                    <h4 className="mb-1 text-[16px] font-medium leading-[1.3] text-ink">{item.title}</h4>
                    <p className="text-[14px] leading-[1.5] text-ink-2">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
