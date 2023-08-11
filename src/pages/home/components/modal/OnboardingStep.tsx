// src/components/OnboardingStep.tsx
import React from "react";

interface OnboardingStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  illustration: string;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  icon,
  illustration,
}) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="text-indigo-500 text-4xl mb-2">{icon}</div>
      <h2 className="text-xl text-black mt-2 font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <img
        src={illustration}
        alt={title}
        className="mt-6 max-w-xs md:max-w-md lg:max-w-lg"
        width="200" // Set the desired width
        height="200" // Set the desired height
      />
    </div>
  );
};

export default OnboardingStep;
