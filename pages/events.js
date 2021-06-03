import Link from "next/link"
import Button from "../components/Button";
import Layout from "../components/Layout";
import Service from "../components/Service";

import {
  FaTachometerAlt,
  FaFileContract,
  FaHeart,
  FaPlug,
  FaNetworkWired,
  FaMoneyBillWave,
  FaFeatherAlt,
  FaHouseDamage,
  FaLayerGroup
} from "react-icons/fa";
import Highlight from "../components/Highlight";

const eventSponsors = [
  {
    companyName: "Amazon",
    logo: "/logos/amazon.svg",
  },
];

export default function Events() {
  return (
    <div>
      <Layout title="Events+">
        <main>
          <section>
            <img
              alt="Image"
              className="bg-image blend-mode-multiply"
              src="/ttbstadium_flip.jpg"
            />

            <div>
              <h1>Events+</h1>
              <p className="mb">
                Run the event of your dreams using the world&apos;s most
                comprehensive launchpad for hackathons, conferences, meetups,
                and more.
              </p>
              <Button type={3} href="mailto:hello@hackplus.io">
                Get Started
              </Button>
            </div>

            <div className="decoration-wrapper">
              <div
                className="decoration right top scale-5 d-none d-md-block"
                data-jarallax-element="-100 100"
              >
                <svg
                  className="bg-blue"
                  fill="none"
                  height="166"
                  viewBox="0 0 183 166"
                  width="183"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.34805 65.6701C4.02805 62.9901 5.56905 60.211 7.41605 57.652C10.82 52.939 14.734 48.636 18.627 44.322C21.811 40.794 24.9 37.181 28.08 33.65C30.619 30.831 32.879 27.721 36.068 25.554C39.035 23.539 42.066 21.62 45.039 19.616C46.439 18.674 47.812 17.682 49.123 16.624C51.525 14.687 54.035 12.972 56.996 11.982C57.787 11.717 58.5371 11.285 59.2561 10.847C63.3111 8.36802 67.328 5.82603 71.408 3.38703C73.033 2.41503 74.7361 1.53704 76.4881 0.824045C78.4981 0.00604486 80.615 -0.0229468 82.701 0.670053C84.805 1.36905 86.912 2.05405 88.994 2.81205C90.217 3.25705 91.426 3.55605 92.701 3.15705C94.228 2.67905 95.5971 3.14904 96.9921 3.72804C99.4631 4.75604 101.484 6.48703 103.691 7.92603C104.574 8.50203 105.353 9.24603 106.257 9.77903C107.429 10.469 108.624 11.197 109.905 11.604C112.95 12.57 115.751 13.945 118.466 15.634C124.386 19.315 130.482 22.6901 137.122 24.9461C141.015 26.2681 144.968 27.425 148.802 28.897C153.036 30.522 157.224 32.289 161.009 34.866C162.577 35.934 164.195 36.928 165.802 37.937C171.439 41.473 175.253 46.641 178.368 52.335C180.1 55.5 180.626 59.127 181.403 62.633C182.262 66.502 182.116 70.416 181.868 74.311C181.587 78.733 181.095 83.142 180.665 87.554C180.462 89.618 179.534 91.337 178.192 92.927C175.192 96.484 172.45 100.218 170.514 104.504C169.549 106.642 168.932 108.863 168.332 111.109C167.514 114.168 166.631 117.2 165.352 120.117C163.209 124.994 160.215 129.302 156.885 133.411C156.498 133.89 156.188 134.472 155.996 135.057C155.039 137.993 153.416 140.578 151.975 143.28C149.35 148.2 145.637 152.224 142.088 156.405C141.611 156.967 141.123 157.548 140.539 157.985C136.902 160.704 133.254 163.385 128.863 164.86C126.806 165.552 124.752 165.891 122.634 165.534C120.347 165.149 117.966 164.899 115.843 164.048C113.527 163.117 111.435 161.605 109.294 160.267C107.773 159.316 106.386 158.149 104.851 157.226C101.417 155.162 97.923 153.198 94.464 151.177C93.37 150.539 92.3001 149.863 91.2301 149.187C90.7851 148.904 90.4021 148.509 89.9331 148.281C85.2771 146.008 81.023 143.033 76.49 140.568C71.861 138.051 67.103 135.705 61.888 134.538C61.374 134.423 60.837 134.338 60.361 134.126C54.332 131.453 47.812 130.439 41.547 128.568C37.799 127.449 34.072 126.33 30.547 124.58C26.953 122.795 23.2871 121.148 19.6391 119.475C16.4031 117.991 13.774 115.777 11.504 113.057C9.25404 110.358 7.32204 107.492 6.06804 104.188C4.82404 100.913 3.92305 97.569 3.70305 94.057C3.63705 93.004 3.53704 91.946 3.33804 90.912C2.34204 85.728 1.53504 80.525 0.926042 75.276C0.531042 71.872 1.00605 68.7731 2.34805 65.6701ZM57.891 130.289C57.84 130.228 57.791 130.168 57.741 130.107C57.682 130.158 57.5811 130.203 57.5751 130.257C57.5711 130.312 57.657 130.416 57.714 130.422C57.766 130.429 57.83 130.338 57.891 130.289ZM111.725 160.38C111.678 160.322 111.635 160.227 111.582 160.22C111.531 160.213 111.469 160.302 111.412 160.349C111.459 160.406 111.502 160.502 111.555 160.507C111.608 160.512 111.668 160.426 111.725 160.38ZM141.531 85.2951L141.57 85.501L141.736 85.369L141.531 85.2951Z"
                    fill="color"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="divider flip-x" id="intro">
              <svg
                className="bg-blue w-full "
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
          </section>
          <div className="grid grid-cols-2 bg-blue text-white px-8 md:px-24">
            <div>
              <h3 className="leading-loose">
                Take your event to the next level.
              </h3>
              <p className="mt-6">
                Have an idea for an event? Maybe a local convention to
                brainstorm solutions about saving the bees. Or, a global
                all-female hackathon. Or maybe even a youth environmental
                summit.
              </p>
              <p className="mt-6">
                We&apos;ve helped students create all of those events, and
                dozens more. We&apos;re here to provide you with a platform and
                resources to run any successful event. The best part? It&apos;s
                completely free—no fees attached.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm uppercase">Our Events are Sponsored By</p>
              <ul>
                {eventSponsors.map(({ companyName, logo }) => {
                  return (
                    <li key={companyName}>
                      <img src={logo} alt={` logo`} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <section>
            <div className="flex flex-col space-y-5 justify-center px-8 md:px-48 text-center">
              <h2 className="text-blue">We &hearts; Organizers</h2>
              <p className="text-gray">
                We love working with amazing organizers (like you!) to throw
                dozens of exceptional events every year. Our team has
                cumulatively organized over 150 events— so we really know what
                it&apos;s like to be in your shoes, and we&apos;re here to help.
              </p>
            </div>
            <div>carousel</div>
          </section>
          <section className="bg-purplelight space-y-5 py-8">
            <div className="flex flex-col justify-center px-8 md:px-48 text-center space-y-5">
              <h2 className="text-purple">A true full-service platform</h2>
              <p className="text-gray">
                Whether you&apos;re looking to run a 20-person meetup or a
                5000-person convention, you can benefit from the Events+
                platform.
              </p>
            </div>
            {/* Badge/Alert thing */}
            <div className="flex justify-center pb-8">
              <div className="bg-purple border-purplemedium border-4 rounded-lg w-9/12 p-1 px-2">
                <p className="text-white text-center">
                  NEW: All Hack+ events get access to{" "}
                  <a href="https://stream.club" className="underline">
                    Stream Club
                  </a>
                  , which includes free Zoom Pro.
                </p>
              </div>
            </div>

            <div className="mx-8 md:mx-24 grid grid-cols-3 gap-8">
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
              <small className="text-graymed opacity-100">¹Legal note: We are not <span className="font-semibold italic">technically</span> a bank, but our fiscal sponsorship service allows you to receive, store, and use funds for your event through our account.</small>
            </div>
          </section>
          <section className="bg-blue py-8 text-white">
            <div className="mx-8 md:mx-24">
              <div>
                <h2 className="py-5">Highlighted Events+</h2>
              </div>
              <div className="flex flex-col justify-center md:flex-row md:space-x-8">
                <Highlight />
                <Highlight />
                <Highlight />
              </div>
            </div>
          </section>
          <section>
            <div className="text-center">
              <h2>Why Hack+?</h2>
              <p className="text-gray"> We offer the most comprehensive fiscal sponsorship program on the planet—and it&apos;s <span className="font-bold">completely free</span> for students. </p>
            </div>
            <div>how the heck do i do this table</div>
          </section>
          <section className="bg-purplelight">
            <div className="mx-8 md:mx-24">
              <div className="flex flex-col md:flex-row md:items-center justify-center">
                <div className="flex flex-col space-y-5">
                  <h2 className="text-black">Run the event of your dreams.</h2>
                  <p className="text-gray">Over 22,000 students attended over 50 events in our program last year. Join Events+ and grow your event to its full potential.</p>
                  <Link href="/"><a className="text-base text-purple font-semibold">Get Started</a></Link>
                </div>
                <div className="hover:transform hover:rotate-6 transition duration-300 ease-in-out">
                  <img className="rounded-xl w-3/4 justify-end " src="/losaltos-2.jpg" alt="alt" />
                </div>
              </div>
            </div>
          </section>

        </main>
      </Layout>
    </div>
  );
}
