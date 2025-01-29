import './Hobbies.css';

const Hobbies = () => {
  return (
    <div className="">
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident incidunt blanditiis nesciunt! Eius vero dicta error veniam maxime asperiores possimus eveniet qui consequuntur. Ea inventore asperiores odit esse iste pariatur.
      </span>
      <main className="backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
        <div className="p-12">
          <div>
            <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
              Hobbies
            </h1>
            <div className="text-gray-400 dark:text-gray-400">
              List of stuff I like to do in my Spare Time.
            </div>
            <div className="grid grid-cols-3 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* Blogging */}
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-400 hover:bg-opacity-30">
                <a href="/books">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        className="h-20 p-3 rounded-md"
                        src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-blogging-free-time-wanicon-lineal-color-wanicon.png"
                        alt="Blogging icon"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Reading
                    </h2>
                  </div>
                </a>
              </div>

              {/* Gaming */}
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-400 hover:bg-opacity-30">
                <a href="/gaming">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        className="h-20 p-3 rounded-md"
                        src="https://img.icons8.com/ios/50/000000/controller.png"
                        width="80"
                        height="50"
                        alt="Gaming icon"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Gaming
                    </h2>
                  </div>
                </a>
              </div>

              {/* Anime */}
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-400 hover:bg-opacity-30">
                <a href="/anime">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        className="h-20 rounded-md p-2"
                        src="https://img.icons8.com/ios/50/000000/naruto.png"
                        alt="Naruto icon"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Animes
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hobbies
