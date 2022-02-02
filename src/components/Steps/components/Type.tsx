import { ChangeEvent, FC, useState } from "react";
import { TYPE_SELECT } from "../../../constants/misc";
import { STEPS } from "../../../constants/Steps";

type TypeProps = {
  handleStepChanged: (value: STEPS) => void;
};

const Type: FC<TypeProps> = ({ handleStepChanged }) => {
  const [value, setValue] = useState(TYPE_SELECT.FRONT);
  const handleCreate = () => {
    handleStepChanged(STEPS.TYPE);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value as TYPE_SELECT);
  };

  return (
    <div>
      <div className="p-2 text-center text-2xl">Please select a type</div>
      <div className="p-2 pt-6 flex justify-center">
        <div>
          <select
            className="w-60 h-10"
            onChange={handleSelectChange}
            value={value}
          >
            <option>{TYPE_SELECT.FRONT}</option>
            <option>{TYPE_SELECT.BACK}</option>
          </select>
        </div>
        <div className="pl-4">
          <button
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

export default Type;
