
import React, { useState } from "react";
// import Navbar from "../helper/Navbar";
import Days from "./Days";
import Task from "./Task";
import TaskCard from "./TaskCard";
import StatisticsCard from "./StatisticsCard";


const Index = () => {
  const [showForm, setShowForm] = useState(false);


  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* {showForm ? <Task></Task> : <Days></Days>} */}
      {/* <TaskCard /> */}
      <StatisticsCard />
    </div>
  );
};

export default Index;
