import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-black">
      <ul className="flex justify-between items-start">
        <li>
          <img src="" alt="Hack+ Logo" />
        </li>
        <ul className="mx-auto sm:mx-0 flex flex-row space-x-5">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
