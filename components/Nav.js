import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-graymed mx-8 py-5">
      <ul className="flex justify-between items-start">
        <li>
          <Link href="/"><a><img src="/logo.png" alt="Hack+ Logo" className="h-8" /></a></Link>
        </li>
        <ul className="mx-auto sm:mx-0 flex flex-row items-center space-x-5">
          <li>
            <Link href="/about">
              <a className="hover:text-gray">About</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a className="hover:text-gray">Programs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-gray">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="https://hack.ms/donate">
              <button className="rounded-md bg-purple hover:bg-indigo text-white py-2 px-4"><a>Donate</a></button>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
