import Link from "next/link";
import { resume } from "@/data/resume";
import { siteConfig } from "@/data/site";
import { getAllPosts, formatDate } from "@/lib/blog";
import { MessiAnimation } from "@/components/MessiAnimation";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="py-8">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Hi, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {resume.name}
          </h1>
          <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
            Software Engineer
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            I work on cloud infrastructure and reliability — mostly AWS and
            Kubernetes. I enjoy automating the tedious parts, keeping
            production boring, and writing down what I learn along the way.
            Currently at Proofpoint.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:mt-6">
          <MessiAnimation />
          <p className="max-w-[260px] text-center text-xs text-zinc-500 dark:text-zinc-400">
            A little CSS tribute to{" "}
            <a
              href="https://messi.com/en/biography/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              the #10
            </a>
            . ⚽
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/resume"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          View Resume
        </Link>
        <Link
          href="/blog"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Read the Blog
        </Link>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
        >
          GitHub
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
        >
          LinkedIn
        </a>
      </div>

      {posts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Latest Posts
          </h2>
          <ul className="mt-4 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <span className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">
                    {post.title}
                  </span>
                  <span className="ml-3 text-sm text-zinc-500 dark:text-zinc-400">
                    {formatDate(post.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
