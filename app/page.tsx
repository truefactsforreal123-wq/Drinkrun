"use client";

import { ArrowDown, ArrowUpRight, MapPin, Sparkle } from "@phosphor-icons/react";
import Link from "next/link";
import { DrinkArt } from "@/components/drink-art";
import { useLanguage } from "@/components/language-provider";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";

const principles = [
  { number: "01", en: "Made fresh", ar: "طازج دايمًا", copy: "We cut the fruit. We squeeze the juice. That's it.", copyAr: "بنقطع الفاكهة بإيدينا. بنعصرها. مش بنجيب حاجة جاهزة." },
  { number: "02", en: "Good mood only", ar: "مزاج حلو وبس", copy: "You walk in stressed, you leave smiling. House rule.", copyAr: "تدخل متدايق، تخرج مبتسم. ده النظام هنا." },
  { number: "03", en: "Stay a while", ar: "اقعد براحتك", copy: "Nobody rushes you here. Bring your laptop, bring your gossip, whatever.", copyAr: "محدش بيجري وراك. هات لابتوبك، هات صحابك، اقعد زي ما تحب." },
];

export default function HomePage() {
  const { isArabic } = useLanguage();

  return (
    <main id="main-content">
      <section className="home-hero" aria-label={isArabic ? "مقدمة درينك رن" : "Drink Run introduction"}>
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb--one" />
          <span className="hero-orb hero-orb--two" />
          <span className="hero-doodle hero-doodle--one">✦</span>
          <span className="hero-doodle hero-doodle--two">~</span>
        </div>
        <div className="hero-copy">
          <span className="eyebrow">{isArabic ? "طازج كل يوم" : "FRESH EVERY DAY"}</span>
          <h1>
            {isArabic ? (
              <>مشروبات تحلي<br /><em>اليوم.</em></>
            ) : (
              <>Easy days.<br /><em>Bold drinks.</em></>
            )}
          </h1>
          <p>{isArabic ? "يعني باختصار: مكان رايق، مشروبات بتتعمل قدامك، ووقتك اللي انت عايزه." : "The stop between your busy day and your actual life. Good drinks, a spot that doesn't rush you, zero pretension."}</p>
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
          <DrinkArt kind="berry" className="hero-drink hero-drink--berry" label={isArabic ? "غروب التوت" : "Berry Sunset"} />
          <DrinkArt kind="mango" className="hero-drink hero-drink--mango" label={isArabic ? "الساعة الذهبية" : "Golden Hour"} />
          <span className="stamp" aria-hidden="true">{isArabic ? "أوقات" : "GOOD"}<br />{isArabic ? "حلوة" : "TIMES"}<br />{isArabic ? "وبس" : "ONLY"}</span>
        </div>

        <a href="#favorites" className="scroll-note">
          <span>{isArabic ? "انزل تحت" : "Scroll for a sip"}</span>
          <ArrowDown size={18} />
        </a>
      </section>

      <section className="marquee-band" aria-label={isArabic ? "رسالة العلامة التجارية" : "Brand message"}>
        <div className="marquee-track" aria-hidden="true">
          {isArabic ? (
            <><span>طازج ومعصور</span><i>✺</i><span>أيام أحلى جاية</span><i>✺</i><span>اشرب وافرح</span><i>✺</i><span>طازج ومعصور</span><i>✺</i><span>أيام أحلى جاية</span><i>✺</i><span>اشرب وافرح</span><i>✺</i></>
          ) : (
            <><span>FRESHLY SQUEEZED</span><i>✺</i><span>GOOD DAYS AHEAD</span><i>✺</i><span>DRINK HAPPY</span><i>✺</i><span>FRESHLY SQUEEZED</span><i>✺</i><span>GOOD DAYS AHEAD</span><i>✺</i><span>DRINK HAPPY</span><i>✺</i></>
          )}
        </div>
      </section>

      <section className="favorites-section" id="favorites">
        <Reveal className="section-intro split-intro">
          <div>
            <span className="eyebrow">{isArabic ? "الناس بتطلب دي كتير" : "PEOPLE ORDER THESE A LOT"}</span>
            <h2>{isArabic ? <>الناس بتحب<br /><em>إيه؟</em></> : <>What people<br /><em>actually order.</em></>}</h2>
          </div>
          <p>{isArabic ? "الحاجات اللي بنعملها كتير كل يوم. مشروبات بسيطة، طعمها حلو، والناس دايمًا تطلبها تاني." : "The stuff we make the most. Nothing fancy on paper — just drinks that taste right and keep people coming back."}</p>
        </Reveal>

        <div className="favorite-grid">
          <Reveal className="favorite-card favorite-card--coral" delay={40}>
            <div className="favorite-number">01 / 03</div>
            <DrinkArt kind="berry" label={isArabic ? "غروب التوت" : "Berry Sunset"} />
            <div className="favorite-copy"><span>HIBISCUS · BERRY · LIME</span><h3>{isArabic ? "غروب التوت" : "Berry Sunset"}</h3><Link href="/menu">{isArabic ? "شوف التفاصيل" : "Take a look"} <ArrowUpRight /></Link></div>
          </Reveal>
          <Reveal className="favorite-card favorite-card--mint" delay={120}>
            <div className="favorite-number">02 / 03</div>
            <DrinkArt kind="mojito" label={isArabic ? "فوار الحديقة" : "Garden Fizz"} />
            <div className="favorite-copy"><span>CUCUMBER · MINT · APPLE</span><h3>{isArabic ? "فوار الحديقة" : "Garden Fizz"}</h3><Link href="/menu">{isArabic ? "شوف التفاصيل" : "Take a look"} <ArrowUpRight /></Link></div>
          </Reveal>
          <Reveal className="favorite-card favorite-card--cream" delay={200}>
            <div className="favorite-number">03 / 03</div>
            <DrinkArt kind="coffee" label={isArabic ? "كولد برو كلاود" : "Cloud Cold Brew"} />
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
          <span className="eyebrow">{isArabic ? "فكرتنا كلها" : "OUR WHOLE THING"}</span>
          <h2>{isArabic ? "مش بنعمل مشروبات وخلاص." : "Life's too short for boring drinks."}</h2>
          <p>{isArabic ? "إحنا شغالين على إن كل واحد يدخل من الباب يلاقي حاجة حلوة مستنياه. مشروب يتشرب على مهله، ابتسامة من اللي واقفين، ويوم يبقى أخف شوية." : "Every day deserves at least one genuinely nice moment. So we make every cup by hand, serve it with a smile, and leave the stress at the door."}</p>
          <Link className="button button--light" href="/about">{isArabic ? "اعرف أكتر عننا" : "Read our story"} <ArrowUpRight size={19} /></Link>
        </Reveal>
      </section>

      <section className="principles-section">
        <Reveal className="principles-heading">
          <span className="eyebrow">{isArabic ? "إزاي بنشتغل" : "HOW WE DO THINGS"}</span>
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
          <span className="eyebrow">{isArabic ? "مشوارك الجاي" : "YOUR NEXT DRINK RUN"}</span>
          <h2>{isArabic ? "قريب منك، بعيد عن الزحمة." : "Close by, far from boring."}</h2>
          <Link className="button button--dark" href="/branches">{isArabic ? "شوف أقرب فرع" : "Find a branch"} <ArrowUpRight size={19} /></Link>
        </Reveal>
        <div className="location-scribble" aria-hidden="true">{isArabic ? "قابلني" : "meet"}<br />{isArabic ? "هنا" : "me"}<br />{isArabic ? "↙" : "here ↘"}</div>
      </section>
    </main>
  );
}
