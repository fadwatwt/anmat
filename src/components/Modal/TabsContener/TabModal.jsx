import {useState} from "react";
import PropTypes from "prop-types";

function TabModal({tabs}) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");
    return (
        <div className="w-full flex flex-col gap-4">
            {/* Tabs navigation */}
            <div className="tabs-nav flex gap-2">
                {tabs.map(({ title, icon: Icon }) => (
                    <div
                        key={title}
                        className={`flex py-2 w-6/12 md:gap-2  justify-center gap-1 items-center cursor-pointer ${
                            activeTab === title ? "border-b-2  border-primary-500" : ""
                        }`}
                        onClick={() => setActiveTab(title)}
                    >
                        {Icon && <Icon size={20} className={activeTab === title ? "text-primary-500" : "text-gray-600"} />}
                        <p className={"dark:text-gray-400"}>{title}</p>
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

TabModal.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.elementType, // Icon is optional
            content: PropTypes.node.isRequired, // Content must be a valid React node
        })
    ).isRequired,
};

export default TabModal;