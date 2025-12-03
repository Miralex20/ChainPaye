import { PhoneCallIcon } from "lucide-react";
import { CodeSnippet } from "@/components/CodeSnipppet";
import CalendlyButton from "@/components/CalendlyButton";

export default function HeroSection() {
  return (
    <div className="transition-colors duration-300 overflow-x-hidden rounded-3xl mt-12 bg-background">
      {/* Main content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 px-6 md:space-y-8 mx-auto w-[344px] lg:w-[506px]">
            <h1 className="font-medium text-foreground w-[331px] max-w-md text-[38px] leading-[42px] tracking-tight lg:w-[612px] lg:text-[40px] lg:leading-[48px]">
              Transforming cross-border payments in Africa{" "}
            </h1>

            <div className="space-y-5 md:space-y-6 text-secondary text-xl leading-7 w-[331px] lg:w-[532px]">
              <div className="flex items-start gap-3 md:gap-4">
                <p className="">
                  Receive payments from customers worldwide and get your money
                  instantly in your local currency. Simple setup, no tools to
                  learn.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            {/* <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-medium transition-colors shadow-sm">
              <PhoneCallIcon className="w-4 h-4" />
              Book a call
            </button> */}
            <CalendlyButton
              calendlyUrl="https://calendly.com/cryptalksfinancials/30min"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-medium transition-colors shadow-sm cursor-pointer hover:bg-primary/90 duration-300"
            >
              <PhoneCallIcon className="w-4 h-4" />
              Book A Call
            </CalendlyButton>
          </div>

          {/* Right column - Code snippet */}
          <div className="lg:mt-0 mt-8">
            <CodeSnippet />
          </div>
        </div>
      </div>
    </div>
  );
}
