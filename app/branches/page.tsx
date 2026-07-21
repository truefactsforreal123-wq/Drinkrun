"use client";

import { ArrowUpRight, Clock, MapPin, NavigationArrow, Phone } from "@phosphor-icons/react";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { branches } from "@/data/content";

export default function BranchesPage() {
  const { isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        eyebrow="COME SAY HI"
        eyebrowAr="تعالى سلم"
        title="We've got a seat for you."
        titleAr="لك مكان مستني."
        copy="Three spots around town. All the same good stuff, just different views."
        copyAr="تلت فروع حوالين البلد. نفس المشروبات الحلوة، كل فرع بشخصيته."
      >
        <div className="branch-hero-map" aria-hidden="true">
          <span className="map-line map-line--one" />
          <span className="map-line map-line--two" />
          <MapPin weight="fill" />
          <em>you are<br />almost here!</em>
        </div>
      </PageHero>

      <section className="branches-section">
        <div className="branch-list">
          {branches.map((branch, index) => (
            <Reveal className={`branch-card branch-card--${branch.color}`} key={branch.id} delay={index * 70}>
              <div className="branch-index">{branch.id}</div>
              <div className="branch-main">
                <span>{isArabic ? branch.areaAr : branch.area}</span>
                <h2>{isArabic ? branch.nameAr : branch.name}</h2>
                <p><MapPin size={19} weight="fill" /> {isArabic ? branch.addressAr : branch.address}</p>
              </div>
              <div className="branch-details">
                <p><Clock size={19} /> {isArabic ? branch.hoursAr : branch.hours}</p>
                <a href={`tel:${branch.phone.replace(/\s/g, "")}`}><Phone size={19} /> {branch.phone}</a>
                <a className="direction-link" href="https://maps.google.com" target="_blank" rel="noreferrer">{isArabic ? "الطريق من هنا" : "Get directions"} <ArrowUpRight size={18} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="map-section">
        <div className="map-canvas" aria-label="Stylized map showing Drink Run branch locations">
          <div className="road road-a" aria-hidden="true" />
          <div className="road road-b" aria-hidden="true" />
          <div className="road road-c" aria-hidden="true" />
          <span className="map-water" aria-hidden="true" />
          {branches.map((branch, index) => (
            <div className={`map-pin map-pin--${index + 1}`} key={branch.id}>
              <NavigationArrow size={24} weight="fill" />
              <span>{isArabic ? branch.nameAr : branch.name}</span>
            </div>
          ))}
        </div>
        <Reveal className="map-copy">
          <span className="eyebrow">YOUR LOCAL</span>
          <h2>{isArabic ? "نفس المزاج الحلو، في كل مكان." : "Same vibe, different neighborhood."}</h2>
          <p>{isArabic ? "كل فرع مختلف شوية — في الديكور، في الطلة — بس المشروبات الطازة والناس اللي بترحب بيك هتلاقيهم في أي فرع تروحه." : "Each branch has its own look and feel, but the fresh drinks and the people who actually care — that stuff travels."}</p>
        </Reveal>
      </section>
    </main>
  );
}
