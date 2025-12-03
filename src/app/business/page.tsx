"use client";
import HeroSection from "../business/Hero";
import BusinessStepCards from "./BusinessStepCards";
import { PlatformCards } from "./PlatformCards";
// import Cards from "@/components/Cards";
// // import MultiStepCards from "@/sections/MultiStepCard";
// import StepsCard from "@/sections/StepsCard";
// import { CardCarousel } from "@/sections/FeatureCards";
// import Hero2 from "@/sections/Hero2";
// import Footer from "@/sections/Footer";
// import ApiSection from "@/sections/ApiSection";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden mx-auto">
      <div className="">
        <HeroSection />
        <BusinessStepCards />
        <PlatformCards />
      </div>
    </div>
  );
}
