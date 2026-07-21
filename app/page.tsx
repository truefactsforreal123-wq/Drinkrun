"use client";

import { ArrowDown, ArrowUpRight, MapPin, Sparkle } from "@phosphor-icons/react";
import Link from "next/link";
import { DrinkArt } from "@/components/drink-art";
import { useLanguage } from "@/components/language-provider";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";

const principles = [
  { number: "01", en: "Made fresh", ar: "طازج دائماً", copy: "Real fruit, bright herbs, no shortcuts.", copyAr: "فاكهة حقيقية، أعشاب منعشة، بدون اختصارات." },
  { number: "02", en: "Good mood", ar: "مزاج حلو", copy: "A tiny holiday hiding in your everyday.", copyAr: "إجازة صغيرة مستخبية في يومك العادي." },
  { number: "03", en: "For everyone", ar: "للكل", copy: "Come solo, bring the crew, stay a while.", copyAr: "تعالى لوحدك أو مع صحابك، وخليك براحتك." },
];

export default function HomePage() {
  const { isArabic } = useLanguage();

  return (
    <main id="main-content">
      <section className="home-hero" aria-label="Drink Run introduction">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb--one" />
          <span className="hero-orb hero-orb--two" />
          <span className="hero-doodle hero-doodle--one">✦</span>
          <span className="hero-doodle hero-doodle--two">~</span>
        </div>
        <div className="hero-copy">
          <span className="eyebrow">FRESHLY MIXED · DAILY</span>
          <h1>
            {isArabic ? (
              <>أيام أحلى.<br /><em>مشروبات أجرأ.</em></>
            ) : (
              <>Easy days.<br /><em>Bold drinks.</em></>
            )}
          </h1>
          <p>{isArabic ? "مكانك للهروب من الزحمة، رشفة منعشة ومزاج أخف." : "Your colorful little escape from the rush, one fresh pour and one good mood at a time."}</p>
          <div className="hero-actions">
            <Link className="button button--dark" href="/menu">
              {isArabic ? "شوف القائمة" : "See what’s pouring"} <ArrowUpRight size={19} weight="bold" />
            </Link>
            <Link className="text-link" href="/branches">
              <MapPin size={19} /> {isArabic ? "أقرب فرع" : "Find your spot"}
            </Link>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-logo-card">
            <LogoMark />
            <span className="tape tape--one" aria-hidden="true" />
            <span className="tape tape--two" aria-hidden="true" />
          </div>
          <DrinkArt kind="berry" className="hero-drink hero-drink--berry" label="Berry Sunset signature drink" />
          <DrinkArt kind="mango" className="hero-drink hero-drink--mango" label="Golden Hour mango drink" />
          <span className="stamp" aria-hidden="true">GOOD<br />TIMES<br />ONLY</span>
        </div>

        <a href="#favorites" className="scroll-note">
          <span>{isArabic ? "انزل للمزيد" : "Scroll for a sip"}</span>
          <ArrowDown size={18} />
        </a>
      </section>

      <section className="marquee-band" aria-label="Brand message">
        <div className="marquee-track" aria-hidden="true">
          <span>FRESHLY SQUEEZED</span><i>✺</i><span>GOOD DAYS AHEAD</span><i>✺</i><span>DRINK HAPPY</span><i>✺</i>
          <span>FRESHLY SQUEEZED</span><i>✺</i><span>GOOD DAYS AHEAD</span><i>✺</i><span>DRINK HAPPY</span><i>✺</i>
        </div>
      </section>

      <section className="favorites-section" id="favorites">
        <Reveal className="section-intro split-intro">
          <div>
            <span className="eyebrow">CURRENT CRUSHES</span>
            <h2>{isArabic ? <>ألوان تحلي<br /><em>يومك.</em></> : <>Color your<br /><em>day.</em></>}</h2>
          </div>
          <p>{isArabic ? "خلطات مميزة مصنوعة من مكونات حقيقية، بنكهات جريئة وفرحة واضحة." : "House-made favorites built with real ingredients, loud flavor, and just the right amount of joy."}</p>
        </Reveal>

        <div className="favorite-grid">
          <Reveal className="favorite-card favorite-card--coral" delay={40}>
            <div className="favorite-number">01 / 03</div>
            <DrinkArt kind="berry" label="Berry Sunset hibiscus refresher" />
            <div className="favorite-copy"><span>HIBISCUS · BERRY · LIME</span><h3>{isArabic ? "غروب التوت" : "Berry Sunset"}</h3><Link href="/menu">{isArabic ? "اعرف أكثر" : "Meet the favorite"} <ArrowUpRight /></Link></div>
          </Reveal>
          <Reveal className="favorite-card favorite-card--mint" delay={120}>
            <div className="favorite-number">02 / 03</div>
            <DrinkArt kind="mojito" label="Garden Fizz cucumber and mint refresher" />
            <div className="favorite-copy"><span>CUCUMBER · MINT · APPLE</span><h3>{isArabic ? "فوار الحديقة" : "Garden Fizz"}</h3><Link href="/menu">{isArabic ? "اعرف أكثر" : "Taste the green"} <ArrowUpRight /></Link></div>
          </Reveal>
          <Reveal className="favorite-card favorite-card--cream" delay={200}>
            <div className="favorite-number">03 / 03</div>
            <DrinkArt kind="coffee" label="Cloud cold brew coffee" />
            <div className="favorite-copy"><span>COLD BREW · VANILLA · SEA SALT</span><h3>{isArabic ? "كولد برو كلاود" : "Cloud Cold Brew"}</h3><Link href="/menu">{isArabic ? "اعرف أكثر" : "Catch the cloud"} <ArrowUpRight /></Link></div>
          </Reveal>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-art" aria-hidden="true">
          <div className="manifesto-sun" />
          <div className="manifesto-wave wave-a" />
          <div className="manifesto-wave wave-b" />
          <DrinkArt kind="citrus" />
        </div>
        <Reveal className="manifesto-copy">
          <Sparkle size={28} weight="fill" />
          <span className="eyebrow">THE DRINK RUN WAY</span>
          <h2>{isArabic ? "الحياة أقصر من مشروب عادي." : "Life is too short for boring drinks."}</h2>
          <p>{isArabic ? "إحنا مؤمنين إن كل يوم يستاهل لحظة خفيفة. عشان كده بنخلط كل كوب بعناية، ونقدمه بابتسامة كبيرة." : "We believe every day deserves a bright little interruption. So we mix every cup with care, serve it with a big smile, and leave the boring stuff elsewhere."}</p>
          <Link className="button button--light" href="/about">{isArabic ? "اقرأ قصتنا" : "Read our story"} <ArrowUpRight size={19} /></Link>
        </Reveal>
      </section>

      <section className="principles-section">
        <Reveal className="principles-heading">
          <span className="eyebrow">WHY WE POUR</span>
          <h2>{isArabic ? "بسيطة. طازة. سعيدة." : "Simple. Fresh. Happy."}</h2>
        </Reveal>
        <div className="principles-list">
          {principles.map((item, index) => (
            <Reveal className="principle" key={item.number} delay={index * 70}>
              <span>{item.number}</span>
              <h3>{isArabic ? item.ar : item.en}</h3>
              <p>{isArabic ? item.copyAr : item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-location-callout">
        <Reveal>
          <span className="eyebrow">YOUR NEXT DRINK RUN</span>
          <h2>{isArabic ? "قريب منك، وبعيد عن الروتين." : "Close by, far from ordinary."}</h2>
          <Link className="button button--dark" href="/branches">{isArabic ? "شوف الفروع" : "Explore our spots"} <ArrowUpRight size={19} /></Link>
        </Reveal>
        <div className="location-scribble" aria-hidden="true">meet<br />me<br />here ↘</div>
      </section>
    </main>
  );
}
