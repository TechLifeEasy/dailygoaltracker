import React, { useState, useEffect } from "react";
import { MdDateRange, MdBrightnessLow } from "react-icons/md";
import { ImCross } from "react-icons/im";
const data = {
  current: 2,
  dayscount: 100,
  finish: false,
  startdate: "2022-01-31",
  title: "scxv",
  username: "zeel",
  days: [
    {
      finishdate: "2022-02-2",
      isdone: true,
      taks: "this is me",
    },
    {
      finishdate: "2022-02-5",
      isdone: true,
      taks: "this is me",
    },
  ],
  finish: false,
};

export default function Days() {
  const [daysUpdate, setDaysUpdate] = useState([]);

  const [DaySnap, setSnap] = useState({
    show: false,
    index: -1,
  });

  function setDays() {
    let newDays = [];

    let p = 0;

    let lastDate = new Date(data.startdate);

    for (let i = 0; i < data.days.length; ) {
      let current = new Date(data.days[i].finishdate);
      let diff = current - lastDate;
      let day = Math.floor(diff / (1000 * 60 * 60 * 24));

      //   console.log("call");

      console.log(current);
      console.log(lastDate);
      //   console.log(diff)
      console.log(day);

      //   if(p>10){
      //       break;
      //   }

      if (day === 0) {
        newDays.push({
          isdone: data.days[i].isdone,
          taks: "this is me",
          type: "done",
          date: lastDate,
        });
        i++;
      } else {
        newDays.push({
          isdone: false,
          taks: "",
          type: "miss",
          date: lastDate,
        });
      }
      p++;

      let l = +lastDate.getTime() + 24 * 60 * 60 * 1000;

      lastDate = new Date(l);
    }

    console.table(newDays);
    console.table(data.dayscount - data.current);
    for (let i = 0; i < data.dayscount - data.current; i++) {
      newDays.push({
        isdone: false,
        taks: "",
        type: "coming",
        date: lastDate,
      });

      let l = +lastDate.getTime() + 24 * 60 * 60 * 1000;

      lastDate = new Date(l);
    }

    for (let i = 0; i < newDays.length; i++) {
      let diff = new Date() - new Date(newDays[i].date);

      let day = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (day === 0) {
        newDays[i].type = "today";
        break;
      }
    }

    // console.table(newDays.reverse());

    setDaysUpdate(newDays.reverse());
  }

  useEffect(() => {
    setDays();
  }, []);

  function changeDaySnap(index) {
    console.log(index);

    setSnap({ show: !DaySnap.show, index: index });
  }

  return (
    <>
      {DaySnap.show ? (
        <DayTask
          changeDaySnap={changeDaySnap}
          index={DaySnap.index}
          data={daysUpdate[DaySnap.index]}
        ></DayTask>
      ) : (
        <DayBarList
          changeDaySnap={changeDaySnap}
          datalist={daysUpdate}
        ></DayBarList>
      )}
    </>
  );
}

function DayBarList({ datalist, changeDaySnap }) {
  // console.log(datalist)

  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className=" py-5 sm:px-6 border-b w-full ">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          History
        </h3>
        <div className="flex w-full items-center justify-center mt-4">

        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          Details and informations about your Activity.
        </p>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          {data.current + "/" + data.dayscount}
        </p>
      </div>
        </div>
      <ul className="w-11/12 flex flex-col">
        {datalist.map((data, index) => {
          return (
            <DayBar
              {...data}
              changeDaySnap={changeDaySnap}
              index={index}
              key={index}
            ></DayBar>
          );
        })}
      </ul>
    </div>
  );
}

function DayBar({ type, date, changeDaySnap, index }) {
  if (type == "coming") {
    return <></>;
  }
  const DD = new Date(date);

  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
        <div className="">
          {type == "miss" ? (
            <div className="p-3 bg-red-400 text-white text-2xl">
              <ImCross></ImCross>
            </div>
          ) : (
            <div className="p-3 bg-green-400 text-white text-2xl">
              <MdBrightnessLow></MdBrightnessLow>
            </div>
          )}
        </div>

        <div className="flex-1 p-3 flex text-xl pl-1 ">
          <div className="font-medium dark:text-white px-4 w-11/12">
            {DD.toDateString()}
          </div>
          <div
            className={`w-1/12 text-gray-600 dark:text-gray-200 text-xl pl-4 capitalize
                  ${type === "miss" ? "text-red-500" : "text-green-500"}
                  `}
          >
            {type}
          </div>
        </div>

        <button
          className="w-24 text-right flex justify-end"
          onClick={() => changeDaySnap(index)}
        >
          <svg
            width="20"
            fill="currentColor"
            height="20"
            className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
}

function DayTask({ changeDaySnap, index, data }) {
  console.log(data);

  const [taskInfo, setTask] = useState(data.taks);
  const [isEditTask, setIsEditTask] = useState(false);

  function changeState(){
      setIsEditTask(!isEditTask);
  }

  return (
    <div
      className="m-auto w-11/12 p-4 flex flex-col gap-3 items-center
    justify-center "
    >
     
      <h1 className="text-2xl"> {new Date(data.date).toDateString()}</h1>

      {
      
      isEditTask ? 
        <div class="w-full m-auto">
          <label class="text-gray-700" for="name">
            <textarea
              class="flex-1  appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg  text-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="comment"
              placeholder="Enter your today task"
              name="comment"
              rows="5"
              cols="40"
              value={taskInfo}
              onChange={(e)=>{
                  setTask(e.target.value)
              }}
            ></textarea>
          </label>
        </div>
      : 
        <>
        
          <div class="w-full m-auto text-2xl capitalize">
          
          {
          taskInfo==undefined || taskInfo.length===0
          ?
          'No Task 🟢🟢'
          :
          taskInfo
          
          }
          </div>

        
          
        </>
      }
        {
          data.type === "today" && 
          <>
          
            <button
              type="submit"
              class="
              flex
              items-center
                        justify-center
                        w-4/12
                        px-4
                        py-4
                        mt-4
                        text-base
                        font-medium
                        text-center text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-blue-600
                        rounded-xl
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                        "
                        onClick={changeState}
            >
                {
                    isEditTask
                    ?
                    'Save'
                    :
                    'Edit'
                }
            </button>

            <button
              type="submit"
              class="
              flex
              items-center
                        justify-center
                        w-4/12
                        px-4
                        py-4
                        mt-4
                        text-base
                        font-medium
                        text-center text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-blue-600
                        rounded-xl
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                        "
            >
                
                    
                    Done
                
            </button>
            </>
          }
           <div className="flex w-4/12 m-auto items-center   text-base
                        font-medium gap-2 text-white justify-center cursor-pointer  p-4 bg-red-500 rounded-xl "
       
          onClick={() => changeDaySnap(-1)}
        >
          <ImCross></ImCross> Close
        </div>
      </div>
  
  );
}
