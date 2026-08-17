import Image from "next/image";
import Reveal from "./Reveal";

export default function OurMission({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-[90px] md:px-10 md:py-[180px]">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
      <Reveal className="relative z-10 mx-auto max-w-[1400px]">
        <div className="ml-auto max-w-[630px] bg-black px-8 py-12 sm:px-14 sm:py-16 md:px-[90px] md:py-20">
          <h2 className="about-heading mb-4 font-medium tracking-[-0.044em] text-white">{title}</h2>
          <p className="text-[17px] leading-[32px] text-white">{body}</p>
        </div>
      </Reveal>
    </section>
  );
}
