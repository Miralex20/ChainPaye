"use client";
import ApiSection from "@/sections/ApiSection";
import HeroSection from "../business/Hero";
import BusinessStepCards from "./BusinessStepCards";
import { PlatformCards } from "./PlatformCards";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden mx-auto">
      <div className="">
        <HeroSection />
        <BusinessStepCards />
        <PlatformCards />
        <ApiSection />
      </div>
    </div>
  );
}
