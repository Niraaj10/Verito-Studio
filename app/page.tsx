import Image from "next/image";
import Demo from "./comp/home";
import HeroSection from "./comp/Navbar";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Features from "./comp/features";
import Projects from "./comp/Projects";
import { Variants } from "framer-motion";
import PricingSection from "./comp/Pricin";
import useSmoothScroll from "@/components/ui/SmoothScroll";
import FAQSection from "./comp/FAQs";


export default function Home() {

  const transitionVariants: { item: Variants } = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring" as const, // ✅ Type-safe literal
          bounce: 0.3,
          duration: 2,
        },
      },
    },
  };
  return (
    <div>
      {/* <HeroSection /> */}
     

      <AnimatedGroup
        variants={transitionVariants}>

        <Demo />
      </AnimatedGroup>

      <Features />
      <Projects />
      <PricingSection />
      <FAQSection />
    </div>

    // <div data-scroll-container>
    //   <section data-scroll-section>
    //     <HeroSection />
    //   </section>
    //   <section data-scroll-section>
    //     <AnimatedGroup
    //       variants={transitionVariants}>

    //       <Demo />
    //     </AnimatedGroup>
    //   </section>
    //   <section data-scroll-section>
    //     <Features />
    //   </section>
    //   <section data-scroll-section>
    //     <Projects />
    //   </section>
    //   <section data-scroll-section>
    //     <PricingSection />
    //   </section>
    // </div>

  );
}
