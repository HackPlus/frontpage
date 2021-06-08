export default function CarouselItem({
  image,
  excerpt,
  testimonial,
  name,
  eventName,
  role,
}) {
  return (
    <div className="border-2 border-graylight rounded-xl w-full md:w-1/2">
      <div className="flex flex-row space-x-5">
        <div className="w-1/6">
          <img
            src={image}
            alt="Profile picture"
            className="border-2 border-graylight w-48 h-48 rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-purple ">{excerpt}</p>
          <p className="text-gray">{testimonial}</p>
          <p className="text-black">{name}</p>
          <p className="text-gray">
            {role}, <span className="text-purple">{eventName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
