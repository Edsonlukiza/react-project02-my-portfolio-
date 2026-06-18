import { useEffect, useState } from 'react'
import img from '../assets/images/developer2.jpeg'

const headingText = 'Hello my name is Edson M.'
const subText = "I'm a passionate software developer with a knack for creating innovative solutions."

function Hero() {

    const [typedHeading, setTypedHeading] = useState('')
    const [typedSub, setTypedSub] = useState('')

    useEffect(() => {

        let timers: ReturnType<typeof setTimeout>[] = []
        const headingSpeed = 80
        const subSpeed = 34
        const subDelay = 450
        const pauseAfterComplete = 1900

        const clearTypingTimers = () => {
            timers.forEach(clearTimeout)
            timers = []
        }

        const addTimer = (callback: () => void, delay: number) => {
            timers.push(setTimeout(callback, delay))
        }

        const typeText = () => {

            clearTypingTimers()
            setTypedHeading('')
            setTypedSub('')

            for (let index = 1; index <= headingText.length; index++) {
                addTimer(() => {
                    setTypedHeading(headingText.slice(0, index))
                }, index * headingSpeed)
            }

            const subStart = headingText.length * headingSpeed + subDelay

            for (let index = 1; index <= subText.length; index++) {
                addTimer(() => {
                    setTypedSub(subText.slice(0, index))
                }, subStart + index * subSpeed)
            }

        }


        typeText()


        const repeat = setInterval(() => {
            typeText()
        }, headingText.length * headingSpeed + subDelay + subText.length * subSpeed + pauseAfterComplete)



        return () => {
            clearTypingTimers()
            clearInterval(repeat)
        }


    }, [])

    return (

        <div className="bg-primary text-white grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 py-20 overflow-hidden">


            <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">


                <h1 className="min-h-[5rem] text-3xl font-bold tracking-tight lg:min-h-[7rem] lg:text-5xl">

                    {typedHeading}
                    {!typedSub && <span className="typing-cursor" aria-hidden="true"></span>}

                </h1>


                <p className="mx-auto mt-6 min-h-[6rem] max-w-xl text-base leading-8 text-subprimary sm:text-lg lg:mx-0">

                    {typedSub}
                    {typedSub && <span className="typing-cursor typing-cursor-small" aria-hidden="true"></span>}

                </p>


            </div>



            <div className="flex flex-col items-center gap-6">

                <div className="relative flex items-center justify-center">


                    <div className="absolute w-72 h-72 rounded-full border-2 border-sky-400 animate-wave"></div>


                    <div
                        className="absolute w-72 h-72 rounded-full border-2 border-sky-400 animate-wave"
                        style={{ animationDelay: "1s" }}
                    ></div>


                    <div
                        className="absolute w-72 h-72 rounded-full border-2 border-sky-400 animate-wave"
                        style={{ animationDelay: "2s" }}
                    ></div>


                    <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.6)]">

                        <img
                            src={img}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </div>


                <a
                    href="mailto:edsonlukiza@gmail.com?subject=Portfolio Inquiry&body=Hello Edson,"
                    className="mt-20 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full"
                >
                    Lets Connect
                </a>


            </div>

        </div>
    )
}

export default Hero
