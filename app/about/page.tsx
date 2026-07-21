"use client";

import { ArrowDownRight, Heart, Smiley, Sun } from "@phosphor-icons/react";
import { DrinkArt } from "@/components/drink-art";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export default function AboutPage() {
  const { isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        eyebrow="OUR LITTLE ESCAPE"
        eyebrowAr="هروبنا الصغير"
        title="Born for the good days."
        titleAr="اتعملنا للأيام الحلوة."
        copy="A neighborhood drink stop inspired by long summers, spontaneous plans, and the people who make both better."
        copyAr="محطة مشروبات في قلب الحي، مستوحاة من صيف طويل، خطط عفوية، والناس اللي بيخلوا كل حاجة أحلى."
      >
        <div className="about-hero-art" aria-hidden="true">
          <div className="paper-sun"><Sun weight="fill" /></div>
          <div className="paper-note">made to<br />make your<br />day ↗</div>
        </div>
      </PageHero>

      <section className="story-section">
        <Reveal className="story-poster">
          <div className="story-poster-bg" aria-hidden="true"><DrinkArt kind="citrus" /></div>
          <span>EST. 2024</span>
          <h2>DRINK<br />RUN</h2>
          <p>LET&apos;S ENJOY IT<br />AND HAVE SOME FUN!</p>
        </Reveal>
        <Reveal className="story-copy" delay={120}>
          <span className="eyebrow">HOW IT STARTED</span>
          <h2>{isArabic ? "بدأت بفكرة بسيطة: نعمل مكان يحسسك إنك في إجازة." : "It started with one simple idea: make everyday feel a bit more like holiday."}</h2>
          <p>{isArabic ? "وسط أيام سريعة وروتين طويل، حبينا نعمل مكان مختلف. مكان ألوانه مبهجة، نكهاته صريحة، والوقت فيه يمشي أبطأ شوية." : "Between fast days and familiar routines, we wanted to make a place that felt different. Brighter colors, clearer flavors, and a pace that lets you stay a little longer."}</p>
          <p>{isArabic ? "درينك رن هو توقفك الصغير بين هنا وهناك. معمول للمشاوير العفوية، الصحاب، والمشروبات اللي تستاهل صورة قبل أول رشفة." : "Drink Run is your small stop between here and there. Built for spontaneous detours, familiar faces, and drinks worth photographing before the first sip."}</p>
          <ArrowDownRight size={46} aria-hidden="true" />
        </Reveal>
      </section>

      <section className="values-section">
        <Reveal className="values-heading"><span className="eyebrow">WHAT MATTERS HERE</span><h2>{isArabic ? "حاجات نؤمن بيها." : "Things we believe in."}</h2></Reveal>
        <div className="value-grid">
          <Reveal className="value-card value-card--coral"><Sun size={34} weight="fill" /><span>01</span><h3>{isArabic ? "البهجة في التفاصيل" : "Joy in the details"}</h3><p>{isArabic ? "من أول لون الكوب لآخر مكعب تلج، كل حاجة معمولة علشان تفرّحك." : "From cup color to the last ice cube, every detail is there to lift the mood."}</p></Reveal>
          <Reveal className="value-card value-card--mint" delay={80}><Heart size={34} weight="fill" /><span>02</span><h3>{isArabic ? "مكونات حقيقية" : "The real stuff"}</h3><p>{isArabic ? "فاكهة حقيقية، أعشاب طازة، وخلطات بنحضرها بإيدينا كل يوم." : "Real fruit, fresh herbs, and house mixes prepared by our crew every day."}</p></Reveal>
          <Reveal className="value-card value-card--plum" delay={160}><Smiley size={34} weight="fill" /><span>03</span><h3>{isArabic ? "الكل مرحب بيه" : "Room for everyone"}</h3><p>{isArabic ? "مقعد ليك، مكان لصحابك، وابتسامة جاهزة أول ما تدخل." : "A seat for you, room for your friends, and a smile ready when you arrive."}</p></Reveal>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-sun" aria-hidden="true" />
        <Reveal>
          <span>“</span>
          <blockquote>{isArabic ? "إحنا مش بنبيع مشروبات وبس. إحنا بنعمل سبب صغير يخلي يومك أحلى." : "We’re not just serving drinks. We’re making one small reason for your day to feel better."}</blockquote>
          <cite>— THE DRINK RUN CREW</cite>
        </Reveal>
      </section>
    </main>
  );
}
