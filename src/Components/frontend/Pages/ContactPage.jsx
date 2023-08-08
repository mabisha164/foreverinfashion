import React from "react";

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <div title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src="" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4 text-center">
          <h1 className=" p-2   font-semibold  text-3xl ">CONTACT US</h1>
          <div className="items-center ">
            <form action="# " className="">
              <div className="flex justify-center align-middle gap-3">
                <div>
                  <label for="username"></label>
                  <input
                    type="text"
                    name="username"
                    placeholder="     Username"
                    id="username"
                    className="border border-black rounded-lg mt-10 h-8"
                  />
                </div>

                <label for="username"></label>
                <input
                  type="text"
                  name="email"
                  placeholder="    demo@gmail.com"
                  id="email"
                  className="border border-black rounded-lg mt-10 h-8"
                />
              </div>

              <div className="">
                <label for="textarea " className=""></label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols={30}
                  rows={10}
                  className="border border-black  rounded-lg mt-4 "
                ></textarea>
              </div>
              <div>
                <button className="bg-gray-200 w-36 h-10 rounded-lg text-xl bg-gradient-to-r from-indigo-400 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <p className="mt-3 ">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3 ">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3 ">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
