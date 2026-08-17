import Image from "next/image";
import Reveal from "./Reveal";

export default function ServiceFeaturedProjects({
  eyebrow,
  titlePre,
  titleEm,
  lead,
  projects,
  cta,
}: {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  lead: string;
  projects: { image: string; alt: string; loc: string; type: string; title: string }[];
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-white px-6 py-[100px] md:px-10 md:py-[125px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-[60px] grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="eyebrow mb-[18px]">{eyebrow}</div>
              <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:text-[58px] md:leading-[1.1]">
                {titlePre}
                <em className="not-italic text-aubergine">{titleEm}</em>
              </h2>
            </div>
            <p className="text-[16px] leading-[1.6] text-ink-2 lg:max-w-[420px]">{lead}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <a href="/our-projects" className="group block">
                <div className="relative h-[280px] w-full overflow-hidden sm:h-[380px]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in group-hover:scale-110"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-muted">
                  <span>{p.loc}</span>
                  <span aria-hidden>•</span>
                  <span>{p.type}</span>
                </div>
                <h3 className="mt-1.5 text-[21px] font-medium text-black md:text-[23px]">{p.title}</h3>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-[60px] text-center">
          <a href={cta.href} className="btn-fill">
            {cta.label} <span className="arr" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
