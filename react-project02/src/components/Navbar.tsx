import { useState, useEffect } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    const navbarLinks = "relative font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full";
    const mobileNavLink =
        "w-full text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-500";
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (


        <div>
            {/* navbar */}
            <nav className="w-full px-4 py-4 sm:px-8 sm:py-1">
                <div className="  flex items-center justify-between ">
                    <div className="font-bold ">logo</div>
                    {/* desktop */}
                    <div className="  hidden sm:flex gap-4 p-4">
                        <a href="#" className={navbarLinks}>
                            Home
                        </a>
                        <a href="#" className={navbarLinks}>
                            Tech stack
                        </a>
                        <a href="#" className={navbarLinks}>
                            About me
                        </a>
                        <a href="#" className={navbarLinks}>
                            Featured Projects
                        </a>
                        <a href="#" className={navbarLinks}>
                            Contact me
                        </a>
                        <button className=" text-xl cursor-pointer " onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </div>

                    <button className="sm:hidden text-xl cursor-pointer " onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>


                </div>

                {/* mobile */}
                {open && (

                    <div className="flex flex-col items-center gap-2 text-black dark:bg-background dark:text-white sm:hidden font-bold">
                        <a href="#" className={mobileNavLink}>
                            Tech stack
                        </a>
                        <a href="#" className={mobileNavLink}>
                            About me
                        </a>
                        <a href="#" className={mobileNavLink}>
                            Featured Projects
                        </a>
                        <a href="#" className={mobileNavLink}>
                            Contact me
                        </a>

                        <button className="sm:hidden text-xl cursor-pointer " onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </div>

                )}
            </nav>
        </div>
    );
}

export default Navbar;