import styles from "@/styles/Work.module.css";
import { Metadata } from "next";
import { getFeaturedWork } from "@/lib/contentful";

export const metadata: Metadata = {
  title: "Work | Alexis Córdova",
  description: "Portfolio work showcasing web development and design projects",
};

export default async function Work() {
  const featuredWork = await getFeaturedWork();

  return (
    <div className={styles.container}>
      <h1>My Work</h1>
      <div className={styles.portfolioGrid}>
        {featuredWork.length > 0 ? (
          featuredWork.map((work) => (
            <div key={work.sys.id} className={styles.portfolioItem}>
              <h2>{work.fields.title}</h2>
              {work.fields.description && <p>{work.fields.description}</p>}
              {work.fields.date && (
                <time dateTime={work.fields.date}>
                  {new Date(work.fields.date).toLocaleDateString()}
                </time>
              )}
            </div>
          ))
        ) : (
          <p>No featured work found.</p>
        )}
      </div>
    </div>
  );
}
