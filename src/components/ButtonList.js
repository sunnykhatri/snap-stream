import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "News",
    "Wealth",
    "Cooking",
    "Cricket",
    "Soccer",
    "Programming",
  ];

  return (
    <div className="flex items-center ml-3">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList