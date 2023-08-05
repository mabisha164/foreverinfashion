import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselData = [
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0131371_exuberant-mint-green-colored-designer-saree_900.jpeg",
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0128534_mesmerizing-navy-blue-and-black-colored-designer-saree_324.jpeg",
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0128573_aesthetic-baby-pink-and-red-colored-designer-saree_900.jpeg",
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0127266_bollywood-mint-green-and-pink-colored-designer-saree_900.jpeg",
  ];
  const carouselData1 = [
    "https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/W3YA85D51T0-ALW1",
    "https://static.reserved.com/media/catalog/product/cache/850/a4e40ebdc3e371adff845072e1c73f37/4/1/4198P-08X-001-1-705112_2.jpg",
    "https://johnlewis.scene7.com/is/image/JohnLewis/006244109",
    "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw39ce4c90/1_front_750/00488172-07.jpg?sw=1000&sh=1500",
  ];
  const carouselData2 = [
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0130501_irresistible-pink-colored-designer-anarkali-suit_900.jpeg",
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0126371_divine-cream-and-peach-colored-designer-suit.jpeg",
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0131724_charming-chikoo-colored-designer-suit_900.jpeg",
    "https://www.aishwaryadesignstudio.com/content/images/thumbs/0129003_charming-blue-colored-designer-suit_900.jpeg",
  ];
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
    );
  };
  const handlePrevSlide1 = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData1.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide1 = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData1.length - 1 ? 0 : prevSlide + 1
    );
  };
  const handlePrevSlide2 = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData2.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide2 = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData2.length - 1 ? 0 : prevSlide + 1
    );
  };
  const autoSlide1 = () => {
    handleNextSlide1();
  };
  const autoSlide = () => {
    handleNextSlide();
  };

  useEffect(() => {
    // Start automatic slide transitions
    const interval = setInterval(autoSlide, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="">
      <div className="relative ">
        {/* <img
          src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0131297_exuberant-off-white-colored-designer-anarkali-suit_900.jpeg"
          className="w-[20%] "
        /> */}
        <div>
          <div
            id="default-carousel"
            className=" w-[20%] h-[400px] absolute top-0 ml-[100px] rounded-2xl shadow-3xl border border-yellow-300 "
            data-carousel="slide"
          >
            <div className="relative  h-full overflow-hidden rounded-2xl shadow-3xl border-3 border-b-green-400 md:h-full">
              {carouselData2.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={imageUrl}
                    className="absolute top-1/2 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2  left-1/2  border border-yellow-300"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide
                      ? "bg-white dark:bg-gray-800"
                      : "bg-transparent"
                  }`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                ></button>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrevSlide2}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNextSlide2}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative ">
        <div>
          <div
            id="default-carousel"
            className="relative w-[50%] h-[400px] ml-[550px] "
            data-carousel="slide"
          >
            <div className="relative  h-full overflow-hidden rounded-2xl shadow-3xl border-3 border-b-green-400 md:h-full">
              {carouselData.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={imageUrl}
                    className="absolute top-1/2 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2  left-1/2  border border-yellow-300"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide
                      ? "bg-white dark:bg-gray-800"
                      : "bg-transparent"
                  }`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                ></button>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrevSlide}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNextSlide}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 relative ">
          <div
            id="default-carousel"
            className="absolute right-36 w-[30%] h-[400px] ml-[550px] "
            data-carousel="slide"
          >
            <div className="relative  h-full overflow-hidden rounded-2xl shadow-3xl border-3 border-b-green-400 md:h-full">
              {carouselData1.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={imageUrl}
                    className="absolute top-1/2 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2  left-1/2  border border-yellow-300"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              {carouselData1.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide
                      ? "bg-white dark:bg-gray-800"
                      : "bg-transparent"
                  }`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                ></button>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrevSlide1}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNextSlide1}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
