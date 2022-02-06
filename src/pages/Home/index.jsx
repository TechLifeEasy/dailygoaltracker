import React, { useState } from "react";
import Navbar from "../helper/Navbar";
import Days from "./Days";
import Task from "./Task";
import Loading from "../helper/Loading";
import { GetTask } from "../../Api/task";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [ChallengeData, setChallengeData] = useState(false);
  const [Loadding, setLoadding] = useState(true);

  useState(() => {
    GetTask()
      .then((data) => {
        if (!data) {
          return;
        }

        setChallengeData(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoadding(false);
      });
  }, []);

  if (Loadding) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Navbar></Navbar>
      {ChallengeData ? <Days data={ChallengeData} ></Days>: <Task></Task> }
    </div>
  );
};

export default Index;
