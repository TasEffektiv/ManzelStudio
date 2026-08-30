import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Manzel Studio",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Residential Building Design", href: "/residential-building-design" },
  { label: "Commercial Building Design", href: "/commercial-building-design" },
  { label: "Our Projects", href: "/our-projects" },
  { label: "Studio Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto flex max-w-[720px] flex-col items-center px-6 py-[120px] text-center md:py-[180px]">
          <div className="eyebrow mb-4">— 404</div>
          <h1 className="mb-5 text-[42px] font-medium leading-[1.1] tracking-[-0.044em] text-black sm:text-[56px]">
            Page not found.
          </h1>
          <p className="mb-10 text-[17px] leading-[1.6] text-ink-2">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Here are a few places to start
            instead.
          </p>
          <Link
            href="/"
            className="mb-10 inline-flex h-11 items-center justify-center bg-black px-9 text-[17px] font-medium text-white transition-colors duration-500 hover:bg-[#242424]"
          >
            Back to Homepage
          </Link>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px] font-medium text-black">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline underline-offset-2 hover:opacity-70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
