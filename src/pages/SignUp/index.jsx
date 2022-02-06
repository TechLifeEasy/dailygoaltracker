import React, { useState } from "react";
import image from "../../assets/signup.svg";
import { SingUp } from "../../Api/user";
import { Link } from "react-router-dom";
import Load from '../helper/Loading'

const SignUpP = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
  });

  //   const router = useRouter();

  const [isLoading, setIsLoadding] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = () => {
    console.log(data)
    // e.preventDefault();
    setIsLoadding(true);
    SingUp(data.email,  data.password,data.name)
      .then(() => {
        // window.location.href='/'
      })
      .finally(() => {
        setIsLoadding(false);
      });
  };

  return (
    <section>

      {isLoading && <Load></Load>}
      <div class="flex min-h-screen overflow-hidden">
        <div
          class="
            flex flex-col
            justify-center
            flex-1
            px-4
            py-12
            sm:px-6
            lg:flex-none lg:px-20
            xl:px-24
          "
        >
          <div class="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">
                Sign Up.
              </h2>
            </div>
            <div class="mt-8">
              <div class="mt-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    Full Name
                  </label>
                  <div class="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autocomplete="name"
                      required=""
                      placeholder="Your Name"
                      value={data.name}
                      onChange={handleChange}
                      class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
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
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required=""
                      placeholder="Your Email"
                      onChange={handleChange}
                      value={data.email}
                      class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
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
                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required=""
                      placeholder="Your Password"
                      onChange={handleChange}
                      value={data.password}
                      class="
                          block
                          w-full
                          px-5
                          py-3
                          text-base
                          placeholder-gray-300
                          transition
                          duration-500
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

                <div className="flex items-center justify-end my-3">
                  <Link to='/login'>
                    Log In Hear
                  </Link>
                </div>

                <div>
                  <button
                    onClick={handleSubmit}
                    class="
                        flex
                        items-center
                        justify-center
                        w-full
                        px-10
                        py-4
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
                    {isLoading ? "Loadding" : "Sign Up"}
                  </button>
                </div>
{/* 
                <div class="relative my-4">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-neutral-600">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="
                      w-full
                      items-center
                      block
                      px-10
                      py-3.5
                      text-base
                      font-medium
                      text-center text-blue-600
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border-2 border-white
                      shadow-md
                      rounded-xl
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-gray-500
                    "
                  >
                    <div class="flex items-center justify-center">
                      <span class="ml-4"> Log in with Google</span>
                    </div>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
          <img
            class="absolute inset-0 object-cover w-full h-full object-fill"
            src={image}
            alt="Sign Up"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpP;

// import React from 'react';

// const Index = () => {
//   return (
//     <div>
//       zeel
//     </div>
//   );
// }

// export default Index;

