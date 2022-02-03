import { FC } from 'react';
import { STEPS } from '../../constants/Steps';

type StepsProps = {
  currentStep: string;
};
const Steps: FC<StepsProps> = ({ currentStep }) => {
  const currentClassName = (value: boolean) => {
    if (value) {
      return 'p-2 border-blue-600 border-2 rounded-xl';
    }
    return 'p-2 border-gray-300 bg-slate-300 opacity-50 border-2 rounded-xl';
  };

  return (
    <div className="pt-6">
      <ul className="flex justify-center gap-8">
        <li className={currentClassName(currentStep === STEPS.CREATE)}>
          Create Project
        </li>
        <li className={currentClassName(currentStep === STEPS.TYPE)}>
          Documentation type
        </li>
        <li className={currentClassName(currentStep === STEPS.DONE)}>Finish</li>
      </ul>
    </div>
  );
};

export default Steps;
