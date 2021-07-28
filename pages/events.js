import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { CarouselData } from "../components/Carousel/CarouselData";
import Carousel from "../components/Carousel/Slider";
import Layout from "../components/Layout";
import Service from "../components/Service";
import microsoftLogo from "../public/logos/microsoft.svg";
import amazonLogo from "../public/logos/amazon.svg";
import disneyLogo from "../public/logos/disney.svg";
import googleLogo from "../public/logos/google.svg";
import stanfordLogo from "../public/logos/stanford.svg";
import githubLogo from "../public/logos/github.svg";
import losAltos2 from "../public/losaltos-2.jpg";

import {
  FaTachometerAlt,
  FaFileContract,
  FaHeart,
  FaPlug,
  FaNetworkWired,
  FaMoneyBillWave,
  FaFeatherAlt,
  FaHouseDamage,
  FaLayerGroup,
} from "react-icons/fa";
import Highlight from "../components/Highlight";
import Table from "../components/Table";

const eventSponsors = [
  {
    companyName: "Microsoft",
    logo: microsoftLogo,
  },
  {
    companyName: "Amazon",
    logo: amazonLogo,
  },
  {
    companyName: "disney",
    logo: disneyLogo,
  },
  {
    companyName: "Google",
    logo: googleLogo,
  },
  {
    companyName: "Stanford",
    logo: stanfordLogo,
  },
  {
    companyName: "Github",
    logo: githubLogo,
  },
];

export default function Events() {
  return (
    <div>
      <Layout title="Events+">
        <main>
          <section className="bg-events-cover bg-cover bg-purple bg-blend-multiply h-screen -mb-48 md:-mb-48 lg:-mb-64">
            <div
              data-aos="fade-up"
              className="text-white space-y-4  py-6 md:py-14 mx-8 md:mx-20 pt-48"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium">
                Events+
              </h1>
              <p className="text-lg md:text-xl md:w-9/12">
                Run the event of your dreams using the world&apos;s most
                comprehensive launchpad for hackathons, conferences, meetups,
                and more.
              </p>
              <Button type={3} href="mailto:hello@hackplus.io">
                Get Started
              </Button>
            </div>
          </section>
          <svg
            className="fill-current w-full -mb-1 relative z-40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2469 239"
          >
            <path
              fill="#1ac9e7"
              d="M0 15.446S461-27.74 788.16 30.312c462.18 82.012 732.73 147.47 1196.24 89.548C2177.21 95.767 2469 15.446 2469 15.446V239H0V15.446z"
            ></path>
          </svg>
          <section className="bg-blue py-18 relative z-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-0 items-center text-white px-8 md:px-24 pt-10 pb-16">
              <div>
                <h3 className="text-4xl font-medium">
                  Take your event to the next level.
                </h3>
                <p className="mt-6 text-xl">
                  Have an idea for an event? Maybe a local convention to
                  brainstorm solutions about saving the bees. Or, a global
                  all-female hackathon. Or maybe even a youth environmental
                  summit.
                </p>
                <p className="mt-6 text-xl">
                  We&apos;ve helped students create all of those events, and
                  dozens more. We&apos;re here to provide you with a platform
                  and resources to run any successful event. The best part?
                  It&apos;s completely free—
                  <span className="italic">no fees attached</span>.
                </p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-sm uppercase font-medium pb-6 text-left md:text-center">
                  Our Events are Sponsored By
                </p>
                <ul className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
                  {eventSponsors.map(({ companyName, logo }) => {
                    return (
                      <li data-aos="fade-up" key={companyName}>
                        <div className="w-36">
                          <Image src={logo} alt={`${companyName} logo`} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-blue -mt-1"
            fill="none"
            viewBox="0 0 2568 292"
          >
            <path
              fill="#1ac9e7"
              d="M2568 183.5h-584.5c-272 0-746.21 86.205-1215 108.001C357 291.501 0 222 0 222V0h2568v183.5z"
            ></path>
          </svg>
          <section className="py-20">
            <div className="flex flex-col space-y-5 justify-center px-8 md:px-48 text-center">
              <h2 className="text-blue font-medium text-5xl flex items-center justify-center">
                We <FaHeart size={35} className="mx-3" /> Organizers
              </h2>
              <p className="text-gray text-xl">
                We love working with amazing organizers (like you!) to throw
                dozens of exceptional events every year. Our team has
                cumulatively organized over 150 events— so we really know what
                it&apos;s like to be in your shoes, and we&apos;re here to help.
              </p>
            </div>
            <div className="flex justify-center mx-auto py-8">
              <Carousel slides={CarouselData} />
            </div>
          </section>
          <section className="bg-purplelight space-y-5 py-20">
            <div className="flex flex-col justify-center px-8 md:px-48 text-center space-y-5">
              <h2 className="text-purple text-5xl font-medium">
                A true full-service platform
              </h2>
              <p className="text-gray text-xl">
                Whether you&apos;re looking to run a 20-person meetup or a
                5000-person convention, you can benefit from the Events+
                platform.
              </p>
            </div>
            {/* Badge/Alert thing */}
            <div className="flex justify-center pb-8">
              <div className="mx-8 bg-purple border-purplemedium border-4 rounded-xl w-max py-2 px-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <p className="text-white text-center">
                  NEW: All Hack+ events get access to{" "}
                  <a href="https://stream.club" className="underline">
                    Stream Club
                  </a>
                  , which includes free Zoom Pro.
                </p>
              </div>
            </div>

            <div className="mx-8 md:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Service
                heading="Legal &amp; financial backend"
                description="We're legally structured as a fiscal sponsor, so you reap the benefits of 501(c)(3) nonprofit status—with none of the boring paperwork. Included is free FDIC-insured banking¹ backed by Wells Fargo, and payment processing backed by Stripe."
              >
                <FaFileContract size={30} color="gray" />
              </Service>
              <Service
                heading="Dash"
                description="See your balance and finances in real time, manage event registrations and checkin, generate liability waivers, or even issue reimbursements, checks, and team credit cards. All in one beautifully-designed place."
              >
                <FaTachometerAlt size={30} color="gray" />
              </Service>
              <Service
                heading="Visa credit cards"
                description="Avoid long, complex reimbursement processes. We'll provide unlimited, free Visa credit cards for your team that allow for spending directly from your balance. We'll manage the accounting—just snap a picture of your receipts."
              >
                <FaMoneyBillWave size={30} color="gray" />
              </Service>
              <Service
                heading="Liability waiver management"
                description="We'll automatically handle liability waivers, photo release forms, and other legal stuff. It's all integrated into Dash's registration platform, so you'll never even need to think about boring paperwork. We have your back."
              >
                <FaFeatherAlt size={30} color="gray" />
              </Service>
              <Service
                heading="Event insurance"
                description="We'll cover the costs of event insurance for your event, whether for 20 or 2000 attendees. Our insurance partner provides aggregate coverage of $5 million, and we'll work directly with your venue to ensure that all of their needs are met."
              >
                <FaHouseDamage size={30} color="gray" />
              </Service>
              <Service
                heading="$25k+ in free software"
                description="G Suite (including Gmail, Calendar, Drive) at your custom domain? We got it. AWS credits? You betcha. We're constantly finding new corporate partners to bring you the best software, all for free."
              >
                <FaLayerGroup size={30} color="gray" />
              </Service>
              <Service
                heading="$20k+ in equipment"
                description="Walkie-talkies, power strips, cameras, speakers, microphones, and hundreds of cables. If there's any equipment you need for your event, chances are we have it. We can even be on the ground to help you live stream your event."
              >
                <FaPlug size={30} color="gray" />
              </Service>
              <Service
                heading="Free domain + hosting"
                description="We'll connect you with free hosting for anything—and we'll even pay for your domain name every year. Our team can also provide technical guidance as you build."
              >
                <FaNetworkWired size={30} color="gray" />
              </Service>
              <Service
                heading="24-hour support"
                description="We've redesigned the Events+ program to ensure that each event has a dedicated point-of-contact. We'll always get back to you within 24 hours, and in the week leading up to your event, we'll get back to you within 12 hours."
              >
                <FaHeart size={30} color="gray" />
              </Service>
            </div>
            <div className="text-center mx-8 md:mx-24 pt-16">
              <small className="text-graymed opacity-100">
                ¹Legal note: We are not{" "}
                <span className="font-semibold italic">technically</span> a
                bank, but our fiscal sponsorship service allows you to receive,
                store, and use funds for your event through our account.
              </small>
            </div>
          </section>
          <section className="bg-blue py-8 text-white">
            <div className="mx-8 md:mx-24">
              <div>
                <h2 className="pt-5 pb-10 font-medium">Highlighted Events+</h2>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col justify-center space-y-10 md:space-y-0 md:flex-row md:space-x-8"
              >
                <Highlight
                  src="/TTB_stadium.jpg"
                  purpleBadge="All-Female"
                  greenBadge="Collegiate"
                  heading="Tech Together Boston"
                  href="https://techtogether.io/boston"
                >
                  The world&apos;s largest all-female and non-binary hackathon,
                  at Agganis Arena in Boston.
                </Highlight>
                <Highlight
                  src="/slohacks-venue.jpg"
                  purpleBadge="General"
                  greenBadge="Collegiate"
                  heading="SLOHacks"
                  href="https://www.slohacks.com"
                >
                  500 students came together for 36 hours to build big ideas at
                  Cal Poly SLO.
                </Highlight>
                <Highlight
                  src="/superposition-venue.jpg"
                  purpleBadge="All-Female"
                  greenBadge="high school"
                  heading="Superposition"
                  href="https://superposition.tech"
                >
                  A hackathon bringing together hundreds of female and
                  non-binary Bay Area students.
                </Highlight>
              </div>
            </div>
          </section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-blue -mt-1"
            fill="none"
            viewBox="0 0 2568 292"
          >
            <path
              fill="#1ac9e7"
              d="M2568 183.5h-584.5c-272 0-746.21 86.205-1215 108.001C357 291.501 0 222 0 222V0h2568v183.5z"
            ></path>
          </svg>
          <section className="py-10">
            <div className="text-center">
              <h2 className="text-5xl font-medium pb-6">Why Hack+?</h2>
              <p className="text-gray text-lg mx-8 md:mx-24">
                {" "}
                We offer the most comprehensive fiscal sponsorship program on
                the planet—and it&apos;s{" "}
                <span className="font-medium">completely free</span> for
                students.{" "}
              </p>
            </div>
            <div className="flex justify-center w-full">
              <Table />
            </div>
          </section>
          <svg
            className="fill-current w-full -mb-1"
            viewBox="0 0 2577 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 103S181.5 0 530.5 0C904 0 1326.5 81.672 1757 110.687c137.39 9.26 820 0 820 0V192H0v-89z"
              fill="#F7F5FF"
            />
          </svg>
          <section className="bg-purplelight py-20">
            <div className="mx-8 md:mx-24">
              <div className="flex flex-col md:flex-row md:items-center justify-center">
                <div className="flex flex-col space-y-5">
                  <h2 className="text-black font-medium text-5xl">
                    Run the event of your dreams.
                  </h2>
                  <p className="text-gray text-lg">
                    Over 22,000 students attended over 50 events in our program
                    last year. Join Events+ and grow your event to its full
                    potential.
                  </p>
                  <Link href="/">
                    <a className="text-lg text-purple font-semibold pb-6 md:pb-0">
                      Get Started &rarr;
                    </a>
                  </Link>
                </div>
                <div className={"mx-auto w-10/12"}>
                  <Image className="rounded-xl" src={losAltos2} alt="alt" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
