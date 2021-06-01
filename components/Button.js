import Link from "next/link";

export default function Button({ type, href, children }) {
  switch (type) {
    // primary button
    case 2:
      return (
        <button className="bg-purple text-white rounded-lg p-4">
          <Link href={href}>
            <a className="text-white">{children}</a>
          </Link>
        </button>
      );
    // secondary button
    case 3:
      return (
        <button className="bg-white text-purple border border-purple rounded-lg p-4">
          <Link href={href}>
            <a>{children}</a>
          </Link>
        </button>
      );
    default:
      // primary
      return (
        <button className="bg-purple text-white rounded-lg p-4">
          <Link href={href}>
            <a className="text-white">{children}</a>
          </Link>
        </button>
      );
  }
}
