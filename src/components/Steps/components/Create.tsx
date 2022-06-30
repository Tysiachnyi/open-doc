import { ChangeEvent, FC, useState } from 'react';
import { STEPS } from '../../../constants/Steps';

type CreateProps = {
  handleStepChanged: (value: STEPS) => void;
  handleFolderName: (name: string) => void;
};

const Create: FC<CreateProps> = ({ handleStepChanged, handleFolderName }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleCreate = () => {
    handleStepChanged(STEPS.TYPE);
    handleFolderName(value);
  };

  return (
    <div>
      <div className="p-2 text-center text-2xl">Your api name</div>
      <div className="p-2 pt-6 flex justify-center">
        <input
          className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Api name"
          onChange={handleChange}
          value={value}
        />
        <div className="pl-4">
          <button
            type="submit"
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
