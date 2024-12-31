import {useTranslation} from "react-i18next";
import {FaRegComment} from "react-icons/fa";
import {BiLike} from "react-icons/bi";
import {RiSendPlane2Fill} from "react-icons/ri";

function TimeLine() {
    const {t,i18n} = useTranslation()
    return (
        <div className={"p-3"}>
            <div className={"p-2 flex flex-col gap-5 border-[0.5px] border-soft-200 dark:border-gray-700 dark:bg-white-0 h-full rounded-2xl"}>
                <div className={"flex justify-between items-center py-1"}>
                    <p className={"text-sm dark:text-main-900"}>{t("Timeline")}</p>
                    <div className={"px-1 py-0.5"}>
                        <p className={"text-xs text-primary-500 dark:text-primary-200 cursor-pointer"}>{t("View all")}</p>
                    </div>
                </div>
                <div className={"p-2 flex gap-2 items-center flex-col bg-gray-50 dark:bg-veryWeak-50 rounded-xl"}>
                        <div className={"flex flex-col gap-2 items-start"}>
                            <div className={"flex gap-2"}>
                                <div>
                                    <img src={"https://i.pinimg.com/originals/17/9e/25/179e258f61d2d0f56b850b7d85c76493.jpg"} alt={"profile"}
                                         className={"max-w-full w-6 h-6 rounded-full"}/>
                                </div>
                                <div className={"flex flex-col items-start"}>
                                    <p className={"text-sm dark:text-main-900"}>Ahmed Mohammed</p>
                                    <p className={"text-xs text-gray-500 dark:text-soft-400"}>{" 25 "+ t("Dec") +" - 1:30 "+ t("PM")}</p>
                                </div>
                            </div>
                            <div className={"description text-start"}>
                                <p className={"text-sm dark:text-main-900"}>
                                    We&apos;re excited to welcome <span className={"text-primary-base"}>@Ahemd</span> to
                                    our team! Next month, we&apos;ll be unveiling a range
                                    of new features designed to elevate your experience with our software. Keep an eye
                                    out for more updates!
                                </p>
                            </div>
                            <div className={"images flex flex-col gap-1"}>
                                <div className={"large-image max-w-[200px] max-h-[148px]"}>
                                    <img
                                        src={"https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Heydar-Aliyev-Center-Baku-Azerbaijan-ar02072020-1024x640.jpg"}
                                        alt={"large image"} className={"rounded max-w-full object-cover"}/>
                                </div>
                                <div className={"another-images flex max-w-[200px] justify-between flex-wrap"}>
                                    <img
                                        src={"https://www.alquds.co.uk/wp-content/uploads/2024/02/07-11.jpg"}
                                        alt={"large image"} className={"rounded w-16 h-16 object-cover"}/>
                                    <img
                                        src={"https://i.cdn.turner.com/dr/cnnarabic/cnnarabic/release/sites/default/files/styles/landscape_780x440/public/image/1_6.JPG?itok=pmNMX7TP"}
                                        alt={"large image"} className={"rounded w-16 h-16  object-cover"}/>
                                    <img
                                        src={"https://cdn.cgway.net/wp-content/uploads/2023/12/the-most-famous-arab-architects-01.jpg"}
                                        alt={"large image"} className={"rounded w-16 h-16  object-cover max-w-16 h-16"}/>
                                </div>
                            </div>
                        </div>
                    <div className={"flex flex-col gap-3 pr-1"}>
                        <div className={"actions self-start flex w-full justify-between"}>
                            <div className={"flex gap-1 flex-1"}>
                                <div className={"px-2 py-1 cursor-pointer bg-primary-lighter dark:bg-primary-700 flex gap-1 items-baseline rounded-lg"}>
                                    <BiLike className={"text-sm text-primary-base dark:text-primary-150"}/><span
                                    className={"text-primary-base text-xs dark:text-primary-150"}>{t("Like")}</span>
                                </div>
                                <div className={"py-1 px-2 cursor-pointer bg-primary-lighter flex gap-1 items-center rounded-lg dark:bg-primary-700"}>
                                    <FaRegComment className={"text-sm text-primary-base dark:text-primary-150"}/><span
                                    className={"text-primary-base text-xs dark:text-primary-150"}>{t("Comment")}</span>
                                </div>
                            </div>
                            <div className={"flex justify-end items-center flex-1"}>
                                <div className={`flex items-center justify-start gap-1 ${i18n.language == "ar" ? "flex-row-reverse":"flex-row"}` }>
                                    <BiLike className={"text-xs text-gray-400 dark:text-gray-100"}/>
                                    <p className={"text-gray-400 text-[11px] dark:text-gray-100"}>20</p>
                                </div>
                            </div>
                        </div>
                        <div className={"flex items-center w-full gap-1"}>
                            <img
                                src={"https://sowarprofil.com/wp-content/uploads/2024/04/%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83-1-1024x1024.png.webp"}
                                alt={""} className={"max-w-full w-6 h-6 rounded-full"}/>
                            <div className={""}>
                                <input type={"text"}
                                       className={" flex-2 rounded-xl w-[98%] p-2 box-border border-[0.5px] border-sub-300 placeholder:text-soft-400 dark:bg-white-0 dark:placeholder:text-soft-200 dark:border-veryWeak-50  text-xs"}
                                       placeholder={t("Write A Comment..")}/>
                            </div>
                            <div className={"flex-1 cursor-pointer"}>
                                <RiSendPlane2Fill className={"text-primary-base text-lg"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;