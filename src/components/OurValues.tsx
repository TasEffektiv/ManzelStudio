import Image from "next/image";
import Reveal from "./Reveal";

export default function OurValues({
  title,
  items,
}: {
  title: string;
  items: { icon: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-black px-6 py-[100px] md:px-10 md:py-[130px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="about-heading mb-6 text-center font-medium tracking-[-0.044em] text-white">{title}</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center">
            {items.map((v) => (
              <div key={v.title} className="w-full px-4 py-6 text-center sm:w-1/2 md:w-1/3 md:px-9 md:py-8">
                <div className="mx-auto mb-2 grid h-[55px] w-[55px] place-items-center">
                  <Image src={v.icon} alt={v.title} width={33} height={33} />
                </div>
                <h3 className="about-subheading mb-3 font-medium tracking-[-0.042em] text-white">{v.title}</h3>
                <p className="text-[17px] leading-[30px] text-white/85">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
