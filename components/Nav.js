import Link from "next/link";
import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

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
    <nav className="sticky top-0 z-50 bg-white text-gray text-opacity-50 main-container py-5">
      <div className={"main-content flex flex-wrap items-center"}>
        <div className="flex flex-1 justify-between items-center">
          <Link href="/">
            <a>
              <img
                src="/img/logos/logo.svg"
                alt="Hack+ Logo"
                className="h-7 md:h-8 xl:h-9"
              />
            </a>
          </Link>
        </div>
        <button
          className="cursor-pointer lg:hidden block text-gray"
          onClick={handleClick}
        >
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
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="mx-auto lg:flex items-center justify-between align-middle lg:space-x-5 space-y-5 lg:space-y-0 pt-4 lg:pt-0">
            <li>
              <Link href="/about">
                <a className="hover:text-gray">About</a>
              </Link>
            </li>
            <li onClick={openDropdown}>
              <a className="hover:text-gray flex items-center cursor-pointer">
                Programs <BsCaretDownFill className="pl-1" />
              </a>

              <div
                className={`${
                  dropdown ? "" : "hidden"
                } lg:absolute pl-4 flex flex-col space-y-2 border-2 border-graylight bg-white p-3 py-4 rounded-xl shadow-lg`}
              >
                <span className="hover:text-gray">
                  <Link href="/events">
                    <a>Events+</a>
                  </Link>
                </span>
              </div>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:text-gray">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="https://hack.ms/donate">
                <a className="rounded-md bg-purple hover:bg-indigo text-white py-2.5 px-6">
                  Donate
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
