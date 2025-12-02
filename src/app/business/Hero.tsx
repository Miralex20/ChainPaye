import { Settings, Braces, Clock, ArrowRight } from "lucide-react";
import { CodeSnippet } from "@/components/CodeSnipppet";

export default function ApiSection() {
  return (
    <div className="transition-colors duration-300 overflow-x-hidden rounded-3xl mt-12">
      {/* Main content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 px-6 md:space-y-8 mx-auto">
            <h1 className="font-medium text-foreground w-[331px] max-w-md text-[38px] leading-[42px] tracking-tight lg:w-[612px] lg:text-[40px] lg:leading-[48px]">
              Transforming cross-border payments in Africa{" "}
            </h1>

            <div className="space-y-5 md:space-y-6 text-secondary text-xl leading-7 tracking-normal mb-12 w-[331px] lg:w-[532px]">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                  <Settings className="w-6 h-6 text-[#00A8E8] dark:text-[#00A8E8]" />
                </div>
                <p className="">Quick setup, easy integration</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-medium transition-colors shadow-sm">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right column - Code snippet */}
          <div className="lg:mt-0">
            <CodeSnippet />
          </div>
        </div>
      </div>
    </div>
  );
}
