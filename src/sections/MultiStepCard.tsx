import Image from "next/image";
import { motion } from "motion/react";

// Type definitions
export type Step = {
  number: number;
  text: string;
  link?: string; // optional link in text
};

export type StepCard = {
  stepNumber: string; // e.g., "Step 1"
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  steps: Step[];
};

export type MultiStepCardsHeader = {
  title: string; // Main title text
  highlightedText?: string; // Text to be highlighted
  subtitle: string; // Subtitle/description
};

export type MultiStepCardsProps = {
  stepsData: StepCard[];
  header?: MultiStepCardsHeader;
  showHeader?: boolean;
  animationDuration?: number;
  cardAnimationDelay?: number;
};

// Main Multi-Step Cards Component
const MultiStepCards = ({
  stepsData,
  header,
  showHeader = true,
  animationDuration = 1.3,
  cardAnimationDelay = 0.3,
}: MultiStepCardsProps) => {
  // Reusable Numbered Circle Component
  const NumberCircle = ({ number }: { number: number }) => (
    <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#E5EBFB] text-primary text-base font-medium">
      {number}
    </div>
  );

  // Default header configuration
  const defaultHeader: MultiStepCardsHeader = {
    title: "Get Started with Chainpaye in",
    highlightedText: "Three Simple Steps",
    subtitle: "Join Chainpaye in minutes and start receiving payments globally",
  };

  const headerConfig = header || defaultHeader;

  return (
    <>
      {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center items-center mt-4 p-8 text-2xl flex flex-col justify-center"
        >
          <h1 className="mb-4 text-[38px] leading-[42px] font-medium text-[#5a5f73] tracking-tight min-w-[378px] lg:w-[569px] lg:text-[40px] lg:leading-12">
            {headerConfig.title}{" "}
            <span className="text-black">
              {headerConfig.highlightedText}
            </span>
          </h1>
          <p className="text-lg leading-[26px] font-medium font text-secondary text-center px-2">
            {headerConfig.subtitle}
          </p>
        </motion.div>
      )}
      <section className="px-4 w-[398px] lg:w-[1280px] mx-auto overflow-x-hidden">
        {stepsData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row gap-8 lg:gap-[42px]
                      bg-card 
                      rounded-[36px] shadow-2xl overflow-hidden
                      my-8 lg:my-20 items-center
                      w-full max-w-full md:max-w-none mx-auto ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
          >
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: animationDuration,
                delay: index * cardAnimationDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full md:w-1/2 p-4 md:p-0"
            >
              <Image
                sizes="(max-height: 768px) 100vw, 50vw"
                src={card.imageSrc}
                alt={card.imageAlt}
                width={card.imageWidth || 443}
                height={card.imageHeight || 727}
                className="object-cover w-full rounded-base"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: animationDuration,
                delay: index * (cardAnimationDelay - 0.1),
              }}
              className="flex flex-col justify-center p-8 lg:p-12 lg:pl-20 w-full md:w-1/2 gap-8"
            >
              <div>
                <h3 className="text-primary text-base font-medium mb-2">
                  {card.stepNumber}
                </h3>
                <h2 className="text-2xl lg:text-[32px] lg:leading-8 font-medium text-foreground tracking-normal">
                  {card.title}
                </h2>
              </div>

              <div className="space-y-4">
                {card.steps.map((step) => (
                  <div key={step.number} className="flex gap-4 items-start">
                    <NumberCircle number={step.number} />
                    <p
                      className="text-tertiary ) text-base lg:text-base leading-relaxed lg:pr-10 font-medium"
                      dangerouslySetInnerHTML={{
                        __html:
                          step.link && step.text.includes("here")
                            ? step.text.replace(
                                "here",
                                `<a href="${step.link}" target="_blank" rel="noopener noreferrer" class="text-primary underline font-medium hover:text-primary/80">here</a>`
                              )
                            : step.text,
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MultiStepCards;
