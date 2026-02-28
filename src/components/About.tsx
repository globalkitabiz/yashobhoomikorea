"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Building2, Globe, Users, Target } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

const VENUE_IMAGES = Array.from({ length: 30 }, (_, i) =>
  `/images/venue/venue-${String(i).padStart(2, "0")}.jpg`
);

function VenueSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % VENUE_IMAGES.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + VENUE_IMAGES.length) % VENUE_IMAGES.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden border border-white/10 group">
      {VENUE_IMAGES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Yashobhoomi IICC ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${idx === current ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={idx === 0}
        />
      ))}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Previous">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Next">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {VENUE_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${idx === current ? "bg-[var(--gold)] w-4" : "bg-white/40"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-3 right-3 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full">
        {current + 1} / {VENUE_IMAGES.length}
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { icon: Globe, number: "2", label: t("Nations", "참여국"), desc: t("India & South Korea", "인도 & 대한민국") },
    { icon: Building2, number: "7", label: t("Strategic Sessions", "전략 세션"), desc: t("Industry-leading forums", "산업별 핵심 포럼") },
    { icon: Users, number: "5,000+", label: t("Expected Delegates", "참가 예상 인원"), desc: t("Government & Corporate leaders", "정부 및 기업 리더") },
    { icon: Target, number: "3", label: t("Days", "일간"), desc: t("Exhibition, Forums, Cultural Tour", "전시, 포럼, 문화탐방") },
  ];

  const objectives = [
    t("Strengthen practical cooperation networks for Korea-India diplomatic and economic sectors", "한-인도 수교 기념 및 의회·경제계 실질적 협력 네트워크 강화"),
    t("Secure exclusive mandates for Korean companies in India's AI & high-tech markets", "AI 및 하이테크 분야 국내 기업의 인도 시장 독점 mandate 확보 및 진출 지원"),
    t("Establish a bridgehead for South & West Asian market entry through Korea-India economic partnership", "인도와 한국간의 경제 파트너십을 증진하고 서남아시아 시장 진출 교두보 마련"),
    t("Realize strategic policy proposals and corporate support amid global supply chain restructuring", "글로벌 공급망 재편에 따른 전략적 정책 제안 및 기업 지원 실현"),
  ];

  const strategies = [
    { title: t("AI Business Re-engineering", "AI 기반 비즈니스 재엔지니어링"), desc: t("Presenting Korea's AI & semiconductor technology leadership as keynote to expand 'K-Tech' brand in India", "한국의 앞선 AI 및 반도체 기술력을 키노트로 제시하여 인도 시장 내 'K-Tech' 브랜드 확산") },
    { title: t("Global Media (ZEE TV)", "글로벌 미디어 (ZEE TV)"), desc: t("Leveraging India's largest media group for 24-hour news (WION) broadcast coverage of the entire summit", "인도 최대 미디어 그룹의 채널 활용, 서밋 전 과정을 인도 전역 및 24시간 뉴스(WION)로 송출") },
    { title: t("Two-Track Governance", "투트랙 거버넌스"), desc: t("High-level channel between parliamentary speakers and FICCI-KCCI private economic cooperation", "인도·한국 국회의장 및 의원친선협회 고위급 채널과 FICCI·KCCI 민간 경제 협력 결합") },
  ];

  const organizers = [
    {
      name: "AI FUTURE Group",
      role: t("Lead Organizer (Korea)", "주최 (한국)"),
      desc: t(
        "A global AI business agency headquartered in Seoul, specializing in AI transformation consulting, international business development, and cross-border partnership facilitation between Korea and emerging markets.",
        "서울에 본사를 둔 글로벌 AI 비즈니스 에이전시로, AI 전환 컨설팅, 국제 비즈니스 개발, 한국과 신흥시장 간 파트너십 구축을 전문으로 합니다."
      ),
      color: "from-blue-600 to-indigo-700",
    },
    {
      name: "ZEE TV Group",
      role: t("Co-Organizer (India)", "공동주최 (인도)"),
      desc: t(
        "India's largest media & entertainment conglomerate. Operating 50+ channels across 173 countries, reaching 1.3 billion viewers globally. Including 24-hour English news channel WION.",
        "인도 최대 미디어 & 엔터테인먼트 그룹. 173개국에서 50개 이상의 채널을 운영하며 전 세계 13억 시청자에게 도달합니다. 24시간 영어 뉴스 채널 WION 포함."
      ),
      color: "from-purple-600 to-violet-700",
    },
    {
      name: "IICC Yashobhoomi",
      role: t("Venue Partner (India)", "행사장 (인도)"),
      desc: t(
        "India's premier convention center in Dwarka, New Delhi. Featuring 54,400m² exhibition space, 6,000-seat auditorium, 2,400-seat Grand Ballroom, 13 conference rooms, and direct metro connectivity.",
        "뉴델리 드와르카에 위치한 인도 최고의 컨벤션 센터. 54,400m² 전시 공간, 6,000석 오디토리움, 2,400석 그랜드 볼룸, 13개 회의실, 지하철 직결."
      ),
      color: "from-amber-600 to-orange-700",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("About the Summit", "행사 소개")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle max-w-3xl mx-auto">
            {t(
              "The premier K20 platform connecting Indian and Korean leaders across government, industry, and academia for strategic partnership in seven key sectors with 5,000+ delegates.",
              "정부, 산업, 학계를 아우르는 5,000명 이상의 인도-한국 리더들이 참가하는 7대 핵심 분야 전략적 파트너십 K20 플랫폼입니다."
            )}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <ScrollReveal key={item.label} delay={idx * 100}>
              <div className="text-center p-6 rounded-xl bg-[var(--gray-50)] hover:bg-white hover:shadow-lg transition-all duration-300">
                <item.icon className="w-8 h-8 text-[var(--gold)] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[var(--navy)] mb-1">{item.number}</div>
                <div className="text-sm font-semibold text-[var(--navy)] mb-1">{item.label}</div>
                <div className="text-xs text-[var(--gray-600)]">{item.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 목적 */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] rounded-2xl p-8 md:p-10 mb-16">
            <h3 className="text-xl font-bold text-white mb-6">{t("Summit Objectives", "행사 목적")}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-white/80 leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 특화 전략 */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-8">{t("Key Strategies", "특화 전략")}</h3>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {strategies.map((s, idx) => (
            <ScrollReveal key={s.title} delay={idx * 100}>
              <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all h-full">
                <h4 className="text-base font-bold text-[var(--navy)] mb-3">{s.title}</h4>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div id="organizers" className="scroll-mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-10">{t("Organizers", "주최 기관")}</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {organizers.map((org, idx) => (
              <ScrollReveal key={org.name} delay={idx * 150}>
                <div className="card group h-full">
                  <div className={`h-2 bg-gradient-to-r ${org.color}`} />
                  <div className="p-6">
                    <div className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">{org.role}</div>
                    <h4 className="text-xl font-bold text-[var(--navy)] mb-3">{org.name}</h4>
                    <p className="text-sm text-[var(--gray-600)] leading-relaxed">{org.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div id="venue" className="mt-20 scroll-mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-10">
              {t("Venue — Yashobhoomi (IICC)", "행사장 — 야쇼부미 (IICC)")}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-[var(--gold)] mb-4">
                    {t("India International Convention & Expo Centre", "인도 국제 컨벤션 & 엑스포 센터")}
                  </h4>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {t(
                      "Located in Dwarka, New Delhi, Yashobhoomi is India's largest state-of-the-art convention center, inaugurated by PM Narendra Modi. Connected directly to the Dwarka Sector 25 Metro Station.",
                      "뉴델리 드와르카에 위치한 야쇼부미는 나렌드라 모디 총리가 개관한 인도 최대의 최첨단 컨벤션 센터입니다. 드와르카 섹터 25 지하철역과 직결됩니다."
                    )}
                  </p>
                  <ul className="space-y-3">
                    {[
                      t("54,400 m² Exhibition Space", "54,400 m² 전시 공간"),
                      t("6,000-seat Main Auditorium (divisible 4,000+2,000)", "6,000석 메인 오디토리움 (4,000+2,000 분리 가능)"),
                      t("2,400-seat Grand Ballroom (6F)", "2,400석 그랜드 볼룸 (6층)"),
                      t("13 Conference Rooms", "13개 회의실"),
                      t("Direct Metro Connectivity", "지하철 직결"),
                      t("5 Minutes from IGI Airport", "IGI 공항에서 5분"),
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <div className="w-2 h-2 bg-[var(--gold)] rounded-full flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <VenueSlideshow />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
