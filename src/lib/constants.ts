// 사이트 기본 정보
export const SITE_CONFIG = {
  name: "2026 India-Korea Yashobhoomi Global Business Summit",
  shortName: "Yashobhoomi GBS 2026",
  domain: "yashobhoomikoreabusinesssummit.org",
  eventDate: "2026-04-27", // 4월 마지막 주 월요일 (확정 시 변경)
  eventEndDate: "2026-04-29",
  eventDateDisplay: "April 27-29, 2026",
  venue: "Yashobhoomi (IICC), New Delhi, India",
  description:
    "The premier India-Korea business summit connecting leaders across AI, Semiconductor, Bio-Healthcare, Energy, Fleet & Defense sectors.",
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

// 6대 전략 세션
export const SESSIONS = [
  {
    id: "aix",
    number: "01",
    title: "AIX",
    subtitle: "AI Transformation",
    titleKo: "AI 전환",
    icon: "🤖",
    color: "#6366F1",
    description:
      "India's exceptional IT talent pool meets Korea's AI innovation. Exploring Big Data, Cloud, Hindi LLM, and youth-focused AI applications.",
    companies: ["LG U+", "Naver", "Samsung SDS"],
  },
  {
    id: "semiconductor",
    number: "02",
    title: "Semiconductor",
    subtitle: "Chips & Fabrication",
    titleKo: "반도체",
    icon: "💎",
    color: "#8B5CF6",
    description:
      "Strategic partnership in semiconductor manufacturing, packaging, and supply chain between India's growing market and Korea's technology leadership.",
    companies: ["Samsung Electronics", "SK Hynix"],
  },
  {
    id: "bio",
    number: "03",
    title: "Bio-Healthcare",
    subtitle: "AI × Ayurveda",
    titleKo: "바이오헬스",
    icon: "🧬",
    color: "#10B981",
    description:
      "Fusion of traditional Ayurveda medicine with cutting-edge AI diagnostics. Viscode immersive exhibition showcasing hologram and AR/VR technologies.",
    companies: ["Samsung Biologics", "Celltrion"],
  },
  {
    id: "energy",
    number: "04",
    title: "Energy & BESS",
    subtitle: "Next-Gen Power",
    titleKo: "에너지",
    icon: "⚡",
    color: "#F59E0B",
    description:
      "From thermal power to hydrogen energy. All-solid-state battery technology and battery energy storage systems for India's growing demand.",
    companies: ["Doosan Enerbility", "Samsung SDI"],
  },
  {
    id: "fleet",
    number: "05",
    title: "Fleet & Logistics",
    subtitle: "Shipbuilding & LNG",
    titleKo: "선박/해양",
    icon: "🚢",
    color: "#3B82F6",
    description:
      "LNG carrier construction and maritime logistics. India's strategic interest in Korean shipbuilding excellence and MAGA partnership.",
    companies: ["HD Hyundai", "Samsung Heavy Industries"],
  },
  {
    id: "defense",
    number: "06",
    title: "Defense",
    subtitle: "Security & Aerospace",
    titleKo: "국방/안보",
    icon: "🛡️",
    color: "#EF4444",
    description:
      "Defense technology cooperation and smart infrastructure development aligned with India's economic development plans.",
    companies: ["Hanwha Aerospace", "LIG Nex1"],
  },
];

// 주요 연사 (플레이스홀더)
export const SPEAKERS = [
  {
    name: "TBA",
    title: "Prime Minister",
    org: "Government of India",
    category: "government",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "TBA",
    title: "Minister of Commerce",
    org: "Government of India",
    category: "government",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "TBA",
    title: "Minister of Electronics & IT",
    org: "MeitY, India",
    category: "government",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "Ryu Sung-taek",
    title: "CEO",
    org: "AI FUTURE Group",
    category: "organizer",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "TBA",
    title: "CEO",
    org: "ZEE Entertainment",
    category: "organizer",
    image: "/images/speaker-placeholder.svg",
  },
  {
    name: "TBA",
    title: "CEO",
    org: "Major Korean Corporation",
    category: "corporate",
    image: "/images/speaker-placeholder.svg",
  },
];

// 등록 유형 및 참가비
export const REGISTRATION_FEES = [
  {
    type: "General Participant",
    typeKo: "일반 참가자",
    early: "USD 500",
    regular: "USD 700",
    onsite: "USD 900",
  },
  {
    type: "Corporate Delegate",
    typeKo: "기업 대표단",
    early: "USD 800",
    regular: "USD 1,000",
    onsite: "USD 1,200",
  },
  {
    type: "VIP / Speaker",
    typeKo: "VIP / 연사",
    early: "Invited",
    regular: "Invited",
    onsite: "Invited",
  },
  {
    type: "Government / Public",
    typeKo: "정부 / 공공기관",
    early: "USD 300",
    regular: "USD 500",
    onsite: "USD 600",
  },
  {
    type: "Student / Academic",
    typeKo: "학생 / 학술",
    early: "USD 200",
    regular: "USD 300",
    onsite: "USD 400",
  },
  {
    type: "Exhibition Booth",
    typeKo: "전시 부스",
    early: "USD 3,000",
    regular: "USD 4,000",
    onsite: "USD 5,000",
  },
];

// 파트너 로고 (플레이스홀더)
export const PARTNERS = {
  organizers: [
    { name: "AI FUTURE Group", logo: "/images/logo-aifuture.svg" },
    { name: "ZEE Entertainment", logo: "/images/logo-zee.svg" },
    { name: "IICC Yashobhoomi", logo: "/images/logo-iicc.svg" },
  ],
  sponsors: [
    { name: "Sponsor 1", logo: "/images/partner-placeholder.svg" },
    { name: "Sponsor 2", logo: "/images/partner-placeholder.svg" },
  ],
  partners: [
    { name: "Ministry of External Affairs, Korea", logo: "/images/partner-placeholder.svg" },
    { name: "MeitY, India", logo: "/images/partner-placeholder.svg" },
  ],
};
