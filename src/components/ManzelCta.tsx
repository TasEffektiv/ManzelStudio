import Reveal from "./Reveal";

export default function ManzelCta({
  title,
  body,
  cta,
  compact = false,
}: {
  title: string;
  body: string;
  cta: { label: string; href: string };
  compact?: boolean;
}) {
  return (
    <section className={`bg-white px-6 md:px-10 ${compact ? "pt-16 pb-16" : "pb-[100px] md:pb-[150px]"}`}>
      <Reveal>
        <div className="mx-auto max-w-[1078px] text-center">
          <h2 className="about-subheading mb-2.5 font-medium tracking-[-0.042em] text-black">{title}</h2>
          <p className="mx-auto max-w-[720px] text-[17px] leading-[32px] text-black">{body}</p>
          <a
            href={cta.href}
            className="mt-[30px] inline-flex min-h-[44px] min-w-[220px] items-center justify-center bg-black px-9 text-[17px] font-medium text-white transition-colors duration-500 hover:bg-[#242424]"
          >
            {cta.label}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
