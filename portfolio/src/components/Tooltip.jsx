import React from 'react'

const Tooltip = (link, icon, mainText, tooltipSpan ) => {
  return (
    <a className="flex relative group/tooltip items-center gap-1 font-bold px-5 h-14 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark text-sky-600 border-2 border-gray-700 dark:hover:border-2 dark:hover:border-blue-400 transition" href={link}>
      <FontAwesomeIcon icon={icon} />
      <h2>{mainText}</h2>
      <span className="absolute pointer-events-none transition-all opacity-0 dark:z-10 bottom-full -translate-y-0 py-2 px-2 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-blue-400 bg-gray-800 dark:bg-slate-800 dark:border dark:border-blue-400 dark:text-blue-400 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 z-20">
        {tooltipSpan}
      </span>
      <div className="h-3 w-4 left-1/2 opacity-0 bottom-10 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 transition-all absolute">
        <div className=" h-3 w-3 absolute -left-1/2 rounded-sm dark:bg-slate-800 dark:border-blue-600 dark:border-2 opacity-0 group-hover/tooltip:opacity-100 transition-all> -rotate-45 transform origin-top-left" ></div>
      </div>
    </a>
  )
}

export default Tooltip