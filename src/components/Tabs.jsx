import { useState } from "react";
import PropTypes from "prop-types";

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.title || ""); // Default to the first tab

    return (
        <div className="max-w-screen-sm xl:max-w-full md:max-w-3xl flex flex-col gap-4">
            {/* Tabs navigation */}
            <div className="tabs-nav flex flex-wrap lg:gap-6  md:gap-4 gap-1 border-b border-gray-200 dark:border-gray-700">
                {tabs.map(({ title, icon: Icon }) => (
                    <div
                        key={title}
                        className={`flex py-2 md:gap-2 gap-1 items-center cursor-pointer ${
                            activeTab === title ? "border-b-4 border-primary-500" : ""
                        }`}
                        onClick={() => setActiveTab(title)}
                    >
                        {Icon && <Icon size={20} className={activeTab === title ? "text-primary-500" : "text-gray-600 dark:dark:text-gray-400"} />}
                        <p className={"dark:text-gray-400"}>{title}</p>
                    </div>
                ))}
            </div>

            {/* Active tab content */}
            <div className="tab-content w-full text-nowrap overflow-hidden mt-4 bar overflow-y-auto h-[calc(100vh-15rem)]">
                {tabs.map(({ title, content }) => (
                    <div key={title} className={activeTab === title ? "block" : "hidden"}>
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.elementType, // Icon is optional
            content: PropTypes.node.isRequired, // Content must be a valid React node
        })
    ).isRequired,
};

export default Tabs;