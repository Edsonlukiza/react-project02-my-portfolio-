import img from '../assets/images/developer2.jpeg'

function About() {
    return (
        <div className="bg-slate-100 dark:bg-background text-slate-900 dark:text-white px-6 py-12">
            <div className="text-gray-500 font-semibold">
                <h2 >About Me</h2>
                <p>Here is some information about me :</p>
                <ul>
                    <li>Full Name: Edson M. M. M. M.</li>
                    <li>Location: Dar es Salaam, Tanzania</li>
                    <li>Education: BSc in Computer Science from the St.Joseph College of engineering and Technology</li>
                    <li>Experience: 3 years as a software developer specializing in web applications</li>
                    <li>Skills: JavaScript, React, Node.js, Python, PHP, HTML/CSS</li>
                    <li>Hobbies: Coding and reading</li>
                </ul>
            </div>
            <h3 className="text-gray-500 font-semibold text-center">Testimonials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-12 justify-items-center  ">

                <div className="w-100 h-50 bg-blue-600 rounded-lg shadow-md flex flex-col items-center justify-center  text-white p-4 ">
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

                <div className="w-100 h-50 bg-blue-600 rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-4 ">
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

                <div className="w-100 h-50 bg-blue-600 rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-4 ">
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
    );
}

export default About;   