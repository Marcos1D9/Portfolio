import { useEffect, useState } from "react";
import DarkModeIcon from "/src/assets/DarkModeIcon.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        }
        return "light";
    })

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <>
            {/* Navbar */}
            <div className="mx-auto max-w-3xl sticky top-0 z-10">
                <header className="-full bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
                    <button className=" py-4 px-2 sm:py-5 flex items-center gap-4 outline-none"
                        onClick={handleChangeTheme}
                    >
                        <div className="text-2xl dark:hidden text-slate-700">
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                        <div className="text-2xl hidden dark:block text-slate-100">
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                        {/* <img className="w-8" src={DarkModeIcon} alt="DarkMode Icon" /> */}
                    </button>
                </header>
            </div>
            {/* NavBar */}


            {/* Main */}
            <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10"   >
                <h1 className="text-white">Welcome to my portfolio</h1>
                <h3>I'm Marcos Damián Medina, a front-end web developer</h3>
            </div>
            {/* Main */}
        </>
    )
}
export default Home