
import MembersListXLine from "./MembersListXLine.jsx";
import StateOfTask from "./StateOfTask.jsx";
import PropTypes from "prop-types";
import StarRating from "../../../../../components/StarRating.jsx";
import ProjectRatingModal from "../../../modal/ProjectRatingModal.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";


function TasksList({tasks}) {
    const [isRateProjectOpen,setRateProjectOpen] = useState(false)
    const {t} = useTranslation()
    return (
        <div className={"max-h-64 flex flex-col w-full overflow-hidden overflow-y-auto tab-content"}>
            {
                tasks.map((task,index) => (
                    <div key={index} className={"p-3 flex flex-col gap-2"}>
                        <div className={"header-task-project flex justify-between items-center"}>
                            <p className={"text-sm dark:text-gray-200"}>{task.name}</p>
                            <StarRating onClickRate={() => setRateProjectOpen(!isRateProjectOpen)}  rating={task.rate}/>
                        </div>
                        <div className={"members flex gap-1 items-center "}>
                            <p className={"text-soft-400 text-sm dark:text-gray-400"}>{t("Members")}:</p>
                            <MembersListXLine members={task.members} maxVisible={3}/>
                        </div>
                        <div className={"delivery flex gap-1 items-center"}>
                            <p className={"text-soft-400 text-sm dark:text-gray-400"}>{t("Delivery")}:</p>
                            <StateOfTask type={task.delivery} timeLate={task.timeLate && task.timeLate}/>
                        </div>

                        <ProjectRatingModal project={task}
                                            isOpen={isRateProjectOpen}
                                            onClose={() => setRateProjectOpen(!isRateProjectOpen)} />
                    </div>
                ))

            }
        </div>
    );
}

TasksList.propTypes = {
    tasks:PropTypes.array.isRequired
}

export default TasksList;