
import img from '../assets/images/developer2.jpeg'
function Hero() {
    return (
        <div className="bg-sky-950 text-white flex flex-col items-center justify-center p-8 space-y-6">

            <h1 className="text-3xl text-gray-500 font-bold">Hi there! Am Edson, welcome to my portfolio!</h1>
            <p>I'm a passionate software developer with a knack for creating innovative solutions. With a strong background in full-stack development, I specialize in building responsive and user-friendly web applications. My expertise includes JavaScript, React, Node.js, and Python. I thrive on challenges and am always eager to learn new technologies to enhance my skills. Let's connect and explore how I can contribute to your next project!</p>
            <img src={img} alt="Hero Image" className="" />
            <button className="">Lets Connect</button>
        </div>

    );
}

export default Hero;