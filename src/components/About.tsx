"use client";

import { Building2, Globe, Users, Target } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { icon: Globe, number: "2", label: t("Nations", "참여국"), desc: t("India & South Korea", "인도 & 대한민국") },
    { icon: Building2, number: "6", label: t("Strategic Sessions", "전략 세션"), desc: t("Industry-leading forums", "산업별 핵심 포럼") },
    { icon: Users, number: "500+", label: t("Expected Delegates", "참가 예상 인원"), desc: t("Government & Corporate leaders", "정부 및 기업 리더") },
    { icon: Target, number: "3", label: t("Days", "일간"), desc: t("Exhibition, Gala, Summit", "전시, 만찬, 서밋") },
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
      name: "ZEE Entertainment (ZEEL)",
      role: t("Co-Organizer (India)", "공동주최 (인도)"),
      desc: t(
        "India's largest media & entertainment conglomerate. Operating 50+ channels across 173 countries, reaching 1.3 billion viewers globally. Listed on BSE & NSE with 2024 revenue of ₹81.3B.",
        "인도 최대 미디어 & 엔터테인먼트 그룹. 173개국에서 50개 이상의 채널을 운영하며 전 세계 13억 시청자에게 도달합니다. BSE & NSE 상장, 2024년 매출 ₹813억."
      ),
      color: "from-purple-600 to-violet-700",
    },
    {
      name: "IICC Yashobhoomi",
      role: t("Venue Partner (India)", "행사장 (인도)"),
      desc: t(
        "India's premier convention center in Dwarka, New Delhi. Featuring 51,000m² exhibition space, 6,000-seat auditorium, and direct metro connectivity. India's largest MICE facility.",
        "뉴델리 드와르카에 위치한 인도 최고의 컨벤션 센터. 51,000m² 전시 공간, 6,000석 대강당, 지하철 직결. 인도 최대 MICE 시설."
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
              "The premier platform connecting Indian and Korean leaders across government, industry, and academia for strategic partnership in six key sectors.",
              "정부, 산업, 학계를 아우르는 인도-한국 리더들의 6대 핵심 분야 전략적 파트너십 플랫폼입니다."
            )}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
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
                      t("51,000 m² Exhibition Space", "51,000 m² 전시 공간"),
                      t("6,000-seat Grand Auditorium", "6,000석 대강당"),
                      t("15 Convention Rooms", "15개 컨벤션룸"),
                      t("Direct Metro Connectivity", "지하철 직결"),
                      t("5 Minutes from IGI Airport", "IGI 공항에서 5분"),
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <div className="w-2 h-2 bg-[var(--gold)] rounded-full flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 md:h-full min-h-[250px] bg-white/10 rounded-xl overflow-hidden border border-white/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8977!2d77.0239!3d28.5573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2cfc22e0e7%3A0x1c7e2c4eb5c4a8e!2sYashobhoomi%20-%20India%20International%20Convention%20%26%20Expo%20Centre!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                      width="100%" height="100%" style={{ border: 0, minHeight: 250 }}
                      allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title="Yashobhoomi IICC Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
