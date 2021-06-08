import Link from "next/link";
import Badge from "./Badge";

export default function Highlight() {
  return (
    <div className="flex flex-col space-y-3">
      <div>
        <img
          className="w-full h-38 rounded-xl"
          src="/TTB-2018.jpg"
          alt="event"
        />
      </div>
      <div className="flex flex-row space-x-1">
        <Badge fillcolor="purple">All-Female</Badge>
        <Badge fillcolor="green">Collegiate</Badge>
      </div>
      <div className="flex flex-col space-y-3">
        <h4>TechTogether Boston</h4>
        <p className="text-sm">
          {" "}
          The world&apos;s largest all-female and non-binary hackathon, at
          Agganis Arena in Boston.{" "}
        </p>
        <Link href="/">
          <a className="text-sm font-semibold">Visit the website</a>
        </Link>
      </div>
    </div>
  );
}
