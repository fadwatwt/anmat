import {FiPlus} from "react-icons/fi";
import SearchInput from "../../../components/Form/SearchInput.jsx";
import {TfiImport} from "react-icons/tfi";
import Table from "../../../components/Tables/Table.jsx";
import {PiDotsThreeVerticalBold} from "react-icons/pi";
import {IoMdCheckmark} from "react-icons/io";
import {useState} from "react";
import ActionsBtns from "../../../components/ActionsBtns.jsx";
import FollowAndUnfollow from "../../../components/Modal/Methods/FollowAndUnfollow.jsx";
import ReplayAndDeleteReplay from "../../../components/Modal/Methods/ReplayAndDeleteReplay.jsx";
import LikeAndUnLike from "../../../components/Modal/Methods/LikeAndUnlike.jsx";
import PostAndDeletePost from "../../../components/Modal/Methods/PostAndDeletePost.jsx";

function FacebookTab() {
    const headers = [
        { label: "Accounts", width: "200px" },
        { label: "Description", width: "150px" },
        { label: "Location", width: "100px" },
        { label: "", width: "50px" },
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(null); // حالة لتتبع أي عنصر يتم النقر عليه
    const [isOpenFollowModal, setIsOpenFollowModal] = useState(false);
    const [isOpenReplayModal, setIsOpenReplayModal] = useState(false);
    const [isOpenLikeModal, setIsOpenLikeModal] = useState(false);
    const [isOpenPostModal, setIsOpenPostModal] = useState(false);

    const handleDropdownToggle = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const handleFollowModal = () => {
        setIsOpenFollowModal(!isOpenFollowModal);
    }

    const handleReplayModal = () => {
        setIsOpenReplayModal(!isOpenReplayModal);
    }
    const handleLikeModal = () => {
        setIsOpenLikeModal(!isOpenLikeModal);
    }
    const handlePostModal = () => {
        setIsOpenPostModal(!isOpenPostModal);
    }

    const handleCategorySelect = (category) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev.filter((item) => item !== category);
            } else {
                return [...prev, category];
            }
        });
    };


    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

    const rows = [
        ["Account Name 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2024"],
        ["Account Name 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2023"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"
        ],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
        ["Account Name 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            "2022"],
    ];
    return (
        <>
        <div className="w-full flex gap-8 flex-wrap flex-row">
            <div className="bg-white xl:w-8/12 w-full rounded-2xl md:order-1 order-2 py-5 px-4 flex flex-col gap-4 items-start">
                <p>Select accounts from the table to take action</p>
                <div className={"bts-proses flex gap-1 "}>
                    <button onClick={handlePostModal}
                        className={" flex gap-1 items-center bg-primary-100 px-3 py-2 rounded-lg text-primary-500 text-md"}>
                        <FiPlus/>
                        Post
                    </button>
                    <button onClick={handleFollowModal}
                        className={" flex gap-1 items-center bg-primary-100 px-3 py-2 rounded-lg text-primary-500 text-md"}>
                        <FiPlus/>
                        Follow
                    </button>
                    <button onClick={handleLikeModal}
                        className={" flex gap-1 items-center bg-primary-100 px-3 py-2 rounded-lg text-primary-500 text-md"}>
                        <FiPlus/>
                        Link
                    </button>
                    <button onClick={handleReplayModal}
                        className={" flex gap-1 items-center bg-primary-100 px-3 py-2 rounded-lg text-primary-500 text-md"}>
                        <FiPlus/>
                        Reply
                    </button>
                </div>
                <div className={"rounded-lg w-full border border-gary-200 p-3 flex flex-col gap-4"}>
                    <div className={"flex justify-start items-baseline"}>
                        <p className={"text-gray-800 text-start w-7/12"}>Category 3</p>
                        <div className={"flex gap-2"}>
                            <SearchInput/>
                            <button className={"flex items-baseline px-2 py-1 gap-1 rounded-lg border border-gray-200"}>
                                <TfiImport size={15}/>
                                Export
                            </button>
                        </div>
                    </div>
                    <Table className="custom-class" headers={headers} isActions={true} rows={rows}/>
                </div>
            </div>
            <div className={"flex-1 md:order-2 order-1 relative"}>
                <div className={"bg-white  h-auto rounded-2xl p-4 flex flex-col gap-3 w-full max-h-80 overflow-y-auto none-scroll"}>
                    <div className={"flex justify-between"}>
                        <p className={"text-start text-gray-800"}>Facebook Categories</p>
                        <div className={"flex gap-2 items-center text-primary-500"}>
                            <FiPlus size={20}/>
                            <p className={"text-md text-primary-500"}>Import</p>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-2 "}>
                        <p className={"text-start text-sm text-gray-400"}>Select a Category</p>
                        <div className={"flex flex-col"} style={{flexShrink: 0, flexGrow: 0}}>
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`flex justify-between items-end py-2 px-2 rounded-xl cursor-pointer ${selectedCategories.includes(category) ? "bg-primary-50" : "hover:bg-primary-50"}`}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    <div className={"flex gap-1"}>
                                        {selectedCategories.includes(category) && (
                                            <IoMdCheckmark size={20} className={"text-primary-500"}/>
                                        )}
                                        <p className={"text-gray-600 text-sm"}>{category}</p>
                                    </div>
                                    <div>
                                        <PiDotsThreeVerticalBold
                                            className="cursor-pointer"
                                            onClick={() => handleDropdownToggle(index)}
                                        />
                                        {dropdownOpen === index && (
                                           <ActionsBtns/>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <FollowAndUnfollow isOpen={isOpenFollowModal} onClose={handleFollowModal}  />
        <ReplayAndDeleteReplay isOpen={isOpenReplayModal} onClose={handleReplayModal}  />
        <LikeAndUnLike isOpen={isOpenLikeModal} onClose={handleLikeModal}  />
        <PostAndDeletePost isOpen={isOpenPostModal} onClose={handlePostModal}  />
        </>
    );
}

export default FacebookTab;