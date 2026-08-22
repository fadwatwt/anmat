"use client"

import { RiFlashlightLine } from "@remixicon/react";
import Table from "@/components/Tables/Table";
import { statusCell } from "@/components/StatusCell";
import { useTranslation } from "react-i18next";
import { useGetMyPaymentsQuery } from "@/redux/subscriptions/subscriptionsApi";
import { format } from "date-fns";
import { getDateLocale } from "@/lib/dateLocale";

const headers = [
    { label: "Product", width: "300px" },
    { label: "Reference", width: "200px" },
    { label: "Date", width: "150px" },
    { label: "Amount", width: "100px" },
    { label: "Status", width: "125px" },
];

function BillingHistory() {
    const { t } = useTranslation();
    const { data: payments = [], isLoading } = useGetMyPaymentsQuery();

    const getPaymentInterval = (payment) => {
        const metaEntry = payment.stripe_metadata?.find((m) => m.startsWith("interval:"));
        return metaEntry?.split(": ")[1] || null;
    };

    // Transform data into the format expected by the Table component
    const rows = payments.map(payment => {
        const interval = getPaymentInterval(payment);
        const planName = payment.stripe_metadata?.[0]?.split(': ')[1] || t("Subscription");
        // Product cell
        return [
            <div key={`product-${payment._id}`} className="flex items-center justify-start gap-2">
                <div className="rounded-full p-2 bg-primary-100">
                    <div className="rounded-full p-2 bg-primary-200">
                        <RiFlashlightLine size={25} className="rounded-full text-primary-500 dark:text-primary-400 stroke-[5px]" />
                    </div>
                </div>
                <span className="text-sm text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
                    {planName}
                    {interval && (
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-primary-100 text-primary-base">
                            {t(interval === "year" ? "Yearly" : "Monthly")}
                        </span>
                    )}
                </span>
            </div>,

            // Reference cell
            <div key={`ref-${payment._id}`} className="flex items-center justify-start gap-2">
                <span className="text-sm text-gray-900 dark:text-gray-100">
                    {payment.stripe_invoice_id || "N/A"}
                </span>
            </div>,

            // Date cell
            <div key={`date-${payment._id}`}>{payment.createdAt ? format(new Date(payment.createdAt), "MMM dd, yyyy", { locale: getDateLocale() }) : "N/A"}</div>,

            // Amount cell
            <div key={`amount-${payment._id}`}>{payment.currency?.toUpperCase()} {payment.amount}</div>,

            // Status cell
            statusCell(payment.status)
        ];
    });

    if (isLoading) return <div className="p-5 text-center">{t("Loading...")}</div>;

    return (
        <Table
            classContainer={"rounded-2xl px-8"}
            title={t("Invoices")}
            headers={headers}
            isActions={false}
            rows={rows}
            isFilter={true}
        />
    );
}

export default BillingHistory;