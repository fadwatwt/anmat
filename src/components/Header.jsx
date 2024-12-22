import SearchInput from "./Form/SearchInput.jsx";
import {IoNotificationsOutline} from "react-icons/io5";
import {AiOutlineMessage} from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import PropTypes from "prop-types";
import {HiOutlineMenuAlt2} from "react-icons/hi";

function Header({taggleSlidebarOpen}) {
    return (
        <div className="header dark:bg-gray-800 max-w-full bg-white h-20 flex p-5 items-center justify-between">
            <button className="inline-flex items-center p-2 text-sm h-8 text-gray-500
                rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    onClick={taggleSlidebarOpen}>
                <HiOutlineMenuAlt2/>
            </button>
            <div className="hidden md:block">
                <SearchInput/>
            </div>
            <div className={"flex gap-5"}>
                <div className={"icons flex gap-2"}>
                    <div className={"icon-notification flex items-center h-10 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg py-1 px-3 text-center"}>
                        <IoNotificationsOutline/>
                    </div>
                    <div className={"icon-notification flex items-center dark:bg-gray-900 dark:text-gray-100 h-10 bg-gray-100 rounded-lg py-1 px-3 text-center"}>
                        <AiOutlineMessage />
                    </div>
                </div>
                <div className={"flex box-border rounded-lg border-2 dark:border-gray-700  py-1 px-2 items-center gap-1 cursor-pointer "}>
                    <div className={"p-1"}>
                        <img
                            src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            className={"w-7 h-7 rounded-full"} alt={"image-profile"}/>
                    </div>
                    <p className={"dark:text-gray-400"}>Rawan Ahmed</p>
                    <MdOutlineKeyboardArrowDown/>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    taggleSlidebarOpen: PropTypes.func,
};

export default Header;