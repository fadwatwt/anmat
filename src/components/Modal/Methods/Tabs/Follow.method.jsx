import FileUpload from "../../../Form/FileUpload.jsx";
import WordTheMiddleAndLine from "../../../Subcomponents/WordTheMiddleAndLine.jsx";
import DefaultButton from "../../../Form/DefaultButton.jsx";
import InputAndLabel from "../../../Form/InputAndLabel.jsx";

function FollowMethod() {
    return (
        <div className={""}>
            <FileUpload/>
           <WordTheMiddleAndLine word={"OR"}/>
           <InputAndLabel type={"text"} title={"Insert link"} placeholder={"Insert link.."}/>
            <WordTheMiddleAndLine />
            <div className={"flex gap-2"}>
                <DefaultButton type={'button'} title={"Cancel"} />
                <DefaultButton type={'button'} title={"Apply"} className={"bg-primary-500 text-white"} />
            </div>
        </div>
    );
}

export default FollowMethod;