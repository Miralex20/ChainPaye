import React from "react";
import MultiStepCards, { type StepCard } from "@/sections/MultiStepCard";

const StepsCard = () => {
  const stepsData: StepCard[] = [
    {
      stepNumber: "Step 1",
      title: "Talk to our team",
      imageSrc: "/images/step4.png",
      imageAlt: "Talk to our team for clarity",
      steps: [
        {
          number: 1,
          text: 'Click <a href="https://wa.me/..." class="text-primary underline font-medium">here</a> to book a call with our team.',
          link: "https://wa.me/...",
        },
        {
          number: 2,
          text: "We’ll understand your business needs and help you choose the best way to accept payments.",
        },
        {
          number: 3,
          text: "After the call, we’ll generate your API credentials for you automatically.",
        },
      ],
    },
    {
      stepNumber: "Step 2",
      title: "2. Integrate the API (done by you or your developer)",
      imageSrc: "/images/step5.png",
      imageAlt: "Add bank account",
      steps: [
        {
          number: 1,
          text: "Your developer can plug ChainPay into your website, platform, or mobile app using our simple guide.",
        },
        {
          number: 2,
          text: "If you don’t have a developer, we’ll recommend one you can trust.",
        },
        { number: 3, text: "Get started in matter of minutes" },
      ],
    },
    {
      stepNumber: "Step 3",
      title: "Start receiving payments globally",
      imageSrc: "/images/step3.png",
      imageAlt: "Receive payments globally",
      steps: [
        {
          number: 1,
          text: "Once your API is connected, Customers can pay you from anywhere",
        },
        {
          number: 2,
          text: "You get settled instantly in NGN, GHS, KES, ZAR, or USD",
        },
        { number: 3, text: "Every payment is secured and verified" },
      ],
    },
  ];

  const header = {
    title: "How It Works",
    subtitle: "Join Chainpaye in minutes and start receiving payments globally",
  };

  return (
    <div id="how-it-works">
      <MultiStepCards stepsData={stepsData} header={header} />
    </div>
  );
};

export default StepsCard;
