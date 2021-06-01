import Link from "next/link";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaPhone, FaTwitter, FaMedium } from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="text-cyan">
      <div className="flex">
        <div>
          <h5>Navigate</h5>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Events</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul>
            <li className="flex">
              <IoLocationSharp />
              <div>
                447 King Ave <br /> Fremont, CA 94536-1516
              </div>
            </li>
            <li className="flex">
              <FaPhone />
              <div>
                +1 (415) 938-8088 <br />
                <span>Mon - Fri 9am - 5pm</span>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <div>
                <IoMail />
              </div>
              <div>
                <a href="mailto:hello@hackplus.io">hello@hackplus.io</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h5>Subscribe</h5>
          <p>
            The latest Hack+ news, articles, and resources, sent straight to
            your inbox every month.
          </p>
          <form action="http://eepurl.com/grlSeH" target="_blank">
            <div>
              <div>
                <Button href="/">Subscribe</Button>
              </div>
            </div>
          </form>
          <small>
            We’ll never share your details. See our{" "}
            <a href="#">Privacy Policy</a>
          </small>
        </div>
      </div>
      <div>
        <div className="flex">
          <AiFillFacebook size={30} />

          <AiOutlineInstagram size={30} />

          <FaTwitter size={30} />

          <FaMedium size={30} />
        </div>
        <div>
          <p className="text-light">
            &copy;2021 Youth Leadership Incubator Inc dba Hack+. We are a
            501(c)(3) nonprofit public charity, with EIN 81-1543325.
          </p>
        </div>
      </div>
    </div>
  );
}
