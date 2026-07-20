import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on cloud infrastructure, Kubernetes, SRE practices, and platform engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Notes on cloud infrastructure, Kubernetes, SRE, and platform
        engineering.
      </p>
      <ul className="mt-10 space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <article>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-zinc-900 group-hover:underline dark:text-zinc-100">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {post.summary}
              </p>
              {post.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-zinc-200 px-2.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
