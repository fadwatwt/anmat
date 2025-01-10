import Status from "../../TableInfo/Status.jsx";
import {PiDotsThreeVerticalBold} from "react-icons/pi";
import ReadMore from "../../../../../functions/ReadMore.jsx";
import ProjectProgress from "./ProjectProgress.jsx";
import {FaTasks} from "react-icons/fa";
import {FaCircleCheck} from "react-icons/fa6";
import {HiOutlineCalendarDateRange} from "react-icons/hi2";

function ProjectInfoCard() {
    const tasks =
        `<div class="list-key-tasks flex flex-col items-start">
            <p class="text-xs text-soft-400 text-start">1- Taking a good look at the current website design.</p>
            <p class="text-xs text-soft-400 text-start">2- Working with the UI/UX team to sketch out some
                wireframes and mockups..</p>
            <p class="text-xs text-soft-400 text-start">3- Tweaking the design based on what everyone thinks.</p>
            <p class="text-xs text-soft-400 text-start">4- Putting the final design changes into action with HTML,
                CSS, and JavaScript.</p>
            <p class="text-xs text-soft-400 text-start">5- Testing the site on various devices and browsers</p>
        </div>`
    return (
        <div className={"flex flex-col p-4 w-full bg-white rounded-2xl gap-3"}>
            <div className={"title-header w-full flex justify-between items-center"}>
                <div className={"flex gap-2"}>
                    <p className={"text-xl"}>Project Omega</p>
                    <Status type={"Active"} title={"Active"}/>
                </div>
                <PiDotsThreeVerticalBold
                    className="cursor-pointer"
                    onClick={() => {
                    }}
                />
            </div>
            <div className={"description flex flex-col gap-1 items-start"}>
                <p className={"text-sm"}>Description:</p>
                <p className={"text-xs text-soft-400 text-start"}>
                    The website could really use a makeover to make it more user-friendly
                    and visually appealing. We want to go for a fresh, modern look that
                    keeps up with the latest design trends. The new design should make it
                    super easy to navigate and read
                </p>
            </div>
            <div className={"key-tasks flex flex-col gap-1 items-start"}>
                <p className={"text-sm"}>Key Tasks:</p>
                <ReadMore maxLength={400} htmlContent={tasks}/>
            </div>
            <ProjectProgress progress={"28"}/>
            <div className={"flex p-4 h-full rounded-xl bg-veryWeak-50 justify-between "}>
                <div className={"flex gap-3 items-center"}>
                    <div className={"p-[6px] rounded-full bg-primary-lighter"}>
                        <FaTasks className={"text-primary-400"}/>
                    </div>
                    <div className={"flex flex-col items-start"}>
                        <p className={"text-sub-500 text-xs"}>All Tasks</p>
                        <p className={"text-sm"}>15</p>
                    </div>
                </div>
                <div className="line w-[1px] bg-gray-300"></div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"p-[6px] rounded-full bg-primary-lighter"}>
                        <FaCircleCheck className={"text-green-600"}/>
                    </div>
                    <div className={"flex flex-col items-start"}>
                        <p className={"text-sub-500 text-xs"}>Completed Tasks</p>
                        <p className={"text-sm"}>4</p>
                    </div>
                </div>
                <div className="line w-[1px] bg-gray-300"></div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"p-[6px] rounded-full bg-primary-lighter"}>
                        <HiOutlineCalendarDateRange className={"text-cyan-600"}/>
                    </div>
                    <div className={"flex flex-col items-start"}>
                        <p className={"text-sub-500 text-xs"}>Assigned Date</p>
                        <p className={"text-sm"}>5th Mar, 2025</p>
                    </div>
                </div>
                <div className="line w-[1px] bg-gray-300"></div>
                <div className={"flex gap-3 items-center"}>
                    <div className={"p-[6px] rounded-full bg-primary-lighter"}>
                        <HiOutlineCalendarDateRange className={"text-gray-600"}/>
                    </div>
                    <div className={"flex flex-col items-start"}>
                        <p className={"text-sub-500 text-xs"}>Due Date</p>
                        <p className={"text-sm"}>05,Dec 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfoCard;