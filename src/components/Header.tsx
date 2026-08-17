"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logo, nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "border-b border-black/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Link href="/" className="shrink-0" aria-label="Manzel Studio">
          <Image
            src={logo}
            alt="Manzel Studio"
            width={269}
            height={66}
            priority
            className="h-auto w-[150px] sm:w-[200px] xl:w-[269px]"
          />
        </Link>

        <nav className="hidden items-center gap-0 xl:flex">
          {nav.map((item) => (
            <div
              key={item.label}
              className="group relative px-[22px]"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="relative flex items-center gap-1.5 pb-[27px] pt-1 text-[17px] text-ink after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-[3px] after:bg-ink after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0"
              >
                {item.label}
                {item.children && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className="mt-0.5 shrink-0 transition-transform duration-300 group-hover:-rotate-180"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
              {item.children && (
                <div
                  className={`absolute left-1/2 top-[53px] w-[280px] -translate-x-1/2 bg-white shadow-[0_0_2px_0_#aeadad] transition-all duration-200 ${
                    openDropdown === item.label
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block border-b border-[#f5f5f5] px-3 py-[18px] text-center text-[18px] text-ink hover:text-ink-2"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center xl:flex">
          <a
            href="/contact-us"
            className="border border-ink px-6 py-2.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-[5px] p-2 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 xl:hidden ${
          mobileOpen ? "max-h-[600px] border-t border-line" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-line py-3">
              <a href={item.href} className="text-[16px] text-ink">
                {item.label}
              </a>
              {item.children && (
                <div className="mt-2 flex flex-col gap-2 pl-3">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="text-[14px] text-ink-2">
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/contact-us" className="my-4 border border-ink px-6 py-2.5 text-center text-[15px] font-medium text-ink">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
