import PropTypes from "prop-types";
import {IoClose} from "react-icons/io5";

const Modal = ({ isOpen, onClose, children,title,className }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-xl shadow-lg p-4 ${className ? className : "lg:w-1/3 md:w-8/12 sm:w-7/12 w-11/12"}`}
                onClick={(e) => e.stopPropagation()} // منع إغلاق عند النقر داخل المودال
            >
                <div className="flex justify-between items-center mb-4 border-b-2 pb-3">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        <IoClose size={18} />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
}
export default Modal;
