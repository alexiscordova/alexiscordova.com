import styles from "@/styles/Home.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alexis Córdova | Portfolio",
  description: "Personal portfolio showcasing web development and design work",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Alexis Córdova</h1>
        <p>Web Developer & Designer</p>
      </header>

      <section className={styles.featured}>
        <h2>Featured Work</h2>
        <div className={styles.portfolioGrid}>
          {/* Portfolio items will be loaded from CMS */}
          <p>Portfolio content will appear here</p>
        </div>
      </section>
    </div>
  );
}
