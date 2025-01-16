import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import NameAndDescription from "../Projects/Components/TableInfo/NameAndDescription.jsx";
import AccountDetails from "../Projects/Components/TableInfo/AccountDetails.jsx";
import Priority from "../Projects/Components/TableInfo/Priority.jsx";
import Status from "../Projects/Components/TableInfo/Status.jsx";
import {translateDate} from "../../functions/Days.js";
import Page from "../Page.jsx";
import Table from "../../components/Tables/Table.jsx";
import TimeLine from "../../components/TimeLine/TimeLine.jsx";
import MembersListXLine from "../Projects/Components/ProjectDetails/components/MembersListXLine.jsx";

function TasksPage() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const headers = [
        {label: t("Tasks"), width: "200px"},
        {label: t("Assigned to"), width: "150px"},
        {label: t("Manager"), width: "200px"},
        {label: t("Assigned - Due  Date"), width: "300px"},
        {label: t("Priority"), width: "100px"},
        {label: t("Status"), width: "100px"},
        {label: "", width: "50px"},
    ];

    const members = [
        {
            name: "Bob Brown",
            imageProfile: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
        },
        {
            name: "Alice Johnson",
            imageProfile: "https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=",
        },
        {
            name: "Bob Brown",
            imageProfile: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
        },
        {
            name: "Alice Johnson",
            imageProfile: "https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=",
        },
    ]

    const row1 =  [
        <><NameAndDescription path={"/tasks/1"} id={"1"} name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><MembersListXLine members={members} maxVisible={3}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")} - {translateDate("2025-01-16T10:00:00")}</p></>,
        <><Priority type={"Urgent"} title={"Urgent"} /></>,
        <><Status type={"Active"} title={"Active"}/></>
    ]
    const row2 =  [
        <><NameAndDescription path={"/tasks/2"} id={"2"} name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><MembersListXLine members={members} maxVisible={3}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")} - {translateDate("2025-01-16T10:00:00")}</p></>,
        <><Priority type={"High"} title={"High"} /></>,
        <><Status type={"Inactive"} title={"Inactive"}/></>
    ]
    const row3 =  [
        <><NameAndDescription path={"/tasks/3"} id={"3"} name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><MembersListXLine members={members} maxVisible={3}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")} - {translateDate("2025-01-16T10:00:00")}</p></>,
        <><Priority type={"Low"} title={"Low"} /></>,
        <><Status type={"Delayed"} title={"Delayed"}/></>
    ]
    const row4 =  [
        <><NameAndDescription path={"/tasks/4"} id={"4"} name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><MembersListXLine members={members} maxVisible={3}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")} - {translateDate("2025-01-16T10:00:00")}</p></>,
        <><Priority type={"Medium"} title={"Medium"} /></>,
        <><Status type={"Scheduled"} title={"Scheduled"}/></>
    ]


    const rows = [
        row1,
        row2,
        row3,
        row4,
    ];
    const handelCreateProjectBtn = () => {
        navigate("/tasks/create");
    }
    return (
        <Page title={"Tasks"} isBtn={true} btnOnClick={handelCreateProjectBtn} btnTitle={"Create a Task"}>
            <div className={"flex flex-col gap-6"}>
                <div className="flex flex-col gap-2 h-full">
                    <Table className="custom-class" title={"All tasks"} headers={headers} isActions={true}
                           rows={rows}
                           isFilter={true}/>
                </div>
                <div className={"flex md:w-[37.5%] w-screen"}>
                    <TimeLine/>
                </div>
            </div>
        </Page>
    );
}

export default TasksPage;