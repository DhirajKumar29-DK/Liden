"use client";

import { useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export function useTextShuffle() {
  const shuffleText = useCallback((element: HTMLElement, originalText: string, durationMs: number = 600) => {
    let frame = 0;
    const totalFrames = Math.floor(durationMs / 30);

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const shuffled = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index / originalText.length < progress) {
            return char;
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      element.innerText = shuffled;

      if (frame >= totalFrames) {
        element.innerText = originalText;
        clearInterval(interval);
      }
    }, 30);
  }, []);

  return { shuffleText };
}
