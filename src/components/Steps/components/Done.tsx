import { GraphQLClient } from 'graphql-request';
import { FC, useCallback } from 'react';
import { toTitleCase } from '../../../utils/toTitleCase';

type DoneProps = {
  folderName: string;
  folderType: string;
  apiDescription: string;
};

const Done: FC<DoneProps> = ({ folderName, folderType, apiDescription }) => {
  const submit = useCallback(async () => {
    const graphcms = new GraphQLClient(
      'https://api-eu-central-1.graphcms.com/v2/cl48y22or0pua01z66grsawoy/master'
    );

    await graphcms.request(
      `mutation {
        createProject(data: { title: "${folderName}", type: "${folderType}", description:  "${apiDescription}" }) {
          id
          title
          type
          description
        }
      }`,
      { id: 1231231 }
    );
  }, [folderName, folderType, apiDescription]);

  return (
    <div className="p-2 text-center">
      <div className="text-3xl pb-3">Api info</div>
      <div className="pb-7">
        <div className="text-2xl">Api name: {folderName}</div>
        <div className="text-2xl">Api type: {toTitleCase(folderType)}</div>
        <div className="text-2xl">Api description: {apiDescription}</div>
      </div>
      <div>
        <button
          type="submit"
          onClick={submit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Done;
