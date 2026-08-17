"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

type Project = {
  title: string;
  category: string;
  type: string;
  image: string;
  href: string | null;
};

type Category = { key: string; label: string };

export default function ProjectsGrid({
  heading,
  categories,
  projects,
}: {
  heading: string;
  categories: Category[];
  projects: Project[];
}) {
  const [active, setActive] = useState(categories[0].key);
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="bg-white px-6 pb-[130px] md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="mx-auto mb-[45px] mt-[90px] max-w-[870px] text-center text-[32px] font-medium leading-[1.2] tracking-[-0.044em] text-black sm:text-[46px] md:text-[66px] md:leading-[70px]">
            {heading}
          </h2>
        </Reveal>

        <Reveal className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              className={`inline-block border px-[26px] py-2 text-[17px] leading-[1.5] tracking-[-0.01em] transition-colors duration-300 ${
                active === c.key
                  ? "border-black bg-black text-white"
                  : "border-black/20 bg-white text-black hover:border-black hover:bg-black hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {filtered.map((p, i) => {
            const card = (
              <>
                <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px] lg:h-[466px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-3 text-[22px] font-medium leading-[31px] text-black sm:text-[24px]">
                  {p.title}
                  <span className="mx-1 font-medium text-black">/</span>
                  <span className="text-[15px] font-medium leading-[26px] text-black">{p.category}</span>
                </h3>
                <div className="text-[14px] leading-[25px] text-black/50">{p.type}</div>
              </>
            );
            return (
              <Reveal key={`${p.category}-${p.title}-${i}`} delay={(i % 4) * 70}>
                {p.href ? (
                  <a href={p.href} className="group block">
                    {card}
                  </a>
                ) : (
                  <div className="group block">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
