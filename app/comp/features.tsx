"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Anton } from "next/font/google";
import FadeInSection from "@/components/ui/FadInSection";

const sans = Anton({
  subsets: ['latin'],
  weight: '400',
});

export default function Features() {
  return (
      <FadeInSection>
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 px-6 flex flex-col items-center">
      {/* Header */}
      

      
                            
      <div className="relative text-center max-w-3xl mb-10">
        <Image
        src="/line.svg"
        alt="Automated Templates"
        width={100}
        height={100}
      //   h-108 w-85
        className="absolute -top-4 -right-3 w-[300px] h-[100px] z-0"
        />
        <h2 className={`${sans.className} relative text-4xl font-bold text-gray-900 mb-4`}>
          {/* Meetings got an <span className="underline decoration-blue-500">upgrade</span> */}
          Your digital success starts with strategic creativity
        </h2>
        <p className="text-gray-600">
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
              src="/website.svg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 w-[550px] h-[300px] object-cover rounded-2xl"
            />
          </div>

          {/* Smart Tasks */}
          <div className="w-full flex items-end justify-end p-0">
        <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl p-2">

          <Image
              src="/SG.svg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 w-[420px] h-[250px] object-cover rounded-2xl"
              />
              </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gradient-to-tr from-purple-100 via-blue-100 to-orange-100 shadow-xl rounded-2xl overflow-hidden w-fit h-fit p-2">
        <Image
              src="/Social.svg"
              alt="Automated Templates"
              width={800}
              height={600}
              className=" inset-0 w-[350px] h-[550px] object-cover rounded-2xl"
            />
          
          
        </div>
      </div>

    </section>
      </FadeInSection>
  );
}
