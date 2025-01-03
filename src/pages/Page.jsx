import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {FiPlus} from "react-icons/fi";


function Page({children,title,isBtn,btnOnClick,btnTitle}) {
    const {t} = useTranslation()
    return (
        <div className="max-h-full h-[calc(100vh-72px)] overflow-hidden overflow-y-auto overflow-x-auto tab-content md:px-10 px-3 dark:bg-gray-900 box-border  mx-auto py-5 flex flex-col gap-4">
            <div className={"flex justify-between"}>
                <div
                    className="title-page dark:text-white text-start w-full h-[7.8%] py-4 text-base sm:text-lg md:text-xl text-gray-600">
                    {t(title)}
                </div>
                {
                    isBtn && (
                        <div className="">
                            <button onClick={btnOnClick}
                                    className={"bg-primary-base dark:bg-primary-200 flex gap-1 items-center p-[10px] rounded-[10px]"}>
                                <FiPlus className={"text-white text-md dark:text-black"}/>
                                <span className={"text-white text-md text-nowrap dark:text-black"}>{t(btnTitle)}</span>
                            </button>
                        </div>
                    )
                }

            </div>
            {children}
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    isBtn: PropTypes.bool,
    btnTitle: PropTypes.string,
    btnOnClick: PropTypes.func,
}

export default Page;