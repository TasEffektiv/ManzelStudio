import Reveal from "./Reveal";

const icons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h13M11 6l5 6-5 6" />
    <circle cx="20" cy="12" r="1.6" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19V5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7l9-4 9 4-9 4z" />
    <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c4 4 6 7 6 11a6 6 0 0 1-12 0c0-4 2-7 6-11z" />
    <path d="M9 14c.5 2 2 3 3 3" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3 4 6 4 9s-1.5 6-4 9c-2.5-3-4-6-4-9s1.5-6 4-9z" />
  </svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 10h10M4 14h16M4 18h10" />
    <circle cx="18" cy="18" r="2.4" />
  </svg>,
];

export default function WhyManzel({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  items,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="bg-[#f2f2f2] px-6 py-[100px] md:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto mb-[70px] max-w-[780px] text-center">
            <div className="eyebrow mb-[18px]">{eyebrow}</div>
            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[58px] md:leading-[1.1]">
              {titlePre}
              <em className="not-italic text-aubergine">{titleEm}</em>
            </h2>
            <p className="mt-5 text-[16px] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {items.map((w, i) => (
              <div key={w.title} className="flex min-h-[220px] flex-col gap-3.5 bg-white p-8 sm:p-9">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f2f2f2] text-ink">
                  {icons[i]}
                </div>
                <h3 className="mt-2 text-[20px] font-medium leading-[1.2] sm:text-[22px]">{w.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{w.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
