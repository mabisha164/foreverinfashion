import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "./Footer";
import { BsPlus } from "react-icons/bs";
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    Items();
  }, []);
  const Items = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=3",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };
  return (
    <div className=" w-full">
      {/* <div class="relative w-full max-w-md">
        <input
          type="text"
          class="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
          placeholder="Search for products..."
        />
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l4.98 4.98M10 18a8 8 0 100-16 8 8 0 000 16z"
            ></path>
          </svg>
        </span>
      </div> */}
      <div className="flex">
        <img
          src="https://daintyjewells.com/asset/6483875f43d70?w=635&h=623&fit=crop"
          className=" object-cover h-[500px] w-[50%] flex-1"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/69/03/20/240_F_369032057_Y5wSQGTtTCMr8MTD1mrUnNFFJIGcitg7.jpg"
          className=" object-cover h-[500px] w-[50%] flex-1"
        />
      </div>
      <div>
        <div className="absolute top-1/2 left-1/2  transform -translate-x-3/4 -translate-y-1/2 ml-36 ">
          <p className="text-6xl  text-black italic shadow-2xl font-cursive animate-pulse ">
            Women's Clothing Store
          </p>
          <NavLink to="/product">
            <button className="h-16 w-36 bg-orange-200 rounded-xl shadow-2xl italic font-serif mt-5 text-2xl hover:text-white ml-40">
              Shop Now
            </button>
          </NavLink>
        </div>
        <div className="text-6xl italic font-sans text-red-800  mt-5 flex justify-center">
          New Collection
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4  ml-10 ">
          {items.map((item) => {
            const { id, image, title, price } = item;
            return (
              <Link to={`/item/${id}`} key={item.id}>
                <div>
                  <br />
                  <div className=" border-[white]h-[230px] w-[250px]  mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
                    <div className="w-full  flex justify-center items-center ">
                      <div className=" height-[400]" key={item.id}>
                        <br />

                        <img
                          className="h-[200px] w-[180px] flex justify-center items-center mb-10  ml-10 group-hover:scale-110 "
                          src={image}
                        />
                        <h3 className="flex justify-center items-center">
                          price:${price}
                        </h3>

                        <h2 className="h-14 ml-10">{title}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Footer />;
      </div>
      // //{" "}
    </div>
  );
};
export default Home;
