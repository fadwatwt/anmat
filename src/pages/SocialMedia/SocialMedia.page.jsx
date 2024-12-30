import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import Tabs from "../../components/Tabs.jsx";
import FacebookTab from "./Tabs/Facebook.tab.jsx";
import {useTranslation} from "react-i18next";
import TweeterTab from "./Tabs/Tweeter.tab.jsx";

function SocialMediaPage() {
    const {t} = useTranslation()
    const tabsData = [
        {
            title: "Facebook",
            icon: RiFacebookFill,
            content: <FacebookTab/>,
        },
        {
            title: "Twitter",
            icon: FaXTwitter,
            content: <TweeterTab />,
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
        <div className="max-h-screen md:px-10 px-3 dark:bg-gray-900 box-border  mx-auto py-5 flex flex-col gap-4">
            <div className="title-page dark:text-white text-start w-full h-[7.8%] py-4 text-base sm:text-lg md:text-xl text-gray-600">
                {t('Social Media')}
            </div>
            <Tabs tabs={tabsData}/>
        </div>

    );
}

export default SocialMediaPage;
