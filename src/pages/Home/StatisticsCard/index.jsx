import React from "react";
import TotalTaskCard from "./TotalTaskCard";
// import StarStreakCard from "./StarStreakCard";
import RestDaysCard from "./RestDaysCard";

const StatisticsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mx-8 mt-4">
      <TotalTaskCard />
      {/* <StarStreakCard /> */}
      <RestDaysCard />
    </div>
  );
};

export default StatisticsCard;
