import PropTypes from "prop-types";


function DefaultButton({title, onClick,className,type}) {
    return (
        <button onClick={onClick} type={type} className={`flex-1 border-2 rounded-xl p-2 text-center ${className}`}>{title}</button>
    );
}

DefaultButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
}

export default DefaultButton;