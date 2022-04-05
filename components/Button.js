import Link from "next/link";

function Button({ type, children }) {
  switch (type) {
    // secondary button
    case 2:
      return (
        <button className="border border-purple rounded-lg py-4 px-10 bg-white text-purple text-lg font-medium hover:bg-purple hover:text-white">
          {children}
        </button>
      );
    // blue, "get started" button
    case 3:
      return (
        <button className="rounded-md bg-blue py-4 px-7 text-black text-lg font-medium w-40 hover:bg-cyan hover:text-white duration-200">
          {children}
        </button>
      );
    default:
      // primary button
      return (
        <button className="rounded-lg bg-purple py-4 px-10 text-white text-lg font-medium hover:bg-indigo">
          {children}
        </button>
      );
  }
}

export default function LinkedButton({ type, href, children, external }) {
  if (external) {
    return (
      <a href={href}>
        <Button type={type}>{children}</Button>
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a>
          <Button type={type}>{children}</Button>
        </a>
      </Link>
    );
  }
}
