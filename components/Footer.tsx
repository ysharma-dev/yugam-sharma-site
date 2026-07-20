import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
