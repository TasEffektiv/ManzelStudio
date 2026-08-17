import Reveal from "./Reveal";

export default function AssessmentProcess({
  eyebrow,
  title,
  lead,
  phases,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  phases: { num: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-[#faf9f9] px-6 py-[100px] md:px-10 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-[60px] grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="eyebrow mb-[18px]">{eyebrow}</div>
              <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[52px] md:leading-[1.1]">
                {title}
              </h2>
            </div>
            <p className="text-[16px] leading-[1.6] text-ink-2 lg:max-w-[440px]">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((ph, i) => (
              <div
                key={ph.num}
                className={`flex flex-col gap-3.5 border-line p-8 ${
                  i !== phases.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
                } sm:border-r`}
              >
                <div className="text-[36px] font-light italic leading-none text-aubergine">{ph.num}</div>
                <h3 className="mt-1 text-[19px] font-medium leading-[1.25] text-ink">{ph.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{ph.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
