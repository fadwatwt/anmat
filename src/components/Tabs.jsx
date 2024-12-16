import { useState } from "react";
import PropTypes from "prop-types";

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.title || ""); // Default to the first tab

    return (
        <div className="w-full flex flex-col gap-4">
            {/* Tabs navigation */}
            <div className="tabs-nav flex lg:gap-6  md:gap-4 gap-1 border-b border-gray-200">
                {tabs.map(({ title, icon: Icon }) => (
                    <div
                        key={title}
                        className={`flex py-2 md:gap-2 gap-1 items-center cursor-pointer ${
                            activeTab === title ? "border-b-2 border-primary-500" : ""
                        }`}
                        onClick={() => setActiveTab(title)}
                    >
                        {Icon && <Icon size={20} className={activeTab === title ? "text-primary-500" : "text-gray-600"} />}
                        <p>{title}</p>
                    </div>
                ))}
            </div>

            {/* Active tab content */}
            <div className="tab-content w-full text-nowrap overflow-hidden mt-4 bar overflow-y-auto max-h-[62vh] ">
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