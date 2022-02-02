import { useState } from "react";
import { STEPS } from "../../constants/Steps";
import Create from "../../components/Steps/components/Create";
import Type from "../../components/Steps/components/Type";
import Steps from "../../components/Steps/Steps";

const CreateDocumentation = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.CREATE);

  const handleStepChanged = (value: STEPS) => {
    setCurrentStep(value);
  };
  return (
    <main>
      <Steps currentStep={currentStep} />
      <div className="p-5">
        {currentStep === STEPS.CREATE && (
          <Create handleStepChanged={handleStepChanged} />
        )}
        {currentStep === STEPS.TYPE && (
          <Type handleStepChanged={handleStepChanged} />
        )}
      </div>
    </main>
  );
};

export default CreateDocumentation;
