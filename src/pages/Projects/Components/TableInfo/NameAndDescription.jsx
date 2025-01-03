import PropTypes from "prop-types";


function NameAndDescription({name,description}) {
    return (
        <>
            <p className="text-sm text-main-100 dark:text-main-900">{name}</p>
            <p className="text-xs text-sub-500 truncate dark:text-sub-300">{description}</p>
        </>
    );
}

NameAndDescription.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
}

export default NameAndDescription;