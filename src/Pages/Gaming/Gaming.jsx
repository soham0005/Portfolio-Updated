import { useEffect, useRef } from "react";
import "./Gaming.css";
import { gamesSection } from "../../JSON/data";

const Gaming = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="background">
      <div className="main-container">
      <span className="hide">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident incidunt blanditiis nesciunt! Eius vero dicta error veniam maxime asperiores possimus eveniet qui consequuntur. Ea inventore asperiores odit esse iste pariatur.
     </span>
        {/* Music Player */}
        <div className="animeplayer pr-3 pt-3">
          <img
            src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
            width="60"
            height="60"
            alt="Play Icon"
            onClick={toggleAudio}
          />
        </div>

        
        <audio ref={audioRef} loop>
          <source src="/valorantring.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Main Content */}
        <main className="w-full max-w-5xl">
          {/* Heading */}
          <div className="text-lg text-white mb-4">
            <h1 className="text-3xl lg:text-5xl text-indigo-100 font-bold mb-2">
              Gaming
            </h1>
            <p className="text-gray-200">
              Sometimes playing these games, hit me up if you want to join in!
            </p>
          </div>

          {/* Game Cards */}
          <div className="grid gap-6 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {gamesSection.map((game, index) => (
              <div key={index} className="card">
                <img src={game.image} alt={game.name} />
                <div className="card-content">
                  <div className="card-title">{game.name}</div>
                  <div className="card-description">{game.description}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gaming;
