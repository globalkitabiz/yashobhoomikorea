"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function Countdown() {
  const { t } = useLanguage();
  const mounted = useIsMounted();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const target = new Date(SITE_CONFIG.eventDate + "T09:00:00+05:30").getTime();
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const blocks = [
    { value: timeLeft.days, label: t("DAYS", "일") },
    { value: timeLeft.hours, label: t("HOURS", "시간") },
    { value: timeLeft.minutes, label: t("MIN", "분") },
    { value: timeLeft.seconds, label: t("SEC", "초") },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {blocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-white/60 text-[10px] sm:text-xs mt-1.5 tracking-wider font-medium">{block.label}</span>
        </div>
      ))}
    </div>
  );
}
