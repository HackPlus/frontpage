import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CarouselItem from "./CarouselItem";

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
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="h-full px-12 md:px-36 lg:px-48 xl:px-52">
      <div className="relative flex flex-row items-center justify-center h-full">
        <FaAngleLeft
          size={35}
          className="absolute -left-14 top-30 z-40 cursor-pointer"
          onClick={prevSlide}
        />
        <FaAngleRight
          size={35}
          className="absolute -right-14 top-30 z-40 cursor-pointer"
          onClick={nextSlide}
        />
        <div className="flex items-center justify-center h-full">
          {CarouselData.map(
            ({ index, image, excerpt, testimonial, name, eventName, role }) => {
              return (
                <div
                  key={index}
                  className={
                    index === current ? "opacity-100" : "opacity-0 hidden"
                  }
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
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
    </section>
  );
};

export default Carousel;
