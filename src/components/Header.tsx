"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("Home", "홈"), href: "/" },
    {
      label: t("About", "행사소개"), href: "#about",
      children: [
        { label: t("Overview", "행사 개요"), href: "#about" },
        { label: t("Organizers", "주최 기관"), href: "#organizers" },
        { label: t("Venue", "행사장 안내"), href: "#venue" },
      ],
    },
    {
      label: t("Program", "프로그램"), href: "#program",
      children: [
        { label: t("Schedule", "전체 일정"), href: "#schedule" },
        { label: t("Sessions", "세션 소개"), href: "#sessions" },
      ],
    },
    { label: t("Speakers", "연사"), href: "#speakers" },
    {
      label: t("Registration", "등록안내"), href: "#registration",
      children: [
        { label: t("Registration Guide", "등록 안내"), href: "#registration" },
        { label: t("Pre-Registration", "사전등록"), href: "#pre-registration" },
        { label: t("Sponsorship", "후원/스폰서십"), href: "#sponsorship" },
      ],
    },
    { label: t("Media", "미디어"), href: "#media" },
    { label: t("Partners", "파트너"), href: "#partners" },
    { label: t("Contact", "문의"), href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--navy)]/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className={`border-b border-white/10 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100 pb-2"}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white/70 text-xs">
          <span>{SITE_CONFIG.eventDateDisplay} | {SITE_CONFIG.venue}</span>
          <div className="flex gap-1">
            <button type="button" onClick={() => setLang("en")} className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${lang === "en" ? "bg-[var(--gold)] text-white" : "text-white/60 hover:text-white"}`}>EN</button>
            <button type="button" onClick={() => setLang("ko")} className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${lang === "ko" ? "bg-[var(--gold)] text-white" : "text-white/60 hover:text-white"}`}>KR</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight tracking-tight">YASHOBHOOMI</span>
            <span className="text-[var(--gold)] text-[10px] font-medium tracking-[0.2em] uppercase">{t("India-Korea Business Summit 2026", "인도-한국 비즈니스 서밋 2026")}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                <a href={item.href} className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[200px] animate-fade-in-up">
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--gold)]/10 hover:text-[var(--navy)] transition-colors">{child.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#pre-registration" className="btn-gold ml-4 text-sm !py-2 !px-5">{t("Register Now", "등록하기")}</a>
          </nav>

          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[var(--navy)] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-2 mb-4 pb-4 border-b border-white/10">
              <button type="button" onClick={() => setLang("en")} className={`flex-1 py-2 rounded text-sm font-medium ${lang === "en" ? "bg-[var(--gold)] text-white" : "bg-white/10 text-white/60"}`}>English</button>
              <button type="button" onClick={() => setLang("ko")} className={`flex-1 py-2 rounded text-sm font-medium ${lang === "ko" ? "bg-[var(--gold)] text-white" : "bg-white/10 text-white/60"}`}>한국어</button>
            </div>
            {navItems.map((item) => (
              <div key={item.label}>
                <a href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-white/90 hover:text-white font-medium border-b border-white/5">{item.label}</a>
                {item.children?.map((child) => (
                  <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-6 text-white/60 hover:text-white text-sm">{child.label}</a>
                ))}
              </div>
            ))}
            <a href="#pre-registration" onClick={() => setMobileOpen(false)} className="btn-gold w-full mt-4 text-center">{t("Register Now", "등록하기")}</a>
          </div>
        </div>
      )}
    </header>
  );
}
