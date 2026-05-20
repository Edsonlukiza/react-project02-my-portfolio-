import { useState, useEffect } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (


        <div>
            {/* navbar */}
            <div className="flex items-center justify-between h-12   px-4">
                <div className="font-bold">logo</div>
                {/* desktop */}
                <div className=" hidden sm:flex gap-4">
                    <a href="#">Home</a>
                    <a href="#">Tech stack</a>
                    <a href="#">About me</a>
                    <a href="#">Featured Projects</a>
                    <a href="#">Contact me</a>
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
                <div className="flex flex-col items-center gap-2 text-black dark:bg-background dark:text-white p-4 sm:hidden">
                    <a href="#">Tech stack</a>
                    <a href="#">About me</a>
                    <a href="#">Featured Projects</a>
                    <a href="#">Contact me</a>

                    <button className="sm:hidden text-xl cursor-pointer " onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>
            )}

        </div>
    );
}

export default Navbar;