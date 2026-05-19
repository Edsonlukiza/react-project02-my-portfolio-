import React from 'react';

function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>Here is some information about me :</p>
            <ul>
                <li>Full Name: Edson M. M. M. M.</li>
                <li>Location: Dar es Salaam, Tanzania</li>
                <li>Education: BSc in Computer Science from the St.Joseph College of engineering and Technology</li>
                <li>Experience: 3 years as a software developer specializing in web applications</li>
                <li>Skills: JavaScript, React, Node.js, Python, PHP, HTML/CSS</li>
                <li>Hobbies: Coding and reading</li>
            </ul>
            <div className="testmonies">
                <h3>Testimonials</h3>
                <div className="testmonials-grid">
                    <div className="">
                        <img src="" alt="" />
                        <span></span>
                    </div>
                    <div className=""><p>"Edson is a great developer and a pleasure to work with."</p>
                        <p>"His attention to detail and problem-solving skills are impressive."</p>
                    </div>
                </div>

                <div className="testmonials-grid">
                    <div className="">
                        <img src="" alt="" />
                        <span></span>
                    </div>
                    <div className=""><p>"Edson is a great developer and a pleasure to work with."</p>
                        <p>"His attention to detail and problem-solving skills are impressive."</p>
                    </div>
                </div>

                <div className="testmonials-grid">
                    <div className="">
                        <img src="" alt="" />
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