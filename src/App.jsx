import './App.css'
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import AppRoute from "./Routes/AppRoute.jsx";
import {useState} from "react";

function App() {
    const [isSlidebarOpen, setSlidebarOpen] = useState(false);
    ;
    const taggleSlidebarOpen = () => {
        setSlidebarOpen(!isSlidebarOpen);
    }
    return (
        <div className={`flex max-w-full max-h-screen overflow-hidden`}>
            <Menu isSlidebarOpen={ isSlidebarOpen } taggleSlidebarOpen={ taggleSlidebarOpen} />
            <div className={"flex-1 flex-col"}>
                <Header taggleSlidebarOpen={ taggleSlidebarOpen} isSlidebarOpen={ isSlidebarOpen }/>
                <AppRoute />
            </div>
        </div>
    )
}

export default App
