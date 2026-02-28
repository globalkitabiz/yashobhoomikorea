"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Check, CreditCard, Building, FileText, ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Registration() {
  const { t, lang } = useLanguage();
  const [openTier, setOpenTier] = useState<number | null>(null);

  const tiers = [
    {
      tier: t("Session Chair", "세션 의장"),
      price: "$1,000,000",
      color: "from-amber-500 to-yellow-600",
      borderColor: "border-amber-400",
      benefits: [
        t("Head table seating with vice-minister-level officials from India & Korea", "인도·한국 소속 장차관급 관료와 헤드 테이블 배정"),
        t("Agenda-setting authority for the relevant industry session", "해당 산업 세션 의제 설정권"),
        t("Exclusive G2B/B2G closed-door meeting organization", "독점 G2B/B2G 비공개 회의 주관"),
        t("Priority #1 policy recommendation in the official summit white paper", "써밋 공식 백서 내 정책 제언 1순위 반영"),
      ],
    },
    {
      tier: t("A-Tier · Strategic Follower", "A등급 · Strategic Follower"),
      price: "$500,000",
      color: "from-purple-500 to-violet-600",
      borderColor: "border-purple-400",
      benefits: [
        t("Full-time access to vice-minister networking lounge", "장차관 네트워킹 라운지 상시 출입권"),
        t("Key panelist participation in each session", "세션별 핵심 토론자 참여"),
        t("Priority 1:1 investment matching with Indian conglomerate CEOs", "인도 대기업 CEO와의 1:1 투자 매칭 우선권"),
        t("Opportunity to submit regulatory improvement proposals", "규제 개선 건의안 제출 기회 제공"),
      ],
    },
    {
      tier: t("B-Tier · Business Partner", "B등급 · Business Partner"),
      price: "$300,000",
      color: "from-[var(--gold)] to-[var(--gold-dark)]",
      borderColor: "border-[var(--gold)]",
      benefits: [
        t("Official B2B matching program participation", "공식 B2B 매칭 프로그램 참여"),
        t("Technical seminar with director-general-level officials from both nations", "양국 주요 실무 국장급과의 기술 세미나 참석"),
        t("VIP booth allocation at IICC exhibition hall", "IICC 전시장 내 VIP 부스 배정"),
        t("Corporate IR video on summit main screen at all times", "기업 IR 영상 써밋 메인 스크린 상시 노출"),
      ],
    },
    {
      tier: t("C-Tier · Growth Member", "C등급 · Growth Member"),
      price: "$100,000",
      color: "from-gray-400 to-gray-500",
      borderColor: "border-gray-400",
      benefits: [
        t("Session attendance and networking event participation", "세션 참관 및 네트워킹 이벤트 참여"),
        t("India local industry cluster visit opportunity", "인도 현지 산업 클러스터 방문 기회"),
        t("Listed in summit participating companies directory", "써밋 참여 기업 명부 등재"),
        t("Consulting support for India government PLI scheme application", "향후 인도 정부 지원 PLI 신청 시 컨설팅 지원"),
      ],
    },
  ];

  const steps = [
    { icon: FileText, step: t("STEP 1", "1단계"), title: t("Online Registration", "온라인 등록"),
      desc: t("Fill out the pre-registration form with your details and select your participation tier.", "사전등록 양식을 작성하고 참여 등급을 선택하세요.") },
    { icon: CreditCard, step: t("STEP 2", "2단계"), title: t("Payment", "결제"),
      desc: t("Complete payment via credit card (Visa/MC/AMEX), bank transfer, or PayPal.", "신용카드(Visa/MC/AMEX), 계좌이체, 또는 PayPal로 결제를 완료하세요.") },
    { icon: Check, step: t("STEP 3", "3단계"), title: t("Confirmation", "확인"),
      desc: t("Receive your confirmation letter and event badge via email within 3 business days.", "영업일 기준 3일 이내 확인서와 행사 배지를 이메일로 받으세요.") },
  ];

  return (
    <section id="registration" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Registration", "등록안내")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("Secure your place at the premier India-Korea business summit", "인도-한국 프리미어 비즈니스 서밋에 자리를 확보하세요")}</p>
        </ScrollReveal>

        {/* 참여 등급 */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
            <div className="bg-[var(--navy)] text-white p-6">
              <h3 className="text-xl font-bold">{t("Participation Tiers & Benefits", "참여 등급 및 혜택")}</h3>
              <p className="text-white/60 text-sm mt-1">{t("Click each tier to view participation fee", "각 등급을 클릭하면 참가비를 확인할 수 있습니다")}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {tiers.map((item, idx) => {
                const isOpen = openTier === idx;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenTier(isOpen ? null : idx)}
                      className="w-full text-left p-5 md:p-6 hover:bg-[var(--gold)]/5 transition-colors flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-lg shrink-0`}>
                        {idx === 0 ? "S" : String.fromCharCode(65 + idx - 1)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-bold text-[var(--navy)]">{item.tier}</div>
                        <div className="text-sm text-[var(--gray-600)] mt-1 line-clamp-1">{item.benefits[0]}</div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[var(--gray-600)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className={`px-5 md:px-6 pb-6 border-l-4 ${item.borderColor} ml-5 md:ml-6`}>
                        <div className="mb-4">
                          <span className="text-xs font-semibold text-[var(--gray-600)] uppercase tracking-wider">{t("Participation Fee", "참가비")}</span>
                          <div className="text-2xl font-bold text-[var(--navy)] mt-1">{item.price} <span className="text-sm font-normal text-[var(--gray-600)]">USD</span></div>
                        </div>
                        <div className="text-xs font-semibold text-[var(--gray-600)] uppercase tracking-wider mb-2">{t("Key Benefits", "주요 혜택")}</div>
                        <ul className="space-y-2">
                          {item.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-[var(--gray-600)]">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                            </li>
                          ))}
                        </ul>
                        <a href="#contact" className="inline-block mt-4 text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors">
                          {t("Inquire about this tier →", "이 등급 문의하기 →")}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* 등록 절차 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((item, idx) => (
            <ScrollReveal key={item.step} delay={idx * 150}>
              <div className="bg-white rounded-xl p-6 text-center h-full">
                <div className="w-14 h-14 mx-auto mb-4 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[var(--gold)]" />
                </div>
                <div className="text-xs font-bold text-[var(--gold)] mb-1">{item.step}</div>
                <h4 className="font-bold text-[var(--navy)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--gray-600)]">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 결제 수단 */}
        <ScrollReveal>
          <div className="bg-white rounded-xl p-6 flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm font-semibold text-[var(--navy)]">{t("Accepted Payment:", "결제 수단:")}</span>
            <div className="flex items-center gap-2"><Building className="w-4 h-4 text-[var(--gray-600)]" /><span className="text-sm text-[var(--gray-600)]">{t("Bank Transfer (KRW / INR / USD)", "계좌이체 (KRW / INR / USD)")}</span></div>
            <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[var(--gray-600)]" /><span className="text-sm text-[var(--gray-600)]">Visa / MasterCard / AMEX</span></div>
            <span className="text-sm text-[var(--gray-600)]">PayPal</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
