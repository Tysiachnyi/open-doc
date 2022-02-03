import { useState } from 'react';
import { STEPS } from '../../constants/Steps';
import Create from '../../components/Steps/components/Create';
import Type from '../../components/Steps/components/Type';
import Steps from '../../components/Steps/Steps';
import Done from '../../components/Steps/components/Done';

const CreateDocumentation = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.CREATE);
  const [folderName, setFolderName] = useState('');
  const [folderType, setFolderType] = useState('');

  const handleStepChanged = (value: STEPS) => {
    setCurrentStep(value);
  };

  const handleFolderName = (name: string) => {
    setFolderName(name);
  };

  const handleFolderType = (type: string) => {
    setFolderType(type);
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
            handleStepChanged={handleStepChanged}
            handleFolderType={handleFolderType}
          />
        )}
        {currentStep === STEPS.DONE && (
          <Done folderName={folderName} folderType={folderType} />
        )}
      </div>
    </main>
  );
};

export default CreateDocumentation;
