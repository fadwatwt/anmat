import './App.css'
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import AppRoute from "./Routes/AppRoute.jsx";
import {useState} from "react";
import {useLocation} from "react-router";
import useDarkMode from "./Hooks/useDarkMode.js";

function App() {
    const [isSlidebarOpen, setSlidebarOpen] = useState(false);
    const location = useLocation();
    const isSettingsPage = location.pathname === "/settings";
    const taggleSlidebarOpen = () => {
        setSlidebarOpen(!isSlidebarOpen);
        console.log("bilal")
    }

    useDarkMode();
    return (
        <div className={`flex max-w-full max-h-screen overflow-hidden`}>
            <Menu isSlidebarOpen={ isSlidebarOpen } taggleSlidebarOpen={ taggleSlidebarOpen} />
            <div className={"flex-1 flex-col"}>
                {!isSettingsPage && (
                    <Header taggleSlidebarOpen={taggleSlidebarOpen} />
                )}
                <AppRoute />
            </div>
        </div>
    )
}

export default App