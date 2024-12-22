import './App.css';
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import AppRoute from "./Routes/AppRoute.jsx";
import { useLocation } from "react-router";
import useDarkMode from './hooks/useDarkMode';
import {useState} from "react";

function App() {
    const [isSlidebarOpen, setSlidebarOpen] = useState(false);
    const toggleSlidebarOpen = () => {
        setSlidebarOpen(!isSlidebarOpen);
    };

    const location = useLocation();
    const isSettingsPage = location.pathname === "/settings";

    useDarkMode();

    return (
        <div className={`flex max-w-[100vw] max-h-screen overflow-hidden dark:bg-gray-900`}>
            <Menu isSlidebarOpen={isSlidebarOpen} toggleSlidebarOpen={toggleSlidebarOpen} />
            <div className={"w-full flex-col"}>
                {!isSettingsPage && (
                    <Header toggleSlidebarOpen={toggleSlidebarOpen} isSlidebarOpen={isSlidebarOpen} />
                )}
                <AppRoute />
            </div>
        </div>
    );
}

export default App;
