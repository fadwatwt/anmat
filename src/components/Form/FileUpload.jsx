
import { useDropzone } from "react-dropzone";
import {useCallback} from "react";
import {VscCloudUpload} from "react-icons/vsc";

const FileUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles); // معالجة الملفات المرفوعة
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: ".txt",
        maxSize: 50 * 1024 * 1024,
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center">
                <VscCloudUpload size={35} />
                <p className="text-gray-800">
                    Choose a file or drag & drop it here.
                </p>
                <p className="text-gray-700 text-sm">.txt format, up to 50 MB.</p>
                <button className="mt-4 px-8 py-2 bg-white border-2 rounded-xl text-gray-900 hover:bg-gray-200">
                    Browse File
                </button>
            </div>
        </div>
    );
};

export default FileUpload;
