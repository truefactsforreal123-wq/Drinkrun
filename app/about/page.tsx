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
        eyebrow="OUR STORY"
        eyebrowAr="قصتنا"
        title="We just wanted a nice place to hang out."
        titleAr="كنا عايزين مكان حلو نخرج فيه."
        copy="Turns out a lot of people wanted the same thing. So we built it."
        copyAr="طلع ناس كتير عايزة نفس الحاجة. فبنينا المكان ده."
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
          <span className="eyebrow">WHERE IT ALL STARTED</span>
          <h2>{isArabic ? "كل اللي كنا عايزينه مكان بسيط، بألوان حلوة، وطعم يفرح." : "All we wanted was somewhere simple, with nice colors and stuff that actually tastes good."}</h2>
          <p>{isArabic ? "الموضوع بدأ من فكرة صغيرة: ليه كل حاجة محتاجة تكون سريعة ومعقدة؟ حبينا نعمل العكس. مكان هادي، مشروبات بتتعمل بإيدينا، ووقت بيمشي على مهله." : "We were tired of everything being so fast and complicated. So we did the opposite. Quiet music, drinks made by hand, nobody rushing you out the door."}</p>
          <p>{isArabic ? "ودرينك رن بقى المحطة اللي بنقف فيها بين المشوار والتاني. مكان للي عايز ياخد نفسه، يتكلم براحته، ويشرب حاجة تستاهل." : "Drink Run became that little stop between things. A spot for anyone who wants to breathe, chat, and drink something worth the detour."}</p>
          <ArrowDownRight size={46} aria-hidden="true" />
        </Reveal>
      </section>

      <section className="values-section">
        <Reveal className="values-heading"><span className="eyebrow">WHAT WE CARE ABOUT</span><h2>{isArabic ? "حاجات مهمة عندنا." : "Stuff that matters here."}</h2></Reveal>
        <div className="value-grid">
          <Reveal className="value-card value-card--coral"><Sun size={34} weight="fill" /><span>01</span><h3>{isArabic ? "الفرحة في التفاصيل" : " Joy in the details"}</h3><p>{isArabic ? "لون الكوب، شكل التلج، طريقة التقديم. كل حاجة صغيرة بنهتم بيها علشان تفرق معاك." : "The cup color. The ice shape. How we hand it to you. The little things add up."}</p></Reveal>
          <Reveal className="value-card value-card--mint" delay={80}><Heart size={34} weight="fill" /><span>02</span><h3>{isArabic ? "المكونات الحقيقية" : "Real ingredients"}</h3><p>{isArabic ? "فاكهة بنقطعها إحنا. أعشاب طازة. كل حاجة بتتعمل الصبح وبتخلص بنهاية اليوم." : "We cut our own fruit. Fresh herbs. Everything gets prepped that morning, gone by closing."}</p></Reveal>
          <Reveal className="value-card value-card--plum" delay={160}><Smiley size={34} weight="fill" /><span>03</span><h3>{isArabic ? "مكان للكل" : "Room for everyone"}</h3><p>{isArabic ? "تيجي لوحدك؟ أهلاً. جاي مع صحابك؟ اتفضلوا. محتاج تشحن الموبايل وتقعد ساعة؟ عادي." : "Come alone? Cool. Brought six friends? Pull up chairs. Need to charge your phone and sit for an hour? Go ahead."}</p></Reveal>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-sun" aria-hidden="true" />
        <Reveal>
          <span>“</span>
          <blockquote>{isArabic ? "مش بنبيع مشروبات. إحنا بنقدم سبب صغير علشان يومك يبقى أحسن." : "We don't sell drinks. We sell a tiny excuse to feel better about your day."}</blockquote>
          <cite>— US, THE DRINK RUN CREW</cite>
        </Reveal>
      </section>
    </main>
  );
}
