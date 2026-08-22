import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import ApprovalAlert from "@/components/Alerts/ApprovalAlert.jsx";
import PermissionGuard from "@/components/PermissionGuard.jsx";

function BulkDeleteButton({ count, onConfirm, permission }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    if (!count || count <= 0) return null;

    const button = (
        <button
            onClick={() => setIsOpen(true)}
            className="flex gap-1 items-center bg-rose-100 dark:bg-rose-950 px-3 py-2 rounded-lg text-rose-600 dark:text-rose-300 text-sm hover:bg-rose-200 transition-colors"
        >
            <FiTrash2 />
            {t("Delete Selected ({{count}})", { count })}
        </button>
    );

    return (
        <>
            {permission ? (
                <PermissionGuard permission={permission} fallback={null}>
                    {button}
                </PermissionGuard>
            ) : (
                button
            )}

            <ApprovalAlert
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={async () => {
                    setIsOpen(false);
                    await onConfirm();
                }}
                title={t("Delete Selected")}
                message={t("Are you sure you want to delete {{count}} selected items?", { count })}
                confirmBtnText={t("Yes, Delete")}
                cancelBtnText={t("Cancel")}
                type="warning"
            />
        </>
    );
}

BulkDeleteButton.propTypes = {
    count: PropTypes.number.isRequired,
    onConfirm: PropTypes.func.isRequired,
    permission: PropTypes.string,
};

export default BulkDeleteButton;
