import { siteConfig } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

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
              className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <MailIcon size={14} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
