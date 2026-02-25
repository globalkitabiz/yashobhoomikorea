"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEC" },
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
          <span className="text-white/60 text-[10px] sm:text-xs mt-1.5 tracking-wider font-medium">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
