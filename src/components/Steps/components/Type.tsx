import { ChangeEvent, FC, useState } from 'react';
import { TYPE_SELECT } from '../../../constants/misc';
import { STEPS } from '../../../constants/Steps';
import { toTitleCase } from '../../../utils/toTitleCase';

type TypeProps = {
  handleStepChanged: (value: STEPS) => void;
  handleFolderType: (type: string) => void;
  handleDescription: (value: string) => void;
};

const Type: FC<TypeProps> = ({
  handleStepChanged,
  handleFolderType,
  handleDescription,
}) => {
  const [type, setType] = useState(TYPE_SELECT.FRONT);
  const [description, setDescription] = useState('');
  const handleCreate = () => {
    handleStepChanged(STEPS.DONE);
    handleFolderType(type);
    handleDescription(description);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as TYPE_SELECT);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value as string);
  };

  return (
    <div>
      <div className="p-2 text-center text-2xl">Please select a type</div>
      <div className="p-2 pt-6 flex justify-center">
        <div>
          <select
            className="shadow border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline appearance-none"
            onChange={handleSelectChange}
            value={type}
          >
            <option>{toTitleCase(TYPE_SELECT.FRONT)}</option>
            <option>{toTitleCase(TYPE_SELECT.BACK)}</option>
          </select>
        </div>
      </div>
      <div className="p-2 text-center text-2xl">
        Add information about your api
      </div>
      <div className="p-2 pt-6 flex justify-center">
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="resize-none rounded-md border w-72 h-48"
        />
      </div>
      <div className="p-2 pt-6 flex justify-center">
        <button
          onClick={handleCreate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Type;
