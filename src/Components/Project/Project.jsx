import { Link } from "react-router";
import { projectDetails } from "../../JSON/data";
const Project = () => {
    return (
        <div className="">
            <div className="main-container">
                <span className="hide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident incidunt blanditiis nesciunt! Eius vero dicta error veniam maxime asperiores possimus eveniet qui consequuntur. Ea inventore asperiores odit esse iste pariatur.
                </span>
                {/* Main Content */}
                <main className="w-full max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="text-lg text-white mb-4">
                        <h1 className="text-3xl lg:text-5xl text-indigo-100 font-bold mb-2">
                            Projects
                        </h1>
                        <p className="text-gray-200">
                            Building Projects are fun!
                        </p>
                    </div>

                    {/* Game Cards */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        
                        {projectDetails.map((game, index) => (
                            <Link to={`/project/${game.id}`} key={index}>
                            <div
                                key={index}
                                className="card bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-2 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="w-full h-40 mb-4">
                                    <img
                                        src={game.banner}
                                        alt={game.name}
                                        className="w-full h-full object-cover rounded-lg"
                                        style={{ height: '110%' }}
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="card-content">
                                    <div className="card-title text-white font-bold text-lg mb-2">
                                        {game.name}
                                    </div>
                                    <div className="card-description text-gray-400 text-sm">
                                        {game.description}
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Project;

