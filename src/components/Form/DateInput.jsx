
import PropTypes from "prop-types";
import {TfiCalendar} from "react-icons/tfi";
import {useRef} from "react";

function DateInput({className,id,classNameLabel,onChange,title,name,value}) {
    const inputDateRef = useRef(null)
    const handelOpenPicker = () =>{
        inputDateRef.current.showPicker()
    }
    return (
        <div className={"flex flex-col items-start gap-2 " + className}>
            <p className={"text-sm"}> {title}</p>
            <label
                className={"flex pl-2 w-full items-center text-xs dark:bg-gray-900 dark:border-gray-700 border-2 rounded-xl  focus:outline-none focus:border-blue-500 dark:text-gray-200 " + classNameLabel}
                htmlFor={id}>
                <TfiCalendar className={"cursor-pointer"} onClick={handelOpenPicker}   size={18} />
                <input ref={inputDateRef} type={"date"} className={" custom-date-input w-full py-3 px-2 outline-none appearance-none focus:outline-none peer"} name={name}  value={value}
                       onChange={onChange}/>
            </label>

        </div>
    );
}

DateInput.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    classNameLabel: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
}

export default DateInput;