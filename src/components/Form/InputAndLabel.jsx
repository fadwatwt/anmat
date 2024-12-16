import PropTypes from "prop-types";

function InputAndLabel({title,placeholder,type,className}) {
    return (
        <div className={`flex flex-col gap-1 w-full items-start  ${className}`}>
            <label className={"text-gray-900"}>{title}</label>
            <input type={type} placeholder={placeholder} className={"py-3 px-2 border-2 rounded-xl w-full focus:outline-none focus:border-blue-500"}/>
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