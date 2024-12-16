
import TabMethod from "../TabsContener/TabMethod.jsx";
import PostByFileMethod from "./Tabs/Post/PostByFile.method.jsx";
import DeletePostByFileMethod from "./Tabs/Post/DeletePostByFile.method.jsx";

function PostByFile() {
    const tabsData = [
        {
            title: "Post",
            content: <PostByFileMethod />,
        },
        {
            title: "Delete Post",
            content:<DeletePostByFileMethod />,
        },
    ];
    return (
        <TabMethod tabs={tabsData}/>
    );
}


export default PostByFile;