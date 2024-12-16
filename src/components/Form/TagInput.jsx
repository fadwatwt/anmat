import { useState } from "react";
import PropTypes from "prop-types";

const TagInput = ({ suggestions, placeholder }) => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false); // حالة تتبع التركيز

    // إضافة الشخص إلى العلامات
    const addTag = (person) => {
        if (!tags.find((tag) => tag.id === person.id)) {
            setTags([...tags, person]);
        }
        setInputValue("");
    };

    const removeTag = (id) => {
        setTags(tags.filter((tag) => tag.id !== id));
    };

    const filteredSuggestions = () => {
        if (inputValue) {
            return suggestions.filter(
                (person) =>
                    person.name.toLowerCase().includes(inputValue.toLowerCase()) &&
                    !tags.find((tag) => tag.id === person.id)
            );
        }
        // عرض جميع الاقتراحات إذا كان الحقل في وضع التركيز ولم يتم إدخال أي نص
        if (isFocused) {
            return suggestions.filter(
                (person) => !tags.find((tag) => tag.id === person.id)
            );
        }
        return [];
    };

    return (
        <div className="w-full max-w-lg">
            <div className="flex flex-wrap items-center border p-2 rounded-lg w-full">
                {tags.map((tag) => (
                    <div
                        key={tag.id}
                        className="flex items-center space-x-2 bg-gray-100 border rounded-full px-3 py-1"
                    >
                        <img
                            src={tag.image}
                            alt={tag.name}
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-700">{tag.name}</span>
                        <button
                            onClick={() => removeTag(tag.id)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            ×
                        </button>
                    </div>
                ))}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)} // عند التركيز على الحقل
                    onBlur={() => setIsFocused(false)} // عند فقدان التركيز
                    className="flex-grow focus:outline-none text-sm p-1 w-full"
                />
            </div>
            {(inputValue || isFocused) && filteredSuggestions().length > 0 && (
                <div className="mt-2 border rounded-lg shadow bg-white">
                    {filteredSuggestions().map((person) => (
                        <div
                            key={person.id}
                            onClick={() => addTag(person)}
                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-6 h-6 rounded-full mr-2"
                            />
                            <span className="text-sm text-gray-700">{person.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

TagInput.propTypes = {
    suggestions: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
};

export default TagInput;
