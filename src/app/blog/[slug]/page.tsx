import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: `${post.title} | Sinokrot Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mb-10 bg-gray-50 pb-16 pt-32 text-gray-900">
      <article className="mx-auto w-full max-w-3xl">
        <p className="text-sm text-gray-500">
          <Link href="/blog" className="font-medium text-primary-700 hover:underline">
            Blog
          </Link>
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-primary-800">{post.title}</h1>
        <p className="mt-3 text-lg text-gray-600">{post.description}</p>

        <div className="mt-10 max-w-none">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              {section.heading ? (
                <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mt-4 leading-relaxed text-gray-800">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-gray-200 pt-8">
          <Link href="/blog" className="font-medium text-primary-700 hover:underline">
            Tüm yazılar
          </Link>
        </p>
      </article>
    </div>
  );
}
