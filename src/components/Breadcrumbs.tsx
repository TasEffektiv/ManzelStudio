import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus a matching BreadcrumbList JSON-LD block, built from the same list so they can't drift apart. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="border-b border-line bg-white px-6 py-3 md:px-10">
        <ol className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-1.5 text-[13px] text-ink-2">
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="font-medium text-black" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-black hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
