"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Loader2, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FormData {
  participationType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  organization: string;
  position: string;
  sector: string;
  dietaryRequirements: string;
  specialRequests: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
}

const participationTypes = [
  "General Participant",
  "Corporate Delegate",
  "Government / Public",
  "Student / Academic",
  "Exhibition Booth",
  "Media / Press",
];

const sectors = [
  "AI / Digital Technology",
  "Semiconductor",
  "Bio-Healthcare",
  "Energy / BESS",
  "Fleet / Shipbuilding",
  "Defense / Aerospace",
  "Finance / Investment",
  "Government / Policy",
  "Academia / Research",
  "Media / Entertainment",
  "Other",
];

export default function PreRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // 실제 배포 시 API 엔드포인트 연결
    console.log("Form submitted:", data);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="pre-registration" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
            Registration Submitted Successfully!
          </h3>
          <p className="text-[var(--gray-600)] mb-6">
            Thank you for your pre-registration. A confirmation email will be sent to your
            registered email address within 3 business days. For inquiries, please contact
            the secretariat.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn-outline"
          >
            Submit Another Registration
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="pre-registration" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">Pre-Registration</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Complete the form below to secure your spot at the summit
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[var(--gray-50)] rounded-2xl p-6 md:p-10"
          >
            {/* 참가 유형 */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[var(--navy)] mb-3">
                Participation Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {participationTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[var(--gold)] transition-colors has-[:checked]:border-[var(--gold)] has-[:checked]:bg-[var(--gold)]/5"
                  >
                    <input
                      type="radio"
                      value={type}
                      {...register("participationType", { required: "Please select a type" })}
                      className="accent-[var(--gold)]"
                    />
                    <span className="text-sm text-[var(--navy)]">{type}</span>
                  </label>
                ))}
              </div>
              {errors.participationType && (
                <p className="text-red-500 text-xs mt-1">{errors.participationType.message}</p>
              )}
            </div>

            {/* 이름 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: "Required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: "Required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* 이메일 & 전화번호 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: "Required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="+82-10-XXXX-XXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* 국적 & 소속 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("nationality", { required: "Required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="e.g., South Korea, India"
                />
                {errors.nationality && (
                  <p className="text-red-500 text-xs mt-1">{errors.nationality.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Organization / Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("organization", { required: "Required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="Your organization name"
                />
                {errors.organization && (
                  <p className="text-red-500 text-xs mt-1">{errors.organization.message}</p>
                )}
              </div>
            </div>

            {/* 직위 & 관심 분야 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Position / Title
                </label>
                <input
                  type="text"
                  {...register("position")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="e.g., CEO, Director, Manager"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Primary Sector of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("sector", { required: "Required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Select a sector</option>
                  {sectors.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.sector && (
                  <p className="text-red-500 text-xs mt-1">{errors.sector.message}</p>
                )}
              </div>
            </div>

            {/* 식이 요청 */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Dietary Requirements
                </label>
                <input
                  type="text"
                  {...register("dietaryRequirements")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="e.g., Vegetarian, Halal, None"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                  Special Requests
                </label>
                <input
                  type="text"
                  {...register("specialRequests")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm"
                  placeholder="Any special requirements"
                />
              </div>
            </div>

            {/* 동의 */}
            <div className="space-y-3 mb-8 p-4 bg-white rounded-lg border border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("agreeTerms", { required: "You must agree to the terms" })}
                  className="mt-0.5 accent-[var(--gold)]"
                />
                <span className="text-sm text-[var(--gray-600)]">
                  I agree to the{" "}
                  <a href="#" className="text-[var(--gold)] underline">Terms and Conditions</a>{" "}
                  of the summit. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="text-red-500 text-xs ml-6">{errors.agreeTerms.message}</p>
              )}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("agreePrivacy", { required: "You must agree to the privacy policy" })}
                  className="mt-0.5 accent-[var(--gold)]"
                />
                <span className="text-sm text-[var(--gray-600)]">
                  I agree to the{" "}
                  <a href="#" className="text-[var(--gold)] underline">Privacy Policy</a>{" "}
                  and consent to data processing. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.agreePrivacy && (
                <p className="text-red-500 text-xs ml-6">{errors.agreePrivacy.message}</p>
              )}
            </div>

            {/* 제출 */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold text-lg px-12 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Pre-Registration
                  </>
                )}
              </button>
              <p className="text-xs text-[var(--gray-600)] mt-4">
                After submission, a confirmation email will be sent within 3 business days.
                Payment instructions will be included in the confirmation email.
              </p>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
