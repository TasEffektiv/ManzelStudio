import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCategoryList from "@/components/BlogCategoryList";
import ContactTeam from "@/components/ContactTeam";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import { blogCategories, blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.key === slug);
  if (!category) return {};
  return buildMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/blog-category/${slug}`,
  });
}

export default async function BlogCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.key === slug);
  if (!category) notFound();

  const posts = blogPosts.filter((p) => p.categories.includes(category.key));

  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: category.label, path: `/blog-category/${slug}` },
        ]}
      />
      <main className="flex-1">
        <BlogCategoryList label={category.label} activeKey={category.key} posts={posts} />
        <ContactTeam />
      </main>
      <Footer />
    </>
  );
}
