import styles from "@/styles/Resume.module.css";
import { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Resume | Alexis Córdova",
  description: "Professional experience and skills of Alexis Córdova",
};

export default function Resume() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Alexis Córdova</h1>
        <p>Front-End UI/UX Developer</p>
      </header>

      <div className={styles.resumeContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>skills</span>{" "}
            <span className={styles.operator}>=</span>{" "}
            <span className={styles.bracket}>[</span>
          </h2>

          <CodeBlock
            code={`  "JavaScript", "TypeScript", "React", "Next.js",
  "CSS", "HTML", "Node.js", "AWS",
  "UI/UX Design", "Responsive Design",
  "Performance Optimization", "Accessibility"
`}
          />

          <div className={styles.closingBracket}>
            <span className={styles.bracket}>];</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>experience</span>{" "}
            <span className={styles.operator}>=</span>{" "}
            <span className={styles.bracket}>[</span>
          </h2>

          <CodeBlock
            code={`  {
    company: "DoorDash",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    responsibilities: [
      "Developed and maintained consumer-facing web applications",
      "Optimized performance for critical user flows",
      "Collaborated with design and product teams",
      "Mentored junior developers"
    ]
  },
  {
    company: "Faire",
    role: "Frontend Developer",
    period: "2020 - 2022",
    responsibilities: [
      "Built marketplace features for independent retailers",
      "Implemented responsive designs across all devices",
      "Improved site accessibility to WCAG standards",
      "Contributed to frontend architecture decisions"
    ]
  },
  {
    company: "Salesforce",
    role: "UI Developer",
    period: "2018 - 2020",
    responsibilities: [
      "Created enterprise-level UI components",
      "Maintained design system consistency",
      "Worked with cross-functional teams",
      "Improved user experience for complex workflows"
    ]
  }`}
          />

          <div className={styles.closingBracket}>
            <span className={styles.bracket}>];</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>education</span>{" "}
            <span className={styles.operator}>=</span>{" "}
            <span className={styles.bracket}>{"{}"}</span>;
          </h2>

          <CodeBlock
            code={`education.degree = "Bachelor of Science in Computer Science";
education.university = "University of California";
education.graduationYear = 2018;
education.honors = ["Cum Laude", "Dean's List"];`}
          />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.keyword}>function</span>{" "}
            <span className={styles.function}>contactMe</span>
            <span className={styles.parentheses}>()</span>{" "}
            <span className={styles.bracket}>{"{"}</span>
          </h2>

          <CodeBlock
            code={`  return {
    email: "alexis@alexiscordova.com",
    linkedin: "linkedin.com/in/alexiscordova",
    github: "github.com/alexiscordova"
  };`}
          />

          <div className={styles.closingBracket}>
            <span className={styles.bracket}>{"}"}</span>
          </div>
        </section>

        <div className={styles.runButton}>
          <a href="mailto:alexis@alexiscordova.com" className={styles.button}>
            Run contactMe()
          </a>
        </div>
      </div>
    </div>
  );
}
