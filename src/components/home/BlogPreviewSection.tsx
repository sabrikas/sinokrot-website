import Link from "next/link";
import { blogPosts } from "@/content/blog";

export function BlogPreviewSection() {
  const preview = blogPosts.slice(0, 3);

  return (
    <section className="border-y border-secondary-200 bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Sofranız için bilgiler</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Aşağıdaki başlıklarda piliç satın alırken, saklama ve pişirme üzerine bilgilendirici yazılar
              bulabilirsiniz.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 text-sm font-semibold text-primary-700 hover:underline"
          >
            Tüm yazılar
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {preview.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-primary-800">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-medium text-primary-700 hover:underline"
                >
                  Okumaya devam edin
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
