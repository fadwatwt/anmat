import InputAndLabel from "../../../../../components/Form/InputAndLabel.jsx";
import TextAreaWithLabel from "../../../../../components/Form/TextAreaWithLabel.jsx";
import DefaultSelect from "../../../../../components/Form/DefaultSelect.jsx";
import DateInput from "../../../../../components/Form/DateInput.jsx";
import PropTypes from "prop-types";
import {RiDeleteBin7Line} from "react-icons/ri";

function TaskStage({stageNumber,handelDelete}) {
    const optionsStatus = [
        {id:"",value:"Select Status..."}
    ]
    const optionsPriority = [
        {id:"",value:"Select Priority..."}
    ]
    return (
        <div className={"flex flex-col gap-4 max-h-full"}>
            <div className={"flex bg-weak-100 justify-between items-center w-full"}>
                <p className={"w-full py-[6px] text-start text-xs"}>{`Task Stage(${stageNumber})`}</p>
                <RiDeleteBin7Line className={"cursor-pointer text-red-500"} onClick={() => handelDelete(stageNumber)} size={18}  />
            </div>
            <InputAndLabel type={"text"} title={"Stage Name"} placeholder={"Stage Name..."}/>
            <TextAreaWithLabel title={"Description"} placeholder={"Description text..."}/>
            <div className={"flex items-center justify-center gap-2"}>
                <DefaultSelect title={"Status"} options={optionsStatus} classNameContainer={"flex-1"}/>
                <DefaultSelect title={"Priority"} options={optionsPriority} classNameContainer={"flex-1"}/>
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <DateInput name={"assignedDate"} title={"Assigned Date"} className={"flex-1"}/>
                <DateInput name={"dueDate"} title={"Due Date"} className={"flex-1"}/>
            </div>
        </div>
    );

}

TaskStage.propTypes = {
    stageNumber: PropTypes.string,
    handelDelete: PropTypes.func,
}

export default TaskStage;