import React from 'react';
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import HenryTalentIcon from '../assets/HenryTalentIcon.jpg'
import HenrySquareIcon from '../assets/HenrySquareIcon.png'


const TooltipButton = ({ link, henryTalent, henrySquare, githubIcon, linkedinIcon, mainText, tooltipSpan, pointerBorder, pointerBackground, tooltipBorder, tooltipText, tooltipTextColor, tooltipBackground, buttonTextColor, buttonBorderColor, buttonBackgroundColor, hoverButtonBorderColor, buttonXPadding, buttonWidth, buttonHeight, buttonFlexProps }) => {
  return (
    <button className={`whitespace-nowrap max-phone:text-[8vw] ${henryTalent || henrySquare ? 'max-phone:flex max-phone:flex-col':''} max-phone:h-fit max-phone:whitespace-normal flex relative group/tooltip ${buttonFlexProps} gap-1 font-bold ${buttonXPadding} ${buttonWidth} ${buttonHeight} rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark ${buttonTextColor} border-2 ${buttonBorderColor} dark:hover:border-2 ${buttonBackgroundColor} ${hoverButtonBorderColor} transition`}
      onClick={() => window.open(link, "_blank")}
    >
      {/* Buttons Icons & images */}
      {henryTalent && <img src={HenryTalentIcon} className='h-7 dark:hidden max-phone:w-[16%] max-phone:h-[16%]' />}
      
      {henrySquare && <img src={HenrySquareIcon} className='h-6 hidden dark:flex max-phone:w-[16%] max-phone:h-[16%]' />}
      
      {githubIcon ? <FontAwesomeIcon icon={faGithub} /> : null}
      
      {linkedinIcon ? <FontAwesomeIcon icon={faLinkedin} /> : null}
      
      {/* Main button text */}
      <h2 className='max-phone:text-[70%]'>{mainText}</h2>
      
      {/* Tooltip Text */}
      <span className={`max-phone:text-[7vw] max-phone:hidden absolute border pointer-events-none transition-all opacity-0 dark:z-10 bottom-full -translate-y-0 py-2 px-2 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap ${tooltipBorder} ${tooltipTextColor} ${tooltipBackground} dark:border ${tooltipText} group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 z-20`}>
        {tooltipSpan}
      </span>

      {/* Tooltip pointer */}
      <div className="max-phone:text-[7vw] max-phone:hidden -top-0 w-4 left-1/2 opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 transition-all absolute">
        <div className={`h-3 w-3 absolute -left-1/2 rounded-sm ${pointerBackground} ${pointerBorder} dark:border-2 opacity-0 group-hover/tooltip:opacity-100 transition-all -rotate-45 transform origin-top-left`}></div>
      </div>
    </button>
  );
}

export default TooltipButton;
