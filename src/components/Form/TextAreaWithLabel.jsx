import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

function TextAreaWithLabel({title,placeholder,className}) {
    const {t} = useTranslation()
    return (
        <div className={`flex flex-col gap-1 w-full items-start  ${className}`}>
            <label className={"text-gray-900 dark:text-gray-200 text-sm"}>{t(title)}</label>
            <textarea rows={6}  placeholder={t(placeholder)} className={"py-3 px-2 text-xs dark:bg-gray-900 dark:border-gray-700 border-2 rounded-xl w-full focus:outline-none focus:border-blue-500 dark:text-gray-200"}/>
        </div>
    );
}

TextAreaWithLabel.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
}

export default TextAreaWithLabel;