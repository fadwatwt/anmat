import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import Page from "../Page.jsx";
import Table from "../../components/Tables/Table.jsx";
import TimeLine from "../../components/TimeLine/TimeLine.jsx";
import {useState} from "react";
import {rowsTask, tasks} from "../../functions/FactoryData.jsx";
import EditTaskModal from "./modal/EditTaskModal.jsx";
import Alert from "../../components/Alert.jsx";

function TasksPage() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [isOpenEditModal,setIsOpenEditModal] = useState(false)
    const [taskEdit,setTaskEdit] = useState(null)
    const [isOpenDeleteAlert,setIsOpenDeleteAlert] = useState(false)
    const headers = [
        {label: t("Tasks"), width: "200px"},
        {label: t("Assigned to"), width: "150px"},
        {label: t("Manager"), width: "200px"},
        {label: t("Assigned - Due  Date"), width: "300px"},
        {label: t("Priority"), width: "100px"},
        {label: t("Status"), width: "100px"},
        {label: "", width: "50px"},
    ];


    const handelCreateProjectBtn = () => {
        navigate("/tasks/create");
    }
    const handelEditModal = (index) => {
        console.log(index)
        setTaskEdit({tasks:tasks})
        setIsOpenEditModal(!isOpenEditModal)
    }
    const handelDeleteTask = (index) => {
        console.log(index)
        setIsOpenDeleteAlert(!isOpenDeleteAlert)
    }
    return (
        <>
        <Page title={"Tasks"} isBtn={true} btnOnClick={handelCreateProjectBtn} btnTitle={"Create a Task"}>
            <div className={"flex flex-col gap-6"}>
                <div className="flex flex-col gap-2 h-full">
                    <Table className="custom-class" title={"All tasks"} handelDelete={handelDeleteTask} headers={headers}  handelEdit={handelEditModal} isActions={true}
                           rows={rowsTask}
                           isFilter={true}/>
                </div>
                <div className={"flex md:w-[37.5%] w-screen"}>
                    <TimeLine/>
                </div>
            </div>
        </Page>
            <EditTaskModal task={taskEdit} isOpen={isOpenEditModal} onClose={handelEditModal} />
            <Alert type={"warning"} title={"Delete Task?"}
                   message={"Are you sure you want to delete this task."}
                   titleCancelBtn={"Cancel"}
                   titleSubmitBtn={"Delete"} isOpen={isOpenDeleteAlert} onClose={() => setIsOpenDeleteAlert(!isOpenDeleteAlert)} />
        </>
    );
}

export default TasksPage;