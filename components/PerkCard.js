export default function Perk({ heading, description, children }) {
  return (
    <div className="border-2 border-graylight bg-white h-full rounded-xl px-3 py-4 m-auto">
      <div className="flex flex-row space-x-6 items-center">
        <div className="mx-2">{children}</div>
        <div className="flex flex-col">
          <p className="text-xl">{heading}</p>
          <p className="text-gray text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
