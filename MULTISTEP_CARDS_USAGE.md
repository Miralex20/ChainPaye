# MultiStepCards Component - Usage Guide

The `MultiStepCards` component has been refactored to be fully reusable and configurable. Here's how to use it in different contexts:

## Basic Usage

```tsx
import MultiStepCards, { type StepCard } from "@/sections/MultiStepCard";

const MyComponent = () => {
  const stepsData: StepCard[] = [
    {
      stepNumber: "Step 1",
      title: "Your Step Title",
      imageSrc: "/images/your-image.png",
      imageAlt: "Image description",
      steps: [
        { number: 1, text: "First instruction" },
        { number: 2, text: "Second instruction" },
      ],
    },
  ];

  return <MultiStepCards stepsData={stepsData} />;
};
```

## Advanced Usage with Custom Header

```tsx
import MultiStepCards, {
  type StepCard,
  type MultiStepCardsHeader,
} from "@/sections/MultiStepCard";

const MyComponent = () => {
  const customHeader: MultiStepCardsHeader = {
    title: "Learn How to",
    highlightedText: "Use Our Platform",
    subtitle: "Follow these easy steps to get started",
  };

  const stepsData: StepCard[] = [
    // ... your steps data
  ];

  return <MultiStepCards stepsData={stepsData} header={customHeader} />;
};
```

## Without Header

```tsx
import MultiStepCards, { type StepCard } from "@/sections/MultiStepCard";

const MyComponent = () => {
  const stepsData: StepCard[] = [
    // ... your steps data
  ];

  return <MultiStepCards stepsData={stepsData} showHeader={false} />;
};
```

## With Custom Animation Settings

```tsx
import MultiStepCards, { type StepCard } from "@/sections/MultiStepCard";

const MyComponent = () => {
  const stepsData: StepCard[] = [
    // ... your steps data
  ];

  return (
    <MultiStepCards
      stepsData={stepsData}
      animationDuration={2.0}
      cardAnimationDelay={0.5}
    />
  );
};
```

## Type Definitions

### StepCard

```tsx
type StepCard = {
  stepNumber: string; // e.g., "Step 1", "Phase 1"
  title: string; // Main title for the step
  imageSrc: string; // Path to the image
  imageAlt: string; // Alt text for accessibility
  imageWidth?: number; // Optional, defaults to 443
  imageHeight?: number; // Optional, defaults to 727
  steps: Step[]; // Array of sub-steps
};
```

### Step

```tsx
type Step = {
  number: number; // Step number (1, 2, 3, etc.)
  text: string; // Step description (can include HTML)
  link?: string; // Optional link URL
};
```

### MultiStepCardsHeader

```tsx
type MultiStepCardsHeader = {
  title: string; // Main title text
  highlightedText: string; // Text to be highlighted in black/white
  subtitle: string; // Subtitle/description
};
```

### MultiStepCardsProps

```tsx
type MultiStepCardsProps = {
  stepsData: StepCard[]; // Required: Array of step cards
  header?: MultiStepCardsHeader; // Optional: Custom header config
  showHeader?: boolean; // Optional: Whether to show header (default: true)
  animationDuration?: number; // Optional: Animation duration in seconds (default: 1.3)
  cardAnimationDelay?: number; // Optional: Delay between card animations (default: 0.3)
};
```

## Features

1. **Alternating Layout**: Cards automatically alternate between left-to-right and right-to-left layouts
2. **Responsive Design**: Fully responsive with mobile-first approach
3. **Animations**: Smooth scroll-triggered animations powered by Framer Motion
4. **Link Support**: Steps can include clickable links that open in new tabs
5. **Customizable**: Header, animations, and content are all configurable
6. **Dark Mode**: Supports dark mode styling
7. **Accessibility**: Proper alt text and semantic HTML

## Example: Creating a New Tutorial Section

```tsx
import MultiStepCards, { type StepCard } from "@/sections/MultiStepCard";

const OnboardingTutorial = () => {
  const tutorialSteps: StepCard[] = [
    {
      stepNumber: "Phase 1",
      title: "Setup Your Account",
      imageSrc: "/images/setup.png",
      imageAlt: "Account setup screen",
      steps: [
        { number: 1, text: "Click the sign up button" },
        { number: 2, text: "Enter your email and password" },
        { number: 3, text: "Verify your email address" },
      ],
    },
    {
      stepNumber: "Phase 2",
      title: "Configure Your Profile",
      imageSrc: "/images/profile.png",
      imageAlt: "Profile configuration",
      steps: [
        { number: 1, text: "Upload a profile picture" },
        { number: 2, text: "Add your bio and contact info" },
      ],
    },
  ];

  const customHeader = {
    title: "Complete Your Onboarding in",
    highlightedText: "Two Easy Phases",
    subtitle: "Set up your account and start using the platform",
  };

  return (
    <MultiStepCards
      stepsData={tutorialSteps}
      header={customHeader}
      animationDuration={1.5}
      cardAnimationDelay={0.4}
    />
  );
};

export default OnboardingTutorial;
```
