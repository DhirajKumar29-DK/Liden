"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function usePageReveal() {
  useEffect(() => {
    // Ensure body visibility
    document.body.classList.remove("hidden");
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";

    const precent = document.getElementById("precent");
    const loadbar = document.querySelector(".loadbar") as HTMLElement | null;
    const spinningPlus = document.querySelector(".spinning-plus") as HTMLElement | null;
    const preloaderWrap = document.querySelector(".preloader-wrap") as HTMLElement | null;
    const percentageWrapper = document.querySelector(".percentage-wrapper") as HTMLElement | null;
    const textContainer = document.getElementById("text-container");
    const pageContent = document.getElementById("clapat-page-content");

    if (pageContent) {
      pageContent.style.opacity = "1";
      pageContent.style.visibility = "visible";
    }

    if (!preloaderWrap) return;

    // 1:1 Matched timing parameters from https://liden.in/
    // Total Duration: 5.4s (5400 ms) | Step tick: 54ms per 1%
    if (spinningPlus) {
      gsap.to(spinningPlus, {
        rotation: 1800,
        duration: 5.4,
        ease: "power2.out",
      });
    }

    if (loadbar) {
      gsap.to(loadbar, {
        width: "100%",
        duration: 5.4,
        ease: "power1.inOut",
      });
    }

    let currentPercent = 0;
    const stepInterval = setInterval(() => {
      currentPercent += 1;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(stepInterval);
        if (precent) precent.innerText = "100";

        // Preloader Exit Timeline matching https://liden.in/
        const tl = gsap.timeline({
          onComplete: () => {
            preloaderWrap.style.display = "none";
          },
        });

        // 1. Percentage counter slides right & fades out
        if (percentageWrapper) {
          tl.to(
            percentageWrapper,
            {
              xPercent: 101,
              opacity: 0,
              duration: 0.7,
              ease: "power4.out",
            },
            0
          );
        }

        // 2. Preloader text container slides left & fades out
        if (textContainer) {
          tl.to(
            textContainer,
            {
              xPercent: -101,
              opacity: 0,
              duration: 0.7,
              ease: "power4.out",
            },
            0
          );
        }

        // 3. Preloader wrap slides upward to reveal page content
        tl.to(
          preloaderWrap,
          {
            yPercent: -100,
            duration: 0.6,
            ease: "power3.inOut",
          },
          0.3
        );
      } else {
        if (precent) precent.innerText = `${currentPercent}`;
      }
    }, 54);

    return () => {
      clearInterval(stepInterval);
    };
  }, []);
}
