import React from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/snapstream.png";
import { toggleMenu } from "../utils/appSlice";
import { FiMenu, FiUser, FiSearch } from "react-icons/fi";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col py-5 pl-6 pr-6 items-center">
      <div className="col-span-3 flex justify-start items-center">
        <FiMenu size={24} className="text-white cursor-pointer" onClick={() => toggleMenuHandler()} />
        <img
          src={logo}
          width={140}
          height={80}
          alt="SnapStream"
          className="ml-5 cursor-pointer"
        />
      </div>
      <div className="col-span-6 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-2/3 bg-transparent text-white border-gray-700 border-2 outline-0 py-2 px-5 rounded-s-3xl"
        />
        <button className="bg-gray-900 py-2 px-4 border-gray-700 border-t-2 border-b-2 border-r-2 rounded-e-3xl">
          <FiSearch size={24} className="text-gray-400" />
        </button>
      </div>
      <div className="col-span-3 flex justify-end">
        <FiUser size={24} className="text-white" />
      </div>
    </div>
  );
};

export default Head;
