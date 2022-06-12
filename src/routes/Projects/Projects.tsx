import { gql, GraphQLClient } from 'graphql-request';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectData } from '../../types/Project';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const navigate = useNavigate();

  const changeUrl = (id: string) => {
    navigate(`/project/${id}`, { replace: true });
  };

  useEffect(() => {
    const QUERY = gql`
      {
        projects {
          title
          type
          id
          description
          createdBy {
            id
            name
            picture
          }
        }
      }
    `;

    const fetchData = async () => {
      const graphcms = new GraphQLClient(
        'https://api-eu-central-1.graphcms.com/v2/cl48y22or0pua01z66grsawoy/master'
      );
      const data = await graphcms.request(QUERY);
      setProjectsData(data.projects);
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>Select project</div>
      {projectsData &&
        projectsData.map((project: ProjectData) => (
          <>
            <div>
              <div className=" border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="flex justify-between">
                  <div>
                    <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        Name: {project.title}
                      </div>
                      <div className="text-gray-900 font-bold text-base mb-2">
                        Type: {project.type}
                      </div>
                      <p className="text-gray-700 text-base">
                        {project.description}
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
                  <div>
                    <button
                      onClick={() => changeUrl(project.id)}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </main>
  );
};

export default Projects;
