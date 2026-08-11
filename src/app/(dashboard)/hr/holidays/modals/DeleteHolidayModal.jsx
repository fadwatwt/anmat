"use client";
import Modal from "@/components/Modal/Modal";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";

function DeleteHolidayModal({ isOpen, onClose, onDelete, holidayName }) {
    const { t } = useTranslation();

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t("Delete Holiday")}
            size="sm"
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xl dark:bg-red-900/30">
                    <FaTrash />
                </div>
                <p className="text-cell-secondary">
                    {t("Are you sure you want to delete of")} <span className="font-bold text-cell-primary">{holidayName}</span> {t("For Holiday?")}
                </p>

                <div className="flex justify-center gap-2 mt-4 w-full">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 text-cell-secondary bg-status-bg rounded-lg hover:bg-status-bg"
                    >
                        {t("Cancel")}
                    </button>
                    <button
                        onClick={onDelete}
                        className="flex-1 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        {t("Yes, Delete")}
                    </button>
                </div>
            </div>
        </Modal>
    );
}

DeleteHolidayModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    holidayName: PropTypes.string,
};

export default DeleteHolidayModal;
