import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutStory({
  images,
  title,
  subtitle,
  paragraphs,
}: {
  images: string[];
  title: string;
  subtitle: string;
  paragraphs: string[];
}) {
  return (
    <section className="bg-white px-6 py-[90px] md:px-10 md:py-[130px]">
      <Reveal>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[90px]">
          <div className="flex gap-4 sm:gap-[47px] lg:w-[56%]">
            <div className="relative h-[280px] w-1/2 overflow-hidden sm:h-[400px] lg:h-[508px]">
              <Image
                src={images[0]}
                alt="About Us"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, 50vw"
              />
            </div>
            <div className="relative h-[280px] w-1/2 overflow-hidden sm:h-[400px] lg:h-[508px]">
              <Image
                src={images[1]}
                alt="About Us"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:w-[44%]">
            <h2 className="about-heading mb-4 font-medium tracking-[-0.044em] text-black">{title}</h2>
            <h3 className="about-subheading mb-4 font-medium tracking-[-0.042em] text-black">{subtitle}</h3>
            <div className="space-y-5 text-[17px] leading-[30px] text-black">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
