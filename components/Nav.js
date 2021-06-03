import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-black mx-8 pt-5">
      <ul className="flex justify-between items-start">
        <li>
          <img src="/logo.svg" alt="Hack+ Logo" />
        </li>
        <ul className="mx-auto sm:mx-0 flex flex-row items-center space-x-5">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Programs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="https://hack.ms/donate">
              <button className="rounded-md bg-purple text-white py-1 px-4"><a>Donate</a></button>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
