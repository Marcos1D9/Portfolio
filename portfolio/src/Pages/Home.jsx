import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import copy from 'clipboard-copy';
import { faMoon, faBriefcase, faStar, faArrowUpRightFromSquare, faEnvelope, faPaperPlane, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import sunThemeIcon from '../assets/sunThemeIcon.svg'
import ProfilePic from '../assets/ProfilePic.jpg'
import HenryTalentIcon from '../assets/HenryTalentIcon.jpg'
import HenrySquareIcon from '../assets/HenrySquareIcon.png'
import MuniaLoginPic from '../assets/MuniaLoginPic.jpg'
import ClimateDuckyScreenshot from '../assets/ClimateDuckyScreenshot.png'
import IngeniumWebVideo from '../assets/IngeniumWebVideo/IngeniumWebVideo.mp4'
import tailwindIcon from "../assets/CompaniesIcons/tailwind-svgrepo-com.svg";
import HTML5Icon from "../assets/CompaniesIcons/html-5-svgrepo-com.svg";
import MongoDBIcon from "../assets/CompaniesIcons/mongo-svgrepo-com.svg";
import reactIcon from "../assets/CompaniesIcons/react-svgrepo-com.svg";
import cssIcon from "../assets/CompaniesIcons/css_svg_repo.svg";
import framerIcon from "../assets/CompaniesIcons/Framer_light.svg";
import framerDarkIcon from "../assets/CompaniesIcons/Framer_dark.svg";
import "../index.css";
import Tooltip from "../components/Tooltip";
import HenryCertificate from '../assets/Henry certificate.jpg'
import LanguageToggleButton from "../components/LanguageToggleButton";

const Home = () => {
    const [language, setLanguage] = useState('en'); // Idioma por defecto es inglés
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        }
        return "light";
    })

    const [scrollPast, setScrollPast] = useState(false);
    const [tooltipText, setTooltipText] = useState(`${language === 'en' ? "Click to copy my email" : 'Haz click para copiar mi email'}`);
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
                setTooltipText(language === 'en' ? "Email copied successfully!" : 'Email copiado exitosamente');
                setTimeout(() => {
                    setTooltipText(language === 'en' ? 'Click to copy my email' : 'Haz click para copiar mi email');
                }, 3000);
            })
            .catch((error) => {
                console.error('Error copying to clipboard: ', error);
                setTooltipText(language === 'en' ? 'Error copying email' : 'Error al copiar el email');
                setTimeout(() => {
                    setTooltipText(language === 'en' ? 'Click to copy my email' : 'Haz click para copiar mi email');
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
                    <div className="flex items-center">
                        <div className={`${scrollPast ? '' : 'opacity-0'}`}>
                            <LanguageToggleButton toggleLanguage={toggleLanguage} language={language} />
                        </div>
                        <button className="md:mr-10 py-2 px-2 sm:py-5 flex items-end gap-4 outline-none" onClick={handleChangeTheme}>
                            <div className="text-4xl flex-nowrap ml-3 dark:hidden text-slate-700">
                                <FontAwesomeIcon className="before:w-full before-h-full before:bg-gray-800 before:absolute" icon={faMoon} />
                            </div>
                            <div className="flex-nowrap hidden dark:block">
                                <img className="h-10" src={sunThemeIcon} alt="Clear theme button" />
                            </div>
                        </button>
                    </div>
                    {/* Navbar profile theme button end */}
                </header>
            </div>
            {/* NavBar end */}


            {/* Main start */}
            <div className="max-w-3xl min-w-3xl md:mx-auto flex-col mb-5 flex gap-10 px-8">
                <main className="flex flex-col gap-12">
                    {/* Hero presentation start */}
                    <section className="flex flex-col md:flex-column items-center gap-5 shrink-0" >

                        {/* Profile Pic */}
                        <div className="shrink-0 relative w-52 h-52 bg-none shadow-lg border-4 shadow-indigo-400 border-black rounded-full overflow-hidden dark:shadow-indigo-950 dark:drop-shadow-2xl dark:bg-none dark:border-black ">
                            <span>
                                <img className="aspect-square" alt="Profile picture" src={ProfilePic} />
                            </span>
                        </div>
                        {/* Profile Pic */}

                        {/* About presentation */}
                        <div className="flex flex-col items-center gap-3">

                            {/* Presentation title */}
                            <div className="flex flex-col items-center gap-2 max-w-full mt-1">
                                <h1 className="shrink-0 text-2xl md:text-4xl text-center md:text-left font-bold text-slate-600 dark:text-slate-100">Marcos Damián E. Medina</h1>
                                <p className="shrink-0 mt-3 text-center hyphens-auto text-slate-700 text-sm md:text-3xl dark:text-slate-200 max-w-full font-Jersey10PixelFont">{language === 'en' ? 'Welcome!' : '¡Bienvenidos!'}</p>
                                <p className="shrink-0 text-center text-slate-700 text-sm md:text-lg dark:text-slate-300 max-w-full h-10 rounded-2xl">{language === 'en' ? 'I am passionate about web development, focused on the integration of social networks' : 'Soy un apasionado del desarrollo de páginas web, enfocado en la integración de redes sociales'}</p>
                            </div>
                            {/* Presentation title */}

                            {/* Social media Buttons */}
                            <div className="flex gap-3 mt-3 -mb-10 flex-wrap-reverse max-xs:mt-4 max-xs:-mb-5">
                                <Tooltip
                                    link="https://www.linkedin.com/in/medina-marcos-developer/"
                                    mainText="Linkedin"
                                    tooltipSpan={language === 'en' ? 'Check my profile into one of the most important job boards in the world' : "Revisa mi perfil de una de las principales bolsa de trabajo del mundo"}
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
                                    tooltipSpan={language === 'en' ? 'Click here if you are a developer ;)' : "Click acá si sos un desarrollador"}
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
                                    link={HenryCertificate}
                                    mainText={language === 'en' ? 'Henry graduation certificate' : 'Certificado de graduación de Henry'}
                                    tooltipSpan={language === 'en' ? "Here is my Full-Stack developer certificate!" : "¡Acá está my certificado de desarrollador web Full-Stack!"}
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
                            <div className="w-full items-end mt-10 justify-end">
                                <LanguageToggleButton toggleLanguage={toggleLanguage} language={language} />
                            </div>
                            {/* Social media Buttons */}
                        </div>
                        {/* About presentation */}
                    </section>
                    {/* Hero presentation end */}
                    <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                    {/* Experience section start */}
                    <section className="w-full shrink-0 mt-3 mb-3" id="hero-section">

                        {/* Experience section title start */}
                        <header className="shrink-0 font-bold text-3xl underline underline-offset-4 decoration-solid text-indigo-400 dark:text-gray-100 mb-6 flex max-xxxs:pl-5 max-xxxs:mx-0 max-xxs:pl-5 max-xss:mx-0 gap-4 items-end ">
                            <h2>{language === 'en' ? 'Experience' : 'Experiencia'}</h2>
                            <FontAwesomeIcon className="scale-110" icon={faBriefcase} />
                        </header>
                        {/* Experience section title end */}

                        {/* Experience section text start */}
                        <div className="shrink-0  flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                                {/* Experience Job title start */}
                                <div className="flex flex-col gap-1 max-xxxs:pl-5 max-xxs:pl-5 ">
                                    <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{language === 'en' ? 'Front-End Developer • Munia - Mental and Emotional Health at Work' : 'Desarrollador web Frontend • Munia - Salud Mental y Emocional en el Trabajo'}</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Sept. 2023 - Nov. 2023</p>
                                </div>
                                {/* Experience Job title end */}


                                {/* Experience Job description */}
                                <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                                    <li>{language === 'en' ? 'Create a view to be able to view and edit the information of each provider, such as adding the services they offer, their time availability, and their professional documents, among others' : 'Crea una vista para poder visualizar y editar la información de cada proveedor, como agregar los servicios que ofrecen, su disponibilidad horaria, sus documentos profesionales, entre otros'}</li>
                                    <li>{language === 'en' ? 'Plan and carry out the development of a table that will allow comments to be displayed effectively on the platform' : 'Planificar y llevar a cabo el desarrollo de una tabla que permita visualizar de manera efectiva los comentarios en la plataforma'}</li>
                                    <li>{language === 'en' ? 'Conditional rendering based on dynamic routes and user type, using Redux toolkit, according to the role of each user, and React-Router-DOM' : 'Representación condicional basada en rutas dinámicas y tipo de usuario, utilizando el kit de herramientas Redux según el rol de cada usuario y React-Router-DOM'}</li>
                                    <li>{language === 'en' ? 'Planning, design and development of components made with ReactJs, Material UI and Sass' : 'Planificación, diseño y desarrollo de componentes realizados con ReactJs, Material UI y Sass'}</li>
                                </ul>
                                {/* Experience Job description */}
                            </div>
                        </div>
                        {/* Experience section text end */}
                    </section>
                    {/* Experience section end*/}
                    <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                    {/* Projects section start */}
                    <section className="w-full flex flex-col items-start mt-2">
                        {/* Projects section title */}
                        <header className="font-bold text-center underline underline-offset-4 text-3xl text-indigo-400 dark:text-gray-100 mb-6 flex max-xxxs:pl-3 max-xxs:min-w-full max-xxs:justify-start max-xxs:px-0 items-center gap-3">
                            <h2>{language === 'en' ? 'Projects' : 'Proyectos'}</h2>
                            <FontAwesomeIcon icon={faStar} className="scale-110" />
                        </header>
                        {/* Projects section title */}
                        {/* My projects */}
                        <div className="flex flex-col gap-10">
                            {/* My projects container */}
                            <div className="grid gap-10">
                                {/* Munia project container*/}
                                <article className="relative flex flex-col justify-between w-full mt-4 mb-20">
                                    {/* Munia project description */}
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-2xl text-center font-bold">{language === 'en' ? 'Munia sessions 1:1' : 'Munia Sesiones 1:1'}</h2>
                                        <p className="text-slate-400 dark:text-slate-200 text-center mt-5">{language === 'en' ? 'The web app enables health professionals from "Munia.co" to connect with employees of partnered companies via Zoom for virtual sessions and diagnoses' : 'La aplicación web permite a los profesionales de la salud de “Munia.co” conectarse con empleados de empresas asociadas a través de Zoom para sesiones y diagnósticos virtuales'}</p>
                                    </div>
                                    {/* Munia project description */}

                                    {/* Munia project technologies icons */}
                                    <div className="flex flex-col mt-1.5 justify-center items-center pt-3 pb-6 mb-6">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack used into the project)" : '(Tecnologías web utilizadas en el proyecto)'}</p>
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
                                    <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? '(Must contact Munia for register)' : '(Debe contactar con Munia para registrarse)'}</p>

                                    {/* Munia project redirect button */}
                                    <div className="flex flex-row mb-3">
                                        <Tooltip
                                            link="https://munia.co/"
                                            mainText={`${language === 'en' ? 'Main official website' : 'Sitio web oficial'}`}
                                            tooltipSpan={language === 'en' ? "Munia's main official website" : "El sitio web oficial de Munia"}
                                            tooltipText="dark:text-[#9c6e61] text-white font-bold"
                                            tooltipBackground="dark:bg-gray-800 dark:bg-none bg-[#9c6e61]"
                                            tooltipBorder="dark:border-[#9c6e61] border-gray-800 border-2"
                                            buttonTextColor="dark:text-[#9c6e61] text-white"
                                            buttonBackgroundColor="dark:bg-gray-800 bg-[#9c6e61]"
                                            buttonBorderColor="dark:border-gray-700 border-gray-200"
                                            hoverButtonBorderColor="dark:hover:border-[#9c6e61] hover:border-zinc-500 active:border-zinc-300"
                                            pointerBackground="dark:bg-gray-800 bg-[#9c6e61]"
                                            pointerBorder="dark:border-[#9c6e61] border-2 border-zinc-600"
                                            buttonXPadding="px-6"
                                            buttonHeight="h-10 max-xxxs:h-full"
                                            buttonWidth="w-full"
                                            buttonFlexProps="justify-center items-center"
                                        />
                                    </div>
                                    {/* Munia project redirect button */}

                                    {/* Munia project technologies icons */}

                                    {/* Munia project login image */}
                                    <a href="https://users.munia.co/sign-in" target="_blank" rel="noreferrer" className="max-xxs:min-w-0 block group rounded-2xl shadow_translate-transition hover:shadow-2xl hover:shadow-orange-200 active:shadow-orange-300 active:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-orange-200 dark:active:shadow-orange-300">
                                        <img className="aspect-video rounded-2xl h-30" src={MuniaLoginPic} alt="MuniaLoginPic" />
                                    </a>
                                    {/* Munia project login image */}
                                </article>
                                {/* Munia project container*/}
                                <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                                {/* Grow-Up project container*/}
                                <article className="relative flex flex-col justify-between w-full mb-20">
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-2xl font-bold">{language === 'en' ? '"Grow-Up" Books E-commerce' : 'Tienda de libros en línea "Grow-Up"'}</h2>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">{language === 'en' ? 'This project brings people the oportunity of searching, filtering, and updating new books about self development and inspiration, as well as buying new best sellers' : 'Este proyecto brinda a las personas la oportunidad de buscar, filtrar y actualizar nuevos libros sobre desarrollo personal e inspiración, así como comprar nuevos best sellers'}</p>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">{language === 'en' ? 'There is a video below that explains and cover most part of the website' : 'A continuación se muestra un video que explica y cubre la mayor parte del sitio web'}</p>
                                        <p className="text-slate-900 dark:text-slate-400 mt-5">{language === 'en' ? '(The mentioned video is in Spanish language, since it is my native language)' : '(El video mencionado está en español, ya que es mi lengua materna)'}</p>
                                    </div>

                                    {/* Project technologies icons */}
                                    <div className="flex flex-col gap-1 mt-1.5 justify-center items-center pt-3 pb-6 mb-10">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack used into the project)" : '(Tecnologías web utilizadas en el proyecto)'}</p>
                                        <div className="flex">
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
                                    </div>
                                    <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? '(Click on the button with the text "Youtube" for full screen)' : '(Click en el botón con el texto "Youtube" para pantalla completa)'}</p>
                                    {/* Project technologies icons */}
                                    <a href="https://www.youtube.com/watch?v=xK3BDZ7JuFk" target="_blank" rel="noreferrer" className="block group hover:shadow-2xl hover:shadow-[#84a4ac] active:shadow-[#92BBC7] active:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-[#84a4ac] dark:active:shadow-[#92BBC7]">
                                        <iframe className="aspect-video" width="100%" height="315" src="https://www.youtube.com/embed/xK3BDZ7JuFk?si=QAApM20iUHBtdBlU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                    </a>
                                </article>
                                {/* Grow-Up project container*/}
                                <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />
                                {/* Climate-Ducky project container*/}
                                <article className="relative flex flex-col justify-between w-full ">
                                    {/* Climate-Ducky description */}
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-2xl font-bold">{language === 'en' ? 'Weather website "Climate Ducky"' : 'Web del clima "Climate Ducky"'}</h2>
                                        <p className="text-slate-400 dark:text-slate-200 mt-5">{language === 'en' ? 'Your new favorite weather website!' : "¡Tu nueva web del clima favorita! "}</p>
                                    </div>
                                    {/* Climate-Ducky description */}

                                    {/* Climate-Ducky technologies icons */}
                                    <div className="flex flex-col mt-1.5 justify-center items-center pt-3 pb-6 mb-10">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack used into the project)" : '(Tecnologías web utilizadas en el proyecto)'}</p>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={cssIcon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">CSS</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                            {theme === "light" ? <div className="relative group/tooltip">
                                                <img src={framerIcon} className="w-4" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Framer-motion</span>
                                            </div> : <div className="relative group/tooltip">
                                                <img src={framerDarkIcon} className="w-4" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Framer-motion</span>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    {/* <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? '(Must contact Munia for register)' : '(Debe contactar con Munia para registrarse)'}</p> */}

                                    {/* Climate-Ducky redirect button */}
                                    <div className="flex flex-row mb-3 text-2xl">
                                        <Tooltip
                                            link="https://climate-ducky.vercel.app/"
                                            mainText={language === 'en' ? 'Visit Climate Ducky now!' : '¡Visita Climate Ducky ahora!'}
                                            tooltipSpan={language === 'en' ? "Just enter a city name, and you'll see the city's weather information!" : "¡Simplemente ingresa el nombre de una ciudad y verás la información meteorológica de la ciudad!"}
                                            tooltipTextColor="dark:text-sky-200 text-white text-stroke-[0px] dark:text-stroke-[0px]"
                                            tooltipBackground="dark:bg-gray-800 dark:bg-none bg-sky-400"
                                            tooltipBorder="dark:border-sky-300"
                                            buttonTextColor="dark:text-white text-white text-stroke text-stroke-sky-400 dark:text-stroke-[1px] dark:text-stroke-sky-400"
                                            buttonBackgroundColor="dark:bg-gray-800 bg-sky-300"
                                            buttonBorderColor="dark:border-gray-700 border-sky-100"
                                            hoverButtonBorderColor="dark:hover:border-sky-300 hover:border-sky-400 active:border-sky-300"
                                            pointerBackground="dark:bg-gray-800 bg-sky-400"
                                            pointerBorder="dark:border-sky-300 border-2 border-sky-500"
                                            buttonXPadding="px-6"
                                            buttonHeight="h-10 max-xxxs:h-full"
                                            buttonWidth="w-full"
                                            buttonFlexProps="justify-center items-center"
                                        />
                                    </div>
                                    {/* Climate-Ducky redirect button */}
                                    {/* Climate-Ducky technologies icons */}

                                    {/* Climate-Ducky login image */}
                                    <a href="https://climate-ducky.vercel.app/" target="_blank" rel="noreferrer" className="max-xxs:min-w-0 block rounded-2xl dark:rounded-2xl group dark:hover:shadow-2xl dark:hover:shadow-sky-300 hover:shadow-2xl hover:shadow-sky-300 active:shadow-2xl active:shadow-sky-400">
                                        <img className="aspect-video rounded-2xl h-30" src={ClimateDuckyScreenshot} alt="MuniaLoginPic" />
                                    </a>
                                    {/* Climate-Ducky login image */}
                                </article>
                                {/* Climate-Ducky project container*/}
                                <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />


                                {/* Ingenium project container*/}
                                <article className="relative flex flex-col justify-center w-full ">
                                    {/* Ingenium description */}
                                    <div className="flex flex-col items-center justify-center">
                                        <h2 className="text-gray-700 mr-2 dark:text-gray-200 text-2xl text-center font-bold">{language === 'en' ? 'Current working project "Ingenium.net.ar""' : 'Actualmente trabajando en el proyecto "Ingenium.net.ar"'}</h2>
                                        <p className="text-slate-400 dark:text-slate-200 text-center mt-5">{language === 'en' ? 'Your new favorite weather website!' : `Ingenium es una empresa que ofrece servicios de administración y gestión financiera`}</p>
                                        <p className="text-slate-400 dark:text-slate-200 text-center font-bold mt-2">{language === 'en' ? 'Your new favorite weather website!' : `¡Yo estoy haciendo la web para ellos!`}</p>
                                    </div>
                                    {/* Ingenium description */}

                                    {/* Ingenium technologies icons */}
                                    <div className="flex flex-col mt-1.5 justify-center items-center pt-3 pb-6 mb-10">
                                        <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? "(Web tech stack to be used in the project)" : '(Tecnologías web a utilizar en el proyecto)'}</p>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="relative group/tooltip">
                                                <img src={HTML5Icon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={cssIcon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">CSS</span>
                                            </div>
                                            <div className="relative group/tooltip">
                                                <img src={reactIcon} className="w-8" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">React</span>
                                            </div>
                                            {theme === "light" ? <div className="relative group/tooltip">
                                                <img src={framerIcon} className="w-4" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Framer-motion</span>
                                            </div> : <div className="relative group/tooltip">
                                                <img src={framerDarkIcon} className="w-4" alt="" />
                                                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-gray-700 dark:text-white dark:font-medium before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-gray-700 before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Framer-motion</span>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    {/* <p className="text-slate-900 dark:text-slate-400 mb-2 mt-2">{language === 'en' ? '(Must contact Munia for register)' : '(Debe contactar con Munia para registrarse)'}</p> */}

                                    {/* Ingenium redirect button */}
                                    <div className="flex flex-row mb-3 text-xl">
                                        <Tooltip
                                            link="https://www.figma.com/proto/msIxP85Kxae035Mx0YflRy/Dise%C3%B1o-de-%22INGENIUM%22?node-id=394-146&node-type=canvas&t=6GZwR454IGYC1EDz-1&scaling=scale-down-width&content-scaling=fixed&page-id=59%3A2888"
                                            mainText={language === 'en' ? "Check how's the prototype going!" : '¡Ve a ver como está yendo el prototipo!'}
                                            tooltipSpan={language === 'en' ? "Sign up, send a request, and I'll give you permission to access the prototype, so you can check the most updated version!" : "Regístrate, envía una solicitud, ¡Y te daré permiso para acceder al prototipo para que puedas consultar la versión más actualizada!"}
                                            tooltipTextColor="dark:text-blue-200 text-white text-stroke-[0px] dark:text-stroke-[0px]"
                                            tooltipBackground="dark:bg-gray-800 dark:bg-none bg-[#261dd0]"
                                            tooltipBorder="dark:border-blue-300"
                                            buttonTextColor="dark:text-blue-300 text-white"
                                            buttonBackgroundColor="dark:bg-gray-800 bg-[#261dd0]"
                                            buttonBorderColor="dark:border-gray-700 border-blue-100"
                                            hoverButtonBorderColor="dark:hover:border-blue-300 hover:border-blue-400 active:border-blue-300"
                                            pointerBackground="dark:bg-gray-800 bg-[#2B71FF]"
                                            pointerBorder="dark:border-blue-300 border-2 border-blue-500"
                                            buttonXPadding="px-6"
                                            buttonHeight="h-10 max-xxxs:h-full"
                                            buttonWidth="w-full"
                                            buttonFlexProps="justify-center items-center"
                                        />
                                    </div>
                                    {/* Ingenium redirect button */}

                                    {/* Ingenium technologies icons */}

                                    {/* Ingenium login image */}
                                    <div className="max-xxs:min-w-0 block rounded-2xl dark:rounded-2xl group dark:hover:shadow-2xl dark:hover:shadow-blue-300 hover:shadow-2xl hover:shadow-blue-300 active:shadow-2xl active:shadow-blue-400">
                                        <video className="aspect-video rounded-2xl h-30" src={IngeniumWebVideo} controls="true" muted="true" alt="MuniaLoginPic" />
                                    </div>
                                    {/* Ingenium login image */}
                                </article>
                                {/* Ingenium project container*/}
                            </div>
                            {/* My projects container */}
                        </div>
                        {/* My projects */}
                    </section>
                    {/* Projects section end */}
                    {/* Email section start */}
                    <section className="w-full">
                        {/* Email Title */}
                        <header className="font-bold text-3xl text-indigo-400 dark:text-gray-100 mb-6 flex max-xxs:justify-center max-[220px]:justify-start max-[220px]:pl-5 items-center gap-3">
                            <h2>{language === 'en' ? 'Email' : 'Correo electrónico'}</h2>
                            <FontAwesomeIcon icon={faEnvelope} className="scale-110" />
                        </header>
                        {/* Email Title */}
                        <div className="flex gap-4">
                            {/* Email Input */}
                            <input
                                className="bg-black/5 dark:bg-white/5 w-full h-fit py-3 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300"
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
                                        {language === 'en' ? "Click to send me an email" : 'Haz click para enviarme un email'}
                                    </span>
                                </div>
                                {/* Send email button */}
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