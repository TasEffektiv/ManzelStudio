import Image from "next/image";
import Link from "next/link";
import { blogCategories } from "@/lib/content";
import Reveal from "./Reveal";

type Post = {
  title: string;
  href: string;
  image: string;
  date: string;
};

export default function BlogCategoryList({
  label,
  activeKey,
  posts,
}: {
  label: string;
  activeKey: string;
  posts: Post[];
}) {
  return (
    <section className="bg-white px-6 pb-[130px] pt-[70px] md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal>
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-[15px] font-medium text-black transition-opacity duration-300 hover:opacity-60"
            >
              <span aria-hidden="true">&larr;</span> Go Back To Blog
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mb-10 text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-black sm:text-[42px]">
              {label}
            </h1>
          </Reveal>

          {posts.length === 0 ? (
            <Reveal>
              <p className="py-10 text-[17px] text-ink-2">
                No posts under this topic yet.{" "}
                <Link href="/blog" className="font-medium text-black underline underline-offset-2 hover:opacity-70">
                  View all posts
                </Link>
              </p>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-x-10 gap-y-[60px] sm:grid-cols-2">
              {posts.map((post, i) => (
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
          )}
        </div>

        <Reveal delay={100}>
          <aside className="lg:sticky lg:top-28">
            <h3 className="mb-5 text-[20px] font-semibold text-black">Browse by Topic</h3>
            <nav className="flex flex-col gap-3">
              {blogCategories.map((c) => (
                <Link
                  key={c.key}
                  href={`/blog-category/${c.key}`}
                  aria-current={activeKey === c.key ? "page" : undefined}
                  className={`px-6 py-3.5 text-[16px] transition-colors duration-300 ${
                    activeKey === c.key ? "bg-black text-white" : "bg-[#f2f2f2] text-black hover:bg-black hover:text-white"
                  }`}
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
