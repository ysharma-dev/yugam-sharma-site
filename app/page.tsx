import Link from "next/link";
import { resume } from "@/data/resume";
import { siteConfig } from "@/data/site";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="py-8">
      <p className="text-sm text-emerald-600 dark:text-emerald-400">
        Hi, I&apos;m
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {resume.name}
      </h1>
      <p className="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
        {resume.headline}
      </p>
      <p className="mt-6 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
        I build scalable, highly available platforms on AWS and Kubernetes —
        GitOps delivery across 50+ EKS clusters, serverless integrations,
        secrets management, and observability. Currently at Proofpoint,
        previously Sisense and Pivotal/VMware.
      </p>

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
