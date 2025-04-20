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
    <div className="flex items-center">
      {list.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList