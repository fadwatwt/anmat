"use client"
import { useState } from "react";
import DropdownMenu from "@/components/Dropdowns/DropdownMenu";
import { useDeletePaymentMethodMutation, useGetPaymentMethodsQuery, useSetDefaultPaymentMethodMutation } from "@/redux/payment-methods/paymentMethodsApi";
import { RiMastercardFill, RiVisaFill, RiBankCardFill } from "@remixicon/react";
import { useTranslation } from "react-i18next";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import ApiResponseAlert from "@/components/Alerts/ApiResponseAlert";
import ApprovalAlert from "@/components/Alerts/ApprovalAlert";
import EditPaymentMethodModal from "./partials/EditPaymentMethodModal.jsx";

function PaymentMethods() {
    const { t } = useTranslation();
    const { data: cardData = [], isLoading } = useGetPaymentMethodsQuery();
    const [setDefaultPm] = useSetDefaultPaymentMethodMutation();
    const [deletePaymentMethod, { isLoading: isDeleting }] = useDeletePaymentMethodMutation();
    const [apiResponse, setApiResponse] = useState({ isOpen: false, status: "", message: "" });
    const [deleteAlert, setDeleteAlert] = useState({ isOpen: false, card: null });
    const [editModal, setEditModal] = useState({ isOpen: false, card: null });

    const getAttr = (attributes, key) => attributes?.find(a => a.key === key)?.value || "";

    const handleSetDefault = async (id) => {
        try {
            await setDefaultPm(id).unwrap();
            setApiResponse({ isOpen: true, status: "success", message: t("Default payment method updated") });
        } catch (error) {
            setApiResponse({
                isOpen: true,
                status: "error",
                message: error?.data?.message || t("Failed to update default payment method"),
            });
        }
    }

    const handleDelete = async () => {
        const card = deleteAlert.card;
        if (!card) return;
        try {
            await deletePaymentMethod(card._id).unwrap();
            setDeleteAlert({ isOpen: false, card: null });
            setApiResponse({ isOpen: true, status: "success", message: t("Payment method deleted successfully") });
        } catch (error) {
            setDeleteAlert({ isOpen: false, card: null });
            setApiResponse({
                isOpen: true,
                status: "error",
                message: error?.data?.message || t("Failed to delete payment method"),
            });
        }
    }

    const handleEdit = (card) => {
        setEditModal({ isOpen: true, card });
    }

    const handleResponseClose = () => {
        setApiResponse({ isOpen: false, status: "", message: "" });
    };

    if (isLoading) return <div className="p-10 text-center">{t("Loading payment methods...")}</div>;

    return (
        <>
            <div className="flex flex-col items-start justify-center gap-4">
                {
                    cardData.length === 0 ? (
                        <div className="p-10 text-center w-full bg-surface rounded-2xl border border-status-border">
                            {t("No payment methods found")}
                        </div>
                    ) : (
                        cardData.map((card, index) => {
                            const brand = getAttr(card.attributes, 'brand') || t("Card");
                            const last4 = getAttr(card.attributes, 'last4');
                            const expMonth = getAttr(card.attributes, 'exp_month');
                            const expYear = getAttr(card.attributes, 'exp_year');
                            const country = getAttr(card.attributes, 'country');

                            return (
                                <div key={card._id} className={"md:p-5 p-2 rounded-2xl bg-surface border border-status-border w-full"}>
                                    <div className="flex flex-col gap-8 w-full">
                                        {/* header */}
                                        <div className="flex items-start gap-4 justify-between w-full">
                                            <div className="flex items-start gap-2">
                                                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-status-bg">
                                                    {brand.toLowerCase().includes('master') ? <RiMastercardFill size={35} className="text-orange-500" /> :
                                                     brand.toLowerCase().includes('visa') ? <RiVisaFill size={35} className="text-blue-600 dark:text-blue-400" /> :
                                                     <RiBankCardFill size={35} className="text-cell-secondary" />}
                                                </div>
                                                <div className="flex flex-col items-start justify-start gap-1">
                                                    <span className="text-lg text-cell-primary font-bold uppercase">
                                                        {brand}
                                                    </span>
                                                    {card.is_default && <div className="flex items-center justify-center gap-2 px-2 py-1 bg-[#2D9F7517] text-sm text-cell-primary rounded-md">
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.5 14.25C3.77198 14.25 0.75 11.228 0.75 7.5C0.75 3.77198 3.77198 0.75 7.5 0.75C11.228 0.75 14.25 3.77198 14.25 7.5C14.25 11.228 11.228 14.25 7.5 14.25ZM6.82703 10.2L11.5993 5.42707L10.6448 4.47263L6.82703 8.2911L4.91745 6.38153L3.963 7.33598L6.82703 10.2Z" fill="#2D9F75" />
                                                        </svg>
                                                        <span className="text-sm">
                                                            {t("Default Card")}
                                                        </span>
                                                    </div>}
                                                </div>
                                            </div>
                                            <div className="">
                                                {!card.is_default && (
                                                    <DropdownMenu
                                                        button={
                                                            <PiDotsThreeVerticalBold
                                                                size={24}
                                                                className="cursor-pointer"
                                                            />
                                                        }
                                                        removeDefaultButtonStyling={true}
                                                        content={
                                                            <div className="flex flex-col items-start justify-start gap-2 w-44">
                                                                <button
                                                                    onClick={() => handleSetDefault(card._id)}
                                                                    className="w-full px-3 py-3 text-sm border-b flex gap-2 items-center text-left text-cell-secondary hover:bg-status-bg select-none cursor-pointer whitespace-nowrap"
                                                                >
                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M7.5 14.25C3.77198 14.25 0.75 11.228 0.75 7.5C0.75 3.77198 3.77198 0.75 7.5 0.75C11.228 0.75 14.25 3.77198 14.25 7.5C14.25 11.228 11.228 14.25 7.5 14.25ZM6.82703 10.2L11.5993 5.42707L10.6448 4.47263L6.82703 8.2911L4.91745 6.38153L3.963 7.33598L6.82703 10.2Z" fill="#2D9F75" />
                                                                    </svg>
                                                                    {t("Set as default")}
                                                                </button>
                                                            </div>
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* info */}
                                        <div className="flex items-start gap-8 justify-between w-full">
                                            <div className="flex flex-col items-start justify-start gap-0 min-w-0 sm:min-w-[10rem]">
                                                <span className="text-sm text-cell-secondary font-bold">
                                                    {t("Country")}
                                                </span>
                                                <span className="text-sm text-cell-primary">
                                                    {country || t("N/A")}
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-start justify-start gap-0 min-w-0 sm:min-w-[15rem]">
                                                <span className="text-sm text-cell-secondary font-bold">
                                                    {t("Card Number")}
                                                </span>
                                                <span className="text-sm text-cell-primary">
                                                    {last4 ? `**** **** **** ${last4}` : t("N/A")}
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-start justify-start gap-0 min-w-0 sm:min-w-[10rem]">
                                                <span className="text-sm text-cell-secondary font-bold">
                                                    {t("Card Expiry")}
                                                </span>
                                                <span className="text-sm text-cell-primary">
                                                    {expMonth && expYear ? `${expMonth}/${expYear}` : t("N/A")}
                                                </span>
                                            </div>
                                        </div>

                                        {/* actions */}
                                        <div className="flex items-start justify-center gap-4">
                                            <button
                                                onClick={() => setDeleteAlert({ isOpen: true, card })}
                                                disabled={isDeleting}
                                                className="text-sm bg-surface text-red-700 px-4 py-2 w-96 rounded-lg hover:bg-red-50 transition-colors border border-red-200 disabled:opacity-50 dark:text-red-400 dark:hover:bg-red-900/20 dark:border-red-800"
                                            >
                                                {t("Delete Card")}
                                            </button>
                                            <button
                                                onClick={() => handleEdit(card)}
                                                className="text-sm bg-primary-100 text-primary-600 px-4 py-2 w-96 rounded-lg hover:bg-primary-600 hover:text-primary-100 transition-colors"
                                            >
                                                {t("Edit Payment Method")}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>

            <EditPaymentMethodModal
                isOpen={editModal.isOpen}
                onClose={() => setEditModal({ isOpen: false, card: null })}
                paymentMethod={editModal.card}
            />

            <ApprovalAlert
                isOpen={deleteAlert.isOpen}
                onClose={() => setDeleteAlert({ isOpen: false, card: null })}
                onConfirm={handleDelete}
                title={t("Delete Payment Method")}
                message={t("Are you sure you want to delete this payment method?")}
                confirmBtnText={t("Delete")}
                cancelBtnText={t("Cancel")}
                type="danger"
            />

            <ApiResponseAlert
                isOpen={apiResponse.isOpen}
                status={apiResponse.status}
                message={apiResponse.message}
                onClose={handleResponseClose}
            />
        </>
    );
}

export default PaymentMethods;
