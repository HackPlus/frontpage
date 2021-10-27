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
import techTogether1 from "../public/techtogether-1.jpg";
import ttb2018 from "../public/TTB-2018.jpg";

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
          <section className="relative overflow-hidden main-container bg-events-cover bg-cover bg-center bg-purple bg-blend-multiply h-screen -mb-48 md:-mb-48 lg:-mb-64">
            <div className="flex items-center h-full">
              <div
                data-aos="fade-up"
                className="main-content text-white space-y-8 py-6 md:py-14 mb-48 md:mb-48 lg:mb-64"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mt-4">
                  Events+
                </h1>
                <p className="text-lg md:text-xl md:w-9/12">
                  Run the event of your dreams using the world&apos;s most
                  comprehensive launchpad for hackathons, conferences, meetups,
                  and more.
                </p>
                <Button type={3} href="mailto:events@hackplus.io" external>
                  Get Started
                </Button>
              </div>
            </div>
            <svg
              className="bg-primary-3 absolute -mt-32 -mr-2 -right-96 -top-96
               text-blue hidden md:block"
              fill="currentColor"
              height="830"
              viewBox="0 0 183 166"
              width="915"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.34805 65.6701C4.02805 62.9901 5.56905 60.211 7.41605 57.652C10.82 52.939 14.734 48.636 18.627 44.322C21.811 40.794 24.9 37.181 28.08 33.65C30.619 30.831 32.879 27.721 36.068 25.554C39.035 23.539 42.066 21.62 45.039 19.616C46.439 18.674 47.812 17.682 49.123 16.624C51.525 14.687 54.035 12.972 56.996 11.982C57.787 11.717 58.5371 11.285 59.2561 10.847C63.3111 8.36802 67.328 5.82603 71.408 3.38703C73.033 2.41503 74.7361 1.53704 76.4881 0.824045C78.4981 0.00604486 80.615 -0.0229468 82.701 0.670053C84.805 1.36905 86.912 2.05405 88.994 2.81205C90.217 3.25705 91.426 3.55605 92.701 3.15705C94.228 2.67905 95.5971 3.14904 96.9921 3.72804C99.4631 4.75604 101.484 6.48703 103.691 7.92603C104.574 8.50203 105.353 9.24603 106.257 9.77903C107.429 10.469 108.624 11.197 109.905 11.604C112.95 12.57 115.751 13.945 118.466 15.634C124.386 19.315 130.482 22.6901 137.122 24.9461C141.015 26.2681 144.968 27.425 148.802 28.897C153.036 30.522 157.224 32.289 161.009 34.866C162.577 35.934 164.195 36.928 165.802 37.937C171.439 41.473 175.253 46.641 178.368 52.335C180.1 55.5 180.626 59.127 181.403 62.633C182.262 66.502 182.116 70.416 181.868 74.311C181.587 78.733 181.095 83.142 180.665 87.554C180.462 89.618 179.534 91.337 178.192 92.927C175.192 96.484 172.45 100.218 170.514 104.504C169.549 106.642 168.932 108.863 168.332 111.109C167.514 114.168 166.631 117.2 165.352 120.117C163.209 124.994 160.215 129.302 156.885 133.411C156.498 133.89 156.188 134.472 155.996 135.057C155.039 137.993 153.416 140.578 151.975 143.28C149.35 148.2 145.637 152.224 142.088 156.405C141.611 156.967 141.123 157.548 140.539 157.985C136.902 160.704 133.254 163.385 128.863 164.86C126.806 165.552 124.752 165.891 122.634 165.534C120.347 165.149 117.966 164.899 115.843 164.048C113.527 163.117 111.435 161.605 109.294 160.267C107.773 159.316 106.386 158.149 104.851 157.226C101.417 155.162 97.923 153.198 94.464 151.177C93.37 150.539 92.3001 149.863 91.2301 149.187C90.7851 148.904 90.4021 148.509 89.9331 148.281C85.2771 146.008 81.023 143.033 76.49 140.568C71.861 138.051 67.103 135.705 61.888 134.538C61.374 134.423 60.837 134.338 60.361 134.126C54.332 131.453 47.812 130.439 41.547 128.568C37.799 127.449 34.072 126.33 30.547 124.58C26.953 122.795 23.2871 121.148 19.6391 119.475C16.4031 117.991 13.774 115.777 11.504 113.057C9.25404 110.358 7.32204 107.492 6.06804 104.188C4.82404 100.913 3.92305 97.569 3.70305 94.057C3.63705 93.004 3.53704 91.946 3.33804 90.912C2.34204 85.728 1.53504 80.525 0.926042 75.276C0.531042 71.872 1.00605 68.7731 2.34805 65.6701ZM57.891 130.289C57.84 130.228 57.791 130.168 57.741 130.107C57.682 130.158 57.5811 130.203 57.5751 130.257C57.5711 130.312 57.657 130.416 57.714 130.422C57.766 130.429 57.83 130.338 57.891 130.289ZM111.725 160.38C111.678 160.322 111.635 160.227 111.582 160.22C111.531 160.213 111.469 160.302 111.412 160.349C111.459 160.406 111.502 160.502 111.555 160.507C111.608 160.512 111.668 160.426 111.725 160.38ZM141.531 85.2951L141.57 85.501L141.736 85.369L141.531 85.2951Z"></path>
            </svg>
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
          <section className="main-container bg-blue py-18 relative z-40">
            <div className="main-content grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-0 items-center text-white pt-10 pb-16">
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
                <ul className="w-max mx-auto grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
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
          <section className="main-container py-20">
            <div className={"main-content"}>
              <div className="flex flex-col space-y-5 justify-center px-8 md:px-48 text-center">
                <h2 className="text-blue font-medium text-5xl flex items-center justify-center">
                  We <FaHeart size={35} className="mx-3" /> Organizers
                </h2>
                <p className="text-gray text-xl">
                  We love working with amazing organizers (like you!) to throw
                  dozens of exceptional events every year. Our team has
                  cumulatively organized over 150 events— so we really know what
                  it&apos;s like to be in your shoes, and we&apos;re here to
                  help.
                </p>
              </div>
              <div className="flex justify-center mx-auto py-8">
                <Carousel slides={CarouselData} />
              </div>
            </div>
          </section>
          <section className="bg-purplelight space-y-5 py-20 main-container">
            <div className="main-content">
              <div className="flex flex-col justify-center text-center space-y-5">
                <h2 className="text-purple text-5xl font-medium xl:max-w-lg mx-auto">
                  A true full-service platform
                </h2>
                <p className="text-gray text-xl max-w-2xl mx-auto">
                  Whether you&apos;re looking to run a 20-person meetup or a
                  5000-person convention, you can benefit from the Events+
                  platform.
                </p>
              </div>
              {/* Badge/Alert thing */}
              <div className="flex justify-center pb-8 mt-4">
                <div className="mx-8 bg-purple border-purplemedium border-4 rounded-xl w-max py-2 px-24">
                  <p className="text-white text-center font-medium">
                    NEW: All Hack+ events get a free{" "}
                    <a href="https://stream.club" className="underline">
                      Stream Club
                    </a>{" "}
                    Pro membership.
                  </p>
                </div>
              </div>

              <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Service
                  heading="Legal &amp; financial backend"
                  description="We're legally structured as a fiscal sponsor, so you reap the benefits of 501(c)(3) nonprofit status—with none of the boring paperwork. Included is free FDIC-insured banking¹ backed by Wells Fargo, and payment processing backed by Stripe."
                >
                  <FaFileContract size={36} color="gray" />
                </Service>
                <Service
                  heading="Dash"
                  description="See your balance and finances in real time, manage event registrations and checkin, generate liability waivers, or even issue reimbursements, checks, and team credit cards. All in one beautifully-designed place."
                >
                  <FaTachometerAlt size={36} color="gray" />
                </Service>
                <Service
                  heading="Visa credit cards"
                  description="Avoid long, complex reimbursement processes. We'll provide unlimited, free Visa credit cards for your team that allow for spending directly from your balance. We'll manage the accounting—just snap a picture of your receipts."
                >
                  <FaMoneyBillWave size={36} color="gray" />
                </Service>
                <Service
                  heading="Liability waiver management"
                  description="We'll automatically handle liability waivers, photo release forms, and other legal stuff. It's all integrated into Dash's registration platform, so you'll never even need to think about boring paperwork. We have your back."
                >
                  <FaFeatherAlt size={36} color="gray" />
                </Service>
                <Service
                  heading="Event insurance"
                  description="We'll cover the costs of event insurance for your event, whether for 20 or 2000 attendees. Our insurance partner provides aggregate coverage of $5 million, and we'll work directly with your venue to ensure that all of their needs are met."
                >
                  <FaHouseDamage size={36} color="gray" />
                </Service>
                <Service
                  heading="$25k+ in free software"
                  description="G Suite (including Gmail, Calendar, Drive) at your custom domain? We got it. AWS credits? You betcha. We're constantly finding new corporate partners to bring you the best software, all for free."
                >
                  <FaLayerGroup size={36} color="gray" />
                </Service>
                <Service
                  heading="$20k+ in equipment"
                  description="Walkie-talkies, power strips, cameras, speakers, microphones, and hundreds of cables. If there's any equipment you need for your event, chances are we have it. We can even be on the ground to help you live stream your event."
                >
                  <FaPlug size={36} color="gray" />
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
                  <sup>1</sup> Legal note: We are not <em>technically</em> a
                  bank, but our fiscal sponsorship service allows you to
                  receive, store, and use funds for your event through our
                  account.
                </small>
              </div>
            </div>
          </section>
          <section className="bg-blue py-8 text-white main-container">
            <div className="main-content">
              <div>
                <h2 className="pt-5 pb-10 font-medium">Highlighted Events+</h2>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col justify-center space-y-10 md:space-y-0 md:flex-row md:space-x-4"
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
          <section className="bg-purplelight py-20 main-container">
            <div className="main-content flex flex-col md:flex-row items-center w-full justify-around">
              <div className="flex flex-col space-y-5 max-w-sm">
                <h2 className="text-black font-medium text-6xl">
                  Run the event of your dreams.
                </h2>
                <p className="text-gray text-xl">
                  Over 22,000 students attended over 50 events in our program
                  last year. Join Events+ and grow your event to its full
                  potential.
                </p>
                <a
                  href="mailto:events@hackplus.io"
                  className="text-lg text-purple hover:text-indigo font-semibold pb-6 md:pb-0"
                >
                  Get Started &rarr;
                </a>
              </div>
              <div className="relative max-w-sm">
                <div
                  className={
                    "mx-auto hover:-rotate-2 transform origin-bottom-left duration-200"
                  }
                >
                  <Image className="rounded-xl" src={losAltos2} alt="alt" />
                </div>
                <div className="hidden lg:block absolute -top-8 -right-16 rotate-6 duration-200 hover:rotate-12 origin-right transform w-4/5">
                  <Image className="rounded-xl" src={techTogether1} />
                </div>
                <div className="hidden lg:block absolute -bottom-12 -left-12 -rotate-6 duration-200 hover:-rotate-12 origin-left transform w-4/5">
                  <Image className="rounded-xl" src={ttb2018} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
