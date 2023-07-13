import Layout from "../components/Layout";
import { MdPlayArrow } from "react-icons/md";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Layout title="Contact">
        <main>
          <section className="relative main-container bg-contact-cover bg-cover bg-gray bg-blend-overlay h-96">
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
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 2568 200"
              className="absolute w-full text-white -bottom-1 left-0 right-0 max-h-24"
            >
              <path d="M0 70.001S121.5 171.5 577.5 171.5c241.837 0 753.21-149.204 1222-171C2211 .5 2568 70.001 2568 70.001v222H0v-222z"></path>
            </svg>
          </section>

          <section className="bg-white py-16 relative z-40">
            <div className="px-20 flex flex-col md:flex-row w-full justify-between text-center space-y-4 md:space-y-0">
              <div>
                <h4 className="text-black leading-9 font-medium text-2xl md:text-3xl mb-4 md:mb-6">
                  Mail
                </h4>
                <p className="text-gray text-lg md:text-xl">
                  8549 Wilshire Blvd, Unit 3089 <br />
                  Beverly Hills, CA 90211
                </p>
              </div>
              <div>
                <h4 className="text-black leading-9 font-medium text-2xl md:text-3xl mb-4 md:mb-6">
                  Email
                </h4>
                <p>
                  <a
                    className="text-purple font-medium text-lg md:text-xl"
                    href="mailto:hello@hackplus.io"
                  >
                    hello@hackplus.io
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-black leading-9 font-medium text-2xl md:text-3xl mb-4 md:mb-6">
                  Call
                </h4>
                <p>
                  <a
                    href="tel:+14159388088"
                    className="font-medium text-purple text-lg md:text-xl"
                  >
                    +1 (415) 938-8088
                  </a>
                  <p className="text-sm text-muted font-medium">
                    Leave a message anytime.
                  </p>
                </p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
