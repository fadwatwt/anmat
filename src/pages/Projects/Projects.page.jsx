import Page from "../Page.jsx";
import Table from "../../components/Tables/Table.jsx";
import {useTranslation} from "react-i18next";
import AccountDetails from "./Components/TableInfo/AccountDetails.jsx";
import NameAndDescription from "./Components/TableInfo/NameAndDescription.jsx";
import Priority from "./Components/TableInfo/Priority.jsx";
import Status from "./Components/TableInfo/Status.jsx";
import TimeLine from "../../components/TimeLine/TimeLine.jsx";

function ProjectsPage() {
    const {t} = useTranslation()
    const headers = [
        {label: t("Projects"), width: "200px"},
        {label: t("Manager"), width: "150px"},
        {label: t("Assigned - Due  Date"), width: "150px"},
        {label: t("No. of tasks"), width: "100px"},
        {label: t("Priority"), width: "100px"},
        {label: t("Status"), width: "100px"},
        {label: "", width: "50px"},
    ];
    const row1 =  [
        <><NameAndDescription name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>16 Jan, 2025</p></>,
        <><p className={"text-sm dark:text-sub-300"}>5</p></>,
        <><Priority type={"Urgent"} title={"Urgent"} /></>,
        <><Status type={"Active"} title={"Active"}/></>
    ]
    const row2 =  [
        <><NameAndDescription name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>16 Jan, 2025</p></>,
        <><p className={"text-sm dark:text-sub-300"}>5</p></>,
        <><Priority type={"High"} title={"High"} /></>,
        <><Status type={"Inactive"} title={"Inactive"}/></>
    ]
    const row3 =  [
        <><NameAndDescription name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>16 Jan, 2025</p></>,
        <><p className={"text-sm dark:text-sub-300"}>5</p></>,
        <><Priority type={"Low"} title={"Low"} /></>,
        <><Status type={"Delayed"} title={"Delayed"}/></>
    ]
    const row4 =  [
        <><NameAndDescription name={"Pulse Dashboard"}
                              description={"Developing a dashboard for real-time performance."}/></>,
        <><AccountDetails
            account={{
                name: "Fatma Ahmed Moh", rule: "Product Manager",
                imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
            }}/></>,
        <><p className={"text-sm dark:text-sub-300"}>16 Jan, 2025</p></>,
        <><p className={"text-sm dark:text-sub-300"}>5</p></>,
        <><Priority type={"Medium"} title={"Medium"} /></>,
        <><Status type={"Scheduled"} title={"Scheduled"}/></>
    ]


    const rows = [
        row1,
        row2,
        row3,
        row4,
    ];
    return (
        <Page title={"Project"} isBtn={true} btnTitle={"Create a Project"}>
            <div className={"flex flex-col gap-6"}>
                <div className="flex flex-col gap-2 h-full">
                    <Table className="custom-class" title={"All projects"} headers={headers} isActions={true}
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

export default ProjectsPage;