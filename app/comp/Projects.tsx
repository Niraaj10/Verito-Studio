'use client'

import Image from "next/image";
import Features from "./features";
import { FramerCarousel } from "@/components/framer-carousel";
import FadeInSection from "@/components/ui/FadInSection";
import { Anton } from "next/font/google";
import CuratedContentSection from "./ContentSection";
import BlurText from "@/components/BlurText";

const sans = Anton({
    subsets: ['latin'],
    weight: '400',
});

export default function Projects() {
    return (
        // <FadeInSection>
        <section className="px-2 md:px-12 lg:px-20 md:py-20 bg-white">
            {/* <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                        Portfolio
                    </p> */}

            <div className="relative text-center max-w-3xl mx-auto flex flex-col justify-center items-center">
                {/* <Image
                    src="/largeline.svg"
                    alt="Automated Templates"
                    width={100}
                    height={100}
                    //   h-108 w-85
                    className="absolute md:hidden bottom-3 right-6 w-[200px] md:w-[500px] h-[100px] z-0"
                /> */}
                <Image
                    src="/largeline.svg"
                    alt="Automated Templates"
                    width={100}
                    height={100}
                    //   h-108 w-85
                    className="absolute hidden md:block bottom-3 right-24 md:-top-5 md:right-0 w-[200px] md:w-[500px] h-[100px] z-0"
                />
                <h2 className={`${sans.className} px-7 md:px-0 text-2xl md:text-4xl font-bold text-gray-900 mb-4`}>

                    <BlurText
                        text=" Our creative journey through client success"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        // onAnimationComplete={handleAnimationComplete}
                        className="text-2xl md:text-4xl text-gray-900 items-center justify-center"
                    />
                </h2>

                {/* <h2 className={`${sans.className} relative text-2xl md:text-4xl font-bold text-gray-900 mb-4`}>
                    <span className="relative flex flex-col md:flex-row justify-center items-center">
                        <BlurText
                            text="Our creative journey through"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-2xl md:text-4xl text-gray-900 text-center md:ml-28 md:w-[425px]"
                        />
                        <span className="relative flex w-fit justify-center items-center ">
                            <BlurText
                                text="client success"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-2xl md:text-4xl w-[300px] relative z-1 text-gray-900"
                            />
                            <Image
                                src="/largeline.svg"
                                alt="Decor"
                                width={130}
                                height={40}
                                className="absolute left-1/2 -translate-x-1/2 md:right-10 bottom-0 md:-bottom-1 w-[210px] md:w-[320px] z-0 pointer-events-none select-none"
                            />
                        </span>
                    </span>
                </h2> */}

                <p className="text-gray-600 px-7 md:px-0 text-sm md:text-base">
                    Transformative digital solutions that drive real business growth
                </p>
            </div>

            {/* Project Card */}
            <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl m-0 mt-2 md:mt-10 w-fit mx-auto">
                <FramerCarousel />
            </div>

            <div className="">
                <CuratedContentSection />
            </div>

            {/* </FadeInSection > */}
        </section>
    );
}
