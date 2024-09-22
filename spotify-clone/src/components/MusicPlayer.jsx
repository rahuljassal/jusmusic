import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { assets } from "../assets/assets";
const MusicPlayer = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  const { name, image, desc } = track;
  return (
    <div className="m-4 p-8  h-[95%] rounded-3xl flex flex-col items-center bg-gray-950 justify-between shadow-inner shadow-gray-700">
      <div className="">Now Playing</div>
      <img
        src={image}
        className={`rounded-full w-[300px] h-[250px] ${
          playStatus ? "animate-spin" : "animate-pulse"
        } shadow-2xl shadow-gray-700 `}
      />
      <div className="flex flex-col items-center">
        <p className="font-bold text-[25px]">{name}</p>
        <p className="artist-name">{desc}</p>
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex w-[100%] justify-between text-[12px]">
          {" "}
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <p>{track.duration}</p>
        </div>
        <div
          ref={seekBg}
          onClick={seekSong}
          className="w-[60vw] max-w-[250px] bg-gray-300 rounded-full cursor-pointer"
        >
          <hr
            ref={seekBar}
            className="h-1 border-none w-0 bg-gray-500 rounded-full"
          />
        </div>
      </div>
      <div className="controls">
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            <button className="p-4 border-[1px]  rounded-full shadow-inner shadow-zinc-300">
              <img
                onClick={previous}
                className="w-4 cursor-pointer"
                src={assets.prev_icon}
                alt=""
              />
            </button>

            <button
              className="p-4 border-[1px]  rounded-full shadow-inner shadow-zinc-300"
              onClick={playStatus ? pause : play}
            >
              <img
                //   onClick={pause}
                className="w-4 cursor-pointer"
                src={playStatus ? assets.pause_icon : assets.play_icon}
                alt=""
              />
            </button>
            <button className="p-4 border-[1px]  rounded-full shadow-inner shadow-zinc-300">
              <img
                onClick={next}
                className="w-4 cursor-pointer"
                src={assets.next_icon}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
