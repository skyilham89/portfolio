"use client";

import { useState, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Gallery.module.css";

type Props = {
  images: (string | StaticImageData)[];
  title: string;
};

export default function Gallery({ images, title }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const swiping = useRef(false);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, [images.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    swiping.current = true;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!swiping.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!swiping.current) return;
    swiping.current = false;
    const threshold = 50;
    if (touchDeltaX.current < -threshold) {
      goNext();
    } else if (touchDeltaX.current > threshold) {
      goPrev();
    }
    touchDeltaX.current = 0;
  }, [goNext, goPrev]);

  if (images.length === 0) {
    return (
      <div className={styles.grid}>
        {[0, 1, 2].map((i) => (
          <div key={i} className={styles.placeholder}>
            <span className={styles.placeholderPlus}>+</span>
            <span>Add image {i + 1}</span>
            <small>data.ts &rarr; gallery</small>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) =>
          src ? (
            <button
              key={i}
              className={styles.thumb}
              onClick={() => setLightboxIndex(i)}
              type="button"
            >
              <Image
                src={src}
                alt={`${title} image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className={styles.thumbImage}
              />
            </button>
          ) : (
            <div key={i} className={styles.placeholder}>
              <span className={styles.placeholderPlus}>+</span>
              <span>Add image {i + 1}</span>
              <small>data.ts &rarr; gallery</small>
            </div>
          )
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className={styles.close}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            type="button"
            aria-label="Close"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                type="button"
              >
                ‹
              </button>
              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                type="button"
              >
                ›
              </button>
            </>
          )}

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={typeof images[lightboxIndex] === "string" ? images[lightboxIndex] : images[lightboxIndex].src}
              alt={`${title} image ${lightboxIndex + 1}`}
              className={styles.lightboxImage}
              draggable={false}
            />
            <span className={styles.counter}>
              {lightboxIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
