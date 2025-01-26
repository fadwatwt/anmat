import Modal from "../../../components/Modal/Modal.jsx";
import PropTypes from "prop-types";
import StepsComponent from "../Components/CreateProjectForm/StepsComponent.jsx";
import ProjectInfoForm from "../Components/CreateProjectForm/ProjectInfoForm.jsx";
import CreateTaskForm from "../Components/CreateProjectForm/CreateTaskForm.jsx";
import  { useState } from "react";
import { useTranslation } from "react-i18next";

function EditProjectModal({ isOpen, onClose, project }) {
    // إدارة الخطوات
    const [currentStep, setCurrentStep] = useState(1);
    const tasks = project?.tasks || []

    const steps = [
        {
            title: "Project Info",
            content: <ProjectInfoForm project={project} />,
        },
        ...tasks.map((task, index) => ({
            title: `Task ${index + 1}`,
            content: <CreateTaskForm task={task} />,
        })),
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };


    // const handelBack = () => {
    //     if (currentStep > 1) {
    //         setCurrentStep(currentStep - 1);
    //     }
    // };

    const handleCreateProject = () => {
        console.log("Project Created");
    };

    return (
        <Modal
            className={"lg:w-5/12 md:w-10/12 sm:w-8/12 w-11/12"}
            isOpen={isOpen}
            onClose={onClose}
            customBtns={
                <CustomBtnEditProjectModal
                    currentStep={currentStep}
                    totalSteps={steps.length}
                    handleNext={handleNext}
                 />
            }
            title={"Edit project"}
        >
            <StepsComponent
                type={"edit"}
                steps={steps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                handelCreateProject={handleCreateProject}
            />
        </Modal>
    );
}

function CustomBtnEditProjectModal({ currentStep, totalSteps, handleNext }) {
    const { t } = useTranslation();
    return (
        <div className={"w-full flex items-center justify-between pt-3"}>
            <div className={"h-10"}>
                <button
                    onClick={() => {}}
                    className="bg-primary-base text-sm flex justify-center items-center h-full text-center dark:bg-primary-200 dark:text-black w-40 text-white p-[10px] rounded-[10px]"
                >
                    {t("Save")}
                </button>
            </div>
            {currentStep < totalSteps && (
                    <div className={"h-10"}>
                        <button
                            onClick={handleNext}
                            className="bg-none text-sm border border-primary-base flex justify-center items-center text-primary-base dark:border-soft-400 dark:text-soft-400 h-full text-center w-40 p-[10px] rounded-[10px]"
                        >
                            {t("Next")}
                        </button>
                    </div>)
                //     :(<div className={"h-10"}>
                //     <button
                //         onClick={handelBack}
                //         className="bg-none text-sm border border-primary-base flex justify-center items-center text-primary-base dark:border-soft-400 dark:text-soft-400 h-full text-center w-40 p-[10px] rounded-[10px]"
                //     >
                //         {t("Back")}
                //     </button>
                // </div>)
            }
        </div>
    );
}

EditProjectModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    className: PropTypes.string,
    project: PropTypes.object
};

CustomBtnEditProjectModal.propTypes = {
    currentStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    // handelBack:PropTypes.func.isRequired
};

export default EditProjectModal;
