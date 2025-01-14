import BtnAddOutline from "../../../../../components/Form/BtnAddOutline.jsx";
import PropTypes from "prop-types";
import {BiSolidFilePdf} from "react-icons/bi";
import {IoDocument, IoImage} from "react-icons/io5";
import {PiVideoFill} from "react-icons/pi";
import {RiDownload2Line} from "react-icons/ri";
import {AiOutlineDelete} from "react-icons/ai";
import {useTranslation} from "react-i18next";

function AttachmentsList({attachments}) {
    const {t} = useTranslation()
    const getFileIcons = (type) => {
        switch (type) {
            case "pdf":
                return <BiSolidFilePdf size={15} className={"text-gray-400 rounded"} />;
            case "image":
                return <IoImage size={15} className={"text-gray-400 rounded"} />;
            case "video":
                return <PiVideoFill  size={15} className={"text-gray-400 rounded"} />;
            default:
                return  <IoDocument  size={15} className={"text-gray-500 rounded"} />;
        }
    };
    return (
        <div className={"flex flex-col w-full p-4 rounded-2xl items-start gap-3 bg-white dark:bg-white-0"}>
            <p className={"text-lg dark:text-gray-200"}>{t("Attachments")}</p>
            <div className={"flex flex-col gap-3 w-full "}>
                {
                    attachments.map((attachment,index) => (
                        <div key={index} className={"flex justify-between items-center"}>
                            <div className={"flex gap-3 items-center"}>
                                <div className={"p-1 bg-gray-50 dark:bg-gray-900 rounded-full"}>
                                    {
                                        getFileIcons(attachment.type)
                                    }
                                </div>
                                <div className={"nameAndWork flex flex-col gap-1 items-start"}>
                                    <div className={"nameAndRule flex gap-1"}>
                                        <p className={"text-sm dark:text-gray-200"}>{attachment.name}</p>
                                    </div>
                                    <p className={"text-xs text-sub-500 dark:text-sub-300"}>{t("size")}:{attachment.size}</p>
                                </div>
                            </div>
                            <div className={"flex gap-2"}>
                                <AiOutlineDelete  className={"text-red-500"} size={20}/>
                                <RiDownload2Line className={"text-primary-base dark:text-primary-200"} size={20}/>
                            </div>
                        </div>
                    ))
                }
                <BtnAddOutline title={"Add a file"}/>
            </div>
        </div>
    );
}

AttachmentsList.propTypes = {
    attachments: PropTypes.array.isRequired
}

export default AttachmentsList;