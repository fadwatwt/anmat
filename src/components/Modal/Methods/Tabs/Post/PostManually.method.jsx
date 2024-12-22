import { useState } from "react";
import TagInput from "../../../../Form/TagInput.jsx";
import { BsImage } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { MdOutlineSell } from "react-icons/md";
import DefaultButton from "../../../../Form/DefaultButton.jsx";
import Status from "../../../../Subcomponents/Status.jsx";

function PostManuallyMethod() {
    const [suggestions] = useState([
        { id: 1, name: "Yara", image: "https://via.placeholder.com/40" },
        { id: 2, name: "Ahmed", image: "https://via.placeholder.com/40" },
        { id: 3, name: "Ali", image: "https://via.placeholder.com/40" },
        { id: 4, name: "Mohamed", image: "https://via.placeholder.com/40" },
    ]);

    const [uploadedFile, setUploadedFile] = useState(null); // لتخزين الملف الذي تم رفعه
    const [uploadError, setUploadError] = useState(false); // لتحديد حالة نجاح أو فشل التحميل

    // دالة لتحميل الملف
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // نحاول رفع الملف، وإذا فشل التحميل نحول حالة الخطأ إلى true
            const isUploadSuccessful = Math.random() > 0.5; // محاكاة حالة التحميل (نجاح/فشل)
            if (isUploadSuccessful) {
                setUploadedFile(file);
                setUploadError(false); // تم التحميل بنجاح
            } else {
                setUploadedFile(null);
                setUploadError(true); // فشل التحميل
            }
        }
    };

    // دالة لتنسيق حجم الملف
    const formatFileSize = (size) => {
        if (size < 1024) return `${size} Bytes`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };

    return (
        <div className={"flex flex-col items-start gap-4"}>
            <div className={"bg-gray-100 w-full flex justify-start p-2 dark:bg-gray-700 text-sm rounded-md"}>
                <p className={"dark:text-gray-200"}>Account Name 1</p>
            </div>
            <div className={"flex flex-col gap-2 items-start w-full"}>
                <label className={"text-black dark:text-gray-300"}>Post description</label>
                <textarea
                    placeholder={"Placeholder text.."}
                    className={"rounded-xl p-2 border-2 w-full focus:outline-none focus:border-blue-500"}
                    rows={5}
                ></textarea>
                <div className={"flex flex-col gap-3 items-start w-full pl-2"}>
                    <div className={"icons-post flex justify-start gap-3"}>
                        {/* أيقونات تحميل الملفات */}
                        <label>
                            <BsImage
                                className={"text-primary-500 rounded-md cursor-pointer"}
                                size={20}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <label>
                            <TfiVideoClapper
                                className={"text-primary-500 rounded-md cursor-pointer"}
                                size={20}
                            />
                            <input
                                type="file"
                                accept="video/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <label>
                            <MdOutlineSell
                                className={"text-primary-500 cursor-pointer"}
                                size={20}
                            />
                            <input
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                    <div className={"state-post-file w-full"}>
                        {/* عرض حالة التحميل */}
                        {uploadError ? (
                            <div className="flex flex-col w-full items-start gap-1">
                                <Status status={false} titleFalse={"Failed to upload to the file"} />
                                <span className="text-sm text-red-500 cursor-pointer">Try Again</span>
                            </div>
                        ) : uploadedFile ? (
                            <div className="w-full flex items-center justify-between">
                                <Status status={true} titleTrue={"Uploaded"} />
                                <div className={"flex gap-2 items-center border-2 rounded-lg px-2 py-1"}>
                                    {uploadedFile.type.startsWith("image/") && (
                                        <img
                                            src={URL.createObjectURL(uploadedFile)}
                                            alt="Uploaded"
                                            className="w-8 h-8 rounded-lg object-cover"
                                        />
                                    )}
                                    <span className="text-sm text-gray-700">
                    Size: {formatFileSize(uploadedFile.size)}
                  </span>
                                </div>
                            </div>
                        ) : (
                            <Status status={false} titleFalse={"No file uploaded"} />
                        )}
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-2 items-start w-full"}>
                <label className={"text-black dark:text-gray-300"}>Tag people</label>
                <TagInput placeholder={"Yara@.."} suggestions={suggestions} />
            </div>
            <div className={"flex gap-2 w-full"}>
                <DefaultButton type={"button"} title={"Cancel"} />
                <DefaultButton
                    type={"button"}
                    title={"Apply"}
                    className={"bg-primary-500 text-white"}
                />
            </div>
        </div>
    );
}

export default PostManuallyMethod;
