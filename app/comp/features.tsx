"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Anton } from "next/font/google";
import FadeInSection from "@/components/ui/FadInSection";
import BlurText from "@/components/BlurText";

const sans = Anton({
  subsets: ['latin'],
  weight: '400',
});

export default function Features() {
  return (
    <FadeInSection>
      <section className="relative w-full -mt-32 md:mt-0 min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 px-6 flex flex-col items-center">
        {/* Header */}




        <div className="relative text-center w-full max-w-3xl md:mb-10">
          <Image
            src="/line.svg"
            alt="Automated Templates"
            width={100}
            height={100}
            //   h-108 w-85
            className="absolute md:hidden top-13 left-24 lg:w-[300px] w-[180px] lg:h-[100px] z-0"
          />
          <Image
            src="/line.svg"
            alt="Automated Templates"
            width={100}
            height={100}
            //   h-108 w-85
            className="absolute hidden md:block -top-4 right-0 w-[300px] h-[100px] z-0"
          />
          <h2 className={`${sans.className} relative  mb-4`}>
          {/* Meetings got an <span className="underline decoration-blue-500">upgrade</span> */}
          <BlurText
                    text="Your digital success starts with strategic creativity"
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
                text="Your digital success starts with"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl md:text-4xl text-gray-900"
              />
              <span className="relative flex w-full justify-center items-center">
                <BlurText
                  text="strategic creativity"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl relative z-1 md:text-4xl ml-2 text-gray-900"
                />
                <Image
                  src="/line.svg"
                  alt="Decor"
                  width={130}
                  height={40}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 md:top-8 w-[210px] md:w-[500px] z-0 pointer-events-none select-none"
                />
              </span>
            </span>
          </h2> */}
          <p className="text-gray-600 text-sm md:text-base">
            We deliver comprehensive digital solutions tailored to your brand's unique story
          </p>
        </div>

        {/* Layout Container */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-4 max-w-6xl w-full -mt-20">

          {/* SVG */}
          <Image
            src="/three.svg"
            alt="Automated Templates"
            width={100}
            height={100}
            //   h-108 w-85
            className="absolute rotate-[248deg] top-12 right-[490px] w-[30px] h-[50px] "
          />
          <Image
            src="/three.svg"
            alt="Automated Templates"
            width={100}
            height={100}
            //   h-108 w-85
            className="absolute rotate-[77deg] bottom-6 right-[440px] w-[30px] h-[50px] "
          />
          <Image
            src="/three.svg"
            alt="Automated Templates"
            width={100}
            height={100}
            //   h-108 w-85
            className="absolute rotate-[248deg] top-12 right-[490px] w-[30px] h-[50px] "
          />
          <Image
            src="/three.svg"
            alt="Automated Templates"
            width={100}
            height={100}
            //   h-108 w-85
            className="absolute rotate-180 bottom-56 left-48 w-[30px] h-[50px] "
          />

          {/* Left Column */}
          <div className="flex flex-col gap-4 w-fit">
            {/* Automated Templates */}
            <div className="bg-gradient-to-tr from-orange-100 via-pink-100 to-purple-100 shadow-xl w-fit rounded-2xl overflow-hidden p-2 mt-28">
              <Image
                // src="/website.svg"
                src="https://res.cloudinary.com/diff4mm8y/image/upload/v1763017207/Black_Green_Modern_Playful_Abstract_Marketing_Proposal_Presentation_2_ujm9nk.jpg"
                alt="Automated Templates"
                width={800}
                height={600}
                className=" inset-0 md:w-[550px] md:h-[300px] object-cover rounded-2xl"
              />
            </div>

            {/* Smart Tasks */}
            <div className="w-full flex items-end justify-end p-0">
              <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl p-2">

                <Image
                  src="https://res.cloudinary.com/diff4mm8y/image/upload/v1763017208/Black_Green_Modern_Playful_Abstract_Marketing_Proposal_Presentation_1_ksuy5u.jpg"
                  alt="Automated Templates"
                  width={800}
                  height={600}
                  className=" inset-0 md:w-[420px] md:h-[250px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl overflow-hidden w-fit h-fit p-2">
            <Image
              src="https://res.cloudinary.com/diff4mm8y/image/upload/v1763017208/Black_Green_Modern_Playful_Abstract_Marketing_Proposal_Presentation_bjzsjp.jpg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 md:w-[350px] md:h-[550px] object-cover rounded-2xl"
            />


          </div>
        </div>

      </section>
    </FadeInSection>
  );
}
