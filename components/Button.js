import Link from "next/link";

export default function Button({ type, href, children }) {
  switch (type) {
    // secondary button
    case 2:
      return (
        <button className="border border-purple rounded-lg py-4 px-8 bg-white text-purple text-lg font-medium hover:bg-purple hover:text-white">
          <Link href={href}>
            <a>{children}</a>
          </Link>
        </button>
      );
    // blue, "get started" button
    case 3:
      return (
        <button className="rounded-md bg-blue py-4 px-7 text-black text-lg font-medium w-40 hover:bg-cyan hover:text-white">
          <Link href={href}>
            <a className="">{children}</a>
          </Link>
        </button>
      );
    default:
      // primary button
      return (
        <button className="rounded-lg bg-purple py-4 px-8 text-white text-lg font-medium hover:bg-indigo">
          <Link href={href}>
            <a className="text-white">{children}</a>
          </Link>
        </button>
      );
  }
}
