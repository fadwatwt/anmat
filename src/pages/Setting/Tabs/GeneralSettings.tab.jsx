
import RegionalPreferences from "../components/RegionalPreferences.jsx";
import Sidebar from "../../../components/Subcomponents/Sidebar.jsx";
import {SlGlobe} from "react-icons/sl";
import {IoSunnyOutline} from "react-icons/io5";
import {useState} from "react";
import ThemeOptions from "../components/ThemeOptions.jsx";
import {useTranslation} from "react-i18next";


function GeneralSettingsTab() {
    const {t} = useTranslation()
    const listSideBar = [
        {id:"regional-preferences",title:"Regional Preferences",icon:<SlGlobe/>},
        {id:"theme-options",title:"Theme Options",icon:<IoSunnyOutline />}
    ]
    const [activeTab, setActiveTab] = useState('regional-preferences');

    const handelChangeActiveTab = (activeTap) => {
        setActiveTab(activeTap);
    }
    return (
        <div className={"flex md:gap-32 gap-10 w-full md:flex-row flex-col"}>
            <div>
                <div className={"bg-white dark:bg-gray-800 py-3 px-2 w-64 flex flex-col gap-2 rounded-lg "}>
                    <p className={"uppercase text-sm px-3 text-start dark:text-gray-200"}>{t("select menu")}</p>
                    <Sidebar activeItem={activeTab} onClick={handelChangeActiveTab} list={listSideBar}/>
                </div>
            </div>
            <div className={"p-5 rounded-2xl dark:bg-gray-800 lg:w-4/12"}>
                {
                    activeTab === 'regional-preferences' ? <RegionalPreferences/> : <ThemeOptions />
                }
            </div>
        </div>

    );
}

export default GeneralSettingsTab;