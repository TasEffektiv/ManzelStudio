import Reveal from "./Reveal";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, React.ReactNode> = {
  frontage: (
    <svg {...iconProps}>
      <path d="M4 12h16" />
      <path d="M4 8v8" />
      <path d="M20 8v8" />
      <path d="M7 9l-3 3 3 3" />
      <path d="M17 9l3 3-3 3" />
    </svg>
  ),
  depth: (
    <svg {...iconProps}>
      <path d="M12 4v16" />
      <path d="M8 4h8" />
      <path d="M8 20h8" />
      <path d="M9 7l3-3 3 3" />
      <path d="M9 17l3 3 3-3" />
    </svg>
  ),
  heritage: (
    <svg {...iconProps}>
      <path d="M3 11l9-6 9 6" />
      <path d="M5 11v9h14v-9" />
      <path d="M9 14v6" />
      <path d="M15 14v6" />
      <path d="M5 20h14" />
    </svg>
  ),
  rowAccess: (
    <svg {...iconProps}>
      <path d="M3 18h7a4 4 0 0 0 4-4V8" />
      <path d="M11 11l3-3 3 3" />
      <path d="M17 18h4" />
    </svg>
  ),
  approval: (
    <svg {...iconProps}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  streetscape: (
    <svg {...iconProps}>
      <path d="M3 20h18" />
      <path d="M5 20V11l3-3v12" />
      <path d="M11 20V8l3-3 3 3v12" />
      <path d="M19 20v-7l-2-2" />
      <path d="M13 11v2" />
      <path d="M13 15v2" />
    </svg>
  ),
  yield: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 11h18" />
      <path d="M14 11v10" />
      <path d="M3 16h11" />
    </svg>
  ),
  outcome: (
    <svg {...iconProps}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  ),
};

type Item = { icon: string; title: string; body: string };
type Block = { num: string; eyebrow: string; titlePre: string; titleEm: string; lead: string; items: Item[] };

export default function ProjectOutcome({ blocks }: { blocks: Block[] }) {
  return (
    <section className="bg-paper px-6 py-[120px] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        {blocks.map((b, i) => (
          <Reveal key={b.num} delay={i * 60}>
            <div>
              {i > 0 && <div className="my-[60px] h-px bg-line" />}
              <div className="grid grid-cols-1 gap-12 py-3.5 lg:grid-cols-[5fr_7fr] lg:gap-[90px]">
                <div>
                  <span className="mb-6 block text-[64px] font-light italic leading-none text-aubergine opacity-90 md:text-[96px]">
                    {b.num}
                  </span>
                  <div className="eyebrow mb-[18px] block">{b.eyebrow}</div>
                  <h3 className="max-w-[18ch] text-[28px] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[34px] md:text-[40px]">
                    {b.titlePre}
                    <em className="not-italic text-aubergine opacity-90">{b.titleEm}</em>
                  </h3>
                  <p className="mt-[18px] max-w-[400px] text-[16px] leading-[1.65] text-ink-2">{b.lead}</p>
                </div>
                <ul className="grid grid-cols-1 content-start gap-x-11 gap-y-[34px] sm:grid-cols-2 lg:pt-[142px]">
                  {b.items.map((item) => (
                    <li key={item.title}>
                      <span className="mb-3.5 block h-[26px] w-[26px] text-ink/85">{icons[item.icon]}</span>
                      <strong className="mb-1.5 block text-[15.5px] font-medium text-ink">{item.title}</strong>
                      <p className="text-[14.5px] leading-[1.6] text-ink-2">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
