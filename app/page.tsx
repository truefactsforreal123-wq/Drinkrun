"use client";

import { ArrowDown, ArrowUpRight, MapPin, Sparkle } from "@phosphor-icons/react";
import Link from "next/link";
import { DrinkArt } from "@/components/drink-art";
import { useLanguage } from "@/components/language-provider";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";

const principles = [
  { number: "01", en: "Made fresh", ar: "طازج دايمًا", copy: "We cut the fruit. We squeeze the juice. That's it.", copyAr: "إحنا بنقطع الفاكهة. إحنا بنعصر العصير. خلاص." },
  { number: "02", en: "Good mood only", ar: "مزاج حلو وبس", copy: "You walk in stressed, you leave smiling. House rule.", copyAr: "تدخل متضايق، تخرج مبسوط. قانون البيت." },
  { number: "03", en: "Stay a while", ar: "اقعد على راحتك", copy: "Nobody rushes you here. Bring your laptop, bring your gossip, whatever.", copyAr: "محدش بيستعجلك هنا. هات اللابتوب، هات الحكاوي، براحتك." },
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
          <span className="eyebrow">FRESH EVERY DAY</span>
          <h1>
            {isArabic ? (
              <>أيام أحلى.<br /><em>مشروبات أجرأ.</em></>
            ) : (
              <>Easy days.<br /><em>Bold drinks.</em></>
            )}
          </h1>
          <p>{isArabic ? "المحطة اللي بتفصل بين زحمة اليوم وراحة البال. مشروب حلو، مكان يهون، وناس رايقة." : "The stop between your busy day and your actual life. Good drinks, a spot that doesn't rush you, zero pretension."}</p>
          <div className="hero-actions">
            <Link className="button button--dark" href="/menu">
              {isArabic ? "شوف القائمة" : "Browse the menu"} <ArrowUpRight size={19} weight="bold" />
            </Link>
            <Link className="text-link" href="/branches">
              <MapPin size={19} /> {isArabic ? "الفرع الأقرب ليك" : "Find your nearest"}
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
            <span className="eyebrow">PEOPLE ORDER THESE A LOT</span>
            <h2>{isArabic ? <>اللي الناس<br /><em>بتحبه.</em></> : <>What people<br /><em>actually order.</em></>}</h2>
          </div>
          <p>{isArabic ? "الحاجات اللي بنعملها كل يوم تقريبًا. مكونات بسيطة، طعم واضح، والناس بترجع عشانها." : "The stuff we make the most. Nothing fancy on paper — just drinks that taste right and keep people coming back."}</p>
        </Reveal>

        <div className="favorite-grid">
          <Reveal className="favorite-card favorite-card--coral" delay={40}>
            <div className="favorite-number">01 / 03</div>
            <DrinkArt kind="berry" label="Berry Sunset hibiscus refresher" />
            <div className="favorite-copy"><span>HIBISCUS · BERRY · LIME</span><h3>{isArabic ? "غروب التوت" : "Berry Sunset"}</h3><Link href="/menu">{isArabic ? "شوف التفاصيل" : "Take a look"} <ArrowUpRight /></Link></div>
          </Reveal>
          <Reveal className="favorite-card favorite-card--mint" delay={120}>
            <div className="favorite-number">02 / 03</div>
            <DrinkArt kind="mojito" label="Garden Fizz cucumber and mint refresher" />
            <div className="favorite-copy"><span>CUCUMBER · MINT · APPLE</span><h3>{isArabic ? "فوار الحديقة" : "Garden Fizz"}</h3><Link href="/menu">{isArabic ? "شوف التفاصيل" : "Take a look"} <ArrowUpRight /></Link></div>
          </Reveal>
          <Reveal className="favorite-card favorite-card--cream" delay={200}>
            <div className="favorite-number">03 / 03</div>
            <DrinkArt kind="coffee" label="Cloud cold brew coffee" />
            <div className="favorite-copy"><span>COLD BREW · VANILLA · SEA SALT</span><h3>{isArabic ? "كولد برو كلاود" : "Cloud Cold Brew"}</h3><Link href="/menu">{isArabic ? "شوف التفاصيل" : "Take a look"} <ArrowUpRight /></Link></div>
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
          <span className="eyebrow">OUR WHOLE THING</span>
          <h2>{isArabic ? "الحياة أقصر من مشروب ممل." : "Life's too short for boring drinks."}</h2>
          <p>{isArabic ? "كل يوم بيعدي محتاج وقفة حلوة. عشان كده بنخلط كل كوب بإيدينا، بنقدمه بضحكة، وبنخلي الباقي بره الباب." : "Every day deserves at least one genuinely nice moment. So we make every cup by hand, serve it with a smile, and leave the stress at the door."}</p>
          <Link className="button button--light" href="/about">{isArabic ? "اقرأ القصة" : "Read our story"} <ArrowUpRight size={19} /></Link>
        </Reveal>
      </section>

      <section className="principles-section">
        <Reveal className="principles-heading">
          <span className="eyebrow">HOW WE DO THINGS</span>
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
          <h2>{isArabic ? "قريب منك، بعيد عن الروتين." : "Close by, far from boring."}</h2>
          <Link className="button button--dark" href="/branches">{isArabic ? "شوف الفروع" : "Find a branch"} <ArrowUpRight size={19} /></Link>
        </Reveal>
        <div className="location-scribble" aria-hidden="true">meet<br />me<br />here ↘</div>
      </section>
    </main>
  );
}
