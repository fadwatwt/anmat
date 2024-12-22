import {Route, Routes} from "react-router";
import DashboardPage from "../pages/Dashboard.page.jsx";
import ConversationsPage from "../pages/Conversations.page.jsx";
import AnalyticsPage from "../pages/Analytics.page.jsx";
import HRManagementPage from "../pages/HRManagement.page.jsx";
import ProjectsPage from "../pages/Projects.page.jsx";
import TasksPage from "../pages/Tasks.page.jsx";
import SocialMediaPage from "../pages/SocialMedia/SocialMedia.page.jsx";
import SettingPage from "../pages/Setting/Setting.page.jsx";

function AppRoute() {
    return (
        <Routes>
            <Route path={"/"} element={<DashboardPage/>}></Route>
            <Route path={"/conversations"} element={<ConversationsPage/>}></Route>
            <Route path={"/analytics"} element={<AnalyticsPage/>}></Route>
            <Route path={"/hr-management"} element={<HRManagementPage/>}></Route>
            <Route path={"/projects"} element={<ProjectsPage/>}></Route>
            <Route path={"/tasks"} element={<TasksPage/>}></Route>
            <Route path={"/social-media"} element={<SocialMediaPage/>}></Route>
            <Route path={"/settings"} element={<SettingPage/>}></Route>
        </Routes>
    );
}

export default AppRoute;