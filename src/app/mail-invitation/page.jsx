"use client"
import { useTranslation } from "react-i18next";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function MailInvitation() {
    const { t } = useTranslation();
    return (
        <div className={"w-full overflow-y-auto h-screen"}>
            <div className="min-h-screen bg-status-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl w-full bg-surface rounded-3xl shadow-sm border border-status-border p-8 md:p-12">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16">
                            <img src="/images/logo.png" alt={t("Company Logo")} className="w-full h-full object-cover rounded-full " />
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-xl md:text-2xl font-bold text-cell-primary leading-tight">
                            {t("Welcome to [Company Name]! Your New Journey Begins!")}
                        </h1>
                    </div>

                    {/* المحتوى النصي */}
                    <div className="text-left space-y-5 text-cell-secondary">
                        <p className="text-md">{t("Dear Amr,")}</p>

                        <p className="leading-relaxed">
                            {t("We are pleased to welcome you to our team at ")}<span className="font-semibold text-cell-primary">{t("Visionary Publishing")}</span>
                            {t(" for the position of ")}<span className="font-semibold text-cell-primary">{t("Content Editor")}</span>{t(" in the ")}<span className="font-semibold text-cell-primary">{t("Publishing Department")}</span>{t(".")}
                        </p>

                        <p className="leading-relaxed">
                            {t("To complete your onboarding process, please click the button below to finalize your information and activate your account:")}
                        </p>
                    </div>

                    {/* زر الإجراء (CTA) */}
                    <div className="flex justify-center my-5">
                        <button className="bg-[#3B63F6] hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95">
                            {t("Complete Your Profile")}
                        </button>
                    </div>

                    {/* التذييل الداخلي للرسالة */}
                    <div className="text-left space-y-4 text-cell-secondary border-t border-status-border pt-3">
                        <p>{t("If you have any questions or need assistance during the process, don't hesitate to contact us.")}</p>
                        <p className="font-medium">{t("Looking forward to working with you!")}</p>

                        <div className="text-sm space-y-1 pt-2">
                            <p className="font-semibold text-cell-primary">{t("Contact Information:")}</p>
                            <p>{t("HR Email:")} <a href="mailto:hr@domain.com" className="text-blue-600 hover:underline dark:text-blue-400">hr@domain.com</a></p>
                            <p>{t("Phone:")} +90 312 213 2965</p>
                        </div>
                    </div>

                    {/* أيقونات التواصل الاجتماعي */}
                    <div className="flex justify-center gap-6 mt-12 text-cell-secondary">
                        <a href="#" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400"><FaEnvelope size={20} /></a>
                        <a href="#" className="hover:text-red-600 transition-colors dark:hover:text-red-400"><FaYoutube size={20} /></a>
                        <a href="#" className="hover:text-pink-600 transition-colors dark:hover:text-pink-400"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-cell-primary transition-colors"><FaXTwitter size={20} /></a>
                        <a href="#" className="hover:text-blue-700 transition-colors dark:hover:text-blue-400"><FaLinkedin size={20} /></a>
                        <a href="#" className="hover:text-blue-800 transition-colors dark:hover:text-blue-400"><FaFacebook size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailInvitation;