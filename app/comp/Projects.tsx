
import Image from "next/image";
import Features from "./features";
import { FramerCarousel } from "@/components/framer-carousel";
import FadeInSection from "@/components/ui/FadInSection";
import { Anton } from "next/font/google";
import CuratedContentSection from "./ContentSection";

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

            <div className="relative text-center max-w-3xl mx-auto">
                <Image
                    src="/largeline.svg"
                    alt="Automated Templates"
                    width={100}
                    height={100}
                    //   h-108 w-85
                    className="absolute md:hidden bottom-3 right-6 w-[200px] md:w-[500px] h-[100px] z-0"
                />
                <Image
                    src="/largeline.svg"
                    alt="Automated Templates"
                    width={100}
                    height={100}
                    //   h-108 w-85
                    className="absolute hidden md:block bottom-3 right-24 md:-top-5 md:right-0 w-[200px] md:w-[500px] h-[100px] z-0"
                />
                <h2 className={`${sans.className} px-7 md:px-0 relative text-2xl md:text-4xl font-bold text-gray-900 mb-4`}>
                    {/* Meetings got an <span className="underline decoration-blue-500">upgrade</span> */}
                    Our creative journey through client success
                </h2>
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
