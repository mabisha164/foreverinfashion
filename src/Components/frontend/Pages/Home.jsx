import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "./Footer";
import { BsPlus } from "react-icons/bs";
import Crousel from "./Crousel";
import image9 from "./Images/image9.png";
const Home = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    fetchItems();
  }, []);

  // Fetches data for the given slide index
  const fetchItems = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=3&offset=${currentSlide * 3}`,
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

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  return (
    <div className=" w-full">
      <div className="flex">
        <img
          src="https://daintyjewells.com/asset/6483875f43d70?w=635&h=623&fit=crop"
          className=" object-cover h-[65vh] w-[50%] flex-1"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/69/03/20/240_F_369032057_Y5wSQGTtTCMr8MTD1mrUnNFFJIGcitg7.jpg"
          className=" object-cover h-[65vh] w-[50%] flex-1"
        />
      </div>
      <div>
        <div className="absolute top-1/2 left-1/2  transform -translate-x-3/4 -translate-y-1/2 ml-36 ">
          {/* <p className="text-6xl  text-rose-600 italic shadow-2xl font-cursive animate-pulse ">
            Women's Clothing Store
          </p> */}
          <NavLink to="/product">
            <button
              data-te-ripple-init
              data-te-ripple-color="success"
              className="h-20 w-40 bg-orange-200 rounded-xl shadow-2xl italic font-custom mb-16  text-3xl hover:text-white mr-36 ease-in-out text-orange-700"
            >
              Shop Now
            </button>
          </NavLink>
        </div>
        <div className=" ">
          <div
            className="text-8xl italic font-cursive text-orange-600  flex justify-center mb-5 animate-pulse 
 animate-twice"
          >
            <div className="mt-10">New Collection</div>
          </div>

          <div className=" mt-8">
            <Crousel />
            {/* <div className=" ">
              <img
                src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0131297_exuberant-off-white-colored-designer-anarkali-suit_900.jpeg"
                className="w-[20%] h-[400px] absolute -right-96  mr-[100px] rounded-2xl shadow-3xl"
              />
            </div> */}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Home;
