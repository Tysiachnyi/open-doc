import { gql, GraphQLClient } from 'graphql-request';
import { useEffect, useState } from 'react';

type Project = {
  title: string;
  type: string;
  id: string;
  createdBy: {
    id: string;
    name: string;
    picture: string;
  };
};

const ViewProjects = () => {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cl48y22or0pua01z66grsawoy/master'
  );

  const QUERY = gql`
    {
      projects {
        title
        type
        id
        createdBy {
          id
          name
          picture
        }
      }
    }
  `;

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await graphcms.request(QUERY);
      setProjectsData(data.projects);
    };

    fetchData();
  }, [QUERY, graphcms]);

  return (
    <main>
      <div>Select project</div>
      {projectsData &&
        projectsData.map((project: Project) => (
          <>
            <div>
              <div className=" border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Name: {project.title}
                  </div>
                  <div className="text-gray-900 font-bold text-base mb-2">
                    Type: {project.type}
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={project.createdBy.picture}
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">
                      {project.createdBy.name}
                    </p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </main>
  );
};

export default ViewProjects;
