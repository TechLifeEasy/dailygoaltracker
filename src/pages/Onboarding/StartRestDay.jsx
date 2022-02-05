import React, { useState } from "react";

const StartRestDay = () => {
  const [data, setData] = useState({
    startDay: "",
    reminderTime: "",
    restDays: "",
  });

  //   const router = useRouter();

  //   const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const url = "http://localhost:8080/api/infra/user/login";

    //   const { data: res } = await axios.post(url, data);
    //   console.log(res);
    //   localStorage.setItem("token", res.token);
    //   localStorage.setItem("userId", res.user.id);

    //   if (res.user.status === "FTL") {
    //     router.push("/new-password");
    //   } else {
    //     router.push("/main");
    //   }

    //   console.log(res.message);
    // } catch (err) {
    //   if (err) {
    //     if (
    //       error.response &&
    //       error.response.status >= 400 &&
    //       error.response.status <= 500
    //     ) {
    //       setError(err.response.data.message);
    //     }
    //   }
    // }
  };

  return (
    <div>
      {" "}
      <div class="relative">
        <div class="h-screen w-full z-10 inset-0 overflow-y-auto">
          <div class="absolute w-full h-full inset-0 bg-gray-500 opacity-75 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"></span>
            <div
              class="inline-block  relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline">
              <div>
                <div class="rounded-lg h-screen my-10 p-10  bg-white shadow ">
                  <div class="bg-white dark:bg-gray-800 ">
                    <form
                      class="text-center w-full mx-auto  px-4 sm:px-6 lg:px-8 z-20"
                      action="#"
                      method="POST"
                      class="space-y-6"
                      onSubmit={handleSubmit}>
                      <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <h2 class="pb-10 block">
                          Commit your starting day and rest days?
                        </h2>
                        <div class="block text-[30px] text-indigo-500">
                          Set your first day?
                        </div>

                        <label class="text-gray-700" for="startDay">
                          <input
                            type="date"
                            id="startDay"
                            class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1 mb-10"
                            placeholder="Start Date"
                            name="startDay"
                            autocomplete="dataX"
                            required=""
                            onChange={handleChange}
                            value={data.value}
                          />
                        </label>

                        <div class=" block text-[30px] text-indigo-500">
                          Set Your Reminder Time
                        </div>

                        <label class="text-gray-700" for="reminderTime">
                          <input
                            type="time"
                            class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1 mb-10"
                            placeholder="Reminder Time"
                            name="reminderTime"
                            autocomplete="reminderTime"
                            required=""
                            onChange={handleChange}
                            value={data.value}
                          />
                        </label>

                        <div class="block text-indigo-500 text-[30px]">
                          Total Rest Days
                        </div>

                        <div class=" relative ">
                          <input
                            type="number"
                            id="restDays"
                            class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Rest Days"
                            name="restDays"
                            autocomplete="restDays"
                            required=""
                            onChange={handleChange}
                            value={data.value}
                          />
                        </div>
                      </h2>
                      <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                          <button
                            type="submit"
                            class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Happy Tracking
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartRestDay;
