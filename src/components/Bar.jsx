import React from "react";

const weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const Bar = ({ day, value }) => {
  const currentDay = weekday[new Date().getDay()];

  return (
    <div className="text-center text-MediumBrown h-full flex flex-col justify-end">
      <div
        style={{ height: value + "%" }}
        className={`relative w-[35px] group   rounded-sm hover:bg-opacity-60 transition ${
          day === currentDay ? "bg-Cyan " : "bg-SoftRed"
        } `}
      >
        <span className="text-white bg-DarkBrown absolute -top-10 -left-1/3 w-14 rounded text-xs px-2 py-2 invisible transition-all  group-hover:visible">
          ${value}
        </span>
      </div>
      <small>{day}</small>
    </div>
  );
};

export default Bar;
