import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/blog"
        className="text-sm text-zinc-500 underline-offset-4 hover:underline dark:text-zinc-400"
      >
        ← All posts
      </Link>
      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h1>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        {post.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="prose prose-zinc dark:prose-invert mt-8 max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
