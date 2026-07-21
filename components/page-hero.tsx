"use client";

import { useLanguage } from "./language-provider";

export function PageHero({
  eyebrow,
  eyebrowAr,
  title,
  titleAr,
  copy,
  copyAr,
  children,
}: {
  eyebrow: string;
  eyebrowAr: string;
  title: string;
  titleAr: string;
  copy: string;
  copyAr: string;
  children?: React.ReactNode;
}) {
  const { isArabic } = useLanguage();
  return (
    <section className="page-hero">
      <div className="page-hero-orbit orbit-one" aria-hidden="true" />
      <div className="page-hero-orbit orbit-two" aria-hidden="true" />
      <div className="page-hero-copy">
        <span className="eyebrow">{isArabic ? eyebrowAr : eyebrow}</span>
        <h1>{isArabic ? titleAr : title}</h1>
        <p>{isArabic ? copyAr : copy}</p>
      </div>
      {children}
    </section>
  );
}
