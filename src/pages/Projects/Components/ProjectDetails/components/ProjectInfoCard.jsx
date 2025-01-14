import Status from "../../TableInfo/Status.jsx";
import {PiDotsThreeVerticalBold} from "react-icons/pi";
import ReadMore from "../../../../../functions/ReadMore.jsx";
import ProjectProgress from "./ProjectProgress.jsx";
import {FaTasks} from "react-icons/fa";
import {FaCircleCheck} from "react-icons/fa6";
import {HiOutlineCalendarDateRange} from "react-icons/hi2";
import PropTypes from "prop-types";
import React from "react";
import {useTranslation} from "react-i18next";
import {translateDate} from "../../../../../functions/Days.js";

function ProjectInfoCard() {
    const {t} = useTranslation()
    const tasks =
        `<div class="list-key-tasks flex flex-col items-start">
            <p class="text-xs text-soft-400 dark:text-soft-200 text-start">1- Taking a good look at the current website design.</p>
            <p class="text-xs text-soft-400 dark:text-soft-200 text-start">2- Working with the UI/UX team to sketch out some
                wireframes and mockups..</p>
            <p class="text-xs text-soft-400 dark:text-soft-200 text-start">3- Tweaking the design based on what everyone thinks.</p>
            <p class="text-xs text-soft-400 dark:text-soft-200 text-start">4- Putting the final design changes into action with HTML,
                CSS, and JavaScript.</p>
            <p class="text-xs text-soft-400 dark:text-soft-200 text-start">5- Testing the site on various devices and browsers</p>
        </div>`

    return (
        <div className={"flex flex-col p-4 w-full bg-white dark:bg-white-0 rounded-2xl gap-3"}>
            <div className={"title-header w-full flex justify-between items-center"}>
                <div className={"flex gap-2"}>
                    <p className={"text-xl dark:text-gray-200"}>Project Omega</p>
                    <Status type={"Active"} title={"Active"}/>
                </div>
                <PiDotsThreeVerticalBold
                    className="cursor-pointer"
                    onClick={() => {
                    }}
                />
            </div>
            <div className={"description flex flex-col gap-1 items-start"}>
                <p className={"text-sm dark:text-gray-200"}>{t("Description")}:</p>
                <p className={"text-xs text-soft-400 text-start dark:text-soft-200"}>
                    The website could really use a makeover to make it more user-friendly
                    and visually appealing. We want to go for a fresh, modern look that
                    keeps up with the latest design trends. The new design should make it
                    super easy to navigate and read
                </p>
            </div>
            <div className={"key-tasks flex flex-col gap-1 items-start"}>
                <p className={"text-sm dark:text-gray-200"}>{t("Key Tasks")}:</p>
                <ReadMore maxLength={400} htmlContent={tasks}/>
            </div>
            <ProjectProgress lastUpdate={"2025-01-12T08:00:00"} progress={"28"}/>
            <div className={"flex p-4 h-full rounded-xl bg-veryWeak-50 dark:bg-veryWeak-500 justify-between "}>
                <IconWithTitleAndNumber title={"All Tasks"} icon={<FaTasks className={"text-primary-400 dark:text-primary-base"} />} text={"15"} />
                <div className="line w-[1px] bg-gray-300"></div>
                <IconWithTitleAndNumber title={"Completed Tasks"} icon={ <FaCircleCheck className={"text-green-600 dark:text-green-400"}/>} text={"4"} />
                <div className="line w-[1px] bg-gray-300"></div>
                <IconWithTitleAndNumber title={"Assigned Date"} icon={<HiOutlineCalendarDateRange className={"text-cyan-600"}/>} date={"2025-03-16T14:30:00"} />
                <div className="line w-[1px] bg-gray-300"></div>
                <IconWithTitleAndNumber title={"Due Date"} icon={<HiOutlineCalendarDateRange />} date={"2025-01-15T14:30:00"} />
            </div>
        </div>
    );
}

function IconWithTitleAndNumber ({title,icon,text,date})
{
    const {t} = useTranslation()
    return(
    <div className={"flex gap-3 items-center"}>
        <div className={"p-[6px] rounded-full bg-primary-lighter"}>
            {icon && React.cloneElement(icon, {
            })}
        </div>
        <div className={"flex flex-col items-start"}>
            <p className={"text-sub-500 text-xs dark:text-gray-300"}>{t(title)}</p>
            {
                text && <p className={"text-sm dark:text-gray-100"}>{text}</p>
            }
            {
                date && <p className={"text-sm dark:text-gray-100"}>{translateDate(date)}</p>
            }
        </div>
    </div>
    )
}

IconWithTitleAndNumber.propTypes = {
    title:PropTypes.string,
    icon:PropTypes.string,
    text:PropTypes.string,
    date:PropTypes.string,
}

export default ProjectInfoCard;