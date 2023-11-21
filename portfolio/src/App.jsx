import './App.css'
import { useEffect, useState } from "react";
import DarkModeIcon from "/src/assets/DarkModeIcon.svg"

function App() {
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
    <div className="dark:bg-black w-screen h-screen">
      <div className="w-screen h-16 flex flex-row justify-end align-top dark:bg-neutral-900">
        <button className=" bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-full  dark:bg-green-600 dark:hover:bg-green-700"
          onClick={handleChangeTheme}
        >
          <img className="w-8" src={DarkModeIcon} alt="DarkMode Icon" />
        </button>
      </div>
    </div>
  )
}

export default App
