import React from "react";
import MultiStepCards, { type StepCard } from "./MultiStepCard";

const StepsCard = () => {
  const stepsData: StepCard[] = [
    {
      stepNumber: "Step 1",
      title: "Start a WhatsApp Chat",
      imageSrc: "/images/step1.png",
      imageAlt: "Start a WhatsApp Chat with Chainpaye",
      steps: [
        {
          number: 1,
          text: 'Click <a href="https://wa.me/..." class="text-primary underline font-medium">here</a> to get directed to our WhatsApp AI agent.',
          link: "https://wa.me/...",
        },
        {
          number: 2,
          text: "Our AI Agent greets you instantly - no app download required",
        },
        { number: 3, text: "Verify your identity securely inside WhatsApp" },
      ],
    },
    {
      stepNumber: "Step 2",
      title: "Add Your Bank or Mobile Money",
      imageSrc: "/images/step2.png",
      imageAlt: "Add bank account",
      steps: [
        { number: 1, text: "Type 'Add Bank' or select from menu" },
        { number: 2, text: "Enter your bank or mobile money details" },
        { number: 3, text: "Get verified in under 60 seconds" },
      ],
    },
    {
      stepNumber: "Step 3",
      title: "Start Receiving Payments",
      imageSrc: "/images/step3.png",
      imageAlt: "Receive payments globally",
      steps: [
        { number: 1, text: "Share your Chainpaye WhatsApp number or link" },
        { number: 2, text: "Receive money from anyone, anywhere in the world" },
        { number: 3, text: "Withdraw instantly to your bank or mobile money" },
      ],
    },
  ];

  return (
    <div>
      <MultiStepCards stepsData={stepsData} />
    </div>
  );
};

export default StepsCard;
