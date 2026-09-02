import Image from "next/image";
import { teamMembers } from "@/lib/content";
import Reveal from "./Reveal";

export default function ContactTeam({
  showHeading = true,
  compact = false,
}: {
  showHeading?: boolean;
  compact?: boolean;
}) {
  return (
    <section className={`bg-white px-6 pb-[80px] md:pb-[135px] ${compact ? "pt-10" : "pt-[100px]"}`}>
      <div className="mx-auto max-w-[1200px] text-center">
        {showHeading && (
          <Reveal>
            <h2 className="mx-auto mb-[60px] max-w-[890px] text-[30px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[46px] md:mb-20 md:text-[62px] md:leading-[77px]">
              Let&rsquo;s create an unforgettable experiences together.
            </h2>
          </Reveal>
        )}

        <Reveal delay={100}>
          <div className="mx-auto flex max-w-[260px] flex-col items-start gap-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-10 md:gap-[100px]">
            {teamMembers.map((m) => (
              <div key={m.name} className="flex items-center gap-5">
                <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full">
                  <Image src={m.image} alt={m.name} fill sizes="60px" className="object-cover" />
                </div>
                <div className="text-left">
                  <div className="mb-[5px] text-[22px] font-semibold tracking-[-0.014em] text-black">{m.name}</div>
                  <a
                    href={m.phoneHref}
                    className="text-[17px] font-medium text-black transition-opacity duration-500 hover:opacity-70"
                  >
                    {m.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
