
import React from "react";
import {useState,useEffect} from "react";
const TotalTaskCard = ({data,changeDaySnap}) => {

  const [taks, settaks] = useState({p:0,t:0});

  console.log(data,'gieodsm')



  useEffect(() => {

    let arr=data?.tasks
    if(!arr) return;
    let t=arr.length;
    console.log(t)
    let p=0;

    for(let i=0;i<arr?.length;i++){
      if(arr[i].isdone){
        p++;
      }
    }
    settaks({p,t})
    
  }, []);

  if(!data){
    return <></>;
  }

  return (
    <div>
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {/* <span className="rounded-xl relative p-2 bg-blue-100"></span> */}
            <div className="flex flex-col">
              <span className="font-bold text-md text-black dark:text-white ml-2">
                You are doing great Name
              </span>
              <span className="text-sm text-gray-500 dark:text-white ml-2">
                Check your daily status here
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4 space-x-12">
          <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50">
            {/* {.}/ */}
          </span>
        
        </div>
        <div className="block m-auto">
          <div>
            <span className="text-sm inline-block text-gray-500 text-3xl   dark:text-gray-100">
              Task done :
              <span className="text-gray-700 dark:text-white font-bold">{taks.p}</span>
              /{taks.t && '0'}
            </span>
          </div>
          {/* <div>
            <div className="bg-white rounded-lg block p-4 m-auto">
              <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                <div className="w-3/4 h-full text-center text-xs text-white bg-pink-300 rounded-full">
                {}
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex items-center justify-start my-4 space-x-4">
          <span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
            Day {data.current}
          </span>
          <span className="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200">
            Task Name
          </span>
        </div>

        <span className="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
          Next Task: 18 JUN
        </span> */}
          <span className="my-5 cursor-pointer px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white"
          onClick={()=>changeDaySnap(0)}
          >
            Let's Go
          </span>
      </div>
    </div>
  );
};

export default TotalTaskCard;
