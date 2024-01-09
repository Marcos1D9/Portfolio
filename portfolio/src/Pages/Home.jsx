import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copy from 'clipboard-copy';
import { faSun, faMoon, faBriefcase, faStar, faArrowUpRightFromSquare, faEnvelope, faPaperPlane, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import NewProfilePicWithBackground from '../assets/NewProfilePicWithBackground.png'
import HenryTalentIcon from '../assets/HenryTalentIcon.jpg'
import HenryIcon from '../assets/HenryIcon.png'
import SoyHenryIcon from '../assets/SoyHenryIcon.jpg'
import HenrySquareIcon from '../assets/HenrySquareIcon.png'
import MuniaLoginPic from '../assets/MuniaLoginPic.jpg'
import tailwindIcon from "../assets/tailwind-svgrepo-com.svg";
import HTML5Icon from "../assets/html-5-svgrepo-com.svg";
import MongoDBIcon from "../assets/mongo-svgrepo-com.svg";
import reactIcon from "../assets/react-svgrepo-com.svg";
import "../index.css";

const Home = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        }
        return "light";
    })

    const [scrollPast, setScrollPast] = useState(false);
    const [tooltipText, setTooltipText] = useState('Copy email');
    const [showTooltip, setShowTooltip] = useState(false);

    const copiedText = 'marcosdamian054@gmail.com';

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
    const textToClipboard = () => {
        copy(copiedText)
            .then(() => {
                setTooltipText('Email copied succesfully!');
                setShowTooltip(true);
                setTimeout(() => {
                    setTooltipText('Copy email');
                    setShowTooltip(false);
                }, 3000);
            })
            .catch((error) => {
                console.error('Error copying to clipboard: ', error);
                setTooltipText('Error copying Email');
                setShowTooltip(true);
                setTimeout(() => {
                    setTooltipText('Copy email');
                    setShowTooltip(false);
                }, 3000);
            });
    };

    return (
        <>
            {/* Navbar */}
            <div className="mx-auto max-w-3xl sticky top-0 z-10">
                <header className={`flex flex-row items-center justify-between py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg`}>
                    <div style={scrollPast ? bounceInStyle : null} className={`flex items-center font-semibold text-lg text-center text-slate-600 dark:text-slate-300 transform transition-all duration-400 ${scrollPast ? '' : 'opacity-0'}`}>
                        <div className={`flex w-12 h-12 mr-3 relative opacity-0 items-center bg-indigo-100  dark:bg-gray-700/60 rounded-full shadow-md border-4 border-white dark:border-gray-900/80 ${scrollPast ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                <img className="rounded-full drop-shadow-2xl" src={NewProfilePicWithBackground} />
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
                            <div className="flex gap-3">
                                <a className="flex mt-2 items-center gap-1 font-bold px-3 h-14 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark text-sky-600 border-2 border-gray-700 dark:hover:border-2 dark:hover:border-blue-400 transition" href="https://www.linkedin.com/in/medina-marcos-developer/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <h2>Linkedin</h2>
                                </a>
                                <a className="flex mt-2 items-center gap-1 font-bold px-3 h-14 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark transition dark:text-purple-400 dark:border-2 dark:border-gray-700 dark:hover:border-purple-600 dark:hover:text-purple-400" href="https://github.com/Marcos1D9">
                                    <FontAwesomeIcon icon={faGithub} className="text-purple-400" />
                                    <h2>Github</h2>
                                </a>
                                <a className="flex mt-2 items-center gap-1 font-bold px-3 h-14 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark transition dark:text-yellow-300 dark:border-2 dark:border-gray-700 dark:hover:border-yellow-300 dark:hover:text-yellow-300" href="https://www.talent.soyhenry.com/candidate/5486">
                                    <img src={HenryTalentIcon} className="h-7 dark:hidden"/>
                                    <img src={HenrySquareIcon} className="h-6 hidden dark:flex"/>
                                    <h2>Henry Talent</h2>
                                </a>
                            </div>
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
                            <FontAwesomeIcon className="scale-110" icon={faBriefcase} />
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
                            <FontAwesomeIcon icon={faStar} className="scale-110" />
                        </header>
                        {/* Projects title */}
                        <div className="flex flex-col gap-10">
                            <div className="grid gap-10">
                                <a href="https://sesiones.munia.co/" target="_blank" rel="noreferrer" class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow">
                                    <article class="relative flex flex-col justify-between w-full py-6 px-7">
                                        {/* Munia project */}
                                        <h2 class="text-gray-700 dark:text-gray-200 text-lg font-bold">Munia Sesiones 1:1</h2>
                                        <p class="text-slate-400 dark:text-slate-200">The web app enables health professionals from "Munia.co" to connect with employees of partnered companies via Zoom for virtual sessions and diagnoses.</p>

                                        {/* Project technologies icons */}
                                        <div class="flex gap-1 mt-1.5 items-center pt-3 pb-6">
                                            <div class="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8" alt="" />
                                                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div class="relative group/tooltip">
                                                <img src={tailwindIcon} className="w-9" alt="" />
                                                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                                            </div>
                                            <div class="relative group/tooltip">
                                                <img src={reactIcon} className="w-8" alt="" />
                                                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                        </div>
                                        {/* Project technologies icons */}
                                        <img className="rounded-2xl" src={MuniaLoginPic} alt="MuniaLoginPic" />
                                        <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
                                            <div class=" text-gray-400 dark:text-gray-50 text-2xl">
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                            </div>
                                        </div>
                                    </article>
                                </a>
                                {/* Munia project */}

                                {/* Grow-Up project */}
                                <a href="https://www.youtube.com/watch?v=xK3BDZ7JuFk" target="_blank" rel="noreferrer" class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow">
                                    <article class="relative flex flex-col justify-between w-full py-6 px-7">
                                        <h2 class="text-gray-700 dark:text-gray-200 text-lg font-bold">Grow-Up Books E-commerce</h2>
                                        <p class="text-slate-400 dark:text-slate-200">The web app enables health professionals from "Munia.co" to connect with employees of partnered companies via Zoom for virtual sessions and diagnoses.</p>
                                        {/* Project technologies icons */}
                                        <div class="flex gap-1 mt-1.5 items-center pt-3 pb-6">
                                            <div class="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8" alt="" />
                                                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div class="relative group/tooltip">
                                                <img src={MongoDBIcon} className="w-8" alt="" />
                                                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Mongo DB</span>
                                            </div>
                                            <div class="relative group/tooltip">
                                                <img src={reactIcon} className="w-8" alt="" />
                                                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                        </div>
                                        {/* Project technologies icons */}
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/xK3BDZ7JuFk?si=QAApM20iUHBtdBlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
                                            <div class=" text-gray-400 dark:text-gray-50 text-2xl">
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                            </div>
                                        </div>
                                    </article>
                                </a>
                                {/* Grow-Up project */}
                            </div>
                        </div>
                    </section>
                    {/* Projects */}
                    {/* Email section*/}
                    <section className="w-full">
                        {/* Email Title */}
                        <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                            <h2>Email</h2>
                            <FontAwesomeIcon icon={faEnvelope} className="scale-110" />
                        </header>
                        {/* Email Title */}
                        <div className="flex gap-4">
                            {/* Email Input */}
                            <input
                                className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
                                type="text"
                                value="marcosdamian054@gmail.com"
                            />
                            {/* Email Input */}
                            {/* Email Buttons */}
                            <div className="flex gap-2">
                                {/* Send email button */}
                                <div className="relative group/tooltip">
                                    <a href="mailto:marcosdamian054@gmail.com" target="_blank" rel="noreferrer" className="flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg">
                                        <div className="text-lg">
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </div>
                                    </a>
                                    <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full 
                                    -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md 
                                    whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 
                                    before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 
                                    before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 
                                    before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 
                                    group-hover/tooltip:-translate-y-3">
                                        Send me an email
                                    </span>
                                </div>
                                {/* Send email button */}
                                {/* Copy email button */}
                                <div className="relative group/tooltip">
                                    <button className="flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg"
                                        onClick={textToClipboard}
                                    >
                                        <div className="text-lg">
                                            <FontAwesomeIcon icon={faCopy} />
                                        </div>
                                    </button>
                                    {setShowTooltip && (
                                        <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                                            {tooltipText}
                                        </span>
                                    )}

                                </div>
                                {/* Copy email button */}
                            </div>
                            {/* Email Buttons */}
                        </div>
                    </section>
                    {/* Email section*/}
                </main>
            </div>
            {/* Main */}
        </>
    )
}
export default Home