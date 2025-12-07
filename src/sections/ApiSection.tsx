import { Settings, Braces, Clock, ArrowRight } from "lucide-react";
import { CodeSnippet } from "@/components/CodeSnipppet";
import { motion } from "motion/react";

export default function ApiSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delayChildren: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className=" bg-[#E8E9F8] transition-colors duration-300 overflow-x-hidden rounded-3xl"
    >
      {/* Main content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 lg:gap-20 items-start">
          {/* Left column - Content */}
          <div className="space-y-6 px-6 md:space-y-8 mx-auto">
            <h1 className="font-medium text-foreground w-[331px] max-w-md text-[38px] leading-[42px] tracking-tight lg:w-[612px] lg:text-[40px] lg:leading-[48px]">
              Get ready to scale with our payment APIs
            </h1>

            <div className="space-y-5 md:space-y-6 text-secondary text-xl leading-7 tracking-normal mb-12 w-[331px] lg:w-[532px]">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                  <Settings className="w-6 h-6 text-[#00A8E8]" />
                </div>
                <p className="">Quick setup, easy integration</p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                  <Braces className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <p className="">Flexible APIs for any payment use case</p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                  <Clock className="w-6 h-6 text-[#FF6B6B]" />
                </div>
                <p>Production-ready in under 30 minutes</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-medium transition-colors shadow-sm hover:bg-primary/80 cursor-pointer">
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
    </motion.div>
  );
}
