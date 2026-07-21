"use client";

import { InstagramLogo, MapPin, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import { useLanguage } from "./language-provider";

export function SiteFooter() {
  const { isArabic } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-sun" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-title">
          <span className="eyebrow">DRINK RUN</span>
          <h2>{isArabic ? "نشوفك عند الغروب؟" : "See you at sunset?"}</h2>
          <p>{isArabic ? "مشروبات حلوة، ناس رايقة، وأيام تستاهل." : "Good drinks, good people, days worth slowing down for."}</p>
        </div>
        <div className="footer-links">
          <Link href="/menu">{isArabic ? "تصفح القائمة" : "Browse the menu"}</Link>
          <Link href="/branches"><MapPin size={18} /> {isArabic ? "اعثر على أقرب فرع" : "Find a branch"}</Link>
          <a href="tel:+201000000000"><Phone size={18} /> +20 100 000 0000</a>
          <a href="#" aria-label={isArabic ? "درينك رن على إنستجرام" : "Drink Run on Instagram"}><InstagramLogo size={20} /> Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Drink Run</span>
        <span>{isArabic ? "استمتع بوقتك" : "Let's enjoy it and have some fun!"}</span>
      </div>
    </footer>
  );
}
