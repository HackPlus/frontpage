import Link from "next/link";
import Badge from "./Badge"

export default function Card({ title, textcolor, fillcolor, badgeText, href, cta, children }) {
  return (
    <div className="border border-opacity-25 border-gray rounded-xl p-6">
      <img src="" alt="icon" />
      <h3>{title}</h3>
      <Badge textcolor={textcolor} fillcolor={fillcolor}>{badgeText}</Badge>
      <p>
        {children}
      </p>
      <Link href={href}>{cta}</Link>
    </div>
  );
}
