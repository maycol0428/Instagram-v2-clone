import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const { data: session } = useSession();
  const [suggestions, setSeggentions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    console.log(suggestions);
    setSeggentions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin  scrollbar-thumb-black scrollbar-track-gray-100">
      {session && <Story img={session?.user?.image} username={session?.user?.username}></Story>}
      {suggestions.map((profile, index) => {
        return (
          <Story
            key={index}
            img={"https://res.cloudinary.com/dusuvygde/image/upload/v1637639828/posts/za2btgdatmjv4iyoovfv.jpg"}
            username={profile.username}
          ></Story>
        );
      })}
    </div>
  );
};

export default Stories;
