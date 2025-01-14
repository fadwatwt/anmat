import React, {useState} from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import {IoIosArrowForward} from 'react-icons/io';
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const StepsComponent = ({steps,handelCreateProject,handelAddTask}) => {
    const {t} = useTranslation()
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };
    const backStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div key={index} className="flex items-center">
                            <div
                                className={`flex items-center cursor-pointer ${
                                    currentStep >= index + 1 ? 'text-blue-500' : 'text-gray-400'
                                }`}
                                onClick={() => currentStep >= index + 1 && setCurrentStep(index + 1)}
                            >
                                <div className="flex items-center">
                <span
                    className={`rounded-full group w-5 h-5 text-xs flex items-center justify-center md:mx-2 mx-0.5  ${
                        currentStep > index + 1 ? 'p-0' : currentStep === index + 1 ? 'bg-primary-base dark:bg-primary-200 dark:text-black text-white' : ' border border-gray-300 dark:border-gray-700 dark:text-white'
                    }`}
                >
    {currentStep > index + 1 ? <FaCheckCircle className={"text-green-success dark:text-green-300 "} size={20}/> : index + 1}
</span>
                                    <span className="ml-2 text-sm dark:text-primary-150 text-nowrap">{index>0 ? '('+index+')' :null} {t(step.title)} </span>
                                </div>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <IoIosArrowForward
                                className={`text-sm text-gray-400`}/>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="w-full">
                {steps.map((step, index) =>
                    currentStep === index + 1 ? (
                        <div key={index}>
                            {step.content}
                            <div className={"w-full flex justify-between mt-4"}>
                                <div className={"flex gap-4 justify-start"}>
                                    {index < steps.length - 1 && (
                                        <button onClick={nextStep} className="bg-primary-base dark:bg-primary-200 dark:text-black w-40 text-white p-[10px] rounded-[10px] ">
                                            {t("Next")}
                                        </button>
                                    )}
                                    {index === steps.length - 1 && (
                                        <button onClick={handelCreateProject} className=" bg-primary-base dark:bg-primary-200 dark:text-black w-40 text-white p-[10px] rounded-[10px] ">
                                            {t("Create the Project")}
                                        </button>
                                    )}
                                    {index > 0 && (
                                        <button onClick={backStep} className=" bg-white dark:bg-white-0 dark:border-gray-700 dark:text-gray-300 w-40 p-[10px] text-md rounded-[10px] border border-gray-400">
                                            {t("Back")}
                                        </button>
                                    )}
                                </div>
                                <div className={""}>
                                    {index === steps.length - 1 && (
                                        <button onClick={handelAddTask}
                                                className=" bg-none w-40 p-[10px] text-md rounded-[10px] border border-primary-base dark:border-primary-200  text-primary-base flex gap-2 justify-center items-center">
                                            <span className={"text-md text-primary-base dark:text-primary-200 text-nowrap"}>{t("Add new task")}</span>
                                        </button>
                                    )}
                                </div>

                            </div>

                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

StepsComponent.propTypes = {
    steps: PropTypes.array,
    handelCreateProject: PropTypes.func,
    handelAddTask: PropTypes.func
}

export default StepsComponent;
