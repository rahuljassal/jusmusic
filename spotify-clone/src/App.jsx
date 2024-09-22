import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import spotifyLogo from "./assets/Spotify_logo_without_text.webp";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {songsData.length !== 0 ? (
        <>
          <div className="h-[100%] lg:flex md:flex ">
            <Sidebar />
            <Display />
          </div>
          {/* <Player /> */}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <img src={spotifyLogo} className="animate-bounce w-[300px] " />
          <p className="text-white">Loading... server takes time to restart</p>
        </div>
      )}

      <audio
        ref={audioRef}
        src={track ? track.file : ""}
        preload="auto"
      ></audio>
    </div>
  );
};

export default App;
