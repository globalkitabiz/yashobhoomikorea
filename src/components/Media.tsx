"use client";

import { Newspaper, Camera, Video, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const newsItems = [
  {
    date: "2026.02.25",
    category: "Press Release",
    title: "2026 India-Korea Yashobhoomi Global Business Summit Announced",
    excerpt:
      "AI FUTURE Group, ZEE Entertainment, and IICC jointly announce the largest India-Korea business summit to be held in April 2026.",
  },
  {
    date: "2026.02.20",
    category: "News",
    title: "6 Strategic Sessions Confirmed for Yashobhoomi GBS",
    excerpt:
      "AIX, Semiconductor, Bio-Healthcare, Energy, Fleet & Defense — six industry sessions will drive bilateral economic cooperation.",
  },
  {
    date: "2026.02.15",
    category: "Notice",
    title: "Early Bird Registration Opens March 1st",
    excerpt:
      "Pre-registration for the summit will open on March 1st with significant early bird discounts for all participant categories.",
  },
];

export default function Media() {
  return (
    <section id="media" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">Media & News</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Latest updates and press coverage
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 뉴스 리스트 */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center border-b border-gray-100">
                  {["Press Releases", "Card News", "Notices"].map((tab, idx) => (
                    <button
                      key={tab}
                      type="button"
                      className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                        idx === 0
                          ? "text-[var(--navy)] border-b-2 border-[var(--gold)]"
                          : "text-[var(--gray-600)] hover:text-[var(--navy)]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="divide-y divide-gray-50">
                  {newsItems.map((news, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                      <a
                        href="#"
                        className="block p-6 hover:bg-[var(--gold)]/5 transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-[var(--gold)] bg-[var(--gold)]/10 px-2 py-0.5 rounded">
                            {news.category}
                          </span>
                          <span className="text-xs text-[var(--gray-600)]">{news.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors mb-1.5">
                          {news.title}
                        </h4>
                        <p className="text-sm text-[var(--gray-600)] line-clamp-2">
                          {news.excerpt}
                        </p>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <a
                    href="#"
                    className="text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-dark)] inline-flex items-center gap-1"
                  >
                    View All News <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 사이드바: 갤러리 & 다운로드 */}
          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-4">
                  Gallery
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="bg-[var(--gray-50)] rounded-xl p-6 text-center hover:bg-[var(--gold)]/10 transition-colors group"
                  >
                    <Camera className="w-8 h-8 text-[var(--gold)] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[var(--navy)]">Photo</span>
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--gray-50)] rounded-xl p-6 text-center hover:bg-[var(--gold)]/10 transition-colors group"
                  >
                    <Video className="w-8 h-8 text-[var(--gold)] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[var(--navy)]">Video</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[var(--navy)] uppercase tracking-wider mb-4">
                  Downloads
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "Event Brochure", size: "PDF, 5.2MB" },
                    { name: "Program Book", size: "PDF, 8.1MB" },
                    { name: "Sponsorship Deck", size: "PDF, 3.7MB" },
                  ].map((file) => (
                    <a
                      key={file.name}
                      href="#"
                      className="flex items-center gap-3 p-3 bg-[var(--gray-50)] rounded-lg hover:bg-[var(--gold)]/10 transition-colors"
                    >
                      <Newspaper className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[var(--navy)]">
                          {file.name}
                        </div>
                        <div className="text-xs text-[var(--gray-600)]">{file.size}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[var(--gray-600)]" />
                    </a>
                  ))}
                </div>
                <p className="text-xs text-[var(--gray-600)] mt-3 text-center">
                  Documents will be available soon
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
