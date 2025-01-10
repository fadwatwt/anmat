// import propTypes from "prop-types"
import {useParams} from "react-router";
import Page from "../../../Page.jsx";
import ProjectInfoCard from "./components/ProjectInfoCard.jsx";
import ProjectMembers from "./components/ProjectMembers.jsx";
import SelectWithoutLabel from "../../../../components/Form/SelectWithoutLabel.jsx";
import TasksList from "./components/TasksList.jsx";
import TaskComments from "./components/TaskComments.jsx";
import CommentInput from "../../../../components/CommentInput.jsx";
import AttachmentsList from "./components/AttachmentsList.jsx";
import ActivityLogs from "./components/ActivityLogs.jsx";
import TimeLine from "../../../../components/TimeLine/TimeLine.jsx";

function ProjectDetails() {
    const { id } = useParams();
    const breadcrumbItems = [
        { title: 'Projects', path: '/projects' },
        { title: 'Project Details', path: '' }
    ];

    const members = [
        {
            name: "John Doe",
            imageProfile: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg", // رابط الصورة الافتراضية
            rule: "Manager",
            work: "Managing project timelines and deliverables"
        },
        {
            name: "Jane Smith",
            imageProfile: "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=",
            rule: "Team lead",
            work: "Developing frontend components"
        },
        {
            name: "Alice Johnson",
            imageProfile: "https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=",
            rule: "Designer",
            work: "Designing user-friendly interfaces"
        },
        {
            name: "Bob Brown",
            imageProfile: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
            rule: "QA",
            work: "Testing for quality assurance"
        }
    ];

    const tasks = [
        {
            name: "Design Website Layout",
            members: [
                {
                    name: "John Doe",
                    imageProfile: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
                },
                {
                    name: "Jane Smith",
                    imageProfile: "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=",
                },
                {
                    name: "Alice Johnson",
                    imageProfile: "https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=",
                },
            ],
            delivery: "Delayed",
            rate:null
        },
        {
            name: "Implement Backend APIs",
            members: [
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
            ],
            delivery: "late",
            timeLate:"2 days, 0:50 hours late",
            rate:2
        },
        {
            name: "Perform QA Testing",
            members: [
                {
                    name: "Jane Smith",
                    imageProfile: "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=",
                },
                {
                    name: "Bob Brown",
                    imageProfile: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1",
                },
            ],
            delivery: "Delayed",
            rate:4.5
        },
    ];

    const comments = [
        {
            account: members[0], // أول عضو
            timeAgo: "2 hours ago",
            text: "Great progress on the project so far!",
            images: [
                "https://i.cdn.turner.com/dr/cnnarabic/cnnarabic/release/sites/default/files/styles/landscape_780x440/public/image/1_6.JPG?itok=pmNMX7TP", // رابط صورة للتعليق
            ],
        },
        {
            account: members[1], // ثاني عضو
            timeAgo: "1 day ago",
            text: "We need to discuss the timeline adjustments.",
            images: [
                "https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/gogxbp2tjsjvbnas7ygk", // رابط صورة للتعليق
                "https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/jfj1ro8ejfzmojl6k75w",
            ],
        },
        {
            account: members[2], // ثالث عضو
            timeAgo: "3 days ago",
            text: "Please review the design drafts I shared.",
            images: [],
        },
        {
            account: members[3], // رابع عضو
            timeAgo: "5 hours ago",
            text: "Testing has uncovered some critical issues.",
            images: [
                "https://images.adsttc.com/media/images/5c6e/5b10/284d/d151/2900/06ab/medium_jpg/L4979_N41_hd.jpg?1550736130",
            ],
        },
    ];

    const attachments = [
        {
            name: "Project_Plan.pdf",
            size: "2.4 MB",
            type: "pdf" // نوع الملف لتحديد الأيقونة
        },
        {
            name: "UI_Design.png",
            size: "1.2 MB",
            type: "image" // نوع الملف لتحديد الأيقونة
        },
        {
            name: "Team_Meeting.mp4",
            size: "15 MB",
            type: "video" // نوع الملف لتحديد الأيقونة
        },
        {
            name: "Documentation.docx",
            size: "500 KB",
            type: "document" // نوع الملف الافتراضي
        }
    ];

    const activityLogs = [
        {
            type: "add",
            title: "Added a new task",
            description: "John Doe added a new task: Design website layout.",
            timeAgo: "2 hours ago"
        },
        {
            type: "video",
            title: "Added a new comment",
            description: "Bob Brown added a comment to the task: Perform QA Testing.",
            timeAgo: "5 hours ago"
        },
        {
            type: "uploaded",
            title: "Uploaded a file",
            description: "Jane Smith uploaded 'UI_Design.png' to the project.",
            timeAgo: "1 day ago"
        },
        {
            type: "check",
            title: "Marked task as complete",
            description: "Alice Johnson marked the task 'Implement Backend APIs' as complete.",
            timeAgo: "3 days ago"
        },
        {
            type: "add",
            title: "Added a new comment",
            description: "Bob Brown added a comment to the task: Perform QA Testing.",
            timeAgo: "5 hours ago"
        }
    ];


    return (
        <Page title={"Project Details"} isBreadcrumbs={true} breadcrumbs={breadcrumbItems}>
            <div className={"w-full flex items-start  gap-8 flex-col md:flex-row"}>
                <div className={"flex flex-col gap-6 md:w-7/12 flex-1"}>
                    <ProjectInfoCard/>
                    <div className={"p-4 bg-white rounded-2xl w-full"}>
                        <div className={"title-header w-full flex items-center justify-between "}>
                            <p className={"text-lg"}>Project Tasks </p>
                            <SelectWithoutLabel title={"Filter by"} className={"w-[94px] h-[36px]"}/>
                        </div>
                        <TasksList tasks={tasks}/>
                    </div>
                    <div className={"p-4 bg-white rounded-2xl w-full flex flex-col gap-3"}>
                        <div className={"title-header w-full flex items-center justify-between "}>
                            <p className={"text-lg"}>Comments</p>
                        </div>
                        <TaskComments comments={comments}/>
                        <CommentInput />
                    </div>
                </div>
                <div className={"flex-1 flex flex-col gap-6"}>
                    <ProjectMembers members={members}/>
                    <AttachmentsList attachments={attachments}/>
                    <ActivityLogs activityLogs={activityLogs} />
                    <TimeLine/>
                </div>

            </div>
        </Page>
    );
}

ProjectDetails.propTypes = {}
export default ProjectDetails;