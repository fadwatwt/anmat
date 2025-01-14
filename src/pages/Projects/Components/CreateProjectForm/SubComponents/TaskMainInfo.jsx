import InputAndLabel from "../../../../../components/Form/InputAndLabel.jsx";
import TextAreaWithLabel from "../../../../../components/Form/TextAreaWithLabel.jsx";
import DefaultSelect from "../../../../../components/Form/DefaultSelect.jsx";
import FileUpload from "../../../../../components/Form/FileUpload.jsx";
import DateInput from "../../../../../components/Form/DateInput.jsx";
import UserSelect from "../../../../../components/Form/UserSelect.jsx";
import ElementsSelect from "../../../../../components/Form/ElementsSelect.jsx";
import Priority from "../../TableInfo/Priority.jsx";
import Status from "../../TableInfo/Status.jsx";
import {useTranslation} from "react-i18next";

function TaskMainInfo() {
    const {t} = useTranslation()
    const users = [
        {
            id: 1,
            name: "Yara Nabil",
            username: "Yara",
            image: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
        },
        {
            id: 2,
            name: "Ahmed Khalil",
            username: "Ahmed",
            image: "https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=",
        },
        {
            id: 3,
            name: "Ali Farouk",
            username: "Ali",
            image: "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=",
        },
        {
            id: 4,
            name: "Mohamed El-Sayed",
            username: "Mohamed",
            image: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
        },
    ];

    const optionsDepartment = [
        {id:"",value:`${t('Select Department')}...`}
    ]
    const optionsManager = [
        {id:"",value:`${t('Select Manager')}...`}
    ]
    const optionsEmployees = [
        {id:"",value:`${t('Select Employees')}...`}
    ]
    const optionsStatus = [
        {id:"1",element:<Status type={"Active"} title={"Active"}/>},
        {id:"2",element:<Status type={"Inactive"} title={"Inactive"}/>},
        {id:"3",element:<Status type={"Delayed"} title={"Delayed"}/>},
        {id:"4",element:<Status type={"Scheduled"} title={"Scheduled"}/>},
    ]
    const optionsPriority = [
        {id:"1",element:<Priority type={"Urgent"} title={"Urgent"}/>},
        {id:"2",element:<Priority type={"High"} title={"High"}/>},
        {id:"3",element:<Priority type={"Medium"} title={"Medium"}/>},
        {id:"4",element:<Priority type={"Low"} title={"Low"}/>},
    ]
    return (
        <div className={"flex flex-col gap-4 max-h-full"}>
            <p className={"w-full py-[6px] bg-weak-100 text-start text-xs dark:bg-weak-800 text-primary-150"}>{t("Task main info")}:</p>
            <InputAndLabel type={"text"} title={"Task Name"} placeholder={"Task Name"}/>
            <TextAreaWithLabel title={"Description"} placeholder={"Add a description"}/>
            <DefaultSelect title={"Department"} options={optionsDepartment}/>
            <div className={"flex items-center justify-center gap-2"}>
                <DefaultSelect title={"Manager"} options={optionsManager} classNameContainer={"flex-1"}/>
                <UserSelect users={users} title={"Employees"} options={optionsEmployees} classNameContainer={"w-1/2"}/>
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <DateInput name={"assignedDate"} title={"Assigned Date"} className={"flex-1"}/>
                <DateInput name={"dueDate"} title={"Due Date"} className={"flex-1"}/>
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <ElementsSelect title={"Status"} placeholder={"Select a state"} options={optionsStatus} classNameContainer={"flex-1"}/>
                <ElementsSelect title={"Priority"} placeholder={"Select a priority"} options={optionsPriority} classNameContainer={"flex-1"}/>
            </div>
            <DefaultSelect title={"Dependent Department"} isOption={true} options={optionsDepartment}/>
            <FileUpload/>
        </div>
    );
}

export default TaskMainInfo;