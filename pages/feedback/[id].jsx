import React, { useState } from "react";
import {FaStar} from "react-icons/fa";
import Link from "next/link";
function RegisterID() {
  const [star, setstar] = useState(-1);
  return (
    <div class="leading-loose w-screen min-h-screen flex justify-center items-center bg-gradient-to-r from-[#3EADCF] to-[#ABE9CD]">
      <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium text-3xl">Feedback Form</p>
        <div class="">
          <label class="block text-sm text-[#408080] " for="cus_name">
            Name
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded focus:outline-[#408080]"
            id="cus_name"
            name="cus_name"
            type="text"
            value={localStorage.getItem("name")}
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-[#408080]" for="cus_email">
            Email{" "}
          </label>
          <input
            class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded focus:outline-[#408080]"
            id="cus_email"
            name="cus_email"
            value={localStorage.getItem("email")}
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-[#408080]" for="cus_email">
            Give your feedback for this event?{" "}
          </label>
          <input
            class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded focus:outline-[#408080]"
            id="cus_expect"
            name="expect"
            type="text"
            required=""
            placeholder="The session was..."
            aria-label="Expect"
          />
        </div>
        <p class="mt-4 font-medium text-[#408080]">Give this event a Rating</p>
        <div class="mt-2 -300 w-full flex justify-center text-3xl">
          {
            [1,2,3,4,5].map((item,index)=>{
              return(
                <i className={index<=star?"text-yellow-300":"text-gray-400"} key={index} onClick={()=>setstar(index)}>
                  <FaStar/>
                </i>
              )
          }
            )

          }
        </div>
        <div class="mt-4">
          <Link
            class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit"
            href="/"
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterID;
