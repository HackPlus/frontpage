export default function CarouselItem({
  image,
  excerpt,
  testimonial,
  name,
  eventName,
  role,
}) {
  return (
    <div className="border-2 border-graylight bg-white rounded-xl mx-auto p-6">
      <div className="grid grid-cols-8 space-x-5 relative z-0">
        <div className="col-span-1">
          <img
            src={image}
            alt="Profile picture"
            className="border-2 border-graylight rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-2 col-span-7">
          <p className="text-purple text-xl leading-tight font-medium">
            &quot;{excerpt}
          </p>
          <p className="text-gray">{testimonial}&quot;</p>
          <p className="text-black text-2xl pt-3 font-medium">{name}</p>
          <p className="text-gray">
            {role}, <span className="text-purple font-medium">{eventName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
