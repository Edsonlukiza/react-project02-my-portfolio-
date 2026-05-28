const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-12 pb-6 px-6 border-t border-gray-800">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Logo / Name */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold tracking-wide">
                        My Portfolio
                    </h1>

                    <p className="text-gray-400 mt-2 text-sm max-w-md">
                        Building modern, responsive and scalable web applications
                        with creativity and clean code.
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-wrap justify-center gap-5">

                    {/* Facebook */}
                    <a href="#"
                        className="bg-gray-900 p-3 rounded-full hover:scale-110 hover:bg-blue-600 transition duration-300 shadow-lg">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white">

                            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073
                            c0 6.019 4.388 10.998 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413
                            c0-3.007 1.792-4.669 4.533-4.669
                            1.312 0 2.686.235 2.686.235v2.953h-1.513
                            c-1.491 0-1.956.926-1.956 1.875v2.25h3.328
                            l-.532 3.49h-2.796V24C19.612 23.071 24 18.092 24 12.073z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="#"
                        className="bg-gray-900 p-3 rounded-full hover:scale-110 hover:bg-pink-600 transition duration-300 shadow-lg">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white">

                            <path d="M7.75 2C4.578 2 2 4.578 2 7.75v8.5
                            C2 19.422 4.578 22 7.75 22h8.5
                            c3.172 0 5.75-2.578 5.75-5.75v-8.5
                            C22 4.578 19.422 2 16.25 2h-8.5zm0 2h8.5
                            C18.318 4 20 5.682 20 7.75v8.5
                            C20 18.318 18.318 20 16.25 20h-8.5
                            C5.682 20 4 18.318 4 16.25v-8.5
                            C4 5.682 5.682 4 7.75 4zm8.75 1
                            a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7
                            a5 5 0 100 10 5 5 0 000-10zm0 2
                            a3 3 0 110 6 3 3 0 010-6z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="#"
                        className="bg-gray-900 p-3 rounded-full hover:scale-110 hover:bg-blue-500 transition duration-300 shadow-lg">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white">

                            <path d="M20.447 20.452H16.89v-5.569
                            c0-1.328-.027-3.037-1.852-3.037
                            -1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049
                            c.476-.9 1.637-1.85 3.37-1.85
                            3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433
                            a2.063 2.063 0 110-4.126
                            2.063 2.063 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="#"
                        className="bg-gray-900 p-3 rounded-full hover:scale-110 hover:bg-gray-700 transition duration-300 shadow-lg">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white">

                            <path d="M12 .297a12 12 0 00-3.79 23.4
                            c.6.113.82-.258.82-.577v-2.257
                            c-3.338.726-4.042-1.416-4.042-1.416
                            -.546-1.387-1.333-1.756-1.333-1.756
                            -1.089-.744.084-.729.084-.729
                            1.205.084 1.838 1.236 1.838 1.236
                            1.07 1.834 2.809 1.304 3.495.997
                            .108-.775.418-1.305.762-1.604
                            -2.665-.303-5.466-1.332-5.466-5.93
                            0-1.31.469-2.381 1.236-3.221
                            -.124-.303-.535-1.524.117-3.176
                            0 0 1.008-.322 3.301 1.23
                            .957-.266 1.983-.399 3.003-.404
                            1.02.005 2.047.138 3.006.404
                            2.291-1.552 3.297-1.23 3.297-1.23
                            .653 1.653.242 2.874.118 3.176
                            .77.84 1.235 1.911 1.235 3.221
                            0 4.61-2.805 5.624-5.476 5.921
                            .43.372.814 1.102.814 2.222v3.293
                            c0 .322.216.694.825.576A12.003 12.003 0 0012 .297" />
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="#"
                        className="bg-gray-900 p-3 rounded-full hover:scale-110 hover:bg-green-500 transition duration-300 shadow-lg">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white">

                            <path d="M20.52 3.48A11.79 11.79 0 0012.04 0
                            C5.52 0 .24 5.28.24 11.8
                            c0 2.08.54 4.1 1.56 5.88L0 24l6.5-1.7
                            a11.77 11.77 0 005.54 1.42h.01
                            c6.52 0 11.8-5.28 11.8-11.8
                            0-3.15-1.22-6.1-3.33-8.22z" />
                        </svg>
                    </a>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
                <p>
                    &copy; 2026 Edson Portfolio. All Rights Reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer