"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/lib/i18n";
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

export default function PreRegistrationForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const participationTypes = [
    t("General Participant", "일반 참가자"),
    t("Corporate Delegate", "기업 대표단"),
    t("Government / Public", "정부 / 공공기관"),
    t("Student / Academic", "학생 / 학술"),
    t("Exhibition Booth", "전시 부스"),
    t("Media / Press", "미디어 / 언론"),
  ];

  const sectors = [
    t("AI / Digital Technology", "AI / 디지털 기술"),
    t("Semiconductor", "반도체"),
    t("Bio-Healthcare", "바이오헬스케어"),
    t("Energy / BESS", "에너지 / BESS"),
    t("Fleet / Shipbuilding", "선박 / 조선"),
    t("Defense / Aerospace", "국방 / 항공우주"),
    t("Finance / Investment", "금융 / 투자"),
    t("Government / Policy", "정부 / 정책"),
    t("Academia / Research", "학계 / 연구"),
    t("Media / Entertainment", "미디어 / 엔터테인먼트"),
    t("Other", "기타"),
  ];

  const onSubmit = async (data: FormData) => {
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
            {t("Registration Submitted Successfully!", "등록이 성공적으로 제출되었습니다!")}
          </h3>
          <p className="text-[var(--gray-600)] mb-6">
            {t(
              "Thank you for your pre-registration. A confirmation email will be sent to your registered email address within 3 business days.",
              "사전등록해 주셔서 감사합니다. 영업일 기준 3일 이내 등록된 이메일로 확인 메일이 발송됩니다."
            )}
          </p>
          <button type="button" onClick={() => setSubmitted(false)} className="btn-outline">
            {t("Submit Another Registration", "추가 등록하기")}
          </button>
        </div>
      </section>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-all text-sm";

  return (
    <section id="pre-registration" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-title">{t("Pre-Registration", "사전등록")}</h2>
          <div className="section-divider" />
          <p className="section-subtitle">{t("Complete the form below to secure your spot at the summit", "아래 양식을 작성하여 서밋 참가를 확보하세요")}</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--gray-50)] rounded-2xl p-6 md:p-10">
            {/* 참가 유형 */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[var(--navy)] mb-3">
                {t("Participation Type", "참가 유형")} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {participationTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[var(--gold)] transition-colors has-[:checked]:border-[var(--gold)] has-[:checked]:bg-[var(--gold)]/5">
                    <input type="radio" value={type} {...register("participationType", { required: t("Please select a type", "유형을 선택해주세요") })} className="accent-[var(--gold)]" />
                    <span className="text-sm text-[var(--navy)]">{type}</span>
                  </label>
                ))}
              </div>
              {errors.participationType && <p className="text-red-500 text-xs mt-1">{errors.participationType.message}</p>}
            </div>

            {/* 이름 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("First Name", "이름")} <span className="text-red-500">*</span></label>
                <input type="text" {...register("firstName", { required: t("Required", "필수 항목입니다") })} className={inputClass} placeholder={t("Enter your first name", "이름을 입력하세요")} />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Last Name", "성")} <span className="text-red-500">*</span></label>
                <input type="text" {...register("lastName", { required: t("Required", "필수 항목입니다") })} className={inputClass} placeholder={t("Enter your last name", "성을 입력하세요")} />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* 이메일 & 전화 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Email", "이메일")} <span className="text-red-500">*</span></label>
                <input type="email" {...register("email", { required: t("Required", "필수 항목입니다"), pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("Invalid email", "올바른 이메일을 입력하세요") } })} className={inputClass} placeholder="your@email.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Phone Number", "전화번호")} <span className="text-red-500">*</span></label>
                <input type="tel" {...register("phone", { required: t("Required", "필수 항목입니다") })} className={inputClass} placeholder="+82-10-XXXX-XXXX" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* 국적 & 소속 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Nationality", "국적")} <span className="text-red-500">*</span></label>
                <input type="text" {...register("nationality", { required: t("Required", "필수 항목입니다") })} className={inputClass} placeholder={t("e.g., South Korea, India", "예: 대한민국, 인도")} />
                {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Organization / Company", "소속 기관 / 회사")} <span className="text-red-500">*</span></label>
                <input type="text" {...register("organization", { required: t("Required", "필수 항목입니다") })} className={inputClass} placeholder={t("Your organization name", "소속 기관명을 입력하세요")} />
                {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization.message}</p>}
              </div>
            </div>

            {/* 직위 & 관심분야 */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Position / Title", "직위 / 직함")}</label>
                <input type="text" {...register("position")} className={inputClass} placeholder={t("e.g., CEO, Director, Manager", "예: 대표, 이사, 부장")} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Primary Sector of Interest", "주요 관심 분야")} <span className="text-red-500">*</span></label>
                <select {...register("sector", { required: t("Required", "필수 항목입니다") })} className={`${inputClass} bg-white`}>
                  <option value="">{t("Select a sector", "분야를 선택하세요")}</option>
                  {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.sector && <p className="text-red-500 text-xs mt-1">{errors.sector.message}</p>}
              </div>
            </div>

            {/* 식이 & 특별 요청 */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Dietary Requirements", "식이 요구사항")}</label>
                <input type="text" {...register("dietaryRequirements")} className={inputClass} placeholder={t("e.g., Vegetarian, Halal, None", "예: 채식, 할랄, 없음")} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--navy)] mb-1.5">{t("Special Requests", "특별 요청사항")}</label>
                <input type="text" {...register("specialRequests")} className={inputClass} placeholder={t("Any special requirements", "특별 요청사항이 있으시면 입력하세요")} />
              </div>
            </div>

            {/* 동의 */}
            <div className="space-y-3 mb-8 p-4 bg-white rounded-lg border border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" {...register("agreeTerms", { required: t("You must agree to the terms", "약관에 동의해야 합니다") })} className="mt-0.5 accent-[var(--gold)]" />
                <span className="text-sm text-[var(--gray-600)]">
                  {t("I agree to the", "")}<a href="#" className="text-[var(--gold)] underline">{t("Terms and Conditions", "이용약관")}</a>{t(" of the summit.", "에 동의합니다.")} <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.agreeTerms && <p className="text-red-500 text-xs ml-6">{errors.agreeTerms.message}</p>}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" {...register("agreePrivacy", { required: t("You must agree to the privacy policy", "개인정보 처리방침에 동의해야 합니다") })} className="mt-0.5 accent-[var(--gold)]" />
                <span className="text-sm text-[var(--gray-600)]">
                  {t("I agree to the", "")}<a href="#" className="text-[var(--gold)] underline">{t("Privacy Policy", "개인정보 처리방침")}</a>{t(" and consent to data processing.", "에 동의하며 데이터 처리에 동의합니다.")} <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.agreePrivacy && <p className="text-red-500 text-xs ml-6">{errors.agreePrivacy.message}</p>}
            </div>

            {/* 제출 */}
            <div className="text-center">
              <button type="submit" disabled={isSubmitting} className="btn-gold text-lg px-12 py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin mr-2" />{t("Submitting...", "제출 중...")}</>) : (<><Send className="w-5 h-5 mr-2" />{t("Submit Pre-Registration", "사전등록 제출")}</>)}
              </button>
              <p className="text-xs text-[var(--gray-600)] mt-4">
                {t("After submission, a confirmation email will be sent within 3 business days. Payment instructions will be included in the confirmation email.",
                   "제출 후 영업일 기준 3일 이내 확인 이메일이 발송됩니다. 결제 안내는 확인 이메일에 포함됩니다.")}
              </p>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
