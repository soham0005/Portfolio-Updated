import './Skills.css';
import { ProgrammingLanguages,FrontendTechnologies,BackendTechnologies,Databases,DevOps,Tools } from '../../JSON/data';


const Skills = () => {
  return (
        <div className="mt-2 w-full p-5 pb-40 ml-3 text-left">
            <span className='hide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio ducimus laboriosam? Deleniti aliquam nostrum voluptate voluptatum modi voluptates quasi nobis nesciunt harum atque. Totam voluptatum repudiandae quam tempore eum?</span>
          <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">Skills</h2>
          <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
            Data Structures and Algorithms, Frontend Development, Backend Development, Database Management, System Design, LLMs, Generative AI Workflows, RAG and Cloud.
          </p>
    
          {/* Programming */}
          <div className="w-full mb-5 pb-5">
            <div className="mt-5">
              <p className="mt-2 tracking-tight text-gray-400 text-xl">Programming</p>
              <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {ProgrammingLanguages.map((skill, index) => (
                  <div className="relative" key={index}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <img src={skill.src} alt={skill.label} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{skill.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
    
            {/* Frontend Development */}
            <div className="mt-5 pt-5">
              <p className="mt-2 tracking-tight text-gray-400 text-xl">Full-Stack Development</p>
              <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {FrontendTechnologies.map((skill, index) => (
                  <div className="relative" key={index}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <img src={skill.src} alt={skill.label} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{skill.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Backend Technologies  */}
            <div className="mt-5 pt-5">
              <p className="mt-2 tracking-tight text-gray-400 text-xl">Full-Stack Development</p>
              <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {BackendTechnologies.map((skill, index) => (
                  <div className="relative" key={index}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <img src={skill.src} alt={skill.label} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{skill.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
    
            {/* Database */}
            <div className="mt-5 pt-5">
              <p className="mt-2 tracking-tight text-gray-400 text-xl">Database</p>
              <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {Databases.map((skill, index) => (
                  <div className="relative" key={index}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <img src={skill.src} alt={skill.label} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{skill.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
    
            {/* DevOps */}
            <div className="mt-5 pt-5">
              <p className="tracking-tight text-gray-400 text-xl">DevOps</p>
              <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {DevOps.map((skill, index) => (
                  <div className="relative" key={index}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <img src={skill.src} alt={skill.label} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{skill.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
    
            {/* Tools */}
            <div className="mt-5 pt-5">
              <p className="tracking-tight text-gray-400 text-xl">Tools</p>
              <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {Tools.map((tool, index) => (
                  <div className="relative" key={index}>
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                        <img src={tool.src} alt={tool.label} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">{tool.label}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
  )
}

export default Skills
