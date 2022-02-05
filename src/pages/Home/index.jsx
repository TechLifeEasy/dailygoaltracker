import React, { useState ,useEffect} from "react";
import Navbar from "../helper/Navbar";
import Days from "./Days";
import Task from "./Task";
import { AddTask } from "../../Api/task";

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
