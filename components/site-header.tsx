"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import { LogoMark } from "./logo-mark";

const links = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/menu", en: "Menu", ar: "القائمة" },
  { href: "/about", en: "Our story", ar: "قصتنا" },
  { href: "/branches", en: "Find us", ar: "فروعنا" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isArabic, toggleLanguage } = useLanguage();

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand-link" aria-label={isArabic ? "درينك رن الرئيسية" : "Drink Run home"} onClick={() => setOpen(false)}>
          <LogoMark compact />
          <span>DRINK RUN</span>
        </Link>

        <nav id="mobile-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label={isArabic ? "القائمة الرئيسية" : "Main navigation"}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {isArabic ? link.ar : link.en}
            </Link>
          ))}
          <button className="language-button language-button--mobile" type="button" onClick={toggleLanguage}>
            {isArabic ? "English" : "العربية"}
          </button>
        </nav>

        <div className="nav-actions">
          <button className="language-button" type="button" onClick={toggleLanguage} aria-label={isArabic ? "تغيير اللغة إلى الإنجليزية" : "Switch language to Arabic"}>
            {isArabic ? "EN" : "عربي"}
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? (isArabic ? "إغلاق القائمة" : "Close menu") : (isArabic ? "فتح القائمة" : "Open menu")}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
