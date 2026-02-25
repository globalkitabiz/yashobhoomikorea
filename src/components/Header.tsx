"use client";

import { useState, useEffect } from "react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navy)]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* 상단 바 */}
      <div
        className={`border-b border-white/10 transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100 pb-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white/70 text-xs">
          <span>{SITE_CONFIG.eventDateDisplay} | {SITE_CONFIG.venue}</span>
          <div className="flex gap-4">
            <button className="hover:text-white transition-colors">EN</button>
            <button className="hover:text-white transition-colors">KR</button>
            <button className="hover:text-white transition-colors">HI</button>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                YASHOBHOOMI
              </span>
              <span className="text-[var(--gold)] text-[10px] font-medium tracking-[0.2em] uppercase">
                India-Korea Business Summit 2026
              </span>
            </div>
          </a>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </a>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl py-2 min-w-[200px] animate-fade-in-up">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--gold)]/10 hover:text-[var(--navy)] transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#pre-registration" className="btn-gold ml-4 text-sm !py-2 !px-5">
              Register Now
            </a>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--navy)] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-white/90 hover:text-white font-medium border-b border-white/5"
                >
                  {item.label}
                </a>
                {item.children?.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-6 text-white/60 hover:text-white text-sm"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
            <a
              href="#pre-registration"
              onClick={() => setMobileOpen(false)}
              className="btn-gold w-full mt-4 text-center"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
