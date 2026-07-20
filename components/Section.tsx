import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 border-b border-zinc-200 pb-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:border-zinc-800 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
