import {RiDeleteBin7Line, RiEdit2Line} from "react-icons/ri";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

function ActionsBtns({handleEdit,handleDelete}) {
    const {t} = useTranslation()
    return (
        <div
            className="absolute z-10 flex flex-col left-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
            <button
                onClick={handleEdit}
                className="w-full px-3 py-3 text-sm border-b flex gap-2 items-center text-left text-gray-700 hover:bg-gray-100"
            >
                <RiEdit2Line className={"text-primary-500 text-sm"}/> {t("Edit")}
            </button>
            <button
                onClick={handleDelete}
                className="w-full px-3 py-2 text-sm text-left flex items-center  text-gray-700 gap-2 hover:bg-gray-100"
            >
                <RiDeleteBin7Line className={"text-red-500 text-sm"}/>
                {t("Delete")}
            </button>
        </div>
    );
}

ActionsBtns.propTypes = {
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
}

export default ActionsBtns;