import Image from "next/image";
import Reveal from "./Reveal";

export default function OurApproach({
  image,
  title,
  paragraphs,
}: {
  image: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="relative overflow-hidden px-6 py-[90px] md:px-10 md:py-[150px]">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/10" />
      <Reveal className="relative z-10 mx-auto max-w-[1400px]">
        <div className="mr-auto max-w-[762px] bg-black px-8 py-12 sm:px-14 sm:py-16 md:px-[95px] md:py-20">
          <h2 className="about-heading mb-4 font-medium tracking-[-0.044em] text-white">{title}</h2>
          <div className="space-y-5 text-[17px] leading-[30px] text-white/90">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
