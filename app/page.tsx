import Image from "next/image";
import Demo from "./comp/home";
import HeroSection from "./comp/Navbar";
import { AnimatedGroup } from "@/components/ui/animated-group";
import Features from "./comp/features";
import Projects from "./comp/Projects";
import { Variants } from "framer-motion";


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
      <HeroSection />
      <AnimatedGroup
        variants={transitionVariants}>

        <Demo />
      </AnimatedGroup>

      <Features />
      <Projects />
    </div>
  );
}
