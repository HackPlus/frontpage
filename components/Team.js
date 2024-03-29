import Badge from "./Badge";

export default function Team({ src, name, role, badgeFill, badgeText }) {
  return (
    <div
      data-aos="fade-up"
      className="border border-graylight rounded-xl flex flex-col justify-center"
    >
      <div className="mx-auto -mt-3">
        <Badge fillcolor={badgeFill}>{badgeText}</Badge>
      </div>
      <div className="mx-auto py-8">
        <div className="mx-auto rounded-full overflow-hidden border-4 border-graylight w-28 h-28">
          <img src={src} alt={name} />
        </div>
        <div className="flex flex-col text-center pt-4">
          <p className="text-xl text-purple font-medium">{name}</p>
          <p className="text-sm text-gray">{role}</p>
        </div>
      </div>
    </div>
  );
}
