"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./InteractiveBackground.module.css";

export default function InteractiveBackground() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const ambientRef1 = useRef<HTMLDivElement>(null);
  const ambientRef2 = useRef<HTMLDivElement>(null);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // For smooth follower lag
    let cursorX = mouseX;
    let cursorY = mouseY;

    // For smooth background parallax
    let targetBg1X = 0;
    let targetBg1Y = 0;
    let currentBg1X = 0;
    let currentBg1Y = 0;

    let targetBg2X = 0;
    let targetBg2Y = 0;
    let currentBg2X = 0;
    let currentBg2Y = 0;

    let animId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${Math.round(mouseX)}px, ${Math.round(mouseY)}px, 0)`;
      }

      targetBg1X = (mouseX / window.innerWidth - 0.5) * 400;
      targetBg1Y = (mouseY / window.innerHeight - 0.5) * 400;

      targetBg2X = (mouseX / window.innerWidth - 0.5) * -500;
      targetBg2Y = (mouseY / window.innerHeight - 0.5) * -500;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${Math.round(cursorX)}px, ${Math.round(cursorY)}px, 0)`;
      }

      currentBg1X += (targetBg1X - currentBg1X) * 0.05;
      currentBg1Y += (targetBg1Y - currentBg1Y) * 0.05;
      currentBg2X += (targetBg2X - currentBg2X) * 0.05;
      currentBg2Y += (targetBg2Y - currentBg2Y) * 0.05;

      if (ambientRef1.current) {
        ambientRef1.current.style.transform = `translate3d(${currentBg1X}px, ${currentBg1Y}px, 0)`;
      }

      if (ambientRef2.current) {
        ambientRef2.current.style.transform = `translate3d(${currentBg2X}px, ${currentBg2Y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    // Add interactive hover states for links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    const iteractables = document.querySelectorAll('a, button');
    iteractables.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    return () => {
      document.body.style.cursor = 'auto';
      iteractables.forEach(el => {
        (el as HTMLElement).style.cursor = 'pointer';
      });
    }
  }, []);

  return (
    <>
      <div className={styles.ambientBackground}>
        <div ref={ambientRef1} className={`${styles.blob} ${styles.blob1}`}></div>
        <div ref={ambientRef2} className={`${styles.blob} ${styles.blob2}`}></div>
      </div>
      <div className="noise-overlay"></div>
      
      <div 
        ref={cursorRef} 
        className={`${styles.cursor} ${isHovering ? styles.cursorHover : ''}`}
      ></div>
      <div 
        ref={cursorFollowerRef} 
        className={`${styles.cursorFollower} ${isHovering ? styles.followerHover : ''}`}
      ></div>
    </>
  );
}
