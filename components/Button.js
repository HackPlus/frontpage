import Link from "next/link";

export default function Button({ type, href, children }) {
  switch (type) {
    // secondary button
    case 2:
      return (
        <button className="border border-purple rounded-lg p-4 bg-white text-purple hover:bg-purple hover:text-white">
          <Link href={href}>
            <a>{children}</a>
          </Link>
        </button>
      );
    // blue, "get started" button
    case 3:
      return (
        <button className="rounded-md bg-blue p-4 text-black hover:bg-cyan hover:text-white">
          <Link href={href}>
            <a className="">{children}</a>
          </Link>
        </button>
      );
    default:
      // primary button
      return (
        <button className="rounded-lg bg-purple p-4 text-white hover:bg-indigo">
          <Link href={href}>
            <a className="text-white">{children}</a>
          </Link>
        </button>
      );
  }
}
