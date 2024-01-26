import React from 'react';
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tooltip = ({ link, icon, mainText, tooltipSpan, darkPointerBorder, PointerBorder, pointerBackground, darkPointerBackground, darkTooltipBorder, tooltipBorder, darkTooltipText, tooltipTextColor, darkTooltipBackground, tooltipBackground, buttonTextColor, darkButtonTextColor, buttonBorderColor, darkButtonBorderColor, buttonBackgroundColor, darkButtonBackgroundColor, hoverButtonBorderColor, darkHoverButtonBorderColor }) => {
  return (
    <button className={`flex relative group/tooltip items-center gap-1 font-bold px-5 h-14 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark ${buttonTextColor} border-2 ${buttonBorderColor} dark:hover:border-2 ${darkHoverButtonBorderColor} ${darkButtonTextColor} ${darkButtonBorderColor} ${buttonBackgroundColor} ${darkButtonBackgroundColor} ${hoverButtonBorderColor} transition`} onClick={() => window.open(link, "_blank")}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <h2>{mainText}</h2>
      <span className={`absolute pointer-events-none transition-all opacity-0 dark:z-10 bottom-full -translate-y-0 py-2 px-2 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap ${tooltipBorder} ${tooltipTextColor} ${tooltipBackground} ${darkTooltipBackground} dark:border ${darkTooltipBorder} ${darkTooltipText} group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 z-20`}>
        {tooltipSpan}
      </span>
      <div className="h-3 w-4 left-1/2 opacity-0 bottom-10 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 transition-all absolute">
        <div className={`h-3 w-3 absolute -left-1/2 rounded-sm ${pointerBackground} ${PointerBorder} ${darkPointerBackground} ${darkPointerBorder} dark:border-2 opacity-0 group-hover/tooltip:opacity-100 transition-all -rotate-45 transform origin-top-left`}></div>
      </div>
    </button>
  );
}

export default Tooltip;
