import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/content";
import Reveal from "./Reveal";

export default function BlogList() {
  return (
    <section className="bg-white px-6 pb-[130px] pt-[90px] md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-1 gap-x-10 gap-y-[60px] sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.href} delay={(i % 4) * 60}>
              <div className="group">
                <a href={post.href} className="block">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      quality={70}
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </a>
                <span className="mt-[25px] mb-2.5 block text-[16px] font-medium text-black">{post.date}</span>
                <h3 className="text-[20px] font-semibold leading-[28px] text-black">
                  <a href={post.href} className="transition-colors duration-300 group-hover:text-[#888888]">
                    {post.title}
                  </a>
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <aside className="lg:sticky lg:top-28">
            <h3 className="mb-5 text-[20px] font-semibold text-black">Browse by Topic</h3>
            <nav className="flex flex-col gap-3">
              {blogCategories.map((c) => (
                <Link
                  key={c.key}
                  href={`/blog-category/${c.key}`}
                  className="bg-[#f2f2f2] px-6 py-3.5 text-[16px] text-black transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  {c.label}
                </Link>
              ))}
            </nav>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
