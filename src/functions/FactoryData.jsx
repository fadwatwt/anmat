import NameAndDescription from "../pages/Projects/Components/TableInfo/NameAndDescription.jsx";
import AccountDetails from "../pages/Projects/Components/TableInfo/AccountDetails.jsx";
import {getTimeDifference, translateDate} from "./Days.js";
import Priority from "../pages/Projects/Components/TableInfo/Priority.jsx";
import Status from "../pages/Projects/Components/TableInfo/Status.jsx";
import MembersListXLine from "../pages/Projects/Components/ProjectDetails/components/MembersListXLine.jsx";
import Rating from "../pages/HR/Rating.jsx";

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

const rowTask1 =  [
    <><NameAndDescription path={"/tasks/pulse_dashboard"} id={"1"} name={"Pulse Dashboard"}
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
const rowTask2 =  [
    <><NameAndDescription path={"/tasks/pulse_dashboard"} id={"2"} name={"Pulse Dashboard"}
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
const rowTask3 =  [
    <><NameAndDescription path={"/tasks/pulse_dashboard"} id={"3"} name={"Pulse Dashboard"}
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
const rowTask4 =  [
    <><NameAndDescription path={"/tasks/pulse_dashboard"} id={"4"} name={"Pulse Dashboard"}
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


const rowsTask = [
    rowTask1,
    rowTask2,
    rowTask3,
    rowTask4,
];
const date1 = "2025-01-15T14:30:00";
const date2 = "2025-01-13T13:40:00";
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
        rate: null,
        assignedDate: "2025-01-15T14:30:00", // جديد
        dueDate: "2025-01-20T13:40:00", // جديد
        deadLine: "2025-01-19T23:59:59", // جديد
        startDate: "2025-01-10T09:00:00", // جديد
        department: "Design", // جديد
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
        timeLate: getTimeDifference(date1, date2), // لا تغييرات
        rate: 2,
        assignedDate: "2025-01-14T10:00:00", // جديد
        dueDate: "2025-01-18T16:00:00", // جديد
        deadLine: "2025-01-17T23:59:59", // جديد
        startDate: "2025-01-12T08:30:00", // جديد
        department: "Backend Development", // جديد
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
        rate: 4.5,
        assignedDate: "2025-01-16T14:00:00",
        dueDate: "2025-01-22T12:00:00",
        deadLine: "2025-01-21T23:59:59",
        startDate: "2025-01-15T11:00:00",
        department: "QA",
    },
];

const comments = [
    {
        account: members[0], // أول عضو
        timeAgo: '2025-01-12T08:00:00', // تاريخ محدد
        text: "Great progress on the project so far!",
        images: [
            "https://i.cdn.turner.com/dr/cnnarabic/cnnarabic/release/sites/default/files/styles/landscape_780x440/public/image/1_6.JPG?itok=pmNMX7TP", // رابط صورة للتعليق
        ],
    },
    {
        account: members[1], // ثاني عضو
        timeAgo: '2025-01-11T10:00:00', // تاريخ محدد
        text: "We need to discuss the timeline adjustments.",
        images: [
            "https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/gogxbp2tjsjvbnas7ygk", // رابط صورة للتعليق
            "https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/jfj1ro8ejfzmojl6k75w",
        ],
    },
    {
        account: members[2], // ثالث عضو
        timeAgo: '2025-01-10T09:30:00', // تاريخ محدد
        text: "Please review the design drafts I shared.",
        images: [],
    },
    {
        account: members[3], // رابع عضو
        timeAgo: '2025-01-12T15:00:00', // تاريخ محدد
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
        title: "New task added",
        description: "John Doe added a new task: Design website layout.",
        timeAgo: "2025-01-13T14:00:00.000Z",
    },
    {
        type: "video",
        title: "Meeting scheduled",
        description: "Bob Brown added a comment to the task: Perform QA Testing.",
        timeAgo: "2025-01-13T11:00:00.000Z",
    },
    {
        type: "uploaded",
        title: "File uploaded",
        description: "Jane Smith uploaded 'UI_Design.png' to the project.",
        timeAgo: "2025-01-12T16:00:00.000Z",
    },
    {
        type: "check",
        title: "Task completed",
        description: "Alice Johnson marked the task 'Implement Backend APIs' as complete.",
        timeAgo: "2025-01-10T16:00:00.000Z",
    },
    {
        type: "add",
        title: "New task added",
        description: "Bob Brown added a comment to the task: Perform QA Testing.",
        timeAgo: "2025-01-13T11:00:00.000Z",
    },
];

const filterOptions = [
    {id:"deadLine",name:"dead line"},
    {id:"startDate",name:"start date"},
    {id:"department",name:"department"}
]


const rowProject1 =  [
    <><NameAndDescription path={"/projects/pulse_dashboard_project"} id={"1"} name={"Pulse Dashboard"}
                          description={"Developing a dashboard for real-time performance."}/></>,
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>5</p></>,
    <><Priority type={"Urgent"} title={"Urgent"} /></>,
    <><Status type={"Active"} title={"Active"}/></>
]
const rowProject2 =  [
    <><NameAndDescription path={`/projects/pulse_dashboard_project`} id={"2"} name={"Pulse Dashboard"}
                          description={"Developing a dashboard for real-time performance."}/></>,
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>5</p></>,
    <><Priority type={"High"} title={"High"} /></>,
    <><Status type={"Inactive"} title={"Inactive"}/></>
]
const rowProject3 =  [
    <><NameAndDescription path={"/projects/pulse_dashboard_project"} id={"3"} name={"Pulse Dashboard"}
                          description={"Developing a dashboard for real-time performance."}/></>,
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>5</p></>,
    <><Priority type={"Low"} title={"Low"} /></>,
    <><Status type={"Delayed"} title={"Delayed"}/></>
]
const rowProject4 =  [
    <><NameAndDescription path={"/projects/pulse_dashboard_project"} id={"4"} name={"Pulse Dashboard"}
                          description={"Developing a dashboard for real-time performance."}/></>,
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{translateDate("2025-01-16T10:00:00")}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>5</p></>,
    <><Priority type={"Medium"} title={"Medium"} /></>,
    <><Status type={"Scheduled"} title={"Scheduled"}/></>
]


const rowsProject = [
    rowProject1, rowProject2, rowProject3, rowProject4,
    rowProject1, rowProject2, rowProject3, rowProject4,
    rowProject1, rowProject2, rowProject3, rowProject4,
    rowProject1, rowProject2, rowProject3, rowProject4,
    rowProject1, rowProject2, rowProject3, rowProject4,
];
const rowEmployee1 =  [
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Publishing"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Full - time"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"1500$"}</p></>,
    <><Rating value={"90"} /></>
]

const rowEmployee2 =  [
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Publishing"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Full - time"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"1500$"}</p></>,
    <><Rating value={"90"} /></>
]

const rowEmployee3 =  [
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Publishing"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Full - time"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"1500$"}</p></>,
    <><Rating value={"90"} /></>
]
const rowEmployee4 =  [
    <><AccountDetails
        account={{
            name: "Fatma Ahmed Moh", rule: "Product Manager",
            imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
        }}/></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Publishing"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"Full - time"}</p></>,
    <><p className={"text-sm dark:text-sub-300"}>{"1500$"}</p></>,
    <><Rating value={"90"} /></>
]
const rowsEmployees = [
    rowEmployee1, rowEmployee2, rowEmployee3, rowEmployee4,
    rowEmployee1, rowEmployee2, rowEmployee3, rowEmployee4,
    rowEmployee1, rowEmployee2, rowEmployee3, rowEmployee4,
    rowEmployee1, rowEmployee2, rowEmployee3, rowEmployee4,
];

const employees = [
    {
        id:"1",
        name: "Fatma Ahmed Moh",
        role: "Product Manager",
        department: "Publishing",
        jobType: "Full-time",
        salary: "1500$",
        rating: 90,
        imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
    },
    {
        id:"2",
        name: "Ali Hassan",
        role: "Software Engineer",
        department: "Development",
        jobType: "Full-time",
        salary: "2500$",
        rating: 80,
        imageProfile: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id:"3",
        name: "Sara Khaled",
        role: "UX Designer",
        department: "Design",
        jobType: "Part-time",
        salary: "1800$",
        rating: 85,
        imageProfile: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id:"5",
        name: "Fatma Ahmed Moh",
        role: "Product Manager",
        department: "Publishing",
        jobType: "Full-time",
        salary: "1500$",
        rating: 90,
        imageProfile: "https://images.squarespace-cdn.com/content/v1/58865912a5790a87a29447e5/1501777422700-0WW6HYF16XLP8ZTJ0PMU/Image+Profile+Photography2.jpg"
    },
    {
        id:"6",
        name: "Ali Hassan",
        role: "Software Engineer",
        department: "Development",
        jobType: "Full-time",
        salary: "2500$",
        rating: 80,
        imageProfile: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id:"7",
        name: "Sara Khaled",
        role: "UX Designer",
        department: "Design",
        jobType: "Part-time",
        salary: "1800$",
        rating: 85,
        imageProfile: "https://randomuser.me/api/portraits/women/2.jpg"
    }
];


export {tasks,date1,date2,
    members,rowsTask,rowsProject,
    activityLogs,comments,attachments,
    filterOptions,rowsEmployees,employees}