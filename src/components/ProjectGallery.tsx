import Image from "next/image";
import Reveal from "./Reveal";

const tilePos: Record<string, string> = {
  t1: "sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3",
  t2: "sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2",
  t3: "sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2",
  t4: "sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-3",
  t5: "sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4",
  t6: "sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4",
};

export default function ProjectGallery({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  tiles,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  tiles: { tile: string; image: string; alt: string }[];
}) {
  return (
    <section className="bg-white px-6 py-[120px] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-[50px] flex flex-wrap items-end justify-between gap-10">
            <div>
              <div className="eyebrow mb-[14px] block">{eyebrow}</div>
              <h2 className="text-[38px] font-medium leading-[1.05] text-ink sm:text-[48px] md:text-[56px]">
                {titlePre}
                <em className="not-italic text-aubergine">{titleEm}</em>
              </h2>
            </div>
            <p className="max-w-[420px] text-[15px] leading-[1.6] text-ink-2">{lead}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-3 sm:[grid-template-columns:1.2fr_1fr_1fr] sm:[grid-auto-rows:240px]">
            {tiles.map((t) => (
              <div
                key={t.tile}
                className={`group relative h-[240px] overflow-hidden bg-[#e7e1d4] sm:h-auto ${tilePos[t.tile]}`}
              >
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 40vw, 100vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
