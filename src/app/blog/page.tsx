import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Sinokrot",
  description:
    "Piliç satın alırken, saklama ve pişirme konularında kısa bilgilendirici yazılar.",
};

export default function BlogIndexPage() {
  return (
    <div className="mb-10 bg-gray-50 pb-16 pt-32 text-gray-900">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-primary-800">Blog</h1>
        <p className="mt-3 text-gray-600">
          Piliç satın alırken, saklama ve pişirme konularında kısa bilgilendirici yazılar.
        </p>
        <ul className="mt-10 space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h2 className="text-xl font-semibold text-primary-800">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-primary-700 hover:underline"
                >
                  Devamını oku
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
