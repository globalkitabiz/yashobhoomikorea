"use client";

import { useLanguage } from "@/lib/i18n";
import { Newspaper, Camera, Video, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Media() {
  const { t } = useLanguage();

  const newsItems = [
    { date: "2026.02.25", category: t("Press Release", "보도자료"),
      title: t("2026 India-Korea Yashobhoomi Global Business Summit Announced", "2026 인도-한국 야쇼부미 글로벌 비즈니스 서밋 공식 발표"),
      excerpt: t("AI FUTURE Group, ZEE Entertainment, and IICC jointly announce the largest India-Korea business summit to be held in April 2026.", "AI FUTURE 그룹, ZEE 엔터테인먼트, IICC가 2026년 4월 개최 예정인 최대 규모 인도-한국 비즈니스 서밋을 공동 발표했습니다.") },
    { date: "2026.02.20", category: t("News", "뉴스"),
      title: t("6 Strategic Sessions Confirmed for Yashobhoomi GBS", "야쇼부미 GBS 6대 전략 세션 확정"),
      excerpt: t("AIX, Semiconductor, Bio-Healthcare, Energy, Fleet & Defense — six industry sessions will drive bilateral economic cooperation.", "AIX, 반도체, 바이오헬스, 에너지, 선박, 국방 — 6개 산업 세션이 양국 경제 협력을 이끕니다.") },
    { date: "2026.02.15", category: t("Notice", "공지"),
      title: t("Early Bird Registration Opens March 1st", "조기등록 3월 1일 개시"),
      excerpt: t("Pre-registration for the summit will open on March 1st with significant early bird discounts for all participant categories.", "서밋 사전등록이 3월 1일부터 시작되며, 모든 참가 유형에 대해 조기등록 할인이 제공됩니다.") },
  ];

  return (
    <section id="media" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Media & News", "미디어 & 뉴스")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("Latest updates and press coverage", "최신 소식 및 보도 자료")}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center border-b border-gray-100">
                  {[t("Press Releases", "보도자료"), t("Card News", "카드뉴스"), t("Notices", "공지사항")].map((tab, idx) => (
                    <button key={tab} type="button" className={`flex-1 py-4 text-sm font-semibold transition-colors ${idx === 0 ? "text-[var(--navy)] border-b-2 border-[var(--gold)]" : "text-[var(--gray-600)] hover:text-[var(--navy)]"}`}>{tab}</button>
                  ))}
                </div>
                <div className="divide-y divide-gray-50">
                  {newsItems.map((news, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                      <a href="#" className="block p-6 hover:bg-[var(--gold)]/5 transition-colors group">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-[var(--gold)] bg-[var(--gold)]/10 px-2 py-0.5 rounded">{news.category}</span>
                          <span className="text-xs text-[var(--gray-600)]">{news.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors mb-1.5">{news.title}</h4>
                        <p className="text-sm text-[var(--gray-600)] line-clamp-2">{news.excerpt}</p>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <a href="#" className="text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-dark)] inline-flex items-center gap-1">
                    {t("View All News", "전체 뉴스 보기")} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-4">{t("Gallery", "갤러리")}</h4>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="bg-[var(--gray-50)] rounded-xl p-6 text-center hover:bg-[var(--gold)]/10 transition-colors group">
                    <Camera className="w-8 h-8 text-[var(--gold)] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[var(--navy)]">{t("Photo", "사진")}</span>
                  </a>
                  <a href="#" className="bg-[var(--gray-50)] rounded-xl p-6 text-center hover:bg-[var(--gold)]/10 transition-colors group">
                    <Video className="w-8 h-8 text-[var(--gold)] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[var(--navy)]">{t("Video", "영상")}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-4">{t("Downloads", "다운로드")}</h4>
                <div className="space-y-3">
                  {[
                    { name: t("Event Brochure", "행사 브로슈어"), size: "PDF, 5.2MB" },
                    { name: t("Program Book", "프로그램 북"), size: "PDF, 8.1MB" },
                    { name: t("Sponsorship Deck", "후원 안내서"), size: "PDF, 3.7MB" },
                  ].map((file) => (
                    <a key={file.name} href="#" className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded-lg hover:bg-[var(--gold)]/10 transition-colors">
                      <Newspaper className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[var(--navy)]">{file.name}</div>
                        <div className="text-xs text-[var(--gray-600)]">{file.size}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[var(--gray-600)]" />
                    </a>
                  ))}
                </div>
                <p className="text-xs text-[var(--gray-600)] mt-3 text-center">{t("Documents will be available soon", "자료는 곧 제공됩니다")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
