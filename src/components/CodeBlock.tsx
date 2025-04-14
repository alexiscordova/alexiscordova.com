import styles from "@/styles/CodeBlock.module.css";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  return (
    <div className={styles.codeBlock}>
      <pre className={`${styles.pre} ${styles[language]}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
