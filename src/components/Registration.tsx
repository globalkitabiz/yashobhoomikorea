"use client";

import { REGISTRATION_FEES } from "@/lib/constants";
import { Check, CreditCard, Building, FileText } from "lucide-react";

const sponsorships = [
  {
    tier: "S",
    name: "Title Sponsor",
    price: "USD 100,000",
    color: "from-amber-500 to-yellow-600",
    benefits: [
      "Logo on all materials & main stage",
      "Opening keynote slot (10 min)",
      "20 VIP invitations",
      "Premium booth (6×6m)",
      "Exclusive media coverage",
    ],
  },
  {
    tier: "A",
    name: "Diamond",
    price: "USD 50,000",
    color: "from-purple-500 to-violet-600",
    benefits: [
      "Logo on main banners",
      "Panel session slot",
      "10 VIP invitations",
      "Premium booth (4×4m)",
      "Media coverage",
    ],
  },
  {
    tier: "B",
    name: "Gold",
    price: "USD 30,000",
    color: "from-[var(--gold)] to-[var(--gold-dark)]",
    benefits: [
      "Logo on program book",
      "5 delegate invitations",
      "Standard booth (3×3m)",
      "B2B matching priority",
    ],
  },
  {
    tier: "C",
    name: "Silver",
    price: "USD 10,000",
    color: "from-gray-400 to-gray-500",
    benefits: [
      "Logo on partner wall",
      "3 delegate invitations",
      "B2B matching access",
    ],
  },
];

export default function Registration() {
  return (
    <section id="registration" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">Registration</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Secure your place at the premier India-Korea business summit
        </p>

        {/* 참가비 테이블 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="bg-[var(--navy)] text-white p-6">
            <h3 className="text-xl font-bold">Registration Fees</h3>
            <p className="text-white/60 text-sm mt-1">All fees in USD. Includes summit access, materials, and meals.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--gray-50)]">
                  <th className="text-left p-4 text-sm font-semibold text-[var(--navy)]">Type</th>
                  <th className="text-center p-4 text-sm font-semibold text-green-600">
                    Early Bird<br />
                    <span className="text-xs font-normal text-[var(--gray-600)]">~ Mar 15</span>
                  </th>
                  <th className="text-center p-4 text-sm font-semibold text-[var(--gold)]">
                    Regular<br />
                    <span className="text-xs font-normal text-[var(--gray-600)]">~ Apr 15</span>
                  </th>
                  <th className="text-center p-4 text-sm font-semibold text-red-500">
                    On-site<br />
                    <span className="text-xs font-normal text-[var(--gray-600)]">Apr 27~</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {REGISTRATION_FEES.map((fee) => (
                  <tr key={fee.type} className="border-t border-gray-100 hover:bg-[var(--gold)]/5 transition-colors">
                    <td className="p-4">
                      <div className="text-sm font-semibold text-[var(--navy)]">{fee.type}</div>
                      <div className="text-xs text-[var(--gray-600)]">{fee.typeKo}</div>
                    </td>
                    <td className="text-center p-4 text-sm font-medium text-green-600">{fee.early}</td>
                    <td className="text-center p-4 text-sm font-medium">{fee.regular}</td>
                    <td className="text-center p-4 text-sm font-medium text-red-500">{fee.onsite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 등록 절차 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <div className="text-xs font-bold text-[var(--gold)] mb-1">STEP 1</div>
            <h4 className="font-bold text-[var(--navy)] mb-2">Online Registration</h4>
            <p className="text-sm text-[var(--gray-600)]">
              Fill out the pre-registration form with your details and select your participation type.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
              <CreditCard className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <div className="text-xs font-bold text-[var(--gold)] mb-1">STEP 2</div>
            <h4 className="font-bold text-[var(--navy)] mb-2">Payment</h4>
            <p className="text-sm text-[var(--gray-600)]">
              Complete payment via credit card (Visa/MC/AMEX), bank transfer, or PayPal.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-14 h-14 mx-auto mb-4 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
              <Check className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <div className="text-xs font-bold text-[var(--gold)] mb-1">STEP 3</div>
            <h4 className="font-bold text-[var(--navy)] mb-2">Confirmation</h4>
            <p className="text-sm text-[var(--gray-600)]">
              Receive your confirmation letter and event badge via email within 3 business days.
            </p>
          </div>
        </div>

        {/* 결제 수단 */}
        <div className="bg-white rounded-xl p-6 mb-12 flex flex-wrap items-center justify-center gap-6">
          <span className="text-sm font-semibold text-[var(--navy)]">Accepted Payment:</span>
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-[var(--gray-600)]" />
            <span className="text-sm text-[var(--gray-600)]">Bank Transfer (KRW / INR / USD)</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[var(--gray-600)]" />
            <span className="text-sm text-[var(--gray-600)]">Visa / MasterCard / AMEX</span>
          </div>
          <span className="text-sm text-[var(--gray-600)]">PayPal</span>
        </div>

        {/* 사전등록 CTA */}
        <div id="pre-registration" className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] rounded-2xl p-8 md:p-12 text-center text-white scroll-mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Pre-Register Now</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Early bird registration is now open. Secure your spot and save up to 30% on registration fees.
            The pre-registration form will be available soon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-white text-[var(--gold-dark)] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
              Pre-Register (Coming Soon)
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors">
              Contact Secretariat
            </a>
          </div>
        </div>

        {/* 스폰서십 */}
        <div id="sponsorship" className="mt-20 scroll-mt-24">
          <h3 className="text-2xl font-bold text-[var(--navy)] text-center mb-3">
            Sponsorship Packages
          </h3>
          <p className="text-center text-[var(--gray-600)] mb-10">
            Partner with us and gain unparalleled visibility at the summit
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorships.map((pkg) => (
              <div key={pkg.tier} className="card">
                <div className={`bg-gradient-to-r ${pkg.color} p-4 text-white text-center`}>
                  <div className="text-3xl font-black">{pkg.tier}</div>
                  <div className="text-sm font-bold">{pkg.name}</div>
                  <div className="text-lg font-bold mt-1">{pkg.price}</div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {pkg.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[var(--gray-600)]">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="block mt-4 text-center text-sm font-semibold text-[var(--gold)] hover:text-[var(--gold-dark)] transition-colors"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
