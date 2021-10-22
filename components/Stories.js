import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSeggentions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSeggentions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin  scrollbar-thumb-black scrollbar-track-gray-100">
      {suggestions.map((profile, index) => {
        return (
          <Story
            key={index}
            img={profile.avatar}
            username={profile.username}
          ></Story>
        );
      })}
    </div>
  );
};

export default Stories;
