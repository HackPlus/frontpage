import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CarouselItem from "./CarouselItem";
import { useKeenSlider } from "keen-slider/react";

const CarouselData = [
  {
    index: 0,
    image: "/karinahalevy.png",
    excerpt:
      "Hack+ has been instrumental not only in making both of the LingHacks hackathons possible but also enabling us to expand into an international organization reaching hundreds of students.",
    testimonial:
      "When I initially came up with the idea of LingHacks, I had no clue where to start in terms of getting nonprofit status, handling legal paperwork, or raising and storing funds--Hack+ managed all of that seamlessly and made it possible for my team and me to focus on outreach and curriculum. They made it super easy to invoice sponsors, keep track of attendee registrations, and communicate with my team. My team and I are eternally grateful to Hack+ for getting us where we are today!",
    name: "Karina Halevy",
    role: "Executive Director",
    eventName: "LingHacks",
  },
  {
    index: 1,
    image: "/scott.png",
    excerpt:
      "Garuda Hacks wouldn't have been possible without the Hack+ infrastructure that abstracted away the complexity of raising sponsorship and making vendor payments.",
    testimonial:
      "Garuda Hacks was organized at the very last moment with only 2.5 months          left in our hands, and it wouldn't have been possible without the Hack+ infrastructure that abstracted away the complexity of raising sponsorship and making vendor payments. As a result,          we were able to put more energy into logistics, marketing, and hacker experience, making          Garuda Hacks Indonesia's largest hackathon, with 2500+ participants, and receiving the          support of Indonesia's Ministry of Tourism and Creative Economy.",
    name: "Scott Moses Sunarto",
    role: "Managing Director",
    eventName: "Garuda Hacks",
  },
  {
    index: 2,
    image: "/eileenyang.jpg",
    excerpt:
      "Working with Hack+ last fall was an astoundingly rewarding decision.",
    testimonial:
      "Hack+ handled all the legal and financial duties, from liability waivers to accounting and even registration, allowing all of our HSHacks organizers to focus on creating the most optimal experience we possibly could for all of our hackers. Thank you Hack+!",
    name: "Eileen Yang",
    role: "Lead Director",
    eventName: "HSHacks",
  },
];

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
          {CarouselData.map(
            ({ index, image, excerpt, testimonial, name, eventName, role }) => {
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
