import Image from "next/image";
import Reveal from "./Reveal";

type Related = {
  image: string;
  alt: string;
  loc: string;
  category: string;
  title: string;
  body: string;
  href: string;
};

export default function ProjectRelated({ items }: { items: Related[] }) {
  return (
    <section className="bg-white px-6 py-[120px] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-[50px] flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="eyebrow mb-[14px] block">— Related Projects</div>
              <h2 className="text-[38px] font-medium leading-[1.05] text-ink sm:text-[48px] md:text-[56px]">
                Explore more <em className="not-italic text-aubergine">projects.</em>
              </h2>
            </div>
            <a
              href="/our-projects"
              className="inline-flex items-center border-b border-aubergine pb-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-aubergine transition-opacity duration-300 hover:opacity-70"
            >
              View All Projects
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <a key={p.title} href={p.href} className="group flex flex-col gap-[18px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    quality={70}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  <span className="text-aubergine">{p.loc}</span>
                  <span>{p.category}</span>
                </div>
                <h3 className="text-[22px] font-medium leading-[1.25] text-ink">{p.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{p.body}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
