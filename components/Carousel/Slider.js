import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CarouselItem from "./CarouselItem";
import { useKeenSlider } from "keen-slider/react";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    dragStart: () => setIsDragging(true),
    dragEnd: () => setIsDragging(false),
    slideChanged: (s) => {
      setCurrent(s.details().relativeSlide);
    },
  });
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    slider.next();
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    slider.prev();
  };

  return (
    <section className="h-full lg:px-24 xl:px-52">
      <div className="relative flex flex-col items-center justify-center h-full max-w-3xl">
        <div className="border border-graylight rounded-full p-2 hidden xl:block absolute -left-14 top-30 z-40 cursor-pointer text-indigo">
          <IoIosArrowBack size={35} onClick={prevSlide} />
        </div>
        <div className="border border-graylight rounded-full p-2 hidden xl:block absolute -right-14 top-30 z-40 cursor-pointer text-indigo">
          <IoIosArrowForward size={35} onClick={nextSlide} />
        </div>
        <div
          className={`keen-slider ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          ref={sliderRef}
        >
          {slides.map(
            ({ image, excerpt, testimonial, name, eventName, role }, index) => {
              return (
                <div key={index} className={"keen-slider__slide px-4 sm:px-10"}>
                  <CarouselItem
                    image={image}
                    excerpt={excerpt}
                    testimonial={testimonial}
                    name={name}
                    eventName={eventName}
                    role={role}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="flex gap-3 mt-16 items-center justify-center">
        {[...Array(length)].map((_, idx) => (
          <div
            key={idx}
            className={`rounded-full duration-200 ${
              idx === current
                ? "w-2 h-2 bg-graymed"
                : "w-1.5 h-1.5 bg-graylight"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
