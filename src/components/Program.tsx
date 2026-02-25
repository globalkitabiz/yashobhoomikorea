"use client";

import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Program() {
  const { t } = useLanguage();

  const sessions = [
    { id: "aix", number: "01", title: "AIX", subtitle: t("AI Transformation", "AI 전환"), icon: "🤖", color: "#6366F1",
      description: t("India's exceptional IT talent pool meets Korea's AI innovation. Exploring Big Data, Cloud, Hindi LLM, and youth-focused AI applications.", "인도의 뛰어난 IT 인재풀과 한국의 AI 혁신이 만납니다. 빅데이터, 클라우드, 힌디어 LLM, 청소년 AI 앱을 탐구합니다."),
      companies: ["LG U+", "Naver", "Samsung SDS"] },
    { id: "semiconductor", number: "02", title: t("Semiconductor", "반도체"), subtitle: t("Chips & Fabrication", "칩 & 제조"), icon: "💎", color: "#8B5CF6",
      description: t("Strategic partnership in semiconductor manufacturing, packaging, and supply chain between India's growing market and Korea's technology leadership.", "인도의 성장 시장과 한국의 기술 리더십 간 반도체 제조, 패키징, 공급망 전략적 파트너십."),
      companies: ["Samsung Electronics", "SK Hynix"] },
    { id: "bio", number: "03", title: t("Bio-Healthcare", "바이오헬스케어"), subtitle: t("AI × Ayurveda", "AI × 아유르베다"), icon: "🧬", color: "#10B981",
      description: t("Fusion of traditional Ayurveda medicine with cutting-edge AI diagnostics. Viscode immersive exhibition showcasing hologram and AR/VR technologies.", "전통 아유르베다 의학과 최첨단 AI 진단의 융합. 홀로그램 및 AR/VR 기술을 선보이는 Viscode 몰입형 전시."),
      companies: ["Samsung Biologics", "Celltrion"] },
    { id: "energy", number: "04", title: t("Energy & BESS", "에너지 & BESS"), subtitle: t("Next-Gen Power", "차세대 에너지"), icon: "⚡", color: "#F59E0B",
      description: t("From thermal power to hydrogen energy. All-solid-state battery technology and battery energy storage systems for India's growing demand.", "화력발전에서 수소 에너지로. 인도의 증가하는 수요를 위한 전고체 배터리 기술과 에너지 저장 시스템."),
      companies: [t("Doosan Enerbility", "두산에너빌리티"), "Samsung SDI"] },
    { id: "fleet", number: "05", title: t("Fleet & Logistics", "선박/해양"), subtitle: t("Shipbuilding & LNG", "조선 & LNG"), icon: "🚢", color: "#3B82F6",
      description: t("LNG carrier construction and maritime logistics. India's strategic interest in Korean shipbuilding excellence and MAGA partnership.", "LNG 운반선 건조 및 해상 물류. 한국 조선 기술에 대한 인도의 전략적 관심과 파트너십."),
      companies: [t("HD Hyundai", "HD현대"), t("Samsung Heavy Industries", "삼성중공업")] },
    { id: "defense", number: "06", title: t("Defense", "국방/안보"), subtitle: t("Security & Aerospace", "안보 & 항공우주"), icon: "🛡️", color: "#EF4444",
      description: t("Defense technology cooperation and smart infrastructure development aligned with India's economic development plans.", "인도의 경제 개발 계획에 맞춘 국방 기술 협력 및 스마트 인프라 구축."),
      companies: [t("Hanwha Aerospace", "한화에어로스페이스"), "LIG Nex1"] },
  ];

  const schedule = [
    {
      day: t("Day 1", "1일차"), date: t("April 27 (Mon)", "4월 27일 (월)"), title: t("Future Tech Exhibition & Welcome", "미래기술 전시회 & 환영 행사"),
      events: [
        { time: "09:00 - 18:00", name: t("Future Tech Exhibition", "미래기술 전시회"), desc: t("AI × Bio Immersive Exhibition (Viscode)", "AI × 바이오 몰입형 전시 (Viscode)") },
        { time: "10:00 - 12:00", name: t("Opening Ceremony", "개회식"), desc: t("VIP Welcome & Keynote Addresses", "VIP 환영사 & 기조 연설") },
        { time: "14:00 - 17:00", name: t("B2B Business Matching", "B2B 비즈니스 매칭"), desc: t("Pre-arranged bilateral meetings", "사전 매칭 양자 미팅") },
        { time: "19:00 - 21:00", name: t("State Gala Dinner", "공식 만찬"), desc: t("Hosted by Government Dignitaries", "양국 정부 인사 주최") },
      ],
    },
    {
      day: t("Day 2", "2일차"), date: t("April 28 (Tue)", "4월 28일 (화)"), title: t("Strategic Forum Sessions", "전략 포럼 세션"),
      events: [
        { time: "09:00 - 10:30", name: t("Session 01: AIX", "세션 01: AIX"), desc: t("AI Transformation & Digital Innovation", "AI 전환 & 디지털 혁신") },
        { time: "11:00 - 12:30", name: t("Session 02: Semiconductor", "세션 02: 반도체"), desc: t("Chips, Fabrication & Supply Chain", "칩, 제조 & 공급망") },
        { time: "14:00 - 15:30", name: t("Session 03: Bio-Healthcare", "세션 03: 바이오헬스"), desc: t("AI × Ayurveda & Medical Innovation", "AI × 아유르베다 & 의료 혁신") },
        { time: "16:00 - 17:30", name: t("Session 04: Energy & BESS", "세션 04: 에너지"), desc: t("Hydrogen, Solid-State Battery & Storage", "수소, 전고체 배터리 & 저장") },
      ],
    },
    {
      day: t("Day 3", "3일차"), date: t("April 29 (Wed)", "4월 29일 (수)"), title: t("Industry Forums & Closing", "산업 포럼 & 폐회"),
      events: [
        { time: "09:00 - 10:30", name: t("Session 05: Fleet & Logistics", "세션 05: 선박/해양"), desc: t("Shipbuilding, LNG & Maritime", "조선, LNG & 해양") },
        { time: "11:00 - 12:30", name: t("Session 06: Defense", "세션 06: 국방"), desc: t("Security & Smart Infrastructure", "안보 & 스마트 인프라") },
        { time: "14:00 - 16:00", name: t("MOU Signing Ceremony", "MOU 체결식"), desc: t("Partnership Agreements", "파트너십 협약") },
        { time: "16:00 - 17:00", name: t("Closing Ceremony", "폐회식"), desc: t("Summary & Future Roadmap", "요약 & 향후 로드맵") },
      ],
    },
  ];

  return (
    <section id="program" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Program", "프로그램")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("3 days of exhibitions, strategic forums, and high-level networking", "3일간의 전시회, 전략 포럼, 하이레벨 네트워킹")}</p>
        </ScrollReveal>

        <div id="schedule" className="grid md:grid-cols-3 gap-6 mb-20 scroll-mt-24">
          {schedule.map((day, idx) => (
            <ScrollReveal key={day.day} delay={idx * 150}>
              <div className="card h-full">
                <div className="p-4 text-white text-center" style={{ background: `linear-gradient(135deg, ${idx === 0 ? "#1B2A4A, #2A3F6A" : idx === 1 ? "#C8963E, #A67B2E" : "#0F1A30, #1B2A4A"})` }}>
                  <div className="text-sm font-medium opacity-80">{day.day}</div>
                  <div className="text-lg font-bold">{day.date}</div>
                  <div className="text-xs mt-1 opacity-70">{day.title}</div>
                </div>
                <div className="p-5">
                  {day.events.map((event) => (
                    <div key={event.name} className="py-3 border-b border-gray-100 last:border-0">
                      <div className="text-xs text-[var(--gold)] font-semibold mb-1">{event.time}</div>
                      <div className="text-sm font-semibold text-[var(--navy)]">{event.name}</div>
                      <div className="text-xs text-[var(--gray-600)] mt-0.5">{event.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div id="sessions" className="scroll-mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-3">{t("6 Strategic Sessions", "6대 전략 세션")}</h3>
            <p className="text-center text-[var(--gray-600)] mb-10">{t("Key industries driving India-Korea economic cooperation", "인도-한국 경제 협력을 이끄는 핵심 산업")}</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, idx) => (
              <ScrollReveal key={session.id} delay={idx * 100}>
                <div className="card group cursor-pointer h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: session.color + "15", color: session.color }}>{session.icon}</div>
                      <div>
                        <div className="text-xs font-bold text-[var(--gray-600)]">{t("SESSION", "세션")} {session.number}</div>
                        <div className="text-lg font-bold text-[var(--navy)]">{session.title}</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-[var(--gold)] mb-2">{session.subtitle}</div>
                    <p className="text-sm text-[var(--gray-600)] leading-relaxed mb-4">{session.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {session.companies.map((company) => (
                        <span key={company} className="text-[10px] px-2 py-1 bg-[var(--gray-100)] text-[var(--gray-600)] rounded-full">{company}</span>
                      ))}
                    </div>
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
