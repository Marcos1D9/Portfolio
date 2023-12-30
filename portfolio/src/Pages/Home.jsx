import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons'
import NewProfilePicWithBackground from '../assets/NewProfilePicWithBackground.png'
import IconReact from "../components/IconReact";
import IconTailwind from "../components/IconTailwind";
import "../index.css";


const Home = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        }
        return "light";
    })

    const [scrollPast, setScrollPast] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 244) {
                setScrollPast(true);
            } else {
                setScrollPast(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
    const bounceInStyle = {
        animation: 'bounceIn 1s forwards',
    };

    return (
        <>
            {/* Navbar */}
            <div className="mx-auto max-w-3xl sticky top-0 z-10">
                <header className={`flex flex-row items-center justify-between py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg`}>
                    <div style={scrollPast ? bounceInStyle : null} className={`flex items-center font-semibold text-lg text-center text-slate-600 dark:text-slate-300 transform transition-all duration-400 ${scrollPast ? '' : 'opacity-0'}`}>
                        <div className={`flex w-12 h-12 mr-3 relative opacity-0 items-center bg-indigo-100  dark:bg-gray-700/60 rounded-full shadow-md border-4 border-white dark:border-gray-900/80 ${scrollPast ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                <img className="rounded-full drop-shadow-2xl" src={NewProfilePicWithBackground}/>
                            </span>
                        </div>
                        Marcos Damián E. Medina
                    </div>
                    <button className="py-4 px-2 sm:py-5 flex items-end gap-4 outline-none" onClick={handleChangeTheme}>
                        <div className="text-4xl dark:hidden text-slate-700">
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <div className="text-4xl hidden dark:block text-slate-100">
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                    </button>
                </header>
            </div>

            {/* NavBar */}


            {/* Main */}
            <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10"   >
                <main className="flex flex-col gap-16">
                    {/* Hero presentation */}
                    <section className="flex flex-col sm:flex-row items-center gap-5" >

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
                    <section className="w-full" id="hero-section">

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
                    {/* Projects */}
                    <section className="w-full">
                        {/* Projects title */}
                        <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                            <h2>Projects</h2>
                            <FontAwesomeIcon icon={faStar} />
                        </header>
                        {/* Projects title */}
                        <div className="flex flex-col gap-10">
                            <div className="grid gap-10">
                                <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
                                    <a className="block">

                                    </a>
                                    <div className="flex flex-col gap-2.5 justify-center">
                                        <h3 className="font-bold text-3xl text-slate-800 dark:text-white">Munia Sesiones 1:1</h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-lg">
                                            The web app enables health professionals from "Munia.co" to connect with employees of partnered companies via Zoom for virtual sessions and diagnoses.
                                        </p>
                                        <div className="flex gap-2 items-center mb-1">
                                            <div className="relative flex flex-row">
                                                <IconReact className="text-blue-400 text-4xl " />
                                                <IconTailwind className="text-4xl text-teal-400" />
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>

                                </article>
                            </div>
                        </div>
                    </section>
                    {/* Projects */}
                </main>
            </div>
            {/* Main */}
            <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur ea sint, nisi voluptas itaque aliquam accusantium voluptate ipsum reprehenderit perferendis quod nulla provident, suscipit debitis non quia fuga velit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae explicabo repellendus unde optio aliquam quisquam suscipit! Nam, necessitatibus consequatur amet facilis consectetur, dolor impedit dolorum distinctio dignissimos culpa et.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati placeat nulla expedita esse libero, dolor sequi voluptates quos ullam ea adipisci quisquam beatae architecto iusto impedit magni fuga sint?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos doloremque nesciunt magni voluptates in amet quis quae id sed sint deleniti cumque, ratione, at aperiam nostrum aspernatur unde aliquam!
                <hr />
                <hr />
                <hr />
            </>
        </>
    )
}
export default Home