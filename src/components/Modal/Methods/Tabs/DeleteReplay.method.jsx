import InputAndLabel from "../../../Form/InputAndLabel.jsx";
import FileUpload from "../../../Form/FileUpload.jsx";
import WordTheMiddleAndLine from "../../../Subcomponents/WordTheMiddleAndLine.jsx";
import DefaultButton from "../../../Form/DefaultButton.jsx";

function DeleteReplayMethod() {
    return (
        <div className={"flex flex-col gap-2"}>
            <InputAndLabel type={"text"} title={"Insert Post Link"} placeholder={"Insert link.."} className={"mb-2"}/>
            <FileUpload/>
            <WordTheMiddleAndLine/>
            <div className={"flex gap-2"}>
                <DefaultButton type={'button'} title={"Cancel"}/>
                <DefaultButton type={'button'} title={"Apply"} className={"bg-primary-500 text-white"}/>
            </div>
        </div>
    );
}

export default DeleteReplayMethod;