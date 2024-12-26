import PropTypes from "prop-types";
import {IoIosArrowDown} from "react-icons/io";
import {useTranslation} from "react-i18next";

function DefaultSelect({title,options,onChange}) {
    const {t} = useTranslation()
    return (
        <div className="w-full">
            <label htmlFor="select-input" className="block text-sm text-start text-gray-700 mb-2 dark:text-gray-200">
                {t(title)}
            </label>
            <div className="relative">
                <select
                    onChange={onChange}
                    id="select-input"
                    className="appearance-none dark:bg-gray-900 dark:text-primary-150 w-full px-4 py-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {
                        options.map((option) => (
                            <option key={option.id} value={option.id}>{t(option.value)}</option>
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
    onChange: PropTypes.func,
}

export default DefaultSelect;