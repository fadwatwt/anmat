"use client"

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import Modal from "@/components/Modal/Modal.jsx";
import InputAndLabel from "@/components/Form/InputAndLabel.jsx";
import MonthInput from "@/components/Form/MonthInput";
import { useTranslation } from "react-i18next";
import { useUpdatePaymentMethodMutation } from "@/redux/payment-methods/paymentMethodsApi";
import ApiResponseAlert from "@/components/Alerts/ApiResponseAlert";

const detectCardBrand = (number) => {
  const num = number?.replace(/\s/g, "") || "";
  if (/^4/.test(num)) return "Visa";
  if (/^5[1-5]/.test(num) || /^2[2-7]/.test(num)) return "Mastercard";
  if (/^3[47]/.test(num)) return "Amex";
  if (/^6(?:011|5)/.test(num)) return "Discover";
  return "Card";
};

const getAttr = (attributes, key) => attributes?.find(a => a.key === key)?.value || "";

function EditPaymentMethodModal({ isOpen, onClose, paymentMethod }) {
  const { t } = useTranslation();
  const [updatePaymentMethod, { isLoading }] = useUpdatePaymentMethodMutation();
  const [apiResponse, setApiResponse] = useState({ isOpen: false, status: "", message: "" });

  const existingName = getAttr(paymentMethod?.attributes, "name");
  const existingExpMonth = getAttr(paymentMethod?.attributes, "exp_month");
  const existingExpYear = getAttr(paymentMethod?.attributes, "exp_year");
  const existingExpDate = existingExpMonth && existingExpYear
    ? `${existingExpYear}-${String(existingExpMonth).padStart(2, "0")}`
    : "";

  const formik = useFormik({
    initialValues: {
      nameOnCard: existingName || "",
      cardNumber: "",
      expirationDate: existingExpDate || "",
      cvv: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      nameOnCard: Yup.string().required(t("Required")),
      cardNumber: Yup.string()
        .matches(/^\d{13,19}$/, t("Invalid card number")),
      expirationDate: Yup.string().matches(/^\d{4}-\d{2}$/, t("Invalid expiration date")),
      cvv: Yup.string()
        .matches(/^\d{3,4}$/, t("Invalid CVV")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const attributes = [
          { key: "name", value: values.nameOnCard },
        ];

        if (values.cardNumber) {
          attributes.push(
            { key: "last4", value: values.cardNumber.slice(-4) },
            { key: "brand", value: detectCardBrand(values.cardNumber) },
          );
        }

        if (values.expirationDate) {
          const [expYear, expMonth] = values.expirationDate.split("-");
          attributes.push(
            { key: "exp_month", value: expMonth },
            { key: "exp_year", value: expYear },
          );
        }

        await updatePaymentMethod({ id: paymentMethod._id, attributes }).unwrap();
        resetForm();
        setApiResponse({ isOpen: true, status: "success", message: t("Payment method updated successfully") });
        onClose();
      } catch (error) {
        setApiResponse({
          isOpen: true,
          status: "error",
          message: error?.data?.message || t("Failed to update payment method"),
        });
      }
    },
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isBtns={true}
        btnApplyTitle={isLoading ? t("Saving...") : t("Save")}
        onClick={formik.handleSubmit}
        className={"lg:w-4/12 md:w-8/12 sm:w-6/12 w-11/12 p-4"}
        title={t("Edit Payment Method")}
      >
        <div className="px-1">
          <div className="flex flex-col gap-4">
            <InputAndLabel
              title={t("Name on Card")}
              name="nameOnCard"
              value={formik.values.nameOnCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t("Enter Name on Card...")}
              error={
                formik.touched.nameOnCard && formik.errors.nameOnCard
                  ? formik.errors.nameOnCard
                  : ""
              }
              isRequired={true}
            />

            <InputAndLabel
              title={t("Card Number")}
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t("Enter Card Number...")}
              error={
                formik.touched.cardNumber && formik.errors.cardNumber
                  ? formik.errors.cardNumber
                  : ""
              }
            />

            <div className="flex items-start gap-4 justify-between">
              <div className="w-full md:w-1/2">
                <MonthInput
                  title={t("Expiration Date")}
                  name="expirationDate"
                  value={formik.values.expirationDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t("Enter Expiration Date...")}
                  error={
                    formik.touched.expirationDate && formik.errors.expirationDate
                      ? formik.errors.expirationDate
                      : ""
                  }
                />
              </div>

              <div className="w-full md:w-1/2">
                <InputAndLabel
                  title={t("CVV")}
                  name="cvv"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t("Enter CVV...")}
                  error={
                    formik.touched.cvv && formik.errors.cvv
                      ? formik.errors.cvv
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ApiResponseAlert
        isOpen={apiResponse.isOpen}
        status={apiResponse.status}
        message={apiResponse.message}
        onClose={() => setApiResponse({ isOpen: false, status: "", message: "" })}
      />
    </>
  );
}

EditPaymentMethodModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  paymentMethod: PropTypes.object,
};

export default EditPaymentMethodModal;
