import PropTypes from "prop-types";

function WordTheMiddleAndLine({word}) {
    return (
        <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            {
                word ?
                    <span className="mx-4 text-gray-500">{word}</span>
                    :null
            }
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
    );
}

WordTheMiddleAndLine.propTypes = {
    word: PropTypes.string
}

export default WordTheMiddleAndLine;