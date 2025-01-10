import PropTypes from "prop-types";

function TaskComments({comments}) {
    return (

        <div className={"max-h-64 h-auto flex flex-col w-full overflow-hidden overflow-y-auto tab-content"}>
            {
                comments.map(( comment ,index) => (
                    <div className={"flex gap-2 justify-start items-start h-80"} key={index}>
                        <div className={"flex flex-col justify-start items-center h-full"}>
                            <div className={"min-w-8"}>
                                <img
                                    src={comment.account?.imageProfile}
                                    alt={comment.account?.name}
                                    className="w-8 h-8 object-cover rounded-full"
                                />
                            </div>
                            {index < comments.length - 1 && (
                                <div className={"w-[1px] bg-gray-200 h-full"}></div>
                            )}
                        </div>
                        <div className={"flex flex-col items-start gap-2 pb-4"}>
                            <div className={"flex gap-1 justify-start"}>
                                <p className={"text-sm"}>{comment.account?.name}</p>
                                <span className={"text-[11px] text-soft-400"}>{comment.timeAgo}</span>
                            </div>
                            <p className={"max-w-full text-wrap text-start text-xs text-sub-500"}>
                                {comment.text}
                            </p>
                            <div className={"images flex gap-1 justify-start"}>
                                {
                                    comment.images?.map((image, index) => (
                                        <img className={"w-[41.48px] h-[28px] rounded"} key={index} src={image}
                                             alt={"image comment"}/>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

TaskComments.propTypes = {
    comments: PropTypes.array.isRequired
}

export default TaskComments;