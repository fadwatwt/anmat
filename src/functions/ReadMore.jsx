import PropTypes from "prop-types";
import { useState } from "react";

function ReadMore({ maxLength, htmlContent }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const MAX_LENGTH = maxLength || 50;

    // تقطيع النص
    const truncatedContent = htmlContent.slice(0, MAX_LENGTH);

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: isExpanded
                        ? htmlContent
                        : truncatedContent + (htmlContent.length > MAX_LENGTH ? "..." : ""),
                }}
            />
            {htmlContent.length > MAX_LENGTH && (
                <span
                    className={"text-primary-base text-sm dark:text-primary-lighter cursor-pointer"}
                    onClick={toggleReadMore}
                >
                    {isExpanded ? "عرض أقل" : "عرض المزيد"}
                </span>
            )}
        </div>
    );
}

ReadMore.propTypes = {
    htmlContent: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
};

export default ReadMore;
