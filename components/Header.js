import React from "react";
import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between  max-w-6xl mx-5 lg:mx-auto">
        <Logo />
        <div className="max-w-xs">
          <Search />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Options />
        </div>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <>
      <HomeIcon className="navBtn"></HomeIcon>
      <MenuIcon className="h-6 md:hidden cursor-pointer"></MenuIcon>
      <div className="relative navBtn">
        <PaperAirplaneIcon className="navBtn rotate-45"></PaperAirplaneIcon>
        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
          3
        </div>
      </div>
      <PlusCircleIcon className="navBtn"></PlusCircleIcon>
      <UserGroupIcon className="navBtn"></UserGroupIcon>
      <HeartIcon className="navBtn"></HeartIcon>
      <img
        src="https://links.papareact.com/3ke"
        alt="profile pic"
        className="h-10 rounded-full cursor-pointer"
      />
    </>
  );
};

const Logo = () => {
  return (
    <>
      <div className="relative w-24 hidden lg:inline-grid">
        <Image
          src="https://links.papareact.com/ocw"
          objectFit="contain"
          layout="fill"
        ></Image>
      </div>
      <div className="relative w-10 lg:hidden flex-shrink-0">
        <Image
          src="https://links.papareact.com/jjm"
          objectFit="contain"
          layout="fill"
        ></Image>
      </div>
    </>
  );
};

const Search = () => {
  return (
    <div className="relative mt-1 p-3 rounded-md ">
      <div className="absolute inset-y-0 flex pl-3 items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-500"></SearchIcon>
      </div>
      <input
        className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Header;
