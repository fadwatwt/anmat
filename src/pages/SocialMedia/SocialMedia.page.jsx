import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import Tabs from "../../components/Tabs.jsx";
import FacebookTab from "./Tabs/Facebook.tab.jsx";

function SocialMediaPage() {
    const tabsData = [
        {
            title: "Facebook",
            icon: RiFacebookFill,
            content: <FacebookTab/>,
        },
        {
            title: "Twitter",
            icon: FaXTwitter,
            content: <div>Twitter content goes here</div>,
        },
        {
            title: "Instagram",
            icon: IoLogoInstagram,
            content: <div>Instagram content goes here</div>,
        },
        {
            title: "Gmail",
            icon: CgMail,
            content: <div>Gmail content goes here</div>,
        },
        {
            title: "Youtube",
            icon: AiOutlineYoutube,
            content: <div>Youtube content goes here</div>,
        },
    ];

    return (
        <div className="max-h-screen px-10  box-border mx-auto p-5 flex flex-col gap-4">
            <div className="title-page text-start w-full py-3 text-base sm:text-lg md:text-xl text-gray-600">
                Social Media
            </div>
            <Tabs tabs={tabsData}/>
        </div>

    );
}

export default SocialMediaPage;
