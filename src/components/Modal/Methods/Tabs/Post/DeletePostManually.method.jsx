import FileUpload from "../../../../Form/FileUpload.jsx";
import WordTheMiddleAndLine from "../../../../Subcomponents/WordTheMiddleAndLine.jsx";
import DefaultButton from "../../../../Form/DefaultButton.jsx";
import {useTranslation} from "react-i18next";

function DeletePostManuallyMethod() {
    const {t} = useTranslation()
    return (
        <div className={"flex flex-col gap-3"}>
            <FileUpload/>
            <WordTheMiddleAndLine/>
            <div className={"flex gap-2"}>
                <DefaultButton type={'button'} title={t("Cancel")}/>
                <DefaultButton type={'button'} title={t("Apply")} className={"bg-primary-500 text-white"}/>
            </div>
        </div>
    );
}

export default DeletePostManuallyMethod;