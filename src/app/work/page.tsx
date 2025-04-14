import styles from "@/styles/Work.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Alexis Córdova",
  description: "Portfolio work showcasing web development and design projects",
};

export default function Work() {
  return (
    <div className={styles.container}>
      <h1>My Work</h1>
      <div className={styles.portfolioGrid}>
        {/* Portfolio items will be loaded from CMS */}
        <p>All portfolio work will appear here</p>
      </div>
    </div>
  );
}
