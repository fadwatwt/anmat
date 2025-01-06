import InputAndLabel from "../../../../../components/Form/InputAndLabel.jsx";
import TextAreaWithLabel from "../../../../../components/Form/TextAreaWithLabel.jsx";
import DefaultSelect from "../../../../../components/Form/DefaultSelect.jsx";
import FileUpload from "../../../../../components/Form/FileUpload.jsx";
import DateInput from "../../../../../components/Form/DateInput.jsx";

function TaskMainInfo() {
    const optionsDepartment = [
        {id:"",value:"Select Department..."}
    ]
    const optionsManager = [
        {id:"",value:"Select Manager..."}
    ]
    const optionsEmployees = [
        {id:"",value:"Select Employees..."}
    ]
    const optionsStatus = [
        {id:"",value:"Select Status..."}
    ]
    const optionsPriority = [
        {id:"",value:"Select Priority..."}
    ]
    return (
        <div className={"flex flex-col gap-4 max-h-full"}>
            <p className={"w-full py-[6px] bg-weak-100 text-start text-xs"}>Task main info:</p>
            <InputAndLabel type={"text"} title={"Task Name"} placeholder={"Task Name..."}/>
            <TextAreaWithLabel title={"Description"} placeholder={"Add a description"}/>
            <DefaultSelect title={"Department"} options={optionsDepartment}/>
            <div className={"flex items-center justify-center gap-2"}>
                <DefaultSelect title={"Manager"} options={optionsManager} classNameContainer={"flex-1"}/>
                <DefaultSelect title={"Employees"} options={optionsEmployees} classNameContainer={"flex-1"}/>
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <DateInput name={"assignedDate"} title={"Assigned Date"} className={"flex-1"}/>
                <DateInput name={"dueDate"} title={"Due Date"} className={"flex-1"}/>
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <DefaultSelect title={"Status"} options={optionsStatus} classNameContainer={"flex-1"}/>
                <DefaultSelect title={"Priority"} options={optionsPriority} classNameContainer={"flex-1"}/>
            </div>
            <DefaultSelect title={"Dependent Department"} isOption={true} options={optionsDepartment}/>
            <FileUpload/>
        </div>
    );
}

export default TaskMainInfo;