import React from "react";

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <div title={"Contact us"}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.6123186703285!2d83.98515077560577!3d28.21908890273532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595f6ca7da9db%3A0x8263d53085a3ea8a!2sCodse%20Tech%20Private%20Limited!5e0!3m2!1sen!2snp!4v1691474852690!5m2!1sen!2snp"
          width={"100%"}
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="row contactus flex-col">
        <div className="col-md-6 ">
          <img src="" alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4 text-center">
          <h1 className=" p-2   font-semibold  text-3xl ">CONTACT US</h1>
          <div className="items-center ">
            <form
              action="https://formspree.io/f/xrgwpgap"
              method="POST"
              className=""
            >
              <div className="">
                <div>
                  <label for="username"></label>
                  <input
                    type="text"
                    name="username"
                    placeholder="     Username"
                    autoComplete="off"
                    id="username"
                    required
                    className="border border-black rounded-md mt-10 h-8 w-[280px]"
                  />
                </div>

                <label for="Email"></label>
                <input
                  type="email"
                  name="Email"
                  placeholder="    demo@gmail.com"
                  id="email"
                  className="border border-black  rounded-md mt-4 h-8 w-[280px]"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="">
                <label for="textarea " className=""></label>
                <textarea
                  name="message"
                  id="textarea"
                  cols={30}
                  rows={10}
                  className="border border-black rounded-md  mt-4 "
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <div>
                <button className="bg-gray-200 w-36 h-10 rounded-lg text-xl bg-gradient-to-r from-indigo-400 hover:text-white">
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
