import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

function InputAndLabel({title,placeholder,type,className}) {
    const {t} = useTranslation()
    return (
        <div className={`flex flex-col gap-1 w-full items-start  ${className}`}>
            <label className={"text-gray-900 dark:text-gray-400 text-sm"}>{t(title)}</label>
            <input type={type} placeholder={t(placeholder)} className={"py-3 px-2 text-xs dark:bg-gray-900 dark:border-gray-700 border-2 rounded-xl w-full focus:outline-none focus:border-blue-500"}/>
        </div>
    );
}

InputAndLabel.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
}

export default InputAndLabel;