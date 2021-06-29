import Link from "next/link";
import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

// const routes = [
//   { label: "About", href: "/about" },
//   { label: "Programs", href: "/events" },
//   { label: "Contact", href: "/contact" },
//   {
//     label: "Donate",
//     href: "https://hack.ms/donate",
//     className: "rounded-md bg-purple hover:bg-indigo text-white py-2 px-4",
//   },
// ];

export default function Nav() {
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const openDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center bg-white text-graymed text-opacity-50 px-8 pt-4 pb-6">
      <div className="flex flex-1 justify-between items-center">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Hack+ Logo" className="h-9 md:ml-10" />
          </a>
        </Link>
      </div>
      <button className="cursor-pointer md:hidden block" onClick={handleClick}>
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } md:flex md:items-center md:w-auto w-full`}
      >
        <ul className="mx-auto md:flex items-center justify-between align-middle pt-4 md:space-x-5 space-y-5 md:space-y-0">
          <li>
            <Link href="/about">
              <a className="hover:text-gray">About</a>
            </Link>
          </li>
          <li onClick={openDropdown}>
            <a className="hover:text-gray flex items-center">
              Programs <BsCaretDownFill className="pl-1" />
            </a>

            <div
              className={`${
                dropdown ? "" : "hidden"
              } md:absolute pl-4 flex flex-col space-y-2 border-2 border-graylight p-3 py-4 rounded-xl shadow-lg`}
            >
              <span className="hover:text-gray">Eventssss+</span>
              <span className="hover:text-gray">Events+</span>
              <span className="hover:text-gray">Eeeventssss+</span>
            </div>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-gray">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="https://hack.ms/donate">
              <a className="rounded-md bg-purple hover:bg-indigo text-white py-2 px-4">
                Donate
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
