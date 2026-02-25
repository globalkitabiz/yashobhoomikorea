"use client";

import { useLanguage } from "@/lib/i18n";
import { Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Partners() {
  const { t } = useLanguage();

  const partnerGroups = [
    { title: t("Organizers", "주최"), items: ["AI FUTURE Group", "ZEE Entertainment (ZEEL)", "IICC Yashobhoomi"] },
    { title: t("Korean Government", "한국 정부"), items: [t("Ministry of Foreign Affairs", "외교부"), "MOTIE", "MSIT", "KOTRA"] },
    { title: t("Indian Government", "인도 정부"), items: ["MeitY", t("Ministry of Commerce", "상공부"), "FICCI", "CII"] },
    { title: t("Media Partners", "미디어 파트너"), items: ["ZEE TV", "ZEE News"] },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Partners", "파트너")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("Organizations supporting the India-Korea partnership", "인도-한국 파트너십을 지원하는 기관")}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerGroups.map((group, idx) => (
            <ScrollReveal key={group.title} delay={idx * 100}>
              <div className="bg-[var(--gray-50)] rounded-xl p-6 h-full">
                <h4 className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-4">{group.title}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((name) => (
                    <div key={name} className="bg-white rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                      <Building2 className="w-8 h-8 text-[var(--navy)]/30 flex-shrink-0" />
                      <span className="text-sm font-medium text-[var(--navy)]">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
