"use client";

import { useLanguage } from "@/lib/i18n";
import { Check, CreditCard, Building, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Registration() {
  const { t } = useLanguage();

  const fees = [
    { type: t("General Participant", "일반 참가자"), early: "USD 500", regular: "USD 700", onsite: "USD 900" },
    { type: t("Corporate Delegate", "기업 대표단"), early: "USD 800", regular: "USD 1,000", onsite: "USD 1,200" },
    { type: t("VIP / Speaker", "VIP / 연사"), early: t("Invited", "초청"), regular: t("Invited", "초청"), onsite: t("Invited", "초청") },
    { type: t("Government / Public", "정부 / 공공기관"), early: "USD 300", regular: "USD 500", onsite: "USD 600" },
    { type: t("Student / Academic", "학생 / 학술"), early: "USD 200", regular: "USD 300", onsite: "USD 400" },
    { type: t("Exhibition Booth", "전시 부스"), early: "USD 3,000", regular: "USD 4,000", onsite: "USD 5,000" },
  ];

  const sponsorships = [
    { tier: "S", name: t("Title Sponsor", "타이틀 스폰서"), price: "USD 100,000", color: "from-amber-500 to-yellow-600",
      benefits: [
        t("Logo on all materials & main stage", "모든 자료 및 메인 무대 로고 노출"),
        t("Opening keynote slot (10 min)", "개회 기조 연설 (10분)"),
        t("20 VIP invitations", "VIP 초청 20명"),
        t("Premium booth (6×6m)", "프리미엄 부스 (6×6m)"),
        t("Exclusive media coverage", "독점 미디어 보도"),
      ] },
    { tier: "A", name: t("Diamond", "다이아몬드"), price: "USD 50,000", color: "from-purple-500 to-violet-600",
      benefits: [
        t("Logo on main banners", "메인 배너 로고 노출"),
        t("Panel session slot", "패널 세션 참여"),
        t("10 VIP invitations", "VIP 초청 10명"),
        t("Premium booth (4×4m)", "프리미엄 부스 (4×4m)"),
        t("Media coverage", "미디어 보도"),
      ] },
    { tier: "B", name: t("Gold", "골드"), price: "USD 30,000", color: "from-[var(--gold)] to-[var(--gold-dark)]",
      benefits: [
        t("Logo on program book", "프로그램북 로고 노출"),
        t("5 delegate invitations", "대표단 초청 5명"),
        t("Standard booth (3×3m)", "일반 부스 (3×3m)"),
        t("B2B matching priority", "B2B 매칭 우선권"),
      ] },
    { tier: "C", name: t("Silver", "실버"), price: "USD 10,000", color: "from-gray-400 to-gray-500",
      benefits: [
        t("Logo on partner wall", "파트너 월 로고 노출"),
        t("3 delegate invitations", "대표단 초청 3명"),
        t("B2B matching access", "B2B 매칭 참여"),
      ] },
  ];

  const steps = [
    { icon: FileText, step: t("STEP 1", "1단계"), title: t("Online Registration", "온라인 등록"),
      desc: t("Fill out the pre-registration form with your details and select your participation type.", "사전등록 양식을 작성하고 참가 유형을 선택하세요.") },
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

        {/* 참가비 테이블 */}
        <ScrollReveal delay={100}>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
            <div className="bg-[var(--navy)] text-white p-6">
              <h3 className="text-xl font-bold">{t("Registration Fees", "참가비 안내")}</h3>
              <p className="text-white/60 text-sm mt-1">{t("All fees in USD. Includes summit access, materials, and meals.", "모든 참가비는 USD 기준. 서밋 참가, 자료, 식사 포함.")}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--gray-50)]">
                    <th className="text-left p-4 text-sm font-semibold text-[var(--navy)]">{t("Type", "유형")}</th>
                    <th className="text-center p-4 text-sm font-semibold text-green-600">{t("Early Bird", "조기등록")}<br /><span className="text-xs font-normal text-[var(--gray-600)]">~ Mar 15</span></th>
                    <th className="text-center p-4 text-sm font-semibold text-[var(--gold)]">{t("Regular", "일반등록")}<br /><span className="text-xs font-normal text-[var(--gray-600)]">~ Apr 15</span></th>
                    <th className="text-center p-4 text-sm font-semibold text-red-500">{t("On-site", "현장등록")}<br /><span className="text-xs font-normal text-[var(--gray-600)]">Apr 27~</span></th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee) => (
                    <tr key={fee.type} className="border-t border-gray-100 hover:bg-[var(--gold)]/5 transition-colors">
                      <td className="p-4 text-sm font-semibold text-[var(--navy)]">{fee.type}</td>
                      <td className="text-center p-4 text-sm font-medium text-green-600">{fee.early}</td>
                      <td className="text-center p-4 text-sm font-medium">{fee.regular}</td>
                      <td className="text-center p-4 text-sm font-medium text-red-500">{fee.onsite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
          <div className="bg-white rounded-xl p-6 mb-12 flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm font-semibold text-[var(--navy)]">{t("Accepted Payment:", "결제 수단:")}</span>
            <div className="flex items-center gap-2"><Building className="w-4 h-4 text-[var(--gray-600)]" /><span className="text-sm text-[var(--gray-600)]">{t("Bank Transfer (KRW / INR / USD)", "계좌이체 (KRW / INR / USD)")}</span></div>
            <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[var(--gray-600)]" /><span className="text-sm text-[var(--gray-600)]">Visa / MasterCard / AMEX</span></div>
            <span className="text-sm text-[var(--gray-600)]">PayPal</span>
          </div>
        </ScrollReveal>

        {/* 스폰서십 */}
        <div id="sponsorship" className="mt-20 scroll-mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-3">{t("Sponsorship Packages", "후원 패키지")}</h3>
            <p className="text-center text-[var(--gray-600)] mb-10">{t("Partner with us and gain unparalleled visibility at the summit", "서밋에서 비할 데 없는 가시성을 확보하세요")}</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorships.map((pkg, idx) => (
              <ScrollReveal key={pkg.tier} delay={idx * 100}>
                <div className="card h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${pkg.color} p-4 text-white text-center`}>
                    <div className="text-3xl font-black">{pkg.tier}</div>
                    <div className="text-sm font-bold">{pkg.name}</div>
                    <div className="text-lg font-bold mt-1">{pkg.price}</div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {pkg.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[var(--gray-600)]">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="block mt-4 text-center text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors">
                      {t("Inquire →", "문의하기 →")}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
