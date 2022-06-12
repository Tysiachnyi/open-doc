import { gql, GraphQLClient } from 'graphql-request';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectData } from '../../types/Project';

const Project: FC = () => {
  const [projectData, setProjectData] = useState<ProjectData>();
  const { id } = useParams();

  const QUERY = gql`
    {
      project(where: { id: "${id}" }) {
        title
        type
        description
        updatedAt
        createdBy {
          name
          picture
        }
      }
    }
  `;

  useEffect(() => {
    const fetchData = async () => {
      const graphcms = new GraphQLClient(
        'https://api-eu-central-1.graphcms.com/v2/cl48y22or0pua01z66grsawoy/master'
      );
      const data = await graphcms.request(QUERY);
      setProjectData(data.project);
    };

    fetchData();
  }, [QUERY]);

  if (projectData) {
    return (
      <main>
        <div className="border-2 border-gray-200">
          <div className="text-center text-3xl">{projectData.title}</div>
          <div className="text-center text-2xl">{projectData.type}</div>
          <div className="text-center">{projectData.description}</div>
        </div>
      </main>
    );
  }
  return <div>upd</div>;
};

export default Project;
