import React from "react";
import TotalTaskCard from "./TotalTaskCard";
// import StarStreakCard from "./StarStreakCard";
import RestDaysCard from "./RestDaysCard";

const StatisticsCard = () => {
  return (
    <div className="grid grid-cols-2 w-10/12 m-auto gap-3  mt-4 items-center justify-center">
      <TotalTaskCard />
      {/* <StarStreakCard /> */}
      <RestDaysCard />
    </div>
  );
};

export default StatisticsCard;
