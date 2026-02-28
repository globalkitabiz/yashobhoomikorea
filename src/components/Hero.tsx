"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";
import Countdown from "./Countdown";

const heroImages = [
  "/images/hero/modi-korea-ceo.jpg",
  "/images/hero/modi-lee-summit.jpg",
  "/images/hero/yashobhoomi.jpg",
  "/images/hero/modi-korea-summit.jpg",
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28">
      {/* Background image slideshow */}
      {heroImages.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: idx === currentImage ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={idx === 0}
          />
        </div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)]/85 via-[var(--navy)]/80 to-[var(--navy-light)]/85" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--saffron)]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2 mb-8">
          <span className="text-[var(--gold)] text-xs sm:text-sm font-medium">IICC × ZEE TV × AI FUTURE Group</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-white/70 mb-2">2026</span>
          <span className="block text-[var(--gold)]">{t("K20 India-Korea", "K20 인도-한국")}</span>
          <span className="block">{t("Yashobhoomi", "야쇼부미")}</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-light mt-2">
            {t("Business Summit", "비즈니스 서밋")}
          </span>
        </h1>

        <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mt-4 mb-2 italic">
          {t(SITE_CONFIG.theme, "혁신의 이전: 지속 가능한 한-인도 경제 회랑 구축")}
        </p>
        <p className="text-[var(--gold)]/80 text-xs sm:text-sm font-semibold mb-6">
          {t(SITE_CONFIG.subTheme, "AIX: 공동 번영을 위한 새로운 프론티어")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 mb-10">
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-lg font-medium">{t(SITE_CONFIG.eventDateDisplay, "2026년 4월 27일 - 29일")}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg font-medium">{t(SITE_CONFIG.venue, "야쇼부미 (IICC), 뉴델리, 인도")}</span>
          </div>
        </div>

        <div className="flex justify-center mb-10"><Countdown /></div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pre-registration" className="btn-gold text-lg px-8 py-4">{t("Pre-Register Now", "사전등록 하기")}</a>
          <a href="#program" className="btn-outline text-lg px-8 py-4 !border-white/30 !text-white hover:!bg-white/10">{t("View Program", "프로그램 보기")}</a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            t("AI+Semiconductor", "AI+반도체"), t("Defense", "방산"), t("Mobility", "모빌리티"),
            t("Energy", "에너지"), t("Chemical", "케미컬"), t("Entertainment", "엔터테인먼트"),
            t("Veterans & Rehabilitation", "참전용사 재활"),
          ].map((tag) => (
            <span key={tag} className="px-4 py-1.5 text-xs font-medium text-white/70 border border-white/15 rounded-full backdrop-blur-sm">{tag}</span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
