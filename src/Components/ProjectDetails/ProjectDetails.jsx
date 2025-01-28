import { useParams } from "react-router";
import { projectDetails } from "../../JSON/data";
import './ProjectDetails.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectDetails.find((game) => game.id === parseInt(id));

    if (!project) return <div>Project not found!</div>;
    // console.log(project.banner);
    return (
        <div>
            <span className="hide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error beatae fugit distinctio molestiae tempore,
                aspernatur doloribus explicabo, maiores a harum id hic, dolorem quam soluta. Ullam blanditiis quasi eveniet
                reiciendis. {id}
            </span>

            <div
                style={{
                    width: '100%',
                    borderRadius: '1em',
                    height: '50vh',
                    backgroundImage: `url(${project.banner})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }}
            ></div>

            <div className="flex flex-col items-center justify-center">
                <div
                    className="backdrop-blur-md bg-white/30 p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-200 transition-shadow duration-300 hover:shadow-2xl w-3/5"
                    style={{
                        marginTop: '-10vh',
                        zIndex: 10,
                    }}
                >
                    <div className="mt-5 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                        <span className="project-link absolute top-0 right-0 text-blue-600 dark:text-blue-400 text-lg sm:text-base md:text-sm p-4">
                            <a href={project.link} target="_blank">
                                Link
                            </a>
                        </span>
                        <p className="mb-6 text-base font-normal">
                            {project.description}
                        </p>
                        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                            Key Features
                        </h2>
                        <ul className="list-disc pl-8 space-y-3 text-base">
                            {project.keyFeatures.map((feature, id) => (
                                <li key={id} className="text-gray-700 dark:text-gray-300">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="my-8"></div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-blue-400 mb-4">
                            Technologies Used
                        </h2>
                        <div className="pt-1 flex flex-wrap gap-2">
                            {project.techStack.map((tech, id) => (
                                <div
                                    key={id}
                                    className="text-xs inline-flex mt-2 items-center font-bold leading-sm p-2 pl-3 pr-3 mr-2 bg-blue-100 text-gray-700 rounded-full dark:bg-white-900 dark:text-black-300"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="snapshots mt-10 p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-200">
                    <h2 className="text-2xl font-bold mb-4">Snapshots</h2>

                    <div className="w-full mt-2 mb-5 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">

                        {project.snapshots.map((snapshot, index) => (
                            <div key={index} className="mr-3 mb-3">
                                <div className="relative">
                                    <Zoom>
                                        <img
                                            src={snapshot}
                                            alt={`Snapshot ${index + 1}`}
                                            className="text-center rounded-xl object-cover w-full h-64"
                                        />
                                    </Zoom>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ProjectDetails;

