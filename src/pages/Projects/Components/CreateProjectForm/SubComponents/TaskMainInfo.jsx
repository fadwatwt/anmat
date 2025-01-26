import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputAndLabel from "../../../../../components/Form/InputAndLabel.jsx";
import TextAreaWithLabel from "../../../../../components/Form/TextAreaWithLabel.jsx";
import DefaultSelect from "../../../../../components/Form/DefaultSelect.jsx";
import FileUpload from "../../../../../components/Form/FileUpload.jsx";
import DateInput from "../../../../../components/Form/DateInput.jsx";
import UserSelect from "../../../../../components/Form/UserSelect.jsx";
import ElementsSelect from "../../../../../components/Form/ElementsSelect.jsx";
import Priority from "../../TableInfo/Priority.jsx";
import Status from "../../TableInfo/Status.jsx";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function TaskMainInfo({ task,type="task" }) {
    const { t } = useTranslation();
    const users = [
        { id: 1, name: "Yara Nabil", username: "Yara", image: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1" },
        { id: 2, name: "Ahmed Khalil", username: "Ahmed", image: "https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=" },
        { id: 3, name: "Ali Farouk", username: "Ali", image: "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=" },
        { id: 4, name: "Mohamed El-Sayed", username: "Mohamed", image: "https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1" },
    ];

    const optionsDepartment = [
        { id: "", value: `${t('Select Department')}...` },
        { id: "1", value: 'UI / UX Design' },
        { id: "2", value: 'Design' },
    ];
    const optionsManager = [
        { id: "", value: `${t('Select Manager')}...` },
        { id: "1", value: 'Mohammed Ali' },
    ];
    const optionsStatus = [
        { id: "1", element: <Status type={"Active"} title={"Active"} /> },
        { id: "2", element: <Status type={"Inactive"} title={"Inactive"} /> },
        { id: "3", element: <Status type={"Delayed"} title={"Delayed"} /> },
        { id: "4", element: <Status type={"Scheduled"} title={"Scheduled"} /> },
    ];
    const optionsPriority = [
        { id: "1", element: <Priority type={"Urgent"} title={"Urgent"} /> },
        { id: "2", element: <Priority type={"High"} title={"High"} /> },
        { id: "3", element: <Priority type={"Medium"} title={"Medium"} /> },
        { id: "4", element: <Priority type={"Low"} title={"Low"} /> },
    ];

    // إعداد فورميك
    const formik = useFormik({
        initialValues: {
            taskName: 'Project Omega',
            description: 'The website could really use a makeover to make it more user-friendly and visually appealing. We want to go for a fresh, modern look that keeps up with the latest design trends. The new design should make it super easy to navigate and read',
            department: optionsDepartment[1].id ,
            manager: optionsManager[1].id,
            assignedDate: '2020-05-01',
            dueDate: '2020-05-01',
            employees: task ? [users[0], users[1], users[2]] : [],
            status: [optionsStatus[1]],
            priority: [optionsPriority[1]],
            dependentDepartment: optionsDepartment[2].id,
        },
        validationSchema: Yup.object({
            taskName: Yup.string().required('Task Name is required'),
            description: Yup.string(),
            department: Yup.string().required('Department is required'),
            manager: Yup.string().required('Manager is required'),
            assignedDate: Yup.date().required('Assigned Date is required'),
            dueDate: Yup.date().required('Due Date is required'),
            status: Yup.string().required('Status is required'),
            priority: Yup.string().required('Priority is required'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={"flex flex-col gap-4 max-h-full"}>
            <p className={"w-full py-[6px] bg-weak-100 text-start text-xs dark:bg-weak-800 text-weak-800 dark:text-weak-100"}>{t("Task main info")}:</p>
            <InputAndLabel
                value={formik.values.taskName}
                onChange={formik.handleChange}
                name="taskName"
                type="text"
                title={type === "task" ? "Task Name" : "Project Name"}
                placeholder="Task Name"
            />
            <TextAreaWithLabel
                value={formik.values.description}
                onChange={formik.handleChange}
                name="description"
                title="Description"
                placeholder="Add a description"
            />
            <DefaultSelect
                title="Department"
                options={optionsDepartment}
                defaultValue={formik.values.department}
                onChange={formik.handleChange}
                name="department"
            />
            <div className={"flex items-center justify-center gap-2"}>
                <DefaultSelect
                    title="Manager"
                    options={optionsManager}
                    defaultValue={formik.values.manager}
                    onChange={formik.handleChange}
                    name="manager"
                    classNameContainer={"flex-1"}
                />
                <div className={"relative w-1/2"}>
                    <UserSelect
                        defaultSelectedUsers={formik.values.employees}
                        users={users}
                        title={"Employees"}
                        onChange={formik.handleChange}
                        name={"employees"}
                        classNameContainer={"h-16"}
                    />
                </div>
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <DateInput
                    value={formik.values.assignedDate}
                    onChange={formik.handleChange}
                    name="assignedDate"
                    title="Assigned Date"
                    className={"flex-1"}
                />
                <DateInput
                    value={formik.values.dueDate}
                    onChange={formik.handleChange}
                    name="dueDate"
                    title="Due Date"
                    className={"flex-1"}
                />
            </div>
            <div className={"flex items-center justify-center gap-2"}>
                <ElementsSelect
                    defaultValue={formik.values.status}
                    onChange={formik.handleChange}
                    name="status"
                    title="Status"
                    options={optionsStatus}
                    classNameContainer={"flex-1"}
                />
                <ElementsSelect
                    defaultValue={formik.values.priority}
                    onChange={formik.handleChange}
                    name="priority"
                    title="Priority"
                    options={optionsPriority}
                    classNameContainer={"flex-1"}
                />
            </div>
            <DefaultSelect
                title="Dependent Department"
                defaultValue={formik.values.dependentDepartment}
                onChange={formik.handleChange}
                name="dependentDepartment"
                options={optionsDepartment}
            />
            <FileUpload />
        </form>
    );
}

TaskMainInfo.propTypes = {
    task: PropTypes.object,
    type: PropTypes.string,
};

export default TaskMainInfo;
