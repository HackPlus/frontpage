import Link from "next/link";
import Badge from "./Badge";

export default function Highlight({
  src,
  purpleBadge,
  greenBadge,
  heading,
  children,
  href,
}) {
  return (
    <div className="flex flex-col space-y-3">
      <div className="overflow-hidden w-full md:w-52">
        <img className="rounded-xl" src={src} alt="Event venue image" />
      </div>
      <div className="flex flex-row space-x-1">
        <Badge fillcolor="purple">{purpleBadge}</Badge>
        <Badge fillcolor="green">{greenBadge}</Badge>
      </div>
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl font-medium">{heading}</h4>
        <p className="text-base">{children}</p>
        <Link href={href}>
          <a className="text-base font-semibold hover:text-graylight">
            Visit the website &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}
