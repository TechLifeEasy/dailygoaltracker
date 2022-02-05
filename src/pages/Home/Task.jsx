import React, { useState } from "react";
import image from "../../assets/login.svg";

const Task = () => {
  const [data, setData] = useState({
    title: "",
    current: 0,
    dayscount: 0,
    finish: false,
    username: "",
    startdate: "",
  });

  //   const router = useRouter();

  //   const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div class="flex items-center w-full justify-center overflow-hidden my-4">
        <div
          class="
            flex flex-col
            justify-center
            flex-1
            
          ">
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                Tells About Challenge
              </h2>
            </div>
            <div class="mt-8 flex flex-col gap-7">
              <div class="mt-6 flex flex-col gap-10">
                <div className="flex  flex-col gap-3">
                  <label
                    for="email"
                    class="block text-xl font-medium text-neutral-600">
                    Task Title
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="title"
                      type="email"
                      autocomplete="email"
                      required=""
                      placeholder="100daysofcode .."
                      onChange={handleChange}
                      value={data.title}
                      class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-500
                          transition
                          duration-100
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-neutral-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                    />
                  </div>
                </div>

                <div className="flex  flex-col gap-3">
                  <label
                    for="email"
                    class="block text-xl font-medium text-neutral-600">
                    Task Days Count
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="dayscount"
                      type="number"
                      autocomplete="email"
                      required=""
                      placeholder="100daysofcode .."
                      onChange={handleChange}
                      value={data.dayscount}
                      class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-500
                          transition
                          duration-100
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-neutral-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                    />
                  </div>
                </div>

                <div className="flex  flex-col gap-3">
                  <label
                    for="email"
                    class="block text-xl font-medium text-neutral-600">
                    Task Start Date
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="startdate"
                      type="date"
                      autocomplete="email"
                      required=""
                      placeholder="100daysofcode .."
                      onChange={handleChange}
                      value={data.startdate}
                      class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-500
                          transition
                          duration-100
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          text-neutral-600
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="
                        flex
                        items-center
                        justify-center
                        w-full
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
                      ">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task;
