import React, { useState } from "react";
import { updateDoc } from "../../Api/task";
import Load from '../helper/Loading'
// {
//   finishdate: "2022-02-2",
//   isdone: true,
//   title: "this is me",
//   tasks: [{
//     isdone:false,
//     text:'do somting'
//   }]
// }

const TaskCard = ({ changeDaySnap, index, data, dataHole }) => {
  const [taskInfo, setTask] = useState({
    finishdate: data.finishdate,
    isdone: data.isdone,
    title: data.title,
    tasks: data.tasks,
  });
  const [isEditTask, setIsEditTask] = useState(false);
  const [isLoading, setIsLoadding] = useState(false);
  function UpdateMyData() {
    if (isEditTask) {
      return;
    }

    let mydata = {
      finishdate: "",
      isdone: false,
      title: taskInfo.title,
      tasks: taskInfo.tasks,
    };

    let c = 0;
    for (let i = 0; i < taskInfo.tasks.length; i++) {
      if (taskInfo.tasks[i].isdone) c++;
    }
    if (c !== 0 && taskInfo.tasks.length == c) {
      let d = new Date(data.date);
      mydata.finishdate = d.toDateString();
      mydata.isdone = true;
    }

    console.log(mydata);

    dataHole.days[index] = mydata;
    let x = 0;

    for (let i = 0; i < dataHole.days.length; i++) {
      if (dataHole.days[i].isdone == true) {
        x++;
      }
    }
    dataHole.current = x;

    console.log(dataHole);

    setIsLoadding(true)

    updateDoc(dataHole)
      .then(() => {
        console.log("sone");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {setIsLoadding(false)});
  }

  function changeState() {
    setIsEditTask(!isEditTask);
  }

  function UpdateTask(isdone = false, text, index) {
    const newTask = taskInfo.tasks;
    newTask[index].text = text;
    newTask[index].isdone = isdone;

    console.log(newTask);

    setTask({ ...taskInfo, tasks: newTask });
  }

  function addTask() {
    setTask({
      ...taskInfo,
      tasks: [...taskInfo.tasks, { isdone: false, text: "" }],
    });
  }

  function removeTask(index) {
    const tem = taskInfo.tasks;
    console.log(tem);
    tem.splice(index, 1);
    console.log(tem);

    setTask({ ...taskInfo, tasks: tem });
  }

  return (
    <div>
      {isLoading && <h1>Updating...</h1>}
      <div class="shadow-lg rounded-xl w-full max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3">
          <div class="flex items-center justify-start w-full flex-grow">
            <div class="flex flex-col items-start">
              <span class="dark:text-white text-gray-700">
                Day {new Date(data.date).toDateString()}
              </span>
            </div>
          </div>
          <div class="flex-none hidden md:block ">
            <span class="w-full px-3 py-1 text-sm rounded-full text-white bg-blue-500">
              Today
            </span>
          </div>
        </div>

        {isEditTask ? (
          <div class="w-full m-auto mt-4flex flex-col gap-4">
            <label class="text-gray-700 my-4" for="name">
              <p>Title</p>
              <textarea
                className="flex-1  appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg  text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your today task"
                name="comment"
                rows="1"
                cols="30"
                value={taskInfo.title}
                onChange={(e) => {
                  setTask({ ...taskInfo, title: e.target.value });
                }}
              ></textarea>
            </label>

            {taskInfo.tasks.map((data, index) => {
              return (
                <TaskAdd
                  UpdateTask={UpdateTask}
                  addTask={addTask}
                  removeTask={removeTask}
                  index={index}
                  {...data}
                ></TaskAdd>
              );
            })}
            <button
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2">
              {taskInfo.title}
            </p>
            <p className="text-gray-400 font-normal text-sm">
              {taskInfo.tasks === undefined || taskInfo.tasks.length === 0 ? (
                "No Activity"
              ) : (
                <>
                  {taskInfo?.tasks?.map((item) => {
                    return <p>{item.text}</p>;
                  })}
                </>
              )}
            </p>
          </>
        )}

        {/* <button
          type="button"
          className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Apply for this Job
        </button> */}

        {data.type === "today" && (

          <div className="flex mt-4 space-x-3 lg:mt-6">
          {

            !isEditTask

            &&

            <button
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={UpdateMyData}
            >
            Update
            </button>
          }
            <button
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
              onClick={(e) => {
                changeState();
              }}
            >
              {isEditTask ? "Save" : " Edit"}
            </button>
            {/* <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
              Share
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

const TaskAdd = ({ UpdateTask, addTask, removeTask, index, isdone, text }) => {
  const [data, setData] = useState({ isdone: isdone, text: text });

  const changeState = ({ currentTarget: input }) => {
    console.log(data);
    let cdata = data;
    if (input.name === "isdone") {
      cdata = { ...data, [input.name]: input.checked };
      setData({ ...data, [input.name]: input.checked });
    } else {
      cdata = { ...data, [input.name]: input.value };
      setData({ ...data, [input.name]: input.value });
    }
    UpdateTask(cdata.isdone, cdata.text, index);
  };

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex w-full justify-between">
        <div>Task #{index + 1}</div>

        <div
          className="justify-end bg-red-500 text-white cursor-pointer p-1"
          onClick={() => {
            removeTask(index);
          }}
        >
          x
        </div>
      </div>

      <div className="flex items-center gap-3 justify-center">
        <input
          type="checkbox"
          name="isdone"
          className="text-sm p-3"
          onChange={changeState}
        />

        <input
          className="
      flex-1  appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg  text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Enter Task"
          type="text"
          name="text"
          value={data.text}
          onChange={changeState}
        ></input>
      </div>
    </div>
  );
};

export default TaskCard;
