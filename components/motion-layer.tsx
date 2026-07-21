"use client";

import { useEffect } from "react";

export function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) {
      root.classList.add("motion-lite");
      return;
    }

    let frame = 0;
    const handlePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        root.style.setProperty("--pointer-x", `${(x * 18).toFixed(2)}px`);
        root.style.setProperty("--pointer-y", `${(y * 14).toFixed(2)}px`);
        root.style.setProperty("--pointer-x-negative", `${(x * -16).toFixed(2)}px`);
        root.style.setProperty("--pointer-y-negative", `${(y * -12).toFixed(2)}px`);
      });
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return null;
}
