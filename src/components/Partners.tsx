"use client";

import { Building2 } from "lucide-react";

const partnerGroups = [
  {
    title: "Organizers",
    titleKo: "주최",
    items: ["AI FUTURE Group", "ZEE Entertainment (ZEEL)", "IICC Yashobhoomi"],
  },
  {
    title: "Korean Government",
    titleKo: "한국 정부",
    items: ["Ministry of Foreign Affairs", "MOTIE", "MSIT", "KOTRA"],
  },
  {
    title: "Indian Government",
    titleKo: "인도 정부",
    items: ["MeitY", "Ministry of Commerce", "FICCI", "CII"],
  },
  {
    title: "Media Partners",
    titleKo: "미디어 파트너",
    items: ["ZEE TV", "ZEE News"],
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Partners</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Organizations supporting the India-Korea partnership
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerGroups.map((group) => (
            <div key={group.title} className="bg-[var(--gray-50)] rounded-xl p-6">
              <h4 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {group.items.map((name) => (
                  <div
                    key={name}
                    className="bg-white rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
                  >
                    <Building2 className="w-8 h-8 text-[var(--navy)]/30 flex-shrink-0" />
                    <span className="text-sm font-medium text-[var(--navy)]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
