const testimonials = [
    {
        image: "/avatar1.svg",
        name: "Yoshi Joan",
        message1: "Edson is a great developer and a pleasure to work with.",
        message2: "His attention to detail and problem-solving skills are impressive."
    },

    {
        image: "/avatar2.svg",
        name: "Sarah Su",
        message1: "Very professional and creative developer.",
        message2: "Always delivers clean and responsive designs."
    },

    {
        image: "/avatar3.svg",
        name: "Masha Malema",
        message1: "Excellent communication and teamwork skills.",
        message2: "Highly recommended for web development projects."
    },

    {
        image: "/avatar4.svg",
        name: "Jana Wilson",
        message1: "Fast learner and very dedicated.",
        message2: "Builds modern and scalable applications."
    }
];

function About() {
    return (
        <div className="bg-[#FEF1E1] dark:bg-background text-slate-900 dark:text-white px-6 py-12 flex flex-col lg:flex-row justify-between gap-10 transition-colors duration-300">

            {/* About Section */}
            <div className="text-primary font-semibold">
                <h2 className="text-3xl mb-4">About Me</h2>

                <p className="mb-4">
                    Here is some information about me :
                </p>

                <ul className="space-y-2">
                    <li>Full Name: Edson Mchunguzi</li>
                    <li>Location: Dar es Salaam, Tanzania</li>
                    <li>
                        Education: BSc in Computer Science from the
                        St. Joseph College of Engineering and Technology
                    </li>
                    <li>
                        Experience: 2 years as a software developer
                        specializing in web applications
                    </li>
                    <li>
                        Skills: JavaScript, React, Node.js, Python,
                        PHP, HTML/CSS
                    </li>
                    <li>Hobbies: I love to read the Bible</li>
                </ul>
            </div>

            {/* Testimonials */}
            <div className="w-full">
                <h3 className="text-primary font-semibold text-center text-2xl mb-6">
                    Testimonials
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">

                    {testimonials.map((testimonial, index) => (

                        <div
                            key={index}
                            className="w-full max-w-[400px] bg-[#001F3F] rounded-lg shadow-md flex flex-col items-center justify-center gap-4 text-white p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                        >

                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 object-cover rounded-full border-2 border-white"
                            />

                            <h4 className="font-bold text-lg">
                                {testimonial.name}
                            </h4>

                            <div className="text-center text-sm text-gray-200">
                                <p>"{testimonial.message1}"</p>
                                <p>"{testimonial.message2}"</p>
                            </div>

                        </div>

                    ))}

                </div>
            </div>

        </div>
    );
}

export default About;