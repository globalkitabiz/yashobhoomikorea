"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--navy-dark)] text-white">
      {/* 문의 섹션 */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <div className="w-12 h-0.5 bg-[var(--gold)] mx-auto mb-4" />
          <p className="text-white/60">Secretariat offices in Seoul and New Delhi</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 한국 사무국 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--gold)]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">🇰🇷</span>
              </div>
              <h3 className="text-lg font-bold">Korea Secretariat</h3>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <p className="font-semibold text-white">AI FUTURE Group</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                <span>Seoul, Republic of Korea</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <a href="mailto:info@aifuturegroup.com" className="hover:text-white transition-colors">
                  info@aifuturegroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <span>+82-2-XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* 인도 사무국 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--saffron)]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">🇮🇳</span>
              </div>
              <h3 className="text-lg font-bold">India Secretariat</h3>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <p className="font-semibold text-white">ZEE Entertainment / IICC</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--saffron)] mt-0.5 flex-shrink-0" />
                <span>Yashobhoomi, Dwarka, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--saffron)] flex-shrink-0" />
                <a href="mailto:gbs@zee.com" className="hover:text-white transition-colors">
                  gbs@zee.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--saffron)] flex-shrink-0" />
                <span>+91-XX-XXXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="text-center mb-12">
          <p className="text-white/50 text-sm">
            For frequently asked questions, sponsorship inquiries, or media access,
            please contact the relevant secretariat office above.
          </p>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© 2026 {SITE_CONFIG.shortName}. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
