import FileUpload from "../../../../Form/FileUpload.jsx";
import DefaultButton from "../../../../Form/DefaultButton.jsx";
import WordTheMiddleAndLine from "../../../../Subcomponents/WordTheMiddleAndLine.jsx";

function DeletePostByFileMethod() {
    return (
        <div className={"flex flex-col gap-3"}>
            <FileUpload/>
            <WordTheMiddleAndLine/>
            <div className={"flex gap-2"}>
                <DefaultButton type={'button'} title={"Cancel"}/>
                <DefaultButton type={'button'} title={"Apply"} className={"bg-primary-500 text-white"}/>
            </div>
        </div>
    );
}

export default DeletePostByFileMethod;