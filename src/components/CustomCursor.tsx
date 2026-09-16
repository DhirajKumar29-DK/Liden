"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const ball = cursorRef.current;
    const xTo = gsap.quickTo(ball, "x", { duration: 0.25, ease: "power3" });
    const yTo = gsap.quickTo(ball, "y", { duration: 0.25, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cd-cover-layer"></div>
      <div id="magic-cursor">
        <div id="ball" ref={cursorRef}>
          <div id="ball-drag-x"></div>
          <div id="ball-drag-y"></div>
          <div id="ball-loader"></div>
        </div>
      </div>
      <div id="clone-image">
        <div className="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
    </>
  );
}
