import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { IoGlobeOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { FaCircleInfo } from "react-icons/fa6";

const UserSelect = ({
  title,
  users,
  onChange,
  isOption = false,
  classNameContainer = "h-20",
  isMultiSelect = true,
  isViewIcon = false,
  defaultSelectedUsers = [],
}) => {
  const { t } = useTranslation();
  const [selectedUsers, setSelectedUsers] = useState(defaultSelectedUsers);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sync defaultSelectedUsers with internal state
  useEffect(() => {
    setSelectedUsers(defaultSelectedUsers);
  }, [defaultSelectedUsers]);

  const toggleUser = (user) => {
    let updatedSelection;

    if (isMultiSelect) {
      const isSelected = selectedUsers.some((u) => u._id === user._id);
      updatedSelection = isSelected
        ? selectedUsers.filter((u) => u._id !== user._id)
        : [...selectedUsers, user];
    } else {
      updatedSelection = selectedUsers.some((u) => u._id === user._id)
        ? []
        : [user];
    }

    setSelectedUsers(updatedSelection);
    onChange(updatedSelection);
  };

  const removeUser = (user, e) => {
    e.stopPropagation();
    const updatedSelection = selectedUsers.filter((u) => u._id !== user._id);
    setSelectedUsers(updatedSelection);
    onChange(updatedSelection);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={classNameContainer} ref={dropdownRef}>
      <label className="text-sm text-start text-cell-secondary flex items-center gap-1 mb-2">
        <span>{t(title)}</span>
        {isOption && (
          <span className="text-sm text-cell-secondary flex items-center gap-1">
            ({t("Option")}) <FaCircleInfo className="text-cell-secondary" size={15} />
          </span>
        )}
      </label>

      <div className="relative w-full">
        <div
          className="flex items-center gap-2 h-10 border border-status-border rounded-[10px] p-[10px] box-border text-xs cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 dark:focus-within:border-blue-800"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex-1 flex gap-1 tab-content overflow-x-auto max-h-10">
            {selectedUsers.length > 0 ? (
              selectedUsers.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center text-nowrap text-xs overflow-hidden w-16"
                >
                  <img
                    src={
                      user.profilePicture ||
                      "https://ui-avatars.com/api/?name=John+Doe"
                    }
                    alt={user.name}
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-sm text-nowrap">{user.name}</span>
                  {isMultiSelect && (
                    <FaTimes
                      className="text-cell-secondary hover:text-red-500 cursor-pointer"
                      onClick={(e) => removeUser(user, e)}
                    />
                  )}
                </div>
              ))
            ) : (
              <span className="text-cell-secondary">
                {t("Select users")}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isViewIcon && (
              <>
                <IoGlobeOutline
                  className="text-cell-secondary"
                  size={16}
                />
                <p className="text-sm">{t("can view")}</p>
              </>
            )}
            <IoIosArrowDown
              className={`text-cell-secondary transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              size={16}
            />
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute z-30 mt-2 w-full bg-surface border border-status-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user._id}
                className={`flex items-center p-2 hover:bg-status-bg cursor-pointer ${
                  selectedUsers.some((u) => u._id === user._id)
                    ? "bg-status-bg dark:bg-gray-600"
                    : ""
                }`}
                onClick={() => toggleUser(user)}
              >
                {isMultiSelect && (
                  <input
                    type="checkbox"
                    checked={selectedUsers.some((u) => u._id === user._id)}
                    readOnly
                    className="mr-2 w-4 h-4 text-blue-600 bg-status-bg border-status-border rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:text-blue-400"
                  />
                )}
                <img
                  src={
                    user.profilePicture ||
                    "https://ui-avatars.com/api/?name=John+Doe"
                  }
                  alt={user.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-cell-primary">
                    {user.name}
                  </span>
                  <span className="text-xs text-cell-secondary">
                    {user.email}
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profilePicture: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  isOption: PropTypes.bool,
  classNameContainer: PropTypes.string,
  isMultiSelect: PropTypes.bool,
  isViewIcon: PropTypes.bool,
  defaultSelectedUsers: PropTypes.array,
};

export default UserSelect;
