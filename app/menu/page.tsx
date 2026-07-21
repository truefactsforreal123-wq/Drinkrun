"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { useDeferredValue, useState } from "react";
import { DrinkArt } from "@/components/drink-art";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { menuCategories, menuItems } from "@/data/content";

export default function MenuPage() {
  const [category, setCategory] = useState("all");
  const deferredCategory = useDeferredValue(category);
  const { isArabic } = useLanguage();
  const items = deferredCategory === "all" ? menuItems : menuItems.filter((item) => item.category === deferredCategory);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="WHAT WE MAKE"
        eyebrowAr="اللي بنعمله"
        title="Take your pick."
        titleAr="اختار اللي يعجبك."
        copy="Fresh drinks, proper coffee, and a few things to eat. All made right here."
        copyAr="مشروبات طازة، قهوة مضبوطة، وحاجات بسيطة للأكل. كل حاجة بتتعمل عندنا."
      >
        <div className="menu-hero-art" aria-hidden="true">
          <DrinkArt kind="mango" />
          <span>sip<br />sip<br />hooray!</span>
        </div>
      </PageHero>

      <section className="menu-section">
        <div className="filter-row" role="group" aria-label="Filter menu by category">
          {menuCategories.map((item) => (
            <button
              type="button"
              key={item.id}
              className={category === item.id ? "active" : ""}
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {isArabic ? item.ar : item.en}
            </button>
          ))}
        </div>

        <div className="menu-grid" aria-live="polite">
          {items.map((item, index) => (
            <Reveal className={`menu-card menu-card--${item.kind}`} key={item.id} delay={(index % 3) * 60}>
              <div className="menu-art-wrap">
                <span className="menu-tag">{item.tag}</span>
                <DrinkArt kind={item.kind} label={`${item.name}, ${item.desc}`} />
              </div>
              <div className="menu-card-copy">
                <div>
                  <span className="menu-category">{menuCategories.find((cat) => cat.id === item.category)?.[isArabic ? "ar" : "en"]}</span>
                  <h2>{isArabic ? item.nameAr : item.name}</h2>
                  <p>{isArabic ? item.descAr : item.desc}</p>
                </div>
                <strong>{item.price} <small>EGP</small></strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="menu-note">
        <div><span className="eyebrow">JUST ASK</span><h2>{isArabic ? "خلّيه على مزاجك." : "Make it yours."}</h2></div>
        <p>{isArabic ? "عايز حليب نباتي؟ سكر أقل؟ عندك حساسية من حاجة؟ قول لنا ونتصرف. إحنا هنا عشان نخدمك." : "Want oat milk instead? Less sugar? Allergic to something? Just tell us. That's literally our job."}</p>
        <ArrowUpRight size={42} aria-hidden="true" />
      </section>
    </main>
  );
}
