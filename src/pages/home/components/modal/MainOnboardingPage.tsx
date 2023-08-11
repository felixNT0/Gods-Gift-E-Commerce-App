// src/components/EcommerceOnboardingPage.tsx
import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaCreditCard, FaCheck } from "react-icons/fa";
import OnboardingStep from "./OnboardingStep";
import illustration1 from "../../images/illustration1.svg";
import illustration2 from "../../images/illustration2.svg";
import illustration3 from "../../images/illustration3.svg";
import illustration4 from "../../images/illustration4.svg";
import illustration5 from "../../images/illustration5.svg";
import { Button } from "@mui/material";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  illustration: string;
}

const steps: Step[] = [
  {
    title: "Create Account",
    description: "Sign up for an account to start shopping with us.",
    icon: <FaUser />,
    illustration: illustration1,
  },
  {
    title: "Browse Products",
    description: "Explore our wide range of products and find what you need.",
    icon: <FaShoppingCart />,
    illustration: illustration2,
  },
  {
    title: "Add to Cart",
    description: "Select items and add them to your shopping cart.",
    icon: <FaShoppingCart />,
    illustration: illustration3,
  },
  {
    title: "Enter Payment Info",
    description: "Provide your payment details securely.",
    icon: <FaCreditCard />,
    illustration: illustration4,
  },
  {
    title: "Order Complete",
    description: "Congratulations! Your order is complete.",
    icon: <FaCheck />,
    illustration: illustration5,
  },
];

const MainOnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className="flex flex-col items-center pt-2 ">
      <div className="flex mb-4 md:mb-6 lg:mb-8">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 bg-indigo-500 rounded-full mx-1 ${
              index === currentStep ? "bg-indigo-700" : "bg-indigo-200"
            }`}
          />
        ))}
      </div>
      <OnboardingStep
        title={steps[currentStep].title}
        description={steps[currentStep].description}
        icon={steps[currentStep].icon}
        illustration={steps[currentStep].illustration}
      />
      <div className="flex justify-between mt-6 md:mt-8 lg:mt-10 w-full">
        <Button
          onClick={handlePreviousStep}
          disabled={isFirstStep}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={isLastStep}
          variant="contained"
          color="primary"
        >
          {isLastStep ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default MainOnboardingPage;
