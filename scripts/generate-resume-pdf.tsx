/**
 * Renders data/resume.ts to public/resume.pdf.
 * Runs automatically before `next build` (see the "prebuild" npm script);
 * run manually with: npm run generate:pdf
 */
import fs from "fs";
import path from "path";
import { renderToFile, Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import { resume } from "../data/resume";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.4,
    color: "#1a1a1a",
    paddingVertical: 36,
    paddingHorizontal: 44,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  contactLine: {
    textAlign: "center",
    marginTop: 4,
    color: "#444444",
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginTop: 14,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
  },
  jobDates: {
    color: "#444444",
  },
  bullet: {
    flexDirection: "row",
    marginTop: 2,
  },
  bulletMarker: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  skillLine: {
    marginTop: 2,
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletMarker}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

function ResumePdf() {
  const linkedinLabel = resume.linkedin.replace("https://", "");
  const githubLabel = resume.github.replace("https://", "");

  return (
    <Document
      title={`${resume.name} — Resume`}
      author={resume.name}
      subject={resume.headline}
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{resume.name.toUpperCase()}</Text>
        <Text style={styles.contactLine}>
          {resume.location} | {resume.email} |{" "}
          <Link src={resume.linkedin}>{linkedinLabel}</Link> |{" "}
          <Link src={resume.github}>{githubLabel}</Link>
        </Text>

        <Section title="Experience">
          {resume.experience.map((job) => (
            <View key={`${job.company}-${job.title}`}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>
                  {job.title} · {job.company}
                </Text>
                <Text style={styles.jobDates}>
                  {job.start} – {job.end}
                </Text>
              </View>
              {job.bullets.map((bullet, i) => (
                <Bullet key={i}>{bullet}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title="Technical Skills">
          {resume.skills.map((group) => (
            <Text key={group.category} style={styles.skillLine}>
              <Text style={styles.bold}>{group.category}: </Text>
              {group.items.join(", ")}
            </Text>
          ))}
        </Section>

        <Section title="Certifications">
          {resume.certifications.map((cert) => (
            <Bullet key={cert.name}>{cert.name}</Bullet>
          ))}
        </Section>

        <Section title="Open Source & Community">
          {resume.openSource.map((project) => (
            <Bullet key={project.name}>
              {`${project.name} — ${project.description}${project.url ? ` — ${project.url.replace("https://", "")}` : ""}`}
            </Bullet>
          ))}
        </Section>

        <Section title="Education">
          {resume.education.map((edu) => (
            <View key={edu.degree}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>
                  {edu.degree} · {edu.school} — {edu.location}
                </Text>
                <Text style={styles.jobDates}>
                  {edu.start} – {edu.end}
                </Text>
              </View>
              <Text>
                {edu.gpa ? `GPA ${edu.gpa}` : ""}
                {edu.coursework ? ` · ${edu.coursework.join(" · ")}` : ""}
              </Text>
            </View>
          ))}
        </Section>
      </Page>
    </Document>
  );
}

async function main() {
  const outPath = path.join(process.cwd(), "public", "resume.pdf");
  // public/ may not exist in a fresh clone: resume.pdf is gitignored and git
  // does not track empty directories.
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await renderToFile(<ResumePdf />, outPath);
  console.log(`Resume PDF written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
