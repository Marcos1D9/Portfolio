import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import NewProfilePicWithBackground from '../assets/NewProfilePicWithBackground.png'

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
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        {/* <img className="w-8" src={DarkModeIcon} alt="DarkMode Icon" /> */}
                    </button>
                </header>
            </div>
            {/* NavBar */}


            {/* Main */}
            <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10"   >
                <main className="flex flex-col gap-16">
                    {/* Hero presentation */}
                    <section className="flex flex-col sm:flex-row items-center gap-5">

                        {/* Profile Pic */}
                        <div className="relative w-44 h-44 bg-none dark:bg-none border-8 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
                            <span>
                                <img alt="Profile picture" src={NewProfilePicWithBackground} />
                            </span>
                        </div>
                        {/* Profile Pic */}

                        {/* About presentation */}
                        <div className="flex flex-col items-center sm:items-start gap-3">

                            {/* Presentation title */}
                            <div className="flex flex-col items-left gap-2">
                                <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100">Marcos Damián E. Medina</h1>
                                <p className="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl">Welcome! I'm a passionate Web frontend developer</p>
                            </div>
                            {/* Presentation title */}

                            {/* Social media Buttons */}
                            <div className="flex gap-3"></div>
                            {/* Social media Buttons */}
                        </div>
                        {/* About presentation */}

                    </section>
                    {/* Hero presentation */}
                    <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                    {/* Experience section */}
                    <section className="w-full">

                        {/* Experience section title */}
                        <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                            <h2>Experience</h2>
                            <FontAwesomeIcon className="text-3xl" icon={faBriefcase} />
                        </header>
                        {/* Experience section title */}

                        {/* Experience Job title */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1 ">
                                    <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">Front-End Developer • Munia - Salud Mental y Emcional en el Trabajo</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Sept. 2023 - Nov. 2023</p>
                                </div>

                                {/* Experience Job title */}

                                {/* Experience Job description */}
                                <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                                    <li>Create a view to be able to view and edit the information of each provider, such as adding the services they offer, their time availability, and their professional documents, among others.</li>
                                    <li>Plan and carry out the development of a table that will allow comments to be displayed effectively on the platform</li>
                                    <li>Conditional rendering based on dynamic routes and user type, using Redux toolkit's according to the role of each user, and React-Router-DOM</li>
                                    <li>Planning, design and development of components made with ReactJs, Material UI and Sass</li>
                                </ul>
                                {/* Experience Job description */}
                            </div>
                        </div>
                    </section>
                    {/* Experience section */}
                </main>
            </div>
            {/* Main */}
        </>
    )
}
export default Home