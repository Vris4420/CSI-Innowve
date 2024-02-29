import React, { useState } from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import eventData from "./EventData.jsx";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card.tsx";


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between h-screen mx-auto relative">
        {/* Left Arrow */}
        <img
          src={ArrowLeft}
          alt="Previous"
          className="cursor-pointer fixed left-0 top-1/2 transform -translate-y-1/2 w-[10%] md:w-[5%] lg:w-[3%] ml-4"
          onClick={goToPrevSlide}
        />

        <div className="text-center font-adam w-full">
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card    w-auto  h-auto rounded-xl  ">
            <CardItem translateZ="70" className="text-xl font-bold text-neutral-600 dark:text-white">
              <div className=" text-center max-h-[50vh]">
                {/* Poster Div */}
                <img
                  src={eventData[currentIndex].posterLink}
                  alt={`Event ${currentIndex + 1}`}
                  className="w-1/2 md:w-1/4 mx-auto "
                />
              </div>
              </CardItem>
            </CardBody>
          </CardContainer>

          <Link to={`/events/${eventData[currentIndex]?.id}`}>
            <button className="bg-slate-700 font-semibold text-white border border-white rounded-full py-2 px-6 my-3 hover:bg-white hover:text-blue-500 transition duration-300">
              Know More
            </button>
          </Link>
          <p className="my-3  w-[50%] mx-auto text-center text-xl">
            {eventData[currentIndex].shortDescription}
          </p>
          <p className="my3 text-gray-300 text-xl">
            {eventData[currentIndex].date}
          </p>
          <div className="flex justify-center my-3">
            {/* Right Arrow */}
            <img
              src={ArrowRight}
              alt="Next"
              className="cursor-pointer fixed right-0 top-1/2 transform -translate-y-1/2 w-[10%] md:w-[5%] lg:w-[3%] mr-4"
              onClick={goToNextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
