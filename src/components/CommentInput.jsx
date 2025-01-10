import  { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdMic } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";

function CommentInput() {
    const [message, setMessage] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);

    const emojiList = ["😊", "😂", "😍", "👍", "🙏"]; // قائمة الإيموجيات

    const handleEmojiClick = (emoji) => {
        setMessage((prevMessage) => prevMessage + emoji);
        setShowEmojis(false); // إخفاء قائمة الإيموجيات بعد اختيار إيموجي
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            alert(`تم اختيار الملف: ${file.name}`); // رسالة لإظهار اسم الملف
        }
    };

    return (
        <div className="w-full flex items-center gap-2">
            {/* الحقل النصي مع الأيقونات */}
            <div className="relative flex items-center py-1 border rounded-xl bg-white shadow-sm flex-1">
                {/* أيقونة الإيموجي */}
                <button
                    className="absolute left-4 text-gray-500 hover:text-blue-500"
                    onClick={() => setShowEmojis(!showEmojis)}
                >
                    <BsEmojiSmile size={20} />
                </button>

                {/* قائمة الإيموجيات */}
                {showEmojis && (
                    <div className="absolute bottom-10 left-4 bg-white border rounded shadow p-2">
                        <div className="flex gap-2">
                            {emojiList.map((emoji, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleEmojiClick(emoji)}
                                    className="text-lg hover:bg-gray-100 p-1 rounded"
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* حقل الإدخال */}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-10 py-2 text-sm border-none outline-none rounded-xl focus:ring focus:ring-blue-200"
                />

                {/* أيقونة مشبك الورق */}
                <label className="absolute right-12 text-gray-500 hover:text-blue-500 cursor-pointer">
                    <FiPaperclip size={20} />
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </label>

                {/* أيقونة الميكروفون */}
                <button className="absolute right-4 text-gray-500 hover:text-blue-500">
                    <MdMic size={20} />
                </button>
            </div>

            {/* زر الإرسال */}
            <button
                className="p-2 "
                onClick={() => alert(`تم الإرسال: ${message}`)}
            >
                <IoSendSharp className="text-primary-base" size={20} />
            </button>
        </div>
    );
}

export default CommentInput;
