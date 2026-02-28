// 사이트 기본 정보
export const SITE_CONFIG = {
  name: "K20 India-Korea Business Summit Yashobhoomi 2026",
  shortName: "YKBS 2026",
  domain: "yashobhoomikoreabusinesssummit.org",
  eventDate: "2026-04-21",
  eventEndDate: "2026-04-23",
  eventDateDisplay: "April 21-23, 2026",
  venue: "Yashobhoomi (IICC), New Delhi, India",
  theme: "Transferring Innovations: Building a Sustainable Korea-India Economic Corridor",
  subTheme: "AIX: The New Frontier for Shared Prosperity",
  description:
    "The premier K20 India-Korea business summit connecting 5,000+ leaders across AI+Semiconductor, Defense, Mobility, Energy, Chemical, Entertainment & Veterans Rehabilitation sectors.",
};

// 네비게이션 메뉴
export const NAV_ITEMS = [
  {
    label: "Home",
    labelKo: "홈",
    href: "/",
  },
  {
    label: "About",
    labelKo: "행사소개",
    href: "#about",
    children: [
      { label: "Overview", labelKo: "행사 개요", href: "#about" },
      { label: "Organizers", labelKo: "주최 기관", href: "#organizers" },
      { label: "Venue", labelKo: "행사장 안내", href: "#venue" },
    ],
  },
  {
    label: "Program",
    labelKo: "프로그램",
    href: "#program",
    children: [
      { label: "Schedule", labelKo: "전체 일정", href: "#schedule" },
      { label: "Sessions", labelKo: "세션 소개", href: "#sessions" },
    ],
  },
  {
    label: "Speakers",
    labelKo: "연사",
    href: "#speakers",
  },
  {
    label: "Registration",
    labelKo: "등록안내",
    href: "#registration",
    children: [
      { label: "Registration Guide", labelKo: "등록 안내", href: "#registration" },
      { label: "Pre-Registration", labelKo: "사전등록", href: "#pre-registration" },
      { label: "Sponsorship", labelKo: "후원/스폰서십", href: "#sponsorship" },
    ],
  },
  {
    label: "Media",
    labelKo: "미디어",
    href: "#media",
  },
  {
    label: "Partners",
    labelKo: "파트너",
    href: "#partners",
  },
  {
    label: "Contact",
    labelKo: "문의",
    href: "#contact",
  },
];

// 7대 전략 세션 (PDF 운영계획 기준)
export const SESSIONS = [
  {
    id: "ai-semiconductor",
    number: "01",
    title: "AI + Semiconductor",
    subtitle: "AI Chip & Fabrication",
    titleKo: "AI+반도체",
    icon: "🤖",
    color: "#6366F1",
    description:
      "Combining Korea's semiconductor manufacturing capabilities with India's software/design talent to build a next-generation AI semiconductor ecosystem.",
    companies: ["Samsung Electronics", "SK Hynix", "Naver"],
  },
  {
    id: "defense",
    number: "02",
    title: "Defense",
    subtitle: "K-Defense & MRO",
    titleKo: "방산",
    icon: "🛡️",
    color: "#8B5CF6",
    description:
      "Digital transformation of K-Defense MRO centers in India. AI-powered unmanned combat systems (MUM-T) and military AI governance cooperation.",
    companies: ["Hanwha Aerospace", "LIG Nex1", "HD Hyundai"],
  },
  {
    id: "mobility",
    number: "03",
    title: "Mobility",
    subtitle: "AI Green Mobility",
    titleKo: "모빌리티",
    icon: "🚗",
    color: "#10B981",
    description:
      "Hydrogen mobility demonstration zones, autonomous electric vehicle architectures, and EV infrastructure integrated with smart grids for India's carbon neutrality goals.",
    companies: ["Hyundai Motor", "Kia", "SK ecoplant"],
  },
  {
    id: "energy",
    number: "04",
    title: "Energy",
    subtitle: "H2 & BESS",
    titleKo: "에너지",
    icon: "⚡",
    color: "#F59E0B",
    description:
      "Hydrogen infrastructure, all-solid-state battery technology, and energy storage systems. Carbon capture and high-efficiency energy solutions for India's growing demand.",
    companies: ["Doosan Enerbility", "Samsung SDI", "POSCO"],
  },
  {
    id: "chemical",
    number: "05",
    title: "Chemical",
    subtitle: "Petrochemical & Materials",
    titleKo: "케미컬",
    icon: "🧪",
    color: "#3B82F6",
    description:
      "Past, present, and future of the chemical industry. High-purity chemicals for semiconductor processes, next-gen battery materials, and eco-friendly lightweight engineering plastics.",
    companies: ["LG Chem", "Lotte Chemical", "Hanwha Solutions"],
  },
  {
    id: "entertainment",
    number: "06",
    title: "Entertainment",
    subtitle: "K-Culture & OTT",
    titleKo: "엔터테인먼트",
    icon: "🎬",
    color: "#EF4444",
    description:
      "ZEE TV 'K-Culture & Tech' broadcast channel launch and global OTT collaboration. Content co-production models and digital IP business between Korea and India.",
    companies: ["ZEE TV", "CJ ENM", "HYBE"],
  },
  {
    id: "veterans-rehabilitation",
    number: "07",
    title: "AX for War Veterans & the Physically Challenged",
    subtitle: "Appropriate Medical Tech & Prosthetics",
    titleKo: "참전용사 & 장애인 재활",
    icon: "🦾",
    color: "#7C3AED",
    description:
      "Korea-India rehabilitation cooperation based on KOICA's Jaipur Foot Foundation partnership. 3D-printed custom prosthetics and wheelchairs, training disabled professionals, and providing free prosthetics worldwide.",
    companies: ["KOICA", "Jaipur Foot Foundation", "Ministry of Patriots & Veterans"],
  },
];

// 주요 연사
export const SPEAKERS = [
  {
    name: "Narendra Modi",
    title: "Prime Minister",
    org: "Government of India",
    category: "government",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "Piyush Goyal",
    title: "Minister of Commerce & Industry",
    org: "Government of India",
    category: "government",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "Ashwini Vaishnaw",
    title: "Minister of Electronics & IT",
    org: "MeitY, India",
    category: "government",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "Punit Goenka",
    title: "CEO",
    org: "ZEE Entertainment",
    category: "organizer",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "TBA",
    title: "To Be Announced",
    org: "Coming Soon",
    category: "corporate",
    image: "/images/speaker-placeholder.svg",
  },
];

// 참여 등급 및 혜택 구조
export const PARTICIPATION_TIERS = [
  {
    tier: "Session Chair",
    tierKo: "세션 의장",
    price: "$1,000,000",
    color: "from-amber-500 to-yellow-600",
    benefits: [
      "Head table seating with vice-minister-level officials from India & Korea",
      "Agenda-setting authority for the relevant industry session",
      "Exclusive G2B/B2G closed-door meeting organization",
      "Priority #1 policy recommendation in the official summit white paper",
    ],
    benefitsKo: [
      "인도·한국 소속 장차관급 관료와 헤드 테이블 배정",
      "해당 산업 세션 의제 설정권",
      "독점 G2B/B2G 비공개 회의 주관",
      "써밋 공식 백서 내 정책 제언 1순위 반영",
    ],
  },
  {
    tier: "Strategic Follower",
    tierKo: "A등급",
    price: "$500,000",
    color: "from-purple-500 to-violet-600",
    benefits: [
      "Full-time access to vice-minister networking lounge",
      "Key panelist participation in each session",
      "Priority 1:1 investment matching with Indian conglomerate CEOs",
      "Opportunity to submit regulatory improvement proposals",
    ],
    benefitsKo: [
      "장차관 네트워킹 라운지 상시 출입권",
      "세션별 핵심 토론자 참여",
      "인도 대기업 CEO와의 1:1 투자 매칭 우선권",
      "규제 개선 건의안 제출 기회 제공",
    ],
  },
  {
    tier: "Business Partner",
    tierKo: "B등급",
    price: "$300,000",
    color: "from-[var(--gold)] to-[var(--gold-dark)]",
    benefits: [
      "Official B2B matching program participation",
      "Technical seminar with director-general-level officials from both nations",
      "VIP booth allocation at IICC exhibition hall",
      "Corporate IR video on summit main screen at all times",
    ],
    benefitsKo: [
      "공식 B2B 매칭 프로그램 참여",
      "양국 주요 실무 국장급과의 기술 세미나 참석",
      "IICC 전시장 내 VIP 부스 배정",
      "기업 IR 영상 써밋 메인 스크린 상시 노출",
    ],
  },
  {
    tier: "Growth Member",
    tierKo: "C등급",
    price: "$100,000",
    color: "from-gray-400 to-gray-500",
    benefits: [
      "Session attendance and networking event participation",
      "India local industry cluster visit opportunity",
      "Listed in summit participating companies directory",
      "Consulting support for India government PLI scheme application",
    ],
    benefitsKo: [
      "세션 참관 및 네트워킹 이벤트 참여",
      "인도 현지 산업 클러스터 방문 기회",
      "써밋 참여 기업 명부 등재",
      "향후 인도 정부 지원 PLI 신청 시 컨설팅 지원",
    ],
  },
];

// 파트너 로고 (플레이스홀더)
export const PARTNERS = {
  organizers: [
    { name: "AI FUTURE Group", logo: "/images/logo-aifuture.svg" },
    { name: "ZEE TV Group", logo: "/images/logo-zee.svg" },
    { name: "IICC Yashobhoomi", logo: "/images/logo-iicc.svg" },
  ],
  sponsors: [
    { name: "Sponsor 1", logo: "/images/partner-placeholder.svg" },
    { name: "Sponsor 2", logo: "/images/partner-placeholder.svg" },
  ],
  partners: [
    { name: "FICCI", logo: "/images/partner-placeholder.svg" },
    { name: "KCCI", logo: "/images/partner-placeholder.svg" },
    { name: "MeitY, India", logo: "/images/partner-placeholder.svg" },
  ],
};
