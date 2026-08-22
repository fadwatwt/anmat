"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUserType } from "@/redux/auth/authSlice";
import { FiPlus, FiUsers, FiClock, FiCheck, FiChevronRight, FiChevronLeft, FiX } from "react-icons/fi";

const ONBOARDING_KEY = "subscriber_onboarding_completed";

const steps = [
  {
    id: "project",
    icon: FiPlus,
    titleKey: "onboarding.step1.title",
    descKey: "onboarding.step1.desc",
    ctaKey: "onboarding.step1.cta",
    href: "/projects/create",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    accentColor: "blue",
  },
  {
    id: "employee",
    icon: FiUsers,
    titleKey: "onboarding.step2.title",
    descKey: "onboarding.step2.desc",
    ctaKey: "onboarding.step2.cta",
    href: "/hr/employees",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    accentColor: "emerald",
  },
  {
    id: "attendance",
    icon: FiClock,
    titleKey: "onboarding.step3.title",
    descKey: "onboarding.step3.desc",
    ctaKey: "onboarding.step3.cta",
    href: "/attendance",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
    accentColor: "amber",
  },
];

export default function SubscriberOnboarding() {
  const { t } = useTranslation();
  const router = useRouter();
  const userType = useSelector(selectUserType);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (userType === "Subscriber") {
      const completed = localStorage.getItem(ONBOARDING_KEY);
      if (!completed) {
        setTimeout(() => {
          setIsOpen(true);
          setTimeout(() => setAnimate(true), 10);
        }, 800);
      }
    }
  }, [userType]);

  if (!mounted || userType !== "Subscriber" || !isOpen) return null;

  const step = steps[currentStep];
  const Icon = step.icon;

  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      setAnimate(false);
      setTimeout(() => {
        setCurrentStep(index);
        setTimeout(() => setAnimate(true), 10);
      }, 150);
    }
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    router.push(step.href);
    if (currentStep === steps.length - 1) {
      completeOnboarding();
    } else {
      goToStep(currentStep + 1);
    }
  };

  const completeOnboarding = () => {
    localStorage.setItem(ONBOARDING_KEY, "true");
    setAnimate(false);
    setTimeout(() => setIsOpen(false), 150);
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-150 ${
        animate ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleSkip}
    >
      <div
        className={`relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-200 ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
              <FiCheck size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("onboarding.title")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("onboarding.subtitle")}
              </p>
            </div>
          </div>
          <button
            onClick={handleSkip}
            aria-label={t("onboarding.skip")}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
{steps.map((s, i) => (
                  <>
                    <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      i < currentStep
                        ? "bg-green-500 text-white"
                        : i === currentStep
                        ? `bg-gradient-to-br ${step.color} text-white shadow-lg`
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {i < currentStep ? <FiCheck size={16} /> : <span>{i + 1}</span>}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-12 h-0.5 mx-2 rounded transition-colors duration-300 ${
                        i < currentStep ? "bg-green-500" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  )}
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div
          className={`p-6 transition-all duration-200 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <div className="text-center mb-6">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${step.bgColor} ${step.borderColor} mb-4`}>
              <Icon size={32} className={`text-${step.accentColor}-600 dark:text-${step.accentColor}-400`} />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t(step.titleKey)}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(step.descKey)}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between gap-4">
            {currentStep > 0 && (
              <button
                onClick={() => goToStep(currentStep - 1)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FiChevronLeft size={18} />
                <span>{t("onboarding.back")}</span>
              </button>
            )}

            <button
              onClick={handleCtaClick}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] bg-gradient-to-r ${step.color}`}
            >
              <span>{t(step.ctaKey)}</span>
              <FiChevronRight size={18} />
            </button>
          </div>

          {/* Skip link at bottom */}
          <button
            onClick={handleSkip}
            className="w-full mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline underline-offset-2"
          >
            {t("onboarding.skip_for_now")}
          </button>
        </div>
      </div>
    </div>
  );
}