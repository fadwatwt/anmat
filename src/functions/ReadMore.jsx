import PropTypes from "prop-types";
import { useState } from "react";
import {useTranslation} from "react-i18next";

function ReadMore({ maxLength, htmlContent }) {
    const {t} = useTranslation()
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const MAX_LENGTH = maxLength || 50;

    // تقطيع النص
    const truncatedContent = htmlContent.slice(0, MAX_LENGTH);

    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: isExpanded
                        ? htmlContent
                        : truncatedContent + (htmlContent.length > MAX_LENGTH ? "..." : ""),
                }}
            />
            {htmlContent.length > MAX_LENGTH && (
                <span
                    className={"text-primary-base text-sm dark:text-primary-200 cursor-pointer"}
                    onClick={toggleReadMore}
                >
                    {isExpanded ? t("Read Less") :t( "Read More")}
                </span>
            )}
        </>
    );
}

ReadMore.propTypes = {
    htmlContent: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
};

export default ReadMore;
