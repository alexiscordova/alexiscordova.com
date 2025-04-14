import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/PortfolioItem.module.css";

type PortfolioItemProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  tags: string[];
};

export default function PortfolioItem({
  id,
  title,
  description,
  imageUrl,
  slug,
  tags,
}: PortfolioItemProps) {
  return (
    <div className={styles.portfolioItem}>
      <Link href={`/work/${slug}`}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={`${id}-${tag}`} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
