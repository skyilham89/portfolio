import Link from "next/link";
import Image from "next/image";
import styles from "./case-studies.module.css";
import { caseStudies } from "./data";

export default function CaseStudies() {
  return (
    <div className={styles.caseStudiesPage}>
      <div className={`container section ${styles.header}`}>
        <h1 className="fade-in">Case Studies</h1>
        <p className="fade-in delay-1">In-depth looks at my design process, problem-solving approach, and the results achieved.</p>
      </div>

      <div className={`container section ${styles.list}`}>
        {caseStudies.map((study, index) => (
          <div
            key={study.slug}
            className={`${styles.card} slide-up`}
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            <div className={styles.imageCol}>
              {study.image ? (
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span>+</span>
                  <small>Add thumbnail · data.ts</small>
                </div>
              )}
            </div>
            <div className={styles.contentCol}>
               <div className={styles.meta}>
                 <span className={styles.year}>{study.year}</span>
                 <div className={styles.tags}>
                   {study.tags.map(tag => (
                     <span key={tag} className={styles.tag}>{tag}</span>
                   ))}
                 </div>
               </div>
               <h2>{study.title}</h2>
               <p>{study.description}</p>
               <Link href={`/case-studies/${study.slug}`} className={styles.readMore}>
                 Read Case Study &rarr;
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
