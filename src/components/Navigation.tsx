import Link from "next/link";
import styles from "@/styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Link href="/">Alexis Córdova</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
