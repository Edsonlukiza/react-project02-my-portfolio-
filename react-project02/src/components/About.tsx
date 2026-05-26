import img from '../assets/images/developer2.jpeg'

function About() {
    return (
        <div className="bg-[#FEF1E1] dark:bg-background text-slate-900 dark:text-white px-6 py-12 flex flex-col lg:flex-row justify-between gap-10 transition-colors duration-300">
            <div className="text-primary font-semibold">
                <h2>About Me</h2>
                <p>Here is some information about me :</p>
                <ul>
                    <li>Full Name: Edson M. M. M. M.</li>
                    <li>Location: Dar es Salaam, Tanzania</li>
                    <li>Education: BSc in Computer Science from the St.Joseph College <br />of engineering and Technology</li>
                    <li>Experience: 3 years as a software developer specializing in web applications</li>
                    <li>Skills: JavaScript, React, Node.js, Python, PHP, HTML/CSS</li>
                    <li>Hobbies: Coding and reading</li>
                </ul>
            </div>

            <div>
                <h3 className="text-primary font-semibold text-center animate-float-up">Testimonials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-12 justify-items-center">

                    <div className="w-full max-w-[400px] h-50 bg-[#001F3F] rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: "0s" }}>
                        <div className="">
                            <img
                                src={img}
                                alt="profile"
                                className="w-15 h-15 object-cover rounded-full"
                            />
                            <span></span>
                        </div>
                        <div className=""><p>"Edson is a great developer and a pleasure to work with."</p>
                            <p>"His attention to detail and problem-solving skills are impressive."</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[400px] h-50 bg-[#001F3F] rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div className="">
                            <img
                                src={img}
                                alt="profile"
                                className="w-15 h-15 object-cover rounded-full"
                            />
                            <span></span>
                        </div>
                        <div className=""><p>"Edson is a great developer and a pleasure to work with."</p>
                            <p>"His attention to detail and problem-solving skills are impressive."</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[400px] h-50 bg-[#001F3F] rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="">
                            <img
                                src={img}
                                alt="profile"
                                className="w-15 h-15 object-cover rounded-full"
                            />
                            <span></span>
                        </div>
                        <div className=""><p>"Edson is a great developer and a pleasure to work with."</p>
                            <p>"His attention to detail and problem-solving skills are impressive."</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[400px] h-50 bg-[#001F3F] rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                        <div className="">
                            <img
                                src={img}
                                alt="profile"
                                className="w-15 h-15 object-cover rounded-full"
                            />
                            <span></span>
                        </div>
                        <div className=""><p>"Edson is a great developer and a pleasure to work with."</p>
                            <p>"His attention to detail and problem-solving skills are impressive."</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default About;   