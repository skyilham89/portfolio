import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import RotatingText from "@/components/RotatingText";
import { caseStudies } from "./case-studies/data";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={`container section ${styles.hero}`}>
        <div className={`fade-in ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Crafting digital <br />
            experiences that <br />
            <RotatingText className={styles.textAccent} />
          </h1>
          <p className={`delay-1 ${styles.heroSubtitle}`}>
            I am Ilham, a UI/UX Designer focusing on clean aesthetics, 
            intuitive interfaces, and meaningful user experiences.
          </p>
          <div className={`delay-2 ${styles.heroActions}`}>
            <Link href="/designs" className={styles.primaryButton}>
              View Designs
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className={`container section ${styles.featured}`}>
        <div className={`slide-up delay-3 ${styles.sectionHeader}`}>
          <h2>Featured Work</h2>
          <Link href="/case-studies" className={styles.viewAll}>
            View all case studies &rarr;
          </Link>
        </div>

        <div className={`slide-up delay-4 ${styles.grid}`}>
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className={styles.card}>
              <div className={styles.cardImageContainer}>
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.cardImage}
                  />
                ) : (
                  <div className={styles.placeholderImage}></div>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3>{study.title}</h3>
                <p>{study.tags.join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
