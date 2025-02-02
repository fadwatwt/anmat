import Page from "../Page.jsx";
import Table from "../../components/Tables/Table.jsx";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {useState} from "react";
import EditProjectModal from "./modal/EditProjectModal.jsx";
import {projects, tasks} from "../../functions/FactoryData.jsx";
import Alert from "../../components/Alert.jsx";
import NameAndDescription from "./Components/TableInfo/NameAndDescription.jsx";
import AccountDetails from "./Components/TableInfo/AccountDetails.jsx";
import {translateDate} from "../../functions/Days.js";
import Priority from "./Components/TableInfo/Priority.jsx";
import Status from "./Components/TableInfo/Status.jsx";
import {convertToSlug} from "../../functions/AnotherFunctions.js";

function ProjectsPage() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [isOpenEditModal,setIsOpenEditModal] = useState(false)
    const [isOpenDeleteAlert,setIsOpenDeleteAlert] = useState(false)
    const [projectEdit,setProjectEdit] = useState(null)
    const headers = [
        {label: t("Projects"), width: "200px"},
        {label: t("Manager"), width: "150px"},
        {label: t("Assigned - Due  Date"), width: "150px"},
        {label: t("No. of tasks"), width: "100px"},
        {label: t("Priority"), width: "100px"},
        {label: t("Status"), width: "100px"},
        {label: "", width: "50px"},
    ];

    const handelCreateProjectBtn = () => {
        navigate("/projects/create");
    }
    const handelEditModal = (index) => {
        console.log(index)
        setProjectEdit({tasks:tasks})
        setIsOpenEditModal(!isOpenEditModal)
    }
    const handelDeleteProject = (index) => {
        console.log(index)
        setIsOpenDeleteAlert(!isOpenDeleteAlert)
    }
    const ProjectRowTable = () => {
        return projects.map((project) => [
            <><NameAndDescription path={`/projects/${project.id}-${convertToSlug(project.name)}`} id={"4"} name={project.name}
                                  description={project.description}/></>,
            <><AccountDetails
                account={{
                    name: project.account?.name, rule: project.account?.rule,
                    imageProfile:project.account?.imageProfile,
                }}/></>,
            <><p className={"text-sm dark:text-sub-300"}>{translateDate(project.date)}</p></>,
            <><p className={"text-sm dark:text-sub-300"}>{project.count}</p></>,
            <><Priority type={project.priority?.type} title={project.priority?.title} /></>,
            <><Status type={project.status?.type} title={project.status?.title}/></>
        ]);
    };
    const rows = ProjectRowTable()
    return (
        <>
        <Page title={"Project"} isBtn={true} btnOnClick={handelCreateProjectBtn} btnTitle={"Create a Project"}>
            <div className={"flex flex-col gap-6"}>
                <div className="flex flex-col gap-2 h-full">
                    <Table className="custom-class" title={"All projects"} headers={headers} handelDelete={handelDeleteProject} handelEdit={handelEditModal} isActions={true}
                           rows={rows}
                           isFilter={true}/>
                </div>
                {/*<div className={"flex md:w-[37.5%] w-screen"}>*/}
                {/*    <TimeLine/>*/}
                {/*</div>*/}
            </div>
        </Page>
            <EditProjectModal project={projectEdit} isOpen={isOpenEditModal} onClose={handelEditModal} />
            <Alert type={"warning"} title={"Delete Project?"}
                   message={"Are you sure you want to delete this project."}
                   titleCancelBtn={"Cancel"}
                   titleSubmitBtn={"Delete"} isOpen={isOpenDeleteAlert} onClose={() => setIsOpenDeleteAlert(!isOpenDeleteAlert)} />
        </>
    );
}

export default ProjectsPage;