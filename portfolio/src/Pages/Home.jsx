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
import TooltipButton from "../components/TooltipButton";
import HenryCertificate from '../assets/Henry certificate.jpg'
import LanguageToggleButton from "../components/LanguageToggleButton";

const Home = () => {
    const [language, setLanguage] = useState('es'); // Idioma por defecto es Español
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

    // Estado para manejar la visibilidad de la sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Función para manejar el cambio del checkbox
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Navbar start */}
            <div className="w-full flex flex-col justify-center sticky top-0 z-10">
                {/* Navbar content container */}
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

                        {/* Navbar profile pic name start */}
                        <h2 className="text-center max-xs:text-xs">Damián Medina alias "DamiDev"</h2>
                        {/* Navbar profile pic name end */}
                    </div>
                    {/* Navbar profile pic logo end */}

                    {/* Navbar profile theme & Language button start */}
                    <div className="flex items-center">
                        {/* Checkbox y botón para abrir/cerrar la sidebar */}
                        <label className="xs:hidden pr-3 z-20">
                            <div className="aspect-square w-10 cursor-pointer flex flex-col items-center justify-center">
                                <input
                                    className="hidden peer"
                                    type="checkbox"
                                    onChange={handleSidebarToggle}
                                    checked={isSidebarOpen}
                                />
                                {/* Líneas del ícono hamburguesa */}
                                <div className="w-[50%] h-[2px] bg-black dark:bg-gray-100 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-38deg]" />
                                <div className="w-[50%] h-[2px] bg-black dark:bg-gray-100 rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
                                <div className="w-[50%] h-[2px] bg-black dark:bg-gray-100 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[38deg]" />
                            </div>
                        </label>

                        {/* Sidebar con botones de idioma y tema */}
                        {isSidebarOpen && (
                            /* Sidebar container */
                            <div className={`absolute top-0 right-0 w-fit h-fit bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm shadow-lg z-10 px-5 rounded-bl-3xl transform transition-transform duration-1000 ease-in-out origin-right`}>

                                <section className="flex flex-col items-center gap-4">
                                    <p className="mt-4 dark:text-gray-100 text-slate-700 font-bold">{language === "en" ? "Settings" : 'Ajustes'}</p>

                                    <hr className="border-1 w-full h-0 border-gray-600" />
                                    {/* Botón de cambiar tema */}
                                    <button
                                        className="w-full flex items-center gap-4 outline-none dark:border-gray-700 dark:border-2 border-2 border-gray-200 shadow-md rounded-md"
                                        onClick={handleChangeTheme}
                                    >
                                        <div className="dark:hidden flex justify-between w-fit items-center">
                                            <p className="w-full relative px-3 py-2 active:bg-slate-100 hover:scale-105 dark:hover:scale-105 dark:active:scale-100 text-black rounded-md shadow-md dark:text-white dark:hover:bg-slate-700 transition duration-300">{language === "en" ? "Switch to dark theme" : 'Cambiar a tema oscuro'}</p>
                                            <div className="text-3xl dark:hidden text-slate-700">
                                                <FontAwesomeIcon icon={faMoon} />
                                            </div>
                                        </div>
                                        <div className="hidden dark:flex dark:w-fit dark:items-center dark:gap-2">
                                            <p className="w-full relative px-3 py-2 active:bg-slate-100 hover:scale-105 dark:hover:scale-105 dark:active:scale-100 text-black  rounded-md shadow-md dark:text-white dark:hover:bg-slate-700 transition duration-300">{language === "en" ? "Switch to light theme" : 'Cambiar a tema claro'}</p>
                                            <img className="h-8" src={sunThemeIcon} alt="Clear theme button" />
                                        </div>
                                    </button>


                                    {/* Botón de cambiar idioma */}
                                    <div className=" mb-4 ">
                                        <LanguageToggleButton toggleLanguage={toggleLanguage} language={language} />
                                    </div>


                                </section>


                            </div>
                        )}

                        {/* Botones normales que solo se muestran cuando la sidebar está cerrada */}
                        <div className={`max-xs:hidden ${isSidebarOpen ? 'hidden' : ''}`}>
                            <LanguageToggleButton toggleLanguage={toggleLanguage} language={language} />
                        </div>
                        <button
                            className={`max-xs:hidden md:mr-10 py-2 px-2 sm:py-5 flex items-end gap-4 outline-none ${isSidebarOpen ? 'hidden' : ''}`}
                            onClick={handleChangeTheme}
                        >
                            <div className="text-4xl flex-nowrap ml-3 dark:hidden text-slate-700">
                                <FontAwesomeIcon icon={faMoon} />
                            </div>
                            <div className="flex-nowrap hidden dark:block">
                                <img className="h-10" src={sunThemeIcon} alt="Clear theme button" />
                            </div>
                        </button>
                    </div>
                    {/* Navbar profile theme & Language button end */}


                </header>
                {/* Navbar content container end */}
            </div>
            {/* Navbar end */}


            {/* Main start */}
            <div className={`overflow-hidden max-w-4xl flex-col mb-5 flex gap-10`}>
                <main className="flex flex-col gap-12">


                    {/* Hero presentation start */}
                    <section className="px-20 flex flex-col md:flex-column items-center gap-5 shrink-0" >

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
                                <p className="shrink-0 mt-3 text-center hyphens-auto text-slate-700 text-2xl md:text-3xl dark:text-slate-200 max-w-full font-Jersey10PixelFont">{language === 'en' ? 'Welcome!' : '¡Bienvenidos!'}</p>
                                <p className="shrink-0 text-center text-slate-700 text-sm md:text-lg dark:text-slate-300 max-w-full h-10 rounded-2xl">{language === 'en' ? 'I am passionate about web development, focused on the integration of social networks' : 'Soy un apasionado del desarrollo de páginas web, enfocado en la integración de redes sociales'}</p>
                            </div>
                            {/* Presentation title */}

                            {/* Social media Buttons start */}
                            <div className="flex gap-3 mt-3 -mb-10 flex-wrap max-xs:mt-4 max-xs:-mb-5">
                                <TooltipButton
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
                                <TooltipButton
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
                                <TooltipButton
                                    link={HenryCertificate}
                                    mainText={language === 'en' ? 'Henry graduation certificate' : 'Certificado de graduación de Henry'}
                                    tooltipSpan={language === 'en' ? "Here is my Full-Stack developer certificate!" : "¡Acá está mi certificado de desarrollador web Full-Stack!"}
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
                            {/* Social media Buttons end */}

                            {/* Language button start */}
                            <div className="w-full items-end mt-10 justify-end">
                                <LanguageToggleButton toggleLanguage={toggleLanguage} language={language} />
                            </div>
                            {/* Language button end */}
                        </div>
                        {/* About presentation */}
                    </section>
                    {/* Hero presentation end */}
                    <hr className="min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />


                    {/* Experience section start */}
                    <section className="px-20 w-full flex flex-col items-center shrink-0 mt-3 mb-3" id="hero-section">

                        {/* Experience section title start */}
                        <header className="flex shrink-0 font-bold text-4xl underline underline-offset-4 decoration-solid text-indigo-400 dark:text-gray-100 mb-12 max-xxxs:pl-5 max-xxxs:mx-0 max-xxs:pl-5 max-xss:mx-0 gap-4 items-end ">
                            <h2>{language === 'en' ? 'My experience' : 'Mi experiencia'}</h2>
                            <FontAwesomeIcon className="scale-110" icon={faBriefcase} />
                        </header>
                        {/* Experience section title end */}

                        {/* Experience section text start */}
                        <div className="shrink-0  flex flex-col gap-10">
                            <div className="flex flex-col gap-5 pt-8">

                                {/* Munia experience */}
                                {/* Experience Job title start */}
                                <div className="flex flex-col gap-1 max-xxxs:pl-5 max-xxs:pl-5 ">
                                    <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{language === 'en' ? 'Front-End Developer • Munia - Mental and Emotional Health at Work' : 'Desarrollador web Frontend • Munia - Salud Mental y Emocional en el Trabajo'}</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Sept. 2023 - Nov. 2023</p>
                                </div>
                                {/* Experience Job title end */}


                                {/* Experience Job description */}
                                <ul className="list-disc flex flex-col gap-2 ml-8 mb-12 text-slate-700 dark:text-gray-300 text-md">
                                    <li>{language === 'en' ? 'Create a view to be able to view and edit the information of each provider, such as adding the services they offer, their time availability, and their professional documents, among others' : 'Crea una vista para poder visualizar y editar la información de cada proveedor, como agregar los servicios que ofrecen, su disponibilidad horaria, sus documentos profesionales, entre otros'}</li>
                                    <li>{language === 'en' ? 'Plan and carry out the development of a table that will allow comments to be displayed effectively on the platform' : 'Planificar y llevar a cabo el desarrollo de una tabla que permita visualizar de manera efectiva los comentarios en la plataforma'}</li>
                                    <li>{language === 'en' ? 'Conditional rendering based on dynamic routes and user type, using Redux toolkit, according to the role of each user, and React-Router-DOM' : 'Representación condicional basada en rutas dinámicas y tipo de usuario, utilizando el kit de herramientas Redux según el rol de cada usuario y React-Router-DOM'}</li>
                                    <li>{language === 'en' ? 'Planning, design and development of components made with ReactJs, Material UI and Sass' : 'Planificación, diseño y desarrollo de componentes realizados con ReactJs, Material UI y Sass'}</li>
                                </ul>
                                {/* Experience Job description */}

                                {/* Ingenium experience */}
                                {/* Experience Job title start */}
                                <div className="flex flex-col gap-1 max-xxxs:pl-5 max-xxs:pl-5 ">
                                    <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{language === 'en' ? 'Front-End Developer • Ingenium - Financial management and administration' : 'Desarrollador web Frontend • Ingenium - Gestión y administración financiera'}</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Sept. 2024 - Nov. 2024</p>
                                </div>
                                {/* Experience Job title end */}


                                {/* Experience Job description */}
                                <ul className="list-disc flex flex-col gap-2 ml-8 text-slate-700 dark:text-gray-300 text-md">
                                    <li>{language === 'en' ? 'Design and creation of the company logo, "Ingcoin", using Blender to create a detailed 3D model, incorporating the company\'s slogan and year of foundation' : 'Diseño y creación del logo de la empresa, "Ingcoin", utilizando Blender para crear un modelo 3D detallado, incorporando el eslogan de la empresa y el año de fundación'}</li>
                                    <li>{language === 'en' ? 'Develop the main landing page using React.js, Framer-Motion, and TailwindCSS, ensuring an intuitive and modern user experience that reflects the company\'s branding' : 'Desarrollar la página de inicio principal utilizando React.js, Framer-Motion, y TailwindCSS, garantizando una experiencia de usuario intuitiva y moderna que refleje la imagen de la empresa'}</li>
                                    <li>{language === 'en' ? 'Integrate a responsive design across the website to optimize its functionality on various screen sizes, enhancing accessibility and user interaction' : 'Integrar un diseño responsive en todo el sitio web para optimizar su funcionalidad en diferentes tamaños de pantalla, mejorando la accesibilidad y la interacción del usuario'}</li>
                                    <li>{language === 'en' ? 'Optimize website loading times and performance by applying best practices in code structure and asset management, ensuring smooth navigation' : 'Optimizar los tiempos de carga del sitio web y su rendimiento aplicando las mejores prácticas en la estructura del código y gestión de recursos, garantizando una navegación fluida'}</li>
                                </ul>

                                {/* Experience Job description */}

                            </div>
                        </div>
                        {/* Experience section text end */}
                    </section>
                    {/* Experience section end*/}
                    <hr className="px-10 min-w-max whitespace-nowrap border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />


                    {/* Projects section start */}
                    
                    {/* Projects section end */}


                    {/* Email section start */}
                    <section className="px-10 w-full">
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
        </div>
    )
}
export default Home