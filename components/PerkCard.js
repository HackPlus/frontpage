export default function Perk({ heading, description, children }) {
  return (
    <div className="hover:shadow-block transform duration-200 hover:-rotate-1 origin-bottom-left border border-graylight bg-white h-full rounded-xl px-6 py-6 m-auto flex flex-row space-x-6 items-center">
      <div>{children}</div>
      <div className="flex flex-col">
        <p className="text-xl font-medium">{heading}</p>
        <p className="text-gray text-base">{description}</p>
      </div>
    </div>
  );
}
