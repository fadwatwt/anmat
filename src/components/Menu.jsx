import {MdManageAccounts, MdOutlineArrowBackIosNew, MdWindow} from "react-icons/md";
import {AiOutlineMessage, AiOutlineProject} from "react-icons/ai";
import {GrTask} from "react-icons/gr";
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {IoSettingsOutline, IoShareSocial} from "react-icons/io5";
import {Link} from "react-router";
import PropTypes from 'prop-types';
import SearchInput from "./Form/SearchInput.jsx";

function Menu({isSlidebarOpen,taggleSlidebarOpen}) {
    return (
        <div className={`md:relative md:translate-x-0 bg-white dark:bg-gray-800 min-w-64 w-64
        h-screen fixed top-0 left-0 z-40 transition-transform ${isSlidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className={" flex p-5 gap-2 border-b-2 dark:border-gray-600 items-center overflow-hidden"}>
                <div className={"profile-image"}>
                    <img src={"https://placehold.co/600x600/F3B653/FFFFFF/png"} alt={"img"}
                         className={" w-12 h-12 rounded-full m-0 p-0"}/>
                </div>
                <div className={"flex flex-col  gap-2 justify-center  "}>
                    <p className={"text-[12px] dark:text-white text-start truncate w-28 md:w-full"}>Employees Management</p>
                    <p className={"text-[11px] dark:text-white text-gray-500 truncate w-28 md:w-full"}>Employees & HR Management</p>
                </div>
                {
                    isSlidebarOpen && (
                        <button className="inline-flex h-8 w-8 items-center p-2 text-sm text-gray-500
                rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                onClick={taggleSlidebarOpen}>
                            <MdOutlineArrowBackIosNew />
                        </button>
                    )
                }

            </div>
            <div className="md:hidden px-5 pt-5">
                <SearchInput/>
            </div>
            <div className={"md:h-[calc(100vh-6.5rem)] mt-4 h-[calc(100vh-15rem)] flex flex-col justify-between"}>
                <div className={"py-5 menu-list sm:py-0 flex flex-col gap-2 text-gray-500"}>
                    <Link to={"/"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <MdWindow className={" dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Dashboard</p>
                        </div>
                    </Link>
                    <Link to={"projects"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <AiOutlineProject className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Projects</p>
                        </div>
                    </Link>
                    <Link to={"tasks"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <GrTask className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Tasks</p>
                        </div>
                    </Link>
                    <Link to={"analytics"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <TbBrandGoogleAnalytics className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Analytics</p>
                        </div>
                    </Link>
                    <Link to={"hr-management"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <MdManageAccounts className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>HR Management</p>
                        </div>
                    </Link>
                    <Link to={"/conversations"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <AiOutlineMessage className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Conversations</p>
                        </div>
                    </Link>
                    <Link to={"/social-media"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <IoShareSocial className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Social Media</p>
                        </div>
                    </Link>
                </div>
                <div className={""}>
                    <Link to={"/settings"} className={"menu-item flex gap-2 items-center group w-full"}>
                        <div className={"group-hover:bg-primary-500 w-1 h-6 rounded-br-lg rounded-tr-lg"}></div>
                        <div
                            className={"flex gap-1 w-11/12 items-center p-3  group-hover:bg-[#EBF1FF] cursor-pointer hover:text-black rounded-lg"}>
                            <IoSettingsOutline className={"dark:text-white group-hover:text-primary-500"} size={25}/>
                            <p className={"dark:text-gray-300 dark:group-hover:text-black"}>Settings</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

Menu.propTypes = {
    isSlidebarOpen: PropTypes.bool,
    taggleSlidebarOpen: PropTypes.func,
};

export default Menu;