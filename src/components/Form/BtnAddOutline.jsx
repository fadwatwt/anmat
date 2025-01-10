
import {FiPlus} from "react-icons/fi";
import PropTypes from "prop-types";

function BtnAddOutline({title,onClick}) {
    return (
        <button
            onClick={onClick}
            className={"w-full p-[10px] rounded-[10px] justify-center items-center border border-primary-base flex gap-1"}>
            <FiPlus className={"text-primary-base"} size={13}/>
            <span className={"text-md text-primary-base"}>{title}</span>
        </button>
    );
}

BtnAddOutline.propTypes = {
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func
}

export default BtnAddOutline;