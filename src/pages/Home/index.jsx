import React, { useState } from "react";
import Navbar from "../helper/Navbar";
import Days from "./Days";
import Task from "./Task";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Navbar></Navbar>
      {showForm ? <Task></Task> : <Days></Days>}
    </div>
  );
};

export default Index;
