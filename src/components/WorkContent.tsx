import Image from "next/image";
import styles from "@/styles/WorkDetail.module.css";
import { Project } from "@/types/project";

type WorkContentProps = {
  work: Project;
};

export default function WorkContent({ work }: WorkContentProps) {
  return (
    <>
      <h1 className={styles.title}>{work.title}</h1>

      <div className={styles.tags}>
        {work.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={work.imageUrl}
          alt={work.title}
          width={1200}
          height={800}
          className={styles.mainImage}
        />
      </div>

      <div className={styles.content}>
        <p>{work.content}</p>
      </div>
    </>
  );
}
