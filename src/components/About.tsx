"use client";

import { Building2, Globe, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    number: "2",
    label: "Nations",
    desc: "India & South Korea",
  },
  {
    icon: Building2,
    number: "6",
    label: "Strategic Sessions",
    desc: "Industry-leading forums",
  },
  {
    icon: Users,
    number: "500+",
    label: "Expected Delegates",
    desc: "Government & Corporate leaders",
  },
  {
    icon: Target,
    number: "3",
    label: "Days",
    desc: "Exhibition, Gala, Summit",
  },
];

const organizers = [
  {
    name: "AI FUTURE Group",
    role: "Lead Organizer (Korea)",
    desc: "A global AI business agency headquartered in Seoul, specializing in AI transformation consulting, international business development, and cross-border partnership facilitation between Korea and emerging markets.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "ZEE Entertainment (ZEEL)",
    role: "Co-Organizer (India)",
    desc: "India's largest media & entertainment conglomerate. Operating 50+ channels across 173 countries, reaching 1.3 billion viewers globally. Listed on BSE & NSE with 2024 revenue of ₹81.3B.",
    color: "from-purple-600 to-violet-700",
  },
  {
    name: "IICC Yashobhoomi",
    role: "Venue Partner (India)",
    desc: "India's premier convention center in Dwarka, New Delhi. Featuring 51,000m² exhibition space, 6,000-seat auditorium, and direct metro connectivity. India's largest MICE facility.",
    color: "from-amber-600 to-orange-700",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <h2 className="section-title">About the Summit</h2>
        <div className="section-divider" />
        <p className="section-subtitle max-w-3xl mx-auto">
          The premier platform connecting Indian and Korean leaders across government,
          industry, and academia for strategic partnership in six key sectors.
        </p>

        {/* 숫자 하이라이트 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-xl bg-[var(--gray-50)] hover:bg-white hover:shadow-lg transition-all"
            >
              <item.icon className="w-8 h-8 text-[var(--gold)] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[var(--navy)] mb-1">
                {item.number}
              </div>
              <div className="text-sm font-semibold text-[var(--navy)] mb-1">
                {item.label}
              </div>
              <div className="text-xs text-[var(--gray-600)]">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 주최기관 소개 */}
        <div id="organizers" className="scroll-mt-24">
          <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-10">
            Organizers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {organizers.map((org) => (
              <div key={org.name} className="card group">
                <div className={`h-2 bg-gradient-to-r ${org.color}`} />
                <div className="p-6">
                  <div className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider mb-2">
                    {org.role}
                  </div>
                  <h4 className="text-xl font-bold text-[var(--navy)] mb-3">
                    {org.name}
                  </h4>
                  <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                    {org.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 행사장 안내 */}
        <div id="venue" className="mt-20 scroll-mt-24">
          <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-10">
            Venue — Yashobhoomi (IICC)
          </h3>
          <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[var(--gold)] mb-4">
                  India International Convention & Expo Centre
                </h4>
                <p className="text-white/80 leading-relaxed mb-6">
                  Located in Dwarka, New Delhi, Yashobhoomi is India&apos;s largest
                  state-of-the-art convention center, inaugurated by PM Narendra Modi.
                  Connected directly to the Dwarka Sector 25 Metro Station.
                </p>
                <ul className="space-y-3">
                  {[
                    "51,000 m² Exhibition Space",
                    "6,000-seat Grand Auditorium",
                    "15 Convention Rooms",
                    "Direct Metro Connectivity",
                    "5 Minutes from IGI Airport",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-[var(--gold)] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full h-64 md:h-full min-h-[250px] bg-white/10 rounded-xl flex items-center justify-center text-white/40 border border-white/10">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Venue Image</p>
                    <p className="text-xs opacity-60">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
