import TabMethod from "../TabsContener/TabMethod.jsx";
import DeletePostManuallyMethod from "./Tabs/Post/DeletePostManually.method.jsx";
import PostManuallyMethod from "./Tabs/Post/PostManually.method.jsx";

function PostManually() {
    const tabsData = [
        {
            title: "Post",
            content: <PostManuallyMethod />,
        },
        {
            title: "Delete Post",
            content:<DeletePostManuallyMethod />,
        },
    ];
    return (
        <TabMethod tabs={tabsData}/>
    );
}

export default PostManually;