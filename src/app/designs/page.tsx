"use client";

import { useState, useEffect } from "react";
import styles from "./designs.module.css";
import Image, { StaticImageData } from "next/image";

import dribbble1 from "@/imports/designs/dribbble-1.png";
import dribbble2 from "@/imports/designs/dribbble-2.png";
import dribbble3 from "@/imports/designs/dribbble-3.png";
import dribbble4 from "@/imports/designs/dribbble-4.png";
import dribbble5 from "@/imports/designs/dribbble-5.png";
import dribbble6 from "@/imports/designs/dribbble-6.png";
import globalPulseFull from "@/imports/designs/global-pulse-full.png";
import starpropertyFull from "@/imports/designs/starproperty-full.png";
import widgetWatch from "@/imports/widget-watch.png";

type Design = {
  id: number;
  title: string;
  category: string;
  image?: StaticImageData;
  fullImage?: StaticImageData;
};

export default function Designs() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const designs: Design[] = [
    { id: 1, title: "Rewards Landing Page", category: "Web UI", image: dribbble1 },
    { id: 2, title: "Reward Theme & Dark Mode", category: "Mobile UI", image: dribbble2 },
    { id: 3, title: "iOS 26 Liquid Glass", category: "App Design", image: dribbble3 },
    { id: 4, title: "Appreciation Page", category: "Web UI", image: dribbble4, fullImage: globalPulseFull },
    { id: 5, title: "Property Classified", category: "Web Design", image: dribbble5, fullImage: starpropertyFull },
    { id: 6, title: "Apple Watch Widget", category: "Apple Watch UI", image: dribbble6, fullImage: widgetWatch },
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDesign(null);
      }
    };
    
    if (selectedDesign) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling on body when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedDesign]);

  return (
    <div className={styles.designsPage}>
      <div className={`container section ${styles.header}`}>
        <h1 className="fade-in">Selected Designs</h1>
        <p className="fade-in delay-1">A collection of visual explorations, UI concepts, and component designs.</p>
      </div>

      <div className={`container section ${styles.grid}`}>
        {designs.map((design, index) => (
          <button
            key={design.id}
            type="button"
            className={`${styles.designCard} slide-up`}
            style={{ animationDelay: `${(index % 3) * 0.1 + 0.2}s` }}
            onClick={() => setSelectedDesign(design)}
          >
            <div className={styles.imageContainer}>
              {design.image ? (
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.designImage}
                />
              ) : (
                <div className={styles.placeholder}></div>
              )}
            </div>
            <div className={styles.overlay}>
              <h3>{design.title}</h3>
              <p>{design.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedDesign && (
        <div 
          className={styles.lightbox} 
          onClick={() => setSelectedDesign(null)}
        >
          <button 
            className={styles.lightboxClose}
            onClick={() => setSelectedDesign(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          
          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            {(selectedDesign.fullImage || selectedDesign.image) ? (
              <div className={styles.lightboxImageWrapper}>
                <Image
                  src={selectedDesign.fullImage || selectedDesign.image!}
                  alt={selectedDesign.title}
                  fill
                  sizes="100vw"
                  className={styles.lightboxImage}
                />
              </div>
            ) : (
              <div className={styles.lightboxPlaceholder}></div>
            )}
            <div className={styles.lightboxInfo}>
              <h2 className={styles.lightboxTitle}>{selectedDesign.title}</h2>
              <p className={styles.lightboxCategory}>{selectedDesign.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
