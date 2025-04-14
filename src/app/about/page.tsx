import styles from "@/styles/About.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Alexis Córdova",
  description: "Learn more about Alexis Córdova and my background",
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.content}>
        <p>
          Content about Alexis will be loaded from the CMS here. This section
          will contain professional background, skills, and experience.
        </p>
      </div>
    </div>
  );
}
