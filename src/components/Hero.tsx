
import img from '../assets/images/developer2.jpeg'
function Hero() {
    return (
        <div className="bg-primary text-white grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 py-20 overflow-x-hidden">



            <div className="">
                <h1 className="text-3xl font-bold">Hello my name is Edson M.</h1>

                <p className="mt-4 text-lg text-subprimary">I'm a passionate software developer with a knack for creating innovative solutions.</p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="relative flex items-center justify-center ">

                    <div className="relative flex items-center justify-center">

                        {/* Pulsing Glow */}
                        <div className="absolute w-80 h-80 rounded-full bg-sky-500/40 blur-3xl animate-pulse-glow"></div>

                        <div className="absolute w-72 h-72 rounded-full bg-sky-400/30 blur-2xl animate-pulse-glow-delayed"></div>
                        {/* Profile Image */}
                        <div className="relative w-72 h-72 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.5)]">

                            <img
                                src={img}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                            />

                        </div>

                    </div>

                </div>
                <a
                    href="mailto:edsonlukiza@gmail.com?subject=Portfolio Inquiry&body=Hello Edson,"
                    className="mt-20 inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                >
                    Lets Connect
                </a>

            </div>
        </div>



    );
}

export default Hero;