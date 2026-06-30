import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.left}>
          <h3>Let's create something together.</h3>
          <p>Available for freelance opportunities.</p>
          <a href="mailto:m.ilhamtamam@gmail.com" className={styles.email}>
            m.ilhamtamam@gmail.com
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <h4>Socials</h4>
            <Link href="https://dribbble.com/Eam" target="_blank" rel="noopener noreferrer">Dribbble</Link>
            <Link href="https://www.behance.net/ilham89" target="_blank" rel="noopener noreferrer">Behance</Link>
            <Link href="https://www.linkedin.com/in/ilhamtamam/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>&copy; {currentYear} Ilham Tamam. All rights reserved.</p>
      </div>
    </footer>
  );
}
