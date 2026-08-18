import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/BlogPost";
import { blogPosts } from "@/lib/content";
import { blogArticles } from "@/lib/blogArticles";

function slugFromHref(href: string) {
  return href.replace("/blog/", "");
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: slugFromHref(p.href) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => slugFromHref(p.href) === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Manzel Studio`,
    description: post.excerptLong.slice(0, 155).replace(/\s+\S*$/, "") + "…",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => slugFromHref(p.href) === slug);
  const article = blogArticles[slug];
  if (!post || !article) notFound();

  return <BlogPost post={post} article={article} />;
}
