"use client";

import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Program() {
  const { t } = useLanguage();

  const sessions = [
    {
      id: "aix",
      number: "01",
      title: "AIX",
      subtitle: t("AI Transformation", "AI 전환"),
      icon: "🤖",
      color: "#6366F1",
      description: t(
        "India's exceptional IT talent pool meets Korea's AI innovation. Exploring Big Data market entry, Cloud infrastructure, Hindi LLM development, and youth-focused AI sports & entertainment applications with India's Youth & Sports Ministry.",
        "인도의 탁월한 IT 인재풀과 한국의 AI 혁신이 만납니다. 빅데이터 시장 진출, 클라우드 인프라, 힌디어 LLM 개발, 인도 청소년스포츠부 장관과 함께하는 청소년 스포츠·엔터 중심 AI 앱 기획을 논의합니다."
      ),
      companies: [
        t("LG U+", "LG U+"),
        t("Naver", "네이버"),
        "Samsung SDS",
      ],
    },
    {
      id: "chemical",
      number: "02",
      title: t("Chemical", "케미컬"),
      subtitle: t("Petrochemical & Materials", "석유화학 & 소재"),
      icon: "🧪",
      color: "#8B5CF6",
      description: t(
        "Amid global chemical industry downturn, leveraging India's Oil Minister connections and low raw material costs to compete against China in global markets. Strategic alliance for petrochemical supply chain optimization.",
        "글로벌 화학 업계 불황 속, 인도 석유부 장관과의 협력을 통해 낮은 원가를 확보하고 글로벌 시장에서 중국과 경쟁하는 전략적 파트너십을 구축합니다. 석유화학 공급망 최적화 방안을 논의합니다."
      ),
      companies: [
        t("LG Chem", "LG화학"),
        t("Lotte Chemical", "롯데케미컬"),
      ],
    },
    {
      id: "bio",
      number: "03",
      title: t("Bio-Healthcare", "바이오헬스케어"),
      subtitle: t("AI × Ayurveda", "AI × 아유르베다"),
      icon: "🧬",
      color: "#10B981",
      description: t(
        "Fusion of India's traditional Ayurveda medicine with Korea's cutting-edge AI diagnostics. Viscode immersive exhibition showcasing hologram, AR/VR technologies by ILM & Disney veteran team.",
        "인도 전통 아유르베다 의학과 한국의 최첨단 AI 진단 기술의 융합을 탐구합니다. ILM·디즈니 출신 팀이 이끄는 Viscode의 홀로그램·AR/VR 몰입형 전시를 통해 미래 의료 혁신을 선보입니다."
      ),
      companies: [
        t("Samsung Biologics", "삼성바이오로직스"),
        t("Celltrion", "셀트리온"),
      ],
    },
    {
      id: "energy",
      number: "04",
      title: t("Energy & BESS", "에너지 & BESS"),
      subtitle: t("Next-Gen Power", "차세대 에너지"),
      icon: "⚡",
      color: "#F59E0B",
      description: t(
        "Transitioning from thermal power to hydrogen energy. All-solid-state battery technology and battery energy storage systems to meet India's rapidly growing energy demand.",
        "화력발전에서 수소 에너지로의 전환을 주도합니다. 인도의 급증하는 에너지 수요에 대응하기 위한 전고체 배터리 기술과 배터리 에너지 저장 시스템(BESS) 협력 방안을 논의합니다."
      ),
      companies: [
        t("Doosan Enerbility", "두산에너빌리티"),
        "Samsung SDI",
      ],
    },
    {
      id: "shipbuilding",
      number: "05",
      title: t("Shipbuilding", "조선"),
      subtitle: t("LNG Carriers & Maritime", "LNG 운반선 & 해양"),
      icon: "🚢",
      color: "#3B82F6",
      description: t(
        "India's strategic interest in Korean LNG carrier construction excellence. Building on the MAGA partnership signed in 2024, exploring expanded cooperation in shipbuilding and maritime logistics.",
        "한국의 LNG 운반선 건조 기술력에 대한 인도의 전략적 관심을 바탕으로, 2024년 체결된 MAGA 파트너십을 확대하고 조선·해양 물류 분야의 협력 강화를 모색합니다."
      ),
      companies: [
        t("HD Hyundai", "HD현대"),
        t("Samho (HD Group)", "삼호중공업 (HD 계열)"),
      ],
    },
    {
      id: "smartinfra",
      number: "06",
      title: t("Smart Infrastructure", "스마트 인프라"),
      subtitle: t("Construction & Development", "건설 & 개발"),
      icon: "🏗️",
      color: "#EF4444",
      description: t(
        "Participating in India's ambitious economic development plans through smart infrastructure construction. Leveraging Korea's advanced construction technology for India's next-generation urban development projects.",
        "인도의 대규모 경제 개발 계획에 한국의 첨단 건설 기술로 참여합니다. 차세대 스마트시티, 교통 인프라, 산업단지 개발 등 인도 국가 인프라 프로젝트 협력 방안을 논의합니다."
      ),
      companies: [
        t("Hyundai E&C", "현대건설"),
        t("Samsung C&T", "삼성물산"),
      ],
    },
  ];

  const schedule = [
    {
      day: t("Day 1", "1일차"),
      date: t("April 27 (Mon)", "4월 27일 (월)"),
      title: t("Future Tech Exhibition & Welcome", "미래기술 전시회 & 환영 행사"),
      events: [
        { time: "09:00 - 18:00", name: t("Future Tech Exhibition", "미래기술 전시회"), desc: t("AI × Bio Immersive Exhibition (Viscode)", "AI × 바이오 몰입형 전시 (Viscode)") },
        { time: "10:00 - 12:00", name: t("Opening Ceremony", "개회식"), desc: t("VIP Welcome & Keynote Addresses", "VIP 환영사 & 기조 연설") },
        { time: "14:00 - 17:00", name: t("B2B Business Matching", "B2B 비즈니스 매칭"), desc: t("Pre-arranged bilateral meetings", "사전 매칭된 양자 미팅") },
        { time: "19:00 - 21:00", name: t("State Gala Dinner", "공식 만찬"), desc: t("Hosted by Government Dignitaries", "양국 정부 인사 주최") },
      ],
    },
    {
      day: t("Day 2", "2일차"),
      date: t("April 28 (Tue)", "4월 28일 (화)"),
      title: t("Strategic Forum Sessions", "전략 포럼 세션"),
      events: [
        { time: "09:00 - 10:30", name: t("Session 01: AIX", "세션 01: AIX (AI 전환)"), desc: t("AI, Big Data, Cloud & Hindi LLM", "AI, 빅데이터, 클라우드 & 힌디어 LLM") },
        { time: "11:00 - 12:30", name: t("Session 02: Chemical", "세션 02: 케미컬"), desc: t("Petrochemical Alliance vs China", "석유화학 동맹 — 중국 대항 전략") },
        { time: "14:00 - 15:30", name: t("Session 03: Bio-Healthcare", "세션 03: 바이오헬스케어"), desc: t("AI × Ayurveda & Viscode Exhibition", "AI × 아유르베다 & Viscode 전시") },
        { time: "16:00 - 17:30", name: t("Session 04: Energy & BESS", "세션 04: 에너지 & BESS"), desc: t("Hydrogen, Solid-State Battery & Storage", "수소, 전고체 배터리 & 에너지 저장") },
      ],
    },
    {
      day: t("Day 3", "3일차"),
      date: t("April 29 (Wed)", "4월 29일 (수)"),
      title: t("Industry Forums & Closing", "산업 포럼 & 폐회"),
      events: [
        { time: "09:00 - 10:30", name: t("Session 05: Shipbuilding", "세션 05: 조선"), desc: t("LNG Carriers & MAGA Partnership", "LNG 운반선 & MAGA 파트너십") },
        { time: "11:00 - 12:30", name: t("Session 06: Smart Infra", "세션 06: 스마트 인프라"), desc: t("Construction & Urban Development", "건설 & 도시 개발") },
        { time: "14:00 - 16:00", name: t("MOU Signing Ceremony", "MOU 체결식"), desc: t("Partnership Agreements", "분야별 파트너십 협약 체결") },
        { time: "16:00 - 17:00", name: t("Closing Ceremony", "폐회식"), desc: t("Summary & Future Roadmap", "성과 요약 & 향후 로드맵 발표") },
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

        {/* 일정 개요 */}
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

        {/* 6대 전략 세션 */}
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
