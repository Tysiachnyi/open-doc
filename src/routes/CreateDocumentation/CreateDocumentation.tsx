import { useState } from 'react';
import { STEPS } from '../../constants/Steps';
import Create from '../../components/Steps/components/Create';
import Type from '../../components/Steps/components/Type';
import Steps from '../../components/Steps/Steps';
import Done from '../../components/Steps/components/Done';

const CreateDocumentation = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.CREATE);
  const [apiName, setApiName] = useState('');
  const [apiType, setApiType] = useState('');
  const [apiDescription, setApiDescription] = useState('');

  const handleStepChanged = (value: STEPS) => {
    setCurrentStep(value);
  };

  const handleFolderName = (name: string) => {
    setApiName(name);
  };

  const handleFolderType = (type: string) => {
    setApiType(type);
  };

  const handleFolderDescription = (value: string) => {
    setApiDescription(value);
  };

  return (
    <main>
      <Steps currentStep={currentStep} />
      <div className="p-5">
        {currentStep === STEPS.CREATE && (
          <Create
            handleStepChanged={handleStepChanged}
            handleFolderName={handleFolderName}
          />
        )}
        {currentStep === STEPS.TYPE && (
          <Type
            handleDescription={handleFolderDescription}
            handleStepChanged={handleStepChanged}
            handleFolderType={handleFolderType}
          />
        )}
        {currentStep === STEPS.DONE && (
          <Done
            folderName={apiName}
            folderType={apiType}
            apiDescription={apiDescription}
          />
        )}
      </div>
    </main>
  );
};

export default CreateDocumentation;
