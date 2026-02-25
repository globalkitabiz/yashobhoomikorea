"use client";

import { SPEAKERS } from "@/lib/constants";
import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">Speakers & Leaders</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            World-class leaders from government, industry, and academia
          </p>
        </ScrollReveal>

        {/* 연사 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {SPEAKERS.map((speaker, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="text-center group">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-light)] flex items-center justify-center overflow-hidden border-3 border-[var(--gold)]/20 group-hover:border-[var(--gold)] transition-all duration-300 group-hover:scale-105">
                  <User className="w-12 h-12 text-white/40" />
                </div>
                <h4 className="text-sm font-bold text-[var(--navy)]">{speaker.name}</h4>
                <p className="text-xs text-[var(--gold)] font-medium mt-0.5">
                  {speaker.title}
                </p>
                <p className="text-xs text-[var(--gray-600)] mt-0.5">{speaker.org}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Leaders Speak 안내 */}
        <ScrollReveal delay={200}>
          <div className="bg-gradient-to-r from-[var(--navy)] to-[var(--navy-light)] rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Leaders Speak</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              VIP messages and keynote addresses from heads of state, ministers,
              and global industry leaders will be announced soon.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 text-sm">
              <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
              Speaker Lineup Coming Soon
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
