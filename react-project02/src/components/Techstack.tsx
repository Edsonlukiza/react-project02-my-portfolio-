


function Techstack() {
    return (
        <div className="techstack">
            <h2>Tech Stack</h2>
            <p>Here are some of the technologies I work with:</p>
            <div className="card">
                <p>PHP</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 120 60">
                    <ellipse cx="60" cy="30" rx="55" ry="25" fill="#777BB4" />
                    <text x="60" y="38" text-anchor="middle" font-size="24" fill="white" font-family="Arial">
                        PHP
                    </text>
                </svg>
            </div>

            <div className="card">
                <p>HTML/CSS</p>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="#E34F26" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0zm17.1 4.5H5.4l.3 3.4h9.6l-.3 3.3H6l.3 3.4h8.4l-.3 3.8-2.4.6-2.4-.6-.2-2H6.1l.4 4.6 5.5 1.5 5.5-1.5 1.1-12.5z" />
                </svg>
            </div>

            <div className="card">
                <p>React</p>
                <svg width="50" height="50" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                    <g stroke="#61DAFB" stroke-width="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            </div>
            <div className="card">
                <p>Node.js</p>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 128 128">

                    <rect width="128" height="128" fill="#F7DF1E" />

                    <path d="M35.8 106.7l9.8-5.9c1.9 3.4 3.7 6.3 7.9 6.3
           4 0 6.6-1.6 6.6-7.7V57.8h12v41.8
           c0 12.7-7.4 18.5-18.3 18.5
           -9.8 0-15.5-5.1-18.4-11.4"
                        fill="#000" />

                    <path d="M78.4 105.4l9.8-5.7c2.6 4.3 6 7.5
           12 7.5 5 0 8.2-2.5 8.2-6
           0-4.2-3.3-5.7-8.9-8.2l-3-1.3
           c-8.5-3.6-14.2-8.1-14.2-17.7
           0-8.8 6.7-15.5 17.2-15.5
           7.5 0 12.8 2.6 16.7 9.4
           l-9.1 5.8c-2-3.6-4.2-5-7.6-5
           -3.5 0-5.7 2.2-5.7 5
           0 3.5 2.2 5 7.2 7.2l3 1.3
           c10 4.3 15.7 8.7 15.7 18.5
           0 10.6-8.3 16.4-19.5 16.4
           -10.9 0-17.9-5.2-21.3-12"
                        fill="#000" />
                </svg>
            </div>
        </div>
    );
}

export default Techstack;