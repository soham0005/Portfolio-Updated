import "./Anime.css";
import { useEffect, useRef } from "react";
import { animeSection } from "../../JSON/data";

const Anime = () => {
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
      <div className="backgroundC">
         <span className="hide">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident incidunt blanditiis nesciunt! Eius vero dicta error veniam maxime asperiores possimus eveniet qui consequuntur. Ea inventore asperiores odit esse iste pariatur.
     </span>
        <div className="flex flex-row items-center">
          <div className="animeplayer pr-3 pt-5">
            <img
              src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
              width="40"
              height="40"
              className="cursor-pointer"
              alt="Play Icon"
              onClick={toggleAudio}
            />
          </div>
          <audio ref={audioRef} loop>
            <source src="/NARUTORING.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <section className="w-full m-4 p-4 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl shadow-lg">
  <div className="pb-5">
    <h1 className="font-bold text-3xl lg:text-5xl text-white">Anime</h1>
    <h2 className="text-lg mt-3 font-medium text-gray-100">
      Sometimes watching Anime.
    </h2>
  </div>

  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {animeSection.map((anime, index) => (
      <div
        key={index}
        className="anime-card relative backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        style={{
          backgroundImage: `url(${anime.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3 rounded-b-lg">
          <p className="text-white font-bold text-lg drop-shadow-md">{anime.name}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      </div>
    );
  };
  
  export default Anime;
  