
import img from '../assets/images/developer2.jpeg'
function Hero() {
    return (
        <div className="bg-sky-950 text-white grid grid-cols-2 items-center gap-10 px-6 py-25">



            <div className="">
                <h1 className="text-3xl font-bold">Hello my name is Edson M.</h1>

                <p className="mt-4 text-lg text-slate-300">I'm a passionate software developer with a knack for creating innovative solutions.</p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="relative flex items-center justify-center ">

                    <div className="relative flex items-center justify-center">

                        {/* OUTER ROTATING RINGS */}
                        <div className="absolute w-96 h-96 rounded-full border border-sky-500/20 animate-spin-slow"></div>

                        <div className="absolute w-[420px] h-[420px] rounded-full border border-sky-400/10 animate-spin-reverse"></div>

                        {/* glowing arcs (fake segments) */}
                        <div className="absolute w-[460px] h-[460px] rounded-full border-t-2 border-sky-500 animate-spin-slow"></div>

                        {/* MAIN GLOW CIRCLE */}
                        <div className="relative w-72 h-72 rounded-full bg-slate-900 flex items-center justify-center shadow-[0_0_60px_rgba(56,189,248,0.4)]">

                            <img
                                src={img}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                            />

                        </div>

                    </div>

                </div>
                <button className="mt-20 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition">
                    Lets Connect
                </button>

            </div>
        </div>



    );
}

export default Hero;