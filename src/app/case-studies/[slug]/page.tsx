import styles from "./case-study-detail.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../data";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <article className={styles.detailPage}>
      <div className={`container ${styles.header}`}>
        <Link href="/case-studies" className={styles.backLink}>
          &larr; Back to Case Studies
        </Link>
        <h1 className="fade-in">{study.title}</h1>
        <p className={`fade-in delay-1 ${styles.subtitle}`}>
          {study.description}
        </p>

        <div className={`fade-in delay-2 ${styles.meta}`}>
          <div className={styles.metaItem}>
            <strong>Client</strong>
            <span>{study.client}</span>
          </div>
          <div className={styles.metaItem}>
            <strong>Role</strong>
            <span>{study.role}</span>
          </div>
          <div className={styles.metaItem}>
            <strong>Timeline</strong>
            <span>{study.duration}</span>
          </div>
          <div className={styles.metaItem}>
            <strong>Year</strong>
            <span>{study.year}</span>
          </div>
        </div>
      </div>

      {/* Hero image — add `heroImage` in data.ts to replace this placeholder */}
      <div className={`fade-in delay-3 container ${styles.heroWrap}`}>
        {study.heroImage ? (
          <Image
            src={study.heroImage}
            alt={`${study.title} hero`}
            sizes="(max-width: 1100px) 100vw, 1100px"
            className={styles.heroImage}
          />
        ) : (
          <div className={`${styles.imgPlaceholder} ${styles.heroPlaceholder}`}>
            <span className={styles.placeholderPlus}>+</span>
            <span>Add hero image</span>
            <small>data.ts → heroImage</small>
          </div>
        )}
      </div>

      <div className={`container ${styles.content}`}>
        <section className={styles.section}>
          <h2>Overview</h2>
          {study.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Key Highlights</h2>
          <div className={styles.highlights}>
            {study.highlights.map((h) => (
              <div key={h.title} className={styles.highlight}>
                <h3>{h.title}</h3>
                <p>{h.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Tools</h2>
          <div className={styles.tools}>
            {study.tools.map((tool) => (
              <span key={tool} className={styles.tool}>{tool}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Gallery</h2>
          <Gallery images={study.gallery} title={study.title} />
        </section>

        <section className={styles.section}>
          <a
            href={study.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.behanceLink}
          >
            View the full case study on Behance &rarr;
          </a>
        </section>
      </div>
    </article>
  );
}
