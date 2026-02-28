"use client";

import { useLanguage } from "@/lib/i18n";
import ScrollReveal from "./ScrollReveal";

export default function Program() {
  const { t } = useLanguage();

  const sessions = [
    {
      id: "ai-semiconductor",
      number: "01",
      title: t("AI + Semiconductor", "AI+반도체"),
      subtitle: t("AI Chip & Fabrication", "AI 칩 & 제조"),
      icon: "🤖",
      color: "#6366F1",
      description: t(
        "Combining Korea's semiconductor manufacturing capabilities with India's software/design talent. Next-gen AI semiconductor ecosystem, edge AI architectures for autonomous vehicles, and HBM device research.",
        "한국의 반도체 제조 역량과 인도의 소프트웨어/설계 인력을 결합한 차세대 AI 반도체 생태계 구축. 자율주행 엣지 AI 아키텍처, HBM 소자 연구를 논의합니다."
      ),
      companies: [
        t("Samsung Electronics", "삼성전자"),
        t("SK Hynix", "SK하이닉스"),
        "Naver",
      ],
    },
    {
      id: "defense",
      number: "02",
      title: t("Defense", "방산"),
      subtitle: t("K-Defense & MRO", "K-방산 & MRO"),
      icon: "🛡️",
      color: "#8B5CF6",
      description: t(
        "Digital transformation of K-Defense MRO centers in India. Algorithmic ethics in military AI, real-time big data analytics for ISR, and AI-powered unmanned combat systems (MUM-T) cooperation.",
        "인도 현지 K-방산 MRO 센터의 디지털 전환. 군사 AI 알고리즘 윤리, ISR용 실시간 빅데이터 분석, AI 기반 유무인 복합 전투 체계(MUM-T) 협력을 논의합니다."
      ),
      companies: [
        t("Hanwha Aerospace", "한화에어로스페이스"),
        "LIG Nex1",
      ],
    },
    {
      id: "mobility",
      number: "03",
      title: t("Mobility", "모빌리티"),
      subtitle: t("AI Green Mobility", "AI 그린 모빌리티"),
      icon: "🚗",
      color: "#10B981",
      description: t(
        "Hydrogen mobility demonstration zones at Yashobhoomi (IICC). Autonomous electric vehicle architectures, EV infrastructure integrated with smart grids, and lightweight materials science innovations.",
        "야쇼부미(IICC) 내 한-인도 수소 모빌리티 실증 구역 운영. 자율주행 전기차 아키텍처, 스마트 그리드 통합 EV 인프라, 경량화 재료과학 혁신을 논의합니다."
      ),
      companies: [
        t("Hyundai Motor", "현대자동차"),
        t("Kia", "기아"),
        "SK ecoplant",
      ],
    },
    {
      id: "energy",
      number: "04",
      title: t("Energy", "에너지"),
      subtitle: t("H2 & BESS", "수소 & BESS"),
      icon: "⚡",
      color: "#F59E0B",
      description: t(
        "India's carbon neutrality through Korea's hydrogen (H2) infrastructure and EV value chain. All-solid-state battery technology, carbon capture (CCUS), and high-efficiency energy storage systems.",
        "한국의 수소(H2) 인프라 및 전기차 밸류체인을 통한 인도의 탄소중립 목표 달성. 전고체 배터리 기술, 탄소 포집(CCUS), 고효율 에너지 저장 시스템을 논의합니다."
      ),
      companies: [
        t("Doosan Enerbility", "두산에너빌리티"),
        "Samsung SDI",
        "POSCO",
      ],
    },
    {
      id: "chemical",
      number: "05",
      title: t("Chemical", "케미컬"),
      subtitle: t("Petrochemical & Materials", "석유화학 & 소재"),
      icon: "🧪",
      color: "#3B82F6",
      description: t(
        "Past, present, and future of the chemical industry. High-purity chemicals for semiconductor processes, next-gen battery electrolytes and separators, eco-friendly lightweight plastics, and India REACH compliance.",
        "케미컬 산업의 과거, 현재 그리고 미래. 반도체 공정용 고순도 케미컬, 차세대 전지용 전해질·분리막, 친환경 경량 플라스틱, 인도 REACH 대응을 논의합니다."
      ),
      companies: [
        t("LG Chem", "LG화학"),
        t("Lotte Chemical", "롯데케미컬"),
      ],
    },
    {
      id: "entertainment",
      number: "06",
      title: t("Entertainment", "엔터테인먼트"),
      subtitle: t("K-Culture & OTT", "K-Culture & OTT"),
      icon: "🎬",
      color: "#EF4444",
      description: t(
        "ZEE TV 'K-Culture & Tech' broadcast channel launch and global OTT collaboration. WION global news live sessions, MVP interview programs, and content co-production models with Korea's entertainment industry.",
        "ZEE TV 전용 'K-Culture & Tech' 방송 채널 개설 및 글로벌 OTT 협력. WION 글로벌 뉴스 라이브 세션, MVP 인터뷰 프로그램, 한국 엔터 산업과의 콘텐츠 공동 제작 모델을 논의합니다."
      ),
      companies: [
        "ZEE TV",
        "CJ ENM",
        "HYBE",
      ],
    },
    {
      id: "veterans-rehabilitation",
      number: "07",
      title: t("AX for War Veterans & the Physically Challenged", "참전용사 & 장애인 재활"),
      subtitle: t("Appropriate Medical Tech & Prosthetics", "적정 의료기술 & 보조기기"),
      icon: "🦾",
      color: "#7C3AED",
      description: t(
        "Korea-India rehabilitation cooperation based on KOICA's Jaipur Foot Foundation partnership. 3D-printed custom prosthetics and wheelchairs, training disabled professionals, and providing free prosthetics worldwide.",
        "KOICA의 자이푸르 풋 재단 파트너십 기반 한-인도 재활 협력. 3D 프린팅 맞춤형 의족·휠체어 제공, 장애인 전문인력 양성, 전 세계 무상 보조기기 보급. 전쟁 참전 용사들과 장애인들을 위한 재활, 예술 활동 장려 및 지원."
      ),
      companies: [
        "KOICA",
        "Jaipur Foot Foundation",
        t("Ministry of Patriots & Veterans", "국가보훈부"),
      ],
    },
  ];

  const schedule = [
    {
      day: t("Day 1", "1일차"),
      date: t("April 21 (Mon)", "4월 21일 (월)"),
      title: t("Vision Sharing & VIP Networking", "비전 공유 & 고위급 네트워킹"),
      events: [
        { time: "09:00 - 10:30", name: t("Opening Ceremony & Keynotes", "개막식 및 기조연설"), desc: t("Heads of state & vice-premier keynote addresses — Main Auditorium", "양국 정상/부총리 기조연설 — 메인 오디토리움") },
        { time: "10:30 - 12:00", name: t("Session I & II Joint Forum", "세션 I·II 통합 토론"), desc: t("AI+Semiconductor & Defense joint discussion", "AI+반도체 & 방산 통합 세션") },
        { time: "12:00 - 13:30", name: t("Ministerial Luncheon", "장관급 동석 오찬"), desc: t("\"Future of Indian Industry\" — Grand Ballroom", "\"인도 산업의 미래\" — 그랜드 볼룸") },
        { time: "14:00 - 17:30", name: t("Tech Conference & B2B Matching", "기술 컨퍼런스 & B2B 매칭"), desc: t("Industry-specific sessions — Exhibition Halls", "산업별 세션 — 전시 홀") },
        { time: "18:30 - 21:00", name: t("Yashobhoomi Night (VIP Dinner)", "야쇼부미 나이트 (VIP 만찬)"), desc: t("Session Chair exclusive dinner — Grand Ballroom", "좌장 기업 전용 만찬 — 그랜드 볼룸") },
      ],
    },
    {
      day: t("Day 2", "2일차"),
      date: t("April 22 (Tue)", "4월 22일 (화)"),
      title: t("Working Sessions & Policy Proposals", "실무 세션 & 정책 건의"),
      events: [
        { time: "09:00 - 11:00", name: t("Session III & IV Breakout", "세션 III·IV 분과 회의"), desc: t("Mobility & Energy — Conference Rooms 1, 2", "모빌리티 & 에너지 — 컨퍼런스룸 1, 2") },
        { time: "11:00 - 13:00", name: t("Session V, VI, VII Breakout", "세션 V·VI·VII 분과 회의"), desc: t("Chemical, Entertainment, Bio-medical — Conference Rooms 3-5", "케미컬, 엔터, 바이오 — 컨퍼런스룸 3-5") },
        { time: "13:00 - 14:30", name: t("Korea-India CEO Roundtable", "한-인도 CEO 라운드테이블"), desc: t("A-Tier and above — VIP Lounge", "A등급 이상 — VIP 라운지") },
        { time: "15:00 - 17:00", name: t("G2B Closed-door Meeting", "G2B 비공개 회의"), desc: t("Policy proposals & regulatory consultations", "규제 개선 건의서 전달") },
        { time: "17:00 - 18:30", name: t("LOI & MOU Signing Ceremony", "LOI/MOU 합동 서명식"), desc: t("Investment agreements — Grand Foyer", "투자 합의 — 그랜드 포이어") },
      ],
    },
    {
      day: t("Day 3", "3일차"),
      date: t("April 23 (Wed)", "4월 23일 (수)"),
      title: t("Site Visits & Follow-up", "현장 방문 & 후속 계획"),
      events: [
        { time: t("AM", "오전"), name: t("Industry Cluster Visit", "산업 클러스터 시찰"), desc: t("Noida Samsung Factory, Greater Noida Medical Device Park", "노이다 삼성공장, 그레이터 노이다 의료기기 공원") },
        { time: t("PM", "오후"), name: t("Press Conference & Next Summit Announcement", "성과 발표 & 차기 써밋 선포"), desc: t("Summit outcomes report & Seoul 2027 announcement", "써밋 성과 발표 + 차기 서울 개최 공식 선포") },
      ],
    },
  ];

  // 특별세션 (SS) 목록
  const specialSessions = [
    { code: "SS-1", name: t("Co-branded Semiconductor Launch Project", "인도 설계-한국 제조 공동 브랜드 반도체 런칭"), people: "50" },
    { code: "SS-2", name: t("AI Drug Discovery Joint Data Bank", "AI 기반 신약 후보 물질 발굴 공동 데이터뱅크"), people: "100" },
    { code: "SS-3", name: t("Metaverse Smart City Simulation", "메타버스 인도 신도시 사전 시뮬레이션"), people: "100" },
    { code: "SS-4", name: t("K-Defense MRO Digital Transformation", "K-방산 MRO 센터 디지털 전환"), people: "50" },
    { code: "SS-5", name: t("ZEE TV 'K-Culture & Tech' Channel", "ZEE TV 'K-Culture & Tech' 방송 채널"), people: "50" },
    { code: "SS-6", name: t("Korea-India H2 Mobility Zone", "한-인도 수소 모빌리티 실증 구역"), people: "200" },
    { code: "SS-7", name: t("Business Law Support Center Launch", "한-인도 비즈니스 법률 지원 센터 발족"), people: "200" },
  ];

  return (
    <section id="program" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Program", "프로그램")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("3 days of exhibitions, strategic forums, and high-level networking with 5,000+ delegates", "5,000명 이상 참가, 3일간의 전시회, 전략 포럼, 하이레벨 네트워킹")}</p>
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

        {/* 7대 전략 세션 */}
        <div id="sessions" className="scroll-mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-3">{t("7 Strategic Sessions", "7대 전략 세션")}</h3>
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

        {/* 특별세션 */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-3">{t("Special Sessions", "특별세션")}</h3>
            <p className="text-center text-[var(--gray-600)] mb-8">{t("In-depth sessions on strategic bilateral projects", "전략적 양자 프로젝트 심층 세션")}</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialSessions.map((ss, idx) => (
              <ScrollReveal key={ss.code} delay={idx * 80}>
                <div className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-white bg-[var(--navy)] px-2 py-1 rounded">{ss.code}</span>
                    <span className="text-[10px] text-[var(--gray-600)]">{ss.people}{t(" delegates", "명")}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--navy)]">{ss.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
