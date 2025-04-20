import React from "react";
import { FiChevronRight } from "react-icons/fi";
import {
  MdGames,
  MdHistory,
  MdHome,
  MdMovie,
  MdMovieFilter,
  MdMusicVideo,
  MdPlaylistPlay,
  MdQueueMusic,
  MdSports,
  MdSyncLock,
  MdVideoLibrary,
} from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-2 text-white">
      <div className="border-b-2 mb-4 border-gray-800">
        <ul>
          <li className="pb-5 flex items-center text-sm">
            <MdHome size={24} className="mr-3" /> Home
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdMovieFilter size={22} className="mr-3" /> Shorts
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdQueueMusic size={24} className="mr-3" /> Subscriptions
          </li>
        </ul>
      </div>
      <div className="border-b-2 mb-4 border-gray-800">
        <p className="font-bold pb-4 flex items-center">
          You <FiChevronRight className="text-white" />
        </p>
        <ul>
          <li className="pb-5 flex items-center text-sm">
            <MdHistory size={24} className="mr-3" /> History
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdPlaylistPlay size={24} className="mr-3" /> Playlists
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdVideoLibrary size={24} className="mr-3" /> Your Videos
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdSyncLock size={24} className="mr-3" /> Watch Later
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdHome size={24} className="mr-3" /> Liked Videos
          </li>
        </ul>
      </div>
      <div className="border-b-2 mb-4 border-gray-800">
        <p className="font-bold pb-3">Subscriptions</p>
        <ul>
          <li className="pb-5 flex items-center text-sm">
            <MdMusicVideo size={24} className="mr-3" /> Music
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdSports size={24} className="mr-3" /> Sports
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdGames size={24} className="mr-3" /> Gaming
          </li>
          <li className="pb-5 flex items-center text-sm">
            <MdMovie size={24} className="mr-3" /> Movies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
