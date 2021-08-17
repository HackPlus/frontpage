import { motion } from "framer-motion";

export default function CarouselItem({
  image,
  excerpt,
  testimonial,
  name,
  eventName,
  role,
}) {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      className="border-2 border-graylight bg-white rounded-xl mx-auto p-6 cursor-move"
    >
      <div className="grid grid-cols-8 space-x-5 relative z-0">
        <div className="col-span-1">
          <img
            src={image}
            alt="Profile picture"
            className="border-2 border-graylight rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-2 col-span-7">
          <p className="text-purple text-xl leading-tight">&quot;{excerpt}</p>
          <p className="text-gray">{testimonial}&quot;</p>
          <p className="text-black text-2xl pt-3 leading-4">{name}</p>
          <p className="text-gray">
            {role}, <span className="text-purple">{eventName}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
