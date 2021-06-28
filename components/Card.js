import Link from "next/link";
import Badge from "./Badge";

export default function Card({
  title,
  fillcolor,
  badgeText,
  href,
  cta,
  icon,
  children,
}) {
  return (
    <div className="border border-opacity-25 border-gray rounded-xl bg-white p-6 flex flex-col space-y-5 h-full">
      <div className="rounded-full bg-bluelight p-4 w-min">
        {renderIcon(icon)}
      </div>
      <h3 className="text-2xl">{title}</h3>
      <Badge fillcolor={fillcolor}>{badgeText}</Badge>
      <p className="text-gray">{children}</p>
      <Link href={href}>
        <a className="text-purple font-medium hover:text-indigo">{cta}</a>
      </Link>
    </div>
  );
}

function renderIcon(icon) {
  switch (icon) {
    case "calendar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="#1ac9e7"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="#1ac9e7"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      );
    case "playButton":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="#1ac9e7"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      break;
  }
}
