import Link from "next/link";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaPhone, FaTwitter, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-blue text-white pb-8 pt-24 main-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 main-content">
        <div>
          <h5>Navigate</h5>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/">
                <a className="text-white opacity-70 hover:opacity-100">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white opacity-70 hover:opacity-100">About</a>
              </Link>
            </li>
            <li>
              <Link href="/events">
                <a className="text-white opacity-70 hover:opacity-100">
                  Events
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul className="flex flex-col space-y-3">
            <li className="flex space-x-5">
              <IoLocationSharp size={20} />
              <div>
                447 King Ave <br /> Fremont, CA 94536-1516
              </div>
            </li>
            <li className="flex space-x-5">
              <FaPhone size={20} />
              <div>
                +1 (415) 938-8088 <br />
                <span className="opacity-70">Mon - Fri 9am - 5pm</span>
              </div>
            </li>
            <li className="flex items-center space-x-5">
              <div>
                <IoMail size={20} />
              </div>
              <div>
                <a href="mailto:hello@hackplus.io">hello@hackplus.io</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1"></div>
        <div className="col-span-2 md:col-span-1 md:-ml-16 space-y-4">
          <h5>Subscribe</h5>
          <p>
            The latest Hack+ news, articles, and resources, sent straight to
            your inbox every month.
          </p>
          <form action="http://eepurl.com/grlSeH" target="_blank">
            <div>
              <div>
                <button className="rounded-md bg-purple w-full py-1 font-medium font-circular">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
          <small>
            We’ll never share your details. See our{" "}
            <Link href="/docs/privacy">
              <a>Privacy Policy</a>
            </Link>
            .
          </small>
        </div>
      </div>
      <div>
        <div className="flex justify-center space-x-6 pt-14">
          <Link href="https://fb.com/HackPlusYou">
            <a className="text-white opacity-50 hover:opacity-100">
              <AiFillFacebook size={30} />
            </a>
          </Link>

          <Link href="https://instagr.am/HackPlusYou">
            <a className="text-white opacity-50 hover:opacity-100">
              <AiOutlineInstagram size={30} />
            </a>
          </Link>

          <Link href="https://twitter.com/HackPlusYou">
            <a className="text-white opacity-50 hover:opacity-100">
              <FaTwitter size={30} />
            </a>
          </Link>

          <Link href="https://blog.hackplus.io/">
            <a className="text-white opacity-50 hover:opacity-100">
              <FaMedium size={30} />
            </a>
          </Link>
        </div>
        <div className="flex justify-center pt-5">
          <small className="text-center">
            &copy;2021 Youth Leadership Incubator Inc dba Hack+. We are a
            501(c)(3) nonprofit public charity, with EIN 81-1543325.
          </small>
        </div>
      </div>
    </div>
  );
}
