import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
const Story = ({ img, username }) => {
  
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transform duration-200 ease-out"
        src={img}
        alt="photo"
      />
      <p className="text-sm w-14 truncate text-center">{username}</p>
    
    </div>
  );
};

export default Story;
