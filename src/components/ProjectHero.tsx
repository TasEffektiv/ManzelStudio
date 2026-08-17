import Image from "next/image";

export default function ProjectHero({
  image,
  eyebrow,
  title,
  sub,
}: {
  image: string;
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="relative flex min-h-[580px] items-end overflow-hidden pb-[100px] pt-[50px] md:min-h-[78vh]">
      <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-[780px]">
          <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-white/85">{eyebrow}</div>
          <h1 className="text-[44px] font-medium leading-[0.98] tracking-[-0.015em] text-white sm:text-[64px] md:text-[86px] lg:text-[108px]">
            {title}
          </h1>
          <p className="mt-[22px] max-w-[520px] text-[18px] leading-[1.5] text-white/85">{sub}</p>
        </div>
      </div>
    </section>
  );
}
