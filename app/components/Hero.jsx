import React from 'react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";


const Hero = () => {

    const words = ["Developer", "Video Editor", "Marketer", "Creator"];


    return (
        <>
            <BackgroundBeamsWithCollision>


                <h2
                    className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
                    Hi! I am {" "}
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div
                            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">DHEERAJOK</span>
                        </div>
                        <div
                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">DHEERAJOK</span>
                        </div>
                    </div>

                </h2>

                <div className=" flex justify-center items-center">
                    <div
                        className="text-4xl mx-auto font-normal text-white-600 dark:text-white-400">
                        Your Favourite
                        <FlipWords words={words} /> <br />
                    </div>
                </div>










            </BackgroundBeamsWithCollision>
        </>
    )
}

export default Hero
