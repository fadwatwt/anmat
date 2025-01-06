import {useState} from "react";
import TaskMainInfo from "./SubComponents/TaskMainInfo.jsx";
import TaskStage from "./SubComponents/TaskStage.jsx";

function CreateTaskForm() {
    const [taskStageNumber, setTaskStageNumber] = useState([1]);

    const incrementTaskStage = () => {
        const nextStage = Math.max(...taskStageNumber) + 1;
        setTaskStageNumber([...taskStageNumber, nextStage]);
    };

    const decrementTaskStage = (stage) => {
        const updatedStages = taskStageNumber.filter(number => number !== stage);
        const reorderedStages = updatedStages.map((_, index) => index + 1);
        setTaskStageNumber(reorderedStages);
    };
    return (
        <div className={"flex flex-col gap-1"}>
            <TaskMainInfo/>
            <div className={"flex flex-col gap-4"}>
            {
                taskStageNumber.map(taskStageNumber => (
                    <TaskStage key={taskStageNumber} handelDelete={decrementTaskStage} stageNumber={taskStageNumber}/>
                ))
            }

            <button className={"w-full bg-none text-primary-base text-sm"} onClick={incrementTaskStage}>Add Task Stage
            </button>
            </div>
        </div>
    );
}

export default CreateTaskForm;