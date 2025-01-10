import PropTypes from "prop-types";
import BtnAddOutline from "../../../../../components/Form/BtnAddOutline.jsx";


function ProjectMembers({members}) {
    const getBadge = (rule) => {
        switch (rule) {
            case "Manager":
                return <span className="px-2 py-0.5 rounded-full text-teal-700 border border-teal-700 text-[11px]">Manager</span>;
            case "Team lead":
                return <span className="px-2 py-0.5 rounded-full text-purple-700 border border-purple-700 text-[11px]">Team lead</span>;
            default:
                return null;
        }
    };
    return (
        <div className={"flex flex-col w-full p-4 rounded-2xl items-start gap-3 bg-white"}>
            <p className={"text-lg"}>Project Members</p>
            <div className={"flex flex-col gap-3 w-full "}>
                {
                    members.map((member,index) => (
                        <div key={index} className={"flex gap-3 items-center"}>
                            <div className={"w-10 h-10"}>
                                <img
                                    src={member.imageProfile}
                                    alt={"image member"} className={"max-w-full rounded-full w-10 h-10 object-cover"}/>
                            </div>
                            <div className={"nameAndWork flex flex-col gap-1 items-start"}>
                                <div className={"nameAndRule flex gap-1"}>
                                    <p className={"text-sm"}>{member.name}</p>
                                    {
                                        getBadge(member.rule)
                                    }
                                </div>
                                <p className={"text-xs text-sub-500"}>{member.work}</p>
                            </div>
                        </div>
                    ))
                }
                <BtnAddOutline title={"Add a member"} />
            </div>
        </div>
    );
}

ProjectMembers.propTypes = {
    members: PropTypes.array.isRequired
}

export default ProjectMembers;