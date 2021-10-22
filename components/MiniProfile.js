import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://scontent.flim11-1.fna.fbcdn.net/v/t1.6435-9/77400041_148404736442209_3477672639189745664_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeH4aTERZAF3ub-CZpFEW46NgWd2qGv5DLmBZ3aoa_kMuYtxVOKD6iMSnc9DrPSnd8IR1yfAlmIgDrOJ5onlmuDS&_nc_ohc=sNzXaIrelkAAX-iL7Kf&_nc_ht=scontent.flim11-1.fna&oh=f49332450d9cc784b2e626ee5014293b&oe=61961344"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Maycol</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
