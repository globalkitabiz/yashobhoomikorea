"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Speakers() {
  const { t } = useLanguage();

  const speakers = [
    { name: "Narendra Modi", title: t("Prime Minister", "총리"), org: t("Government of India", "인도 정부"), image: "/images/speakers/modi.jpg" },
    { name: "Om Birla", title: t("Speaker of Lok Sabha", "인도 국회의장"), org: t("Parliament of India", "인도 국회"), image: "" },
    { name: t("Woo Won-shik", "우원식"), title: t("Speaker of National Assembly", "국회의장"), org: t("National Assembly, ROK", "대한민국 국회"), image: "" },
    { name: "Punit Goenka", title: "CEO", org: "ZEE Entertainment", image: "/images/speakers/goenka.jpg" },
    { name: t("Chey Tae-won", "최태원"), title: t("Chairman", "회장"), org: "SK Group", image: "" },
    { name: "TBA", title: t("To Be Announced", "미정"), org: t("Coming Soon", "추후 공개"), image: "" },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Speakers & Leaders", "연사 & 리더")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("World-class leaders from government, industry, and academia", "정부, 산업, 학계의 세계적 리더")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {speakers.map((speaker, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] flex items-center justify-center overflow-hidden border-3 border-[var(--gold)]/20 group-hover:border-[var(--gold)] transition-all duration-300 group-hover:scale-105 relative">
                  {speaker.image ? (
                    <Image src={speaker.image} alt={speaker.name} fill className="object-cover" sizes="112px" />
                  ) : (
                    <User className="w-12 h-12 text-white/40" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-[var(--navy)]">{speaker.name}</h4>
                <p className="text-xs text-[var(--gold)] font-medium mt-0.5">{speaker.title}</p>
                <p className="text-xs text-[var(--gray-600)] mt-0.5">{speaker.org}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">{t("Leaders Speak", "리더스 스피크")}</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              {t(
                "VIP messages and keynote addresses from heads of state, ministers, and global industry leaders will be announced soon.",
                "국가 정상, 장관, 글로벌 산업 리더의 VIP 메시지와 기조 연설이 곧 발표됩니다."
              )}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 text-sm">
              <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
              {t("Speaker Lineup Coming Soon", "연사 라인업 공개 예정")}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
