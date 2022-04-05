export default function Badge({ fillcolor, children }) {
  switch (fillcolor) {
    case "purple":
      return (
        <div className="bg-purple w-max rounded-md px-2 py-1 uppercase font-semibold text-xs text-white">
          {children}
        </div>
      );
    case "blue":
      return (
        <div className="bg-blue w-max rounded-md px-2 py-1 uppercase font-semibold text-xs text-black">
          {children}
        </div>
      );
    case "green":
      return (
        <div className="bg-green w-max rounded-md px-2 py-1 uppercase font-semibold text-xs text-black">
          {children}
        </div>
      );
    case "yellow":
      return (
        <div className="bg-yellow w-max rounded-md px-2 py-1 uppercase font-semibold text-xs text-black">
          {children}
        </div>
      );
    default:
      return (
        <div className="bg-purple w-max rounded-md px-2 py-1 uppercase font-semibold text-xs text-white">
          {children}
        </div>
      );
  }
}
