import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copy from 'clipboard-copy';
import { faSun, faMoon, faBriefcase, faStar, faArrowUpRightFromSquare, faEnvelope, faPaperPlane, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ProfilePic from '../assets/ProfilePic.jpg'
import HenryTalentIcon from '../assets/HenryTalentIcon.jpg'
import HenrySquareIcon from '../assets/HenrySquareIcon.png'
import MuniaLoginPic from '../assets/MuniaLoginPic.jpg'
import tailwindIcon from "../assets/tailwind-svgrepo-com.svg";
import HTML5Icon from "../assets/html-5-svgrepo-com.svg";
import MongoDBIcon from "../assets/mongo-svgrepo-com.svg";
import reactIcon from "../assets/react-svgrepo-com.svg";
import "../index.css";
import Tooltip from "../components/Tooltip";

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
            {/* Navbar start */}
            <div className="max-w-full min-w-5xl flex flex-col justify-center sticky top-0 z-10 max-[293px]: ">
                <header className={`shrink-0 flex flex-row items-center justify-between py-1 px-auto z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg`}>
                    {/* Navbar profile pic logo start */}
                    <div style={scrollPast ? bounceInStyle : null} className={`md:ml-10 flex items-center font-semibold text-lg text-center text-slate-600 dark:text-slate-300 transform transition-all duration-400 ${scrollPast ? '' : 'opacity-0'}`}>
                        {/* Navbar profile pic circle start */}
                        <div className={`ml-2 shrink-0 flex w-12 h-12 mr-3 relative opacity-0 items-center dark:bg-gray-700/60 rounded-full border-2 shadow-indigo-600 border-black overflow-hidden dark:shadow-slate-700 dark:shadow-2xl dark:bg-none dark:border-black  ${scrollPast ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                                {/* Navbar profile pic start */}
                                <img className="rounded-full drop-shadow-2xl" src={ProfilePic} />
                                {/* Navbar profile pic end */}
                            </span>
                        </div>
                        {/* Navbar profile pic circle end */}

                        {/* Navbar text start */}
                        <h2 className="text-center max-xxxs:text-sm">Marcos Damián E. Medina</h2>
                        {/* Navbar text end */}
                    </div>
                    {/* Navbar profile pic logo end */}
                    {/* Navbar profile theme button start */}
                    <button className="md:mr-10 py-4 px-2 sm:py-5 flex items-end gap-4 outline-none" onClick={handleChangeTheme}>
                        <div className="text-4xl flex-nowrap dark:hidden text-slate-700">
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <div className="text-4xl flex-nowrap hidden dark:block text-slate-100">
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                    </button>
                    {/* Navbar profile theme button end */}
                </header>
            </div>
            {/* NavBar end */}


            {/* Main start */}
            <div className="max-w-3xl min-w-3xl md:mx-auto flex-col mb-5 flex gap-10 px-8">
                <main className="flex flex-col gap-16">
                    {/* Hero presentation start */}
                    <section className="flex flex-col md:flex-row items-center gap-5 shrink-0" >

                        {/* Profile Pic */}
                        <div className="shrink-0 relative w-44 h-44 bg-none shadow-lg border-4 shadow-indigo-400 border-black rounded-full overflow-hidden dark:shadow-indigo-950 dark:drop-shadow-2xl dark:bg-none dark:border-black ">
                            <span>
                                <img className="aspect-square" alt="Profile picture" src={ProfilePic} />
                            </span>
                        </div>
                        {/* Profile Pic */}

                        {/* About presentation */}
                        <div className="flex flex-col items-center gap-3 shrink-0">

                            {/* Presentation title */}
                            <div className="flex flex-col items-left gap-2 shrink-0">
                                <h1 className="shrink-0 text-2xl md:text-4xl text-center md:text-left font-bold text-slate-600 dark:text-slate-100">Marcos Damián E. Medina</h1>
                                <p className="shrink-0 text-center hyphens-auto text-slate-700 text-sm md:text-lg dark:text-slate-300 max-w-xl rounded-2xl">Welcome! I'm a passionate Web frontend developer</p>
                            </div>
                            {/* Presentation title */}

                            {/* Social media Buttons */}
                            <div className="flex gap-3 mt-3 -mb-5 flex-wrap-reverse max-xs:mt-4 max-xs:-mb-5">
                                <Tooltip
                                    link="https://github.com/Marcos1D9"
                                    mainText="Linkedin"
                                    tooltipSpan="Go check my LinkedIn profile :D"
                                    linkedinIcon={faLinkedin}
                                    tooltipText="dark:text-blue-400 text-blue-500 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-blue-400 border-blue-500 border-2"
                                    buttonTextColor="dark:text-blue-500 text-blue-500"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200"
                                    hoverButtonBorderColor="dark:hover:border-blue-400 hover:border-blue-400 active:border-blue-300"
                                    pointerBackground="dark:bg-gray-800 bg-blue-300"
                                    pointerBorder="dark:border-blue-500 border-2 border-blue-400"
                                    buttonXPadding="px-6"
                                    buttonHeight="h-14"
                                    buttonFlexProps="justify-center items-center grow"
                                />
                                <Tooltip
                                    link="https://github.com/Marcos1D9"
                                    mainText="Github"
                                    tooltipSpan="Click here if you are a dev ;)"
                                    githubIcon={faGithub}
                                    tooltipText="dark:text-purple-400 text-purple-500 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-purple-400 border-purple-500 border-2"
                                    buttonTextColor="dark:text-purple-500 text-purple-600"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200"
                                    hoverButtonBorderColor="dark:hover:border-purple-400 hover:border-purple-400 active:border-purple-300"
                                    pointerBackground="dark:bg-gray-800 bg-purple-300"
                                    pointerBorder="dark:border-purple-500 border-2 border-purple-400"
                                    buttonXPadding="px-6"
                                    buttonHeight="h-14"
                                    buttonFlexProps="justify-center items-center grow"
                                />
                                <Tooltip
                                    mainText="Henry certificate"
                                    tooltipSpan="Here is my Full-Stack developer certificate!"
                                    henryTalent={HenryTalentIcon}
                                    henrySquare={HenrySquareIcon}
                                    tooltipText="dark:text-yellow-300 text-gray-700 font-bold"
                                    tooltipBackground="dark:bg-gray-800 dark:bg-none bg-white"
                                    tooltipBorder="dark:border-yellow-300 border-gray-600 border-2"
                                    buttonTextColor="dark:text-yellow-300 text-black"
                                    buttonBackgroundColor="dark:bg-gray-800 bg-white"
                                    buttonBorderColor="dark:border-gray-700 border-gray-200 border-2"
                                    hoverButtonBorderColor="dark:hover:border-yellow-300 hover:border-black active:border-yellow-300"
                                    pointerBackground="dark:bg-gray-800 bg-yellow-100"
                                    pointerBorder="dark:border-yellow-400 border-gray-600 border"
                                    buttonXPadding="px-6"
                                    buttonHeight="h-14"
                                    buttonFlexProps="justify-center items-center  grow"
                                />
                            </div>
                            {/* Social media Buttons */}
                        </div>
                        {/* About presentation */}

                    </section>
                    {/* Hero presentation end */}
                    <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                    {/* Experience section start */}
                    <section className="w-full shrink-0" id="hero-section">

                        {/* Experience section title start */}
                        <header className="shrink-0 font-bold text-2xl underline underline-offset-4 decoration-solid text-indigo-400 dark:text-gray-100 mb-6 flex max-xxxs:pl-5 max-xxxs:mx-0 max-xxs:pl-5 max-xss:mx-0 gap-4 items-end ">
                            <h2>Experience</h2>
                            <FontAwesomeIcon className="scale-110" icon={faBriefcase} />
                        </header>
                        {/* Experience section title end */}

                        {/* Experience section text start */}
                        <div className="shrink-0  flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                                {/* Experience Job title start */}
                                <div className="flex flex-col gap-1 max-xxxs:pl-5 max-xxs:pl-5 ">
                                    <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">Front-End Developer • Munia - Salud Mental y Emocional en el Trabajo</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Sept. 2023 - Nov. 2023</p>
                                </div>
                                {/* Experience Job title end */}


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
                        {/* Experience section text end */}
                    </section>
                    {/* Experience section end*/}
                    {/* Projects section start */}
                    <section className="w-full">
                        {/* Projects section title */}
                        <header className="font-bold text-center text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex max-xxxs:pl-3 max-xxs:min-w-full min-[220px]:pl-5 max-xxs:justify-start max-xxs:px-0 items-center gap-3">
                            <h2>Projects</h2>
                            <FontAwesomeIcon icon={faStar} className="scale-110" />
                        </header>
                        {/* Projects section title */}
                        {/* My projects */}
                        <div className="flex flex-col gap-10">
                            {/* My projects container */}
                            <div className="grid gap-10">
                                {/* Munia project container*/}
                                <a href="https://sesiones.munia.co/" target="_blank" rel="noreferrer" className="max-xxs:min-w-0 block group border-2 border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow">
                                    <article className="relative flex flex-col justify-between w-full py-6 px-7">
                                        {/* Munia project description */}
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-lg font-bold">Munia Sesiones 1:1</h2>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">The web app enables health professionals from "Munia.co" to connect with employees of partnered companies via Zoom for virtual sessions and diagnoses.</p>
                                        {/* Munia project description */}

                                        {/* Munia project technologies icons */}
                                        <div className="flex mt-1.5 justify-start items-center pt-3 pb-6">
                                            <div className="flex flex-row items-center gap-1">
                                                <div className="relative group/tooltip">
                                                    <img src={HTML5Icon} className="w-8" alt="" />
                                                    <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                                </div>
                                                <div className="relative group/tooltip">
                                                    <img src={tailwindIcon} className="w-9" alt="" />
                                                    <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                                                </div>
                                                <div className="relative group/tooltip">
                                                    <img src={reactIcon} className="w-8" alt="" />
                                                    <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">(Must contact Munia for register)</p>

                                        {/* Munia project redirect button */}
                                        <div className="flex flex-row mb-3">
                                            <Tooltip
                                                link="https://munia.co/"
                                                mainText="Main official website"
                                                tooltipSpan="Munia's main official website"
                                                tooltipText="dark:text-orange-200 text-gray-800 font-bold"
                                                tooltipBackground="dark:bg-gray-800 dark:bg-none bg-orange-100"
                                                tooltipBorder="dark:border-orange-200 border-gray-800 border-2"
                                                buttonTextColor="dark:text-orange-200 text-zinc-800"
                                                buttonBackgroundColor="dark:bg-gray-800 bg-orange-200"
                                                buttonBorderColor="dark:border-gray-700 border-gray-200"
                                                hoverButtonBorderColor="dark:hover:border-orange-200 hover:border-zinc-500 active:border-zinc-300"
                                                pointerBackground="dark:bg-gray-800 bg-orange-200"
                                                pointerBorder="dark:border-orange-200 border-2 border-zinc-600"
                                                buttonXPadding="px-6"
                                                buttonHeight="h-10 max-xxxs:h-full"
                                                buttonWidth="w-full"
                                                buttonFlexProps="justify-center items-center"
                                            />
                                        </div>
                                        {/* Munia project redirect button */}

                                        {/* Munia project technologies icons */}

                                        {/* Munia project login image */}
                                        <img className="aspect-video rounded-2xl h-30 border-r-4 border-zinc-400" src={MuniaLoginPic} alt="MuniaLoginPic" />
                                        {/* Munia project login image */}

                                        {/* Munia project square redirect icon */}
                                        <div className="absolute grid place-items-center right-1 top-4 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-90
                                        group-hover:opacity-80   transition-transform opacity-100 dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20">
                                            <div className=" text-gray-400 dark:text-gray-50 text-2xl">
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                            </div>
                                        </div>
                                        {/* Munia project square redirect icon */}
                                    </article>
                                </a>
                                {/* Munia project container*/}

                                {/* Grow-Up project container*/}
                                <a href="https://www.youtube.com/watch?v=xK3BDZ7JuFk" target="_blank" rel="noreferrer" className="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow">
                                    <article className="relative flex flex-col justify-between w-full py-6 px-7 ">
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-lg font-bold">Grow-Up Books E-commerce</h2>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">This project brings people the oportunity of searching, filtering, and updating new books about self development and inspiration, as well as buying new best sellers.</p>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">There's a video below that explains and cover most part of the website.</p>
                                        <p className="text-slate-900 dark:text-slate-400 mt-5">(The mentioned video is in Spanish language, since it's my native language)</p>

                                        {/* Project technologies icons */}
                                        <div className="flex gap-1 mt-1.5 items-center pt-3 pb-6">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium
                                                before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={MongoDBIcon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Mongo DB</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                        </div>
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">(Click "Youtube" button on the video player for fullscreen)</p>
                                        {/* Project technologies icons */}
                                        <iframe className="aspect-video" width="100%" height="315" src="https://www.youtube.com/embed/xK3BDZ7JuFk?si=QAApM20iUHBtdBlU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        <div className="absolute grid place-items-center right-1 top-4 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-90
                                        group-hover:opacity-80 transition-transform opacity-100 dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20">
                                            {/* Grow-up project square redirect icon */}
                                            <div className=" text-gray-400 dark:text-gray-50 text-2xl">
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                            </div>
                                            {/* Grow-up project square redirect icon */}
                                        </div>
                                    </article>
                                </a>
                                {/* Grow-Up project container*/}
                            </div>
                            {/* My projects container */}
                        </div>
                        {/* My projects */}
                    </section>
                    {/* Projects section end */}
                    {/* Email section start */}
                    <section className="w-full">
                        {/* Email Title */}
                        <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex max-xxs:justify-center max-[220px]:justify-start max-[220px]:pl-5 items-center gap-3">
                            <h2>Email</h2>
                            <FontAwesomeIcon icon={faEnvelope} className="scale-110" />
                        </header>
                        {/* Email Title */}
                        <div className="flex gap-4">
                            {/* Email Input */}
                            <input
                                className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
                                type="text"
                                defaultValue="marcosdamian054@gmail.com"
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
                    {/* Email section end*/}
                </main>
            </div >
            {/* Main end */}
        </>
    )
}
export default Home