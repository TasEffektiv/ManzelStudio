import Reveal from "./Reveal";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V6l8-3 8 3v15" />
    <path d="M9 21v-7h6v7" />
    <path d="M4 12h16" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l9 16H3z" />
    <path d="M12 10v4M12 17h0" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21V9l9-6 9 6v12" />
    <path d="M9 21v-6h6v6" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 8h8M8 12h8M8 16h5" />
    <path d="M15.5 15l1.5 1.5L20 13" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h9l3 3v17H6z" />
    <path d="M9 8h6M9 12h6M9 16h4" />
  </svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>,
];

export default function AssessmentDiscover({
  eyebrow,
  titlePre,
  titleEm,
  titlePost,
  lead,
  cards,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lead: string;
  cards: { num: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-white px-6 py-[100px] md:px-10 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[60px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
              {titlePost}
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <div key={c.num} className="flex min-h-[240px] flex-col gap-3.5 bg-white p-8">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-paper text-ink">
                    {icons[Number(c.num) - 1]}
                  </div>
                  <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">{c.num}</span>
                </div>
                <h3 className="mt-2 text-[19px] font-medium leading-[1.25] text-ink">{c.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
