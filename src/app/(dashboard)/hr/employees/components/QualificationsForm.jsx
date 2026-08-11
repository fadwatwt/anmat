import { useState } from "react"; // استيراد useState
import { HiOutlineTrash } from "react-icons/hi"; // أيقونة الحذف
import { useTranslation } from "react-i18next";
import InputAndLabel from "@/components/Form/InputAndLabel";
import ElementsSelect from "@/components/Form/ElementsSelect";
import FileUpload from "@/components/Form/FileUpload";
import TextAreaWithLabel from "@/components/Form/TextAreaWithLabel";

function QualificationsForm() {
    const { t } = useTranslation();

    const [qualifications, setQualifications] = useState([
        { id: Date.now() }
    ]);

    const optionsStatus = [
        { id: "1", element: "Palestine" },
        { id: "2", element: "Jordan" },
        { id: "3", element: "Lebanon" },
        { id: "4", element: "Syria" },
    ];

    const addQualification = () => {
        setQualifications([...qualifications, { id: Date.now() }]);
    };

    const removeQualification = (id) => {
        setQualifications(qualifications.filter(q => q.id !== id));
    };

    return (
        <div className={"flex flex-col gap-8 max-h-full pb-3"}>
            {qualifications.map((qual, index) => (
                <div
                    key={qual.id}
                    className="relative flex flex-col gap-4 p-4 border border-dashed border-status-border rounded-xl bg-status-bg"
                >
                    {qualifications.length > 1 && (
                        <button
                            onClick={() => removeQualification(qual.id)}
                            className="absolute -top-3 right-0 bg-red-100 text-red-600 p-1.5 rounded-full hover:bg-red-200 transition-colors shadow-sm dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/40"
                            title={t("Delete")}
                        >
                            <HiOutlineTrash size={18} />
                        </button>
                    )}

                    <div className="flex flex-col gap-4">
                        <InputAndLabel
                            type="text"
                            title={t("Qualification Title")}
                            isRequired={true}
                            placeholder={t("Online Payment")}
                        />
                        <ElementsSelect
                            title={t("Type")}
                            options={optionsStatus}
                            defaultValue={[optionsStatus[0]]}
                            name={`status-${qual.id}`} // اسم فريد لكل حقل
                            classNameContainer={"w-full"}
                        />
                        <TextAreaWithLabel
                            title={t("Description")}
                            placeholder={t("Enter description...")}
                        />
                        <FileUpload title={t("File")} />
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={addQualification}
                className="w-full py-3 border border-dashed border-blue-400 text-blue-600 bg-blue-50 rounded-xl font-medium hover:bg-blue-100 transition-all flex items-center justify-center gap-2 dark:border-blue-800 dark:text-blue-400 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
            >
                <span>+</span> {t("Add New Qualification")}
            </button>
        </div>
    );
}

export default QualificationsForm;