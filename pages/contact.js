import Layout from "../components/Layout";
import { MdPlayArrow } from "react-icons/md";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Layout title="Contact">
        <main>
          {/* <section>
            <div
              data-aos="fade-up"
              className="absolute z-20 text-white pt-8 md:pt-20 mx-8 md:mx-14"
            >
              <h1 className="text-4xl md:text-5xl font-medium leading-loose pb-4">
                Reach Out
              </h1>
              <p className="w-9/12 text-lg">
                Shoot us a message to talk about our programs, learn more about
                our story, or anything else.
              </p>
            </div>
            <div className="bg-gray relative z-0">
              <img
                src="/article-6.jpg"
                alt="Laptop"
                className="w-full h-80 mix-blend-overlay opacity-70"
              />
            </div>
          </section> */}
          <section className="main-container bg-contact-cover bg-cover bg-gray bg-blend-overlay h-96 -mb-24">
            <div className="main-content">
              <div className="text-white text-sm h-16 flex items-center">
                <Link href="/">
                  <a className="text-graylight font-medium hover:text-white">
                    Home
                  </a>
                </Link>{" "}
                <MdPlayArrow className="mx-2 h-3 w-3 text-graymed" />{" "}
                <span className="text-muted">Contact</span>
              </div>
              <div data-aos="fade-up" className="text-white pt-8 md:pt-20">
                <h1 className="text-5xl md:text-6xl font-medium leading-loose pb-4">
                  Reach Out
                </h1>
                <p className="w-9/12 text-xl">
                  Shoot us a message to talk about our programs, learn more
                  about our story, or anything else.
                </p>
              </div>
            </div>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2568 292"
            className="w-full fill-current relative z-20 -mb-2 -mt-14 md:-mt-18 lg:-mt-32"
          >
            <path
              fill="#ffffff"
              d="M0 70.001S121.5 171.5 577.5 171.5c241.837 0 753.21-149.204 1222-171C2211 .5 2568 70.001 2568 70.001v222H0v-222z"
            ></path>
          </svg>
          <section className="bg-white py-16 relative z-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-5 md:gap-x-0 text-center">
              <h4 className="text-black leading-9 font-medium text-3xl">
                Mail
              </h4>
              <h4 className="text-black leading-9 font-medium text-3xl">
                Email
              </h4>
              <h4 className="text-black leading-9 font-medium text-3xl">
                Call
              </h4>
              <p className="text-gray text-xl">
                447 King Ave <br />
                Fremont, CA 94536
              </p>
              <p>
                <a
                  className="text-purple font-medium text-xl"
                  href="mailto:hello@hackplus.io"
                >
                  hello@hackplus.io
                </a>
              </p>
              <p>
                <a
                  href="tel:+14159388088"
                  className="font-medium text-purple text-xl"
                >
                  +1 (415) 938-8088
                </a>
                <p className="text-sm text-muted font-medium">
                  Leave a message anytime.
                </p>
              </p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
