import { FC } from 'react';
import { toTitleCase } from '../../../utils/toTitleCase';

type DoneProps = {
  folderName: string;
  folderType: string;
};

const Done: FC<DoneProps> = ({ folderName, folderType }) => (
  <div className="p-2 text-center">
    <div className="text-3xl pb-3">Folder info</div>
    <div className="pb-7">
      <div className="text-2xl">Your folder name: {folderName}</div>
      <div className="text-2xl">Type for folder: {toTitleCase(folderType)}</div>
    </div>
    <div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create
      </button>
    </div>
  </div>
);

export default Done;
