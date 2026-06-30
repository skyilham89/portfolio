"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Designs", path: "/designs" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About", path: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          ILHAM<span className={styles.logoDot}>.</span>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
