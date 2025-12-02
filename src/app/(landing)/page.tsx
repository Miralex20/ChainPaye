"use client";
import Hero from "@/sections/Hero";
import Cards from "@/components/Cards";
import StepsCard from "@/sections/StepsCard";
import { CardCarousel } from "@/sections/FeatureCards";
import Hero2 from "@/sections/Hero2";
import ApiSection from "@/sections/ApiSection";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden mx-auto">
      <div className="">
        <Hero />
      </div>
      <div>
        <Hero2 />
      </div>
      <div className="">
        <Cards />
      </div>
      <StepsCard />
      <CardCarousel />
      <ApiSection />
    </div>
  );
}
