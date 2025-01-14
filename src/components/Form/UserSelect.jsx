import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import {useTranslation} from "react-i18next";

const UserSelect = ({ title, users, onChange, isOption = false, classNameContainer }) => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const {t} = useTranslation()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref to track the dropdown container

    const toggleUser = (user) => {
        const alreadySelected = selectedUsers.find((u) => u.id === user.id);
        const updatedSelection = alreadySelected
            ? selectedUsers.filter((u) => u.id !== user.id)
            : [...selectedUsers, user];

        setSelectedUsers(updatedSelection);
        if (onChange) {
            onChange(updatedSelection);
        }
    };

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false); // Close the dropdown
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={classNameContainer} ref={dropdownRef}>
            {/* Label */}
            <label
                htmlFor="user-select"
                className="text-sm text-start text-gray-700 flex items-center gap-1 mb-2 dark:text-gray-200"
            >
                <span>{t(title)}</span>
                {isOption && (
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                        ({t("Option")}) <FaCircleInfo className="text-gray-400" size={15} />
                    </span>
                )}
            </label>

            {/* Custom Select */}
            <div className="relative max-w-full w-full">
                {/* Selected Users */}
                <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 h-10 dark:bg-white-0 border border-gray-300 dark:border-gray-500 rounded-[10px] p-[10px] box-border text-xs cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                >
                    {/* Selected Users Content */}
                    <div className="flex-1 flex gap-1 tab-content overflow-x-auto max-h-10">
                        {selectedUsers.length > 0 ? (
                            selectedUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="text-gray-400  rounded-md py-1 px-2 flex gap-1 items-center border border-gray-200"
                                >
                                    <div className="flex items-center dark:text-gray-300 text-nowrap text-xs overflow-hidden w-16">
                                        <img
                                            src={user.image}
                                            alt={user.name}
                                            className="w-5 h-5 rounded-full mx-1"
                                        />
                                        {user.name}
                                    </div>
                                    <FaTimes
                                        className="ml-2 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleUser(user);
                                        }}
                                    />
                                </div>
                            ))
                        ) : (
                            <span className="text-gray-500 dark:text-gray-400">
                                {t("Select users")}
                            </span>
                        )}
                    </div>
                    {/* Dropdown Arrow */}
                    <IoIosArrowDown className="text-gray-500 dark:text-gray-400" size={16} />
                </div>

                {/* Dropdown */}
                {isDropdownOpen && (
                    <div className="absolute z-10 bg-white dark:bg-white-0 border border-gray-300 dark:border-gray-500 p-2 w-11/12 rounded-2xl shadow-md mt-1 max-h-60 overflow-y-auto">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
                                onClick={() => toggleUser(user)}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.some((u) => u.id === user.id)}
                                    className={"checkbox-custom checked:bg-primary-base checked:dark:bg-primary-200 checked:dark:text-gray-800 rounded-md"}
                                    readOnly
                                />
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-5 h-5 rounded-full"
                                />
                                <div className="flex items-center justify-start gap-1 flex-wrap">
                                    <span className="text-sm text-nowrap dark:text-gray-200">{user.name}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        @{user.username}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

UserSelect.propTypes = {
    title: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    isOption: PropTypes.bool,
    classNameContainer: PropTypes.string,
};

export default UserSelect;
