import PropTypes from "prop-types";
import {IoIosArrowDown} from "react-icons/io";

function DefaultSelect({title,options}) {
    return (
        <div className="w-full">
            <label htmlFor="select-input" className="block text-sm text-start text-gray-700 mb-2 dark:text-gray-200">
                {title}
            </label>
            <div className="relative">
                <select
                    id="select-input"
                    className="appearance-none w-full px-4 py-1 border border-gray-300 rounded-xl bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {
                        options.map((option) => (
                            <option key={option.id} value={option.id}>{option.value}</option>
                        ))
                    }
                </select>
                {/* Arrow icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <IoIosArrowDown />
                </div>
            </div>
        </div>
    );
}

DefaultSelect.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
}

export default DefaultSelect;