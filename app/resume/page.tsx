import type { Metadata } from "next";
import { resume } from "@/data/resume";
import { Section } from "@/components/Section";
import {
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${resume.name} — ${resume.headline}.`,
};

export default function ResumePage() {
  return (
    <article>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {resume.name}
          </h1>
          <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
            {resume.headline}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon size={14} />
              {resume.location}
            </span>
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <MailIcon size={14} />
              {resume.email}
            </a>
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </p>
        </div>
        <a
          href="/yugam-sharma-resume.pdf"
          download="yugam-sharma-resume.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          <DownloadIcon size={15} />
          Download PDF
        </a>
      </div>

      <Section title="Experience">
        <div className="space-y-8">
          {resume.experience.map((job) => (
            <div key={`${job.company}-${job.title}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.title}
                </h3>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {job.company}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Technical Skills">
        <dl className="space-y-3">
          {resume.skills.map((group) => (
            <div key={group.category} className="text-sm">
              <dt className="inline font-semibold text-zinc-900 dark:text-zinc-100">
                {group.category}:{" "}
              </dt>
              <dd className="inline text-zinc-700 dark:text-zinc-300">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Certifications">
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          {resume.certifications.map((cert) => (
            <li key={cert.name}>{cert.name}</li>
          ))}
        </ul>
      </Section>

      <Section title="Open Source & Community">
        <ul className="space-y-3 text-sm">
          {resume.openSource.map((project) => (
            <li key={project.name}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
                >
                  {project.name}
                </a>
              ) : (
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </span>
              )}{" "}
              <span className="text-zinc-700 dark:text-zinc-300">
                — {project.description}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <div className="space-y-5">
          {resume.education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {edu.start} – {edu.end}
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {edu.school} — {edu.location}
                {edu.gpa && ` · GPA ${edu.gpa}`}
              </p>
              {edu.coursework && (
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {edu.coursework.join(" · ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </article>
  );
}
