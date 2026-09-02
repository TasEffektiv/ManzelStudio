import { testimonials, googleReviewsUrl } from "@/lib/content";
import Reveal from "./Reveal";

export const FEATURED_NAMES = ["Abdul Rahim", "Wesam Al-Sudani", "Fatima Al Rady"];

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-[3px] text-ink" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  const featured = testimonials.filter((t) => FEATURED_NAMES.includes(t.name));
  const rest = testimonials.filter((t) => !FEATURED_NAMES.includes(t.name));

  return (
    <section className="bg-[#fbfbfb] px-6 pt-[120px]">
      <Reveal>
        <div className="mx-auto mb-16 flex max-w-[780px] flex-col items-center text-center">
          <div className="eyebrow mb-[14px]">— Client Testimonials</div>
          <h2 className="mb-5 text-[34px] font-medium leading-[1.15] tracking-[-0.044em] text-black sm:text-[50px] md:text-[70px] md:leading-[78px]">
            Words from the people who worked with us.
          </h2>
          <Stars size={18} />
          <p className="mt-3 text-[16px] text-muted">
            5.0 average —{" "}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline underline-offset-4 hover:text-muted"
            >
              Rate us on Google
            </a>
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-[14px] border border-line bg-white p-[30px]"
              >
                <Stars />
                <blockquote className="text-[17px] leading-[1.5] text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-auto border-t border-line pt-[16px]">
                  <p className="text-[15px] font-semibold text-ink">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mx-auto max-w-[1240px] border-t border-line pb-24 pt-16">
          <h3 className="mb-10 text-center text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
            More from our clients
          </h3>
          <div className="columns-1 gap-x-12 md:columns-2 lg:columns-3">
            {rest.map((t) => (
              <div key={t.name} className="mb-10 break-inside-avoid border-t border-line pt-5">
                <Stars size={13} />
                <blockquote className="mt-3 text-[15px] leading-[1.65] text-ink-2">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-[13px] font-medium tracking-[0.02em] text-ink">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
