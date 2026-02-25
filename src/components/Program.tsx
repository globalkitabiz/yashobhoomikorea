"use client";

import { SESSIONS } from "@/lib/constants";

const schedule = [
  {
    day: "Day 1",
    date: "April 27 (Mon)",
    title: "Future Tech Exhibition & Welcome",
    events: [
      { time: "09:00 - 18:00", name: "Future Tech Exhibition", desc: "AI × Bio Immersive Exhibition (Viscode)" },
      { time: "10:00 - 12:00", name: "Opening Ceremony", desc: "VIP Welcome & Keynote Addresses" },
      { time: "14:00 - 17:00", name: "B2B Business Matching", desc: "Pre-arranged bilateral meetings" },
      { time: "19:00 - 21:00", name: "State Gala Dinner", desc: "Hosted by Government Dignitaries" },
    ],
  },
  {
    day: "Day 2",
    date: "April 28 (Tue)",
    title: "Strategic Forum Sessions",
    events: [
      { time: "09:00 - 10:30", name: "Session 01: AIX", desc: "AI Transformation & Digital Innovation" },
      { time: "11:00 - 12:30", name: "Session 02: Semiconductor", desc: "Chips, Fabrication & Supply Chain" },
      { time: "14:00 - 15:30", name: "Session 03: Bio-Healthcare", desc: "AI × Ayurveda & Medical Innovation" },
      { time: "16:00 - 17:30", name: "Session 04: Energy & BESS", desc: "Hydrogen, Solid-State Battery & Storage" },
    ],
  },
  {
    day: "Day 3",
    date: "April 29 (Wed)",
    title: "Industry Forums & Closing",
    events: [
      { time: "09:00 - 10:30", name: "Session 05: Fleet & Logistics", desc: "Shipbuilding, LNG & Maritime" },
      { time: "11:00 - 12:30", name: "Session 06: Defense", desc: "Security & Smart Infrastructure" },
      { time: "14:00 - 16:00", name: "MOU Signing Ceremony", desc: "Partnership Agreements" },
      { time: "16:00 - 17:00", name: "Closing Ceremony", desc: "Summary & Future Roadmap" },
    ],
  },
];

export default function Program() {
  return (
    <section id="program" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Program</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          3 days of exhibitions, strategic forums, and high-level networking
        </p>

        {/* 일정 개요 */}
        <div id="schedule" className="grid md:grid-cols-3 gap-6 mb-20 scroll-mt-24">
          {schedule.map((day, idx) => (
            <div key={day.day} className="card">
              <div
                className="p-4 text-white text-center"
                style={{
                  background: `linear-gradient(135deg, ${
                    idx === 0 ? "#1B2A4A, #2A3F6A" : idx === 1 ? "#C8963E, #A67B2E" : "#0F1A30, #1B2A4A"
                  })`,
                }}
              >
                <div className="text-sm font-medium opacity-80">{day.day}</div>
                <div className="text-lg font-bold">{day.date}</div>
                <div className="text-xs mt-1 opacity-70">{day.title}</div>
              </div>
              <div className="p-5">
                {day.events.map((event) => (
                  <div
                    key={event.name}
                    className="py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="text-xs text-[var(--gold)] font-semibold mb-1">
                      {event.time}
                    </div>
                    <div className="text-sm font-semibold text-[var(--navy)]">
                      {event.name}
                    </div>
                    <div className="text-xs text-[var(--gray-600)] mt-0.5">
                      {event.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 6대 전략 세션 */}
        <div id="sessions" className="scroll-mt-24">
          <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-3">
            6 Strategic Sessions
          </h3>
          <p className="text-center text-[var(--gray-600)] mb-10">
            Key industries driving India-Korea economic cooperation
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SESSIONS.map((session) => (
              <div key={session.id} className="card group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                      style={{ backgroundColor: session.color + "15", color: session.color }}
                    >
                      {session.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--gray-600)]">
                        SESSION {session.number}
                      </div>
                      <div className="text-lg font-bold text-[var(--navy)]">
                        {session.title}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[var(--gold)] mb-2">
                    {session.subtitle}
                  </div>
                  <p className="text-sm text-[var(--gray-600)] leading-relaxed mb-4">
                    {session.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {session.companies.map((company) => (
                      <span
                        key={company}
                        className="text-[10px] px-2 py-1 bg-[var(--gray-100)] text-[var(--gray-600)] rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
