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
          <h2>{isArabic ? "نلتقي عند الغروب؟" : "Meet you at sunset?"}</h2>
          <p>{isArabic ? "مشروبات مبهجة، أجواء خفيفة، وأيام أحلى." : "Bright drinks, easy company, better days."}</p>
        </div>
        <div className="footer-links">
          <Link href="/menu">{isArabic ? "اكتشف القائمة" : "Explore the menu"}</Link>
          <Link href="/branches"><MapPin size={18} /> {isArabic ? "اعثر علينا" : "Find a branch"}</Link>
          <a href="tel:+201000000000"><Phone size={18} /> +20 100 000 0000</a>
          <a href="#" aria-label="Drink Run on Instagram"><InstagramLogo size={20} /> Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Drink Run</span>
        <span>{isArabic ? "استمتع بوقتك" : "Let&apos;s enjoy it and have some fun!"}</span>
      </div>
    </footer>
  );
}
