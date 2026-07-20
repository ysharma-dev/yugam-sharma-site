import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          yugam@sharma:~$
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
