// Footer.js

import React from "react";
import image5 from "../Pages/Images/image5.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const verticalLineStyle = {
    width: "2px",
    height: "200px",
    backgroundColor: "#ccc",
    display: "inline-block",
    verticalAlign: "middle",
    margin: "0 30px",
  };
  return (
    <footer className="py-8 px-4 bg-green-50 text-black mt-32 relative">
      <div className="container mx-auto text-center relative">
        <img
          className="h-[130px] w-[130px] rounded-full absolute top-[-1px] left-2/4 transform -translate-x-1/2 -translate-y-3/4"
          src={image5}
          alt="Image 5"
        />
        <div className="flex">
          <div>
            <div>
              {" "}
              <h1 className="font-cursive text-3xl text-orange-600 ">
                About us
              </h1>
            </div>
            <h3 className="mt-4 text-gray-500 ">
              At Women's Clothing Store, we are passionate about fashion and
              dedicated to providing you with the latest trends and high-quality
              clothing. Our curated collection is designed to empower you to
              express your unique style and embrace your individuality.
            </h3>
          </div>
          <div style={verticalLineStyle}></div>
          <div>
            <h1 className="font-cursive text-3xl text-orange-600 ml-40">
              Customer Care
            </h1>

            <h3 className="mt-4 text-gray-500 ">
              We value each and every one of our customers and strive to offer
              exceptional service. If you have any questions, concerns, or
              feedback, please don't hesitate to reach out to our friendly
              customer support team. We are here to assist you in any way we
              can.
            </h3>
          </div>
        </div>
        <br />
        <hr />
        {/* <div>Links</div>
        <div>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </div> */}
        <div className="font-cursive  text-4xl text-orange-600 flex justify-center align-middle mt-4">
          Links
        </div>
        <div className="flex justify-center mt-3 ">
          <ul className="">
            {/* <Link to="/about">About Us</Link> */}
            <Link
              className="mr-6 underline text-blue-500 font-custom text-xl"
              to="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="mr-6 underline text-blue-500 font-custom text-xl"
              to="/"
            >
              Home
            </Link>
            <Link
              to="/product "
              className="underline text-blue-500 font-custom "
            >
              Product
            </Link>
          </ul>
          {/* Social Media Links */}
          {/* <a
            href="https://www.facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
              alt="Facebook"
              className="h-10 w-10 rounded-lg"
            />
          </a>
          <a
            href="https://www.twitter.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img
              src="data:image/png;base64,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"
              alt="Twitter"
              className="h-10 w-10 rounded-lg"
            />
          </a>
          <a
            href="https://www.instagram.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXq-ngdNB6VV72ll7qIFgYobt5YsSk5IQ4Q&usqp=CAU"
              alt="Instagram"
              className="h-10 w-10 rounded-lg"
            />
          </a>
          {/* Add more social media links as needed */}
        </div>{" "}
      </div>
      <p className="mt-6 text-gray-500 flex justify-center">
        &copy; 2023 Women's Clothing Store. All rights reserved.
      </p>

      {/* </div> */}
    </footer>
  );
};

export default Footer;
