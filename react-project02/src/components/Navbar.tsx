import React from 'react';

function Navbar() {
    return (

        <div className="  bg-oklch(79.5% 0.184 86.047) text-oklch(20.5% 0.184 86.047) flex justify-between p-4 sticky top-0 ">
            <div className="logo ">logo</div>
            <div className="nav-links flex space-x-4 text-sm:5 rem text-md:1 rem text-lg:1.25 rem text-xl:1.5 rem ">
                <a href="#">Home</a>
                <a href="#">Tech stack</a>
                <a href="#">About me</a>
                <a href="#">Featured Projects</a>
                <a href="#">Contact me</a>
            </div>
        </div>
    );
}

export default Navbar;