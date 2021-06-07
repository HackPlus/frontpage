import Card from "../components/Card";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { BsDot } from "react-icons/bs";
import Perk from "../components/PerkCard";
import Link from "next/link";
import { FaStripeS, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import CountUp from "react-countup";

const corporate = [
  { company: "Amazon", logo: "/partners/corporate/amazon.svg" },
  { company: "Atlassian", logo: "/partners/corporate/atlassian.svg" },
  { company: "Facebook", logo: "/partners/corporate/facebook.svg" },
  { company: "Google", logo: "/partners/corporate/google.svg" },
  { company: "Microsoft", logo: "/partners/corporate/microsoft.svg" },
  { company: "Salesforce", logo: "/partners/corporate/salesforce.svg" },
  { company: "Stripe", logo: "/partners/corporate/stripe.svg" },
  { company: "Twosigma", logo: "/partners/corporate/twosigma.svg" },
]

const schools = [
  { company: "Berkeley", logo: "/partners/university/berkeley.svg" },
  { company: "Boston university", logo: "/partners/university/bostonuniversity.svg" },
  { company: "Calpoly SLO", logo: "/partners/university/calpolyslo.svg" },
  { company: "MIT", logo: "/partners/university/mit.svg" },
  { company: "Northeastern", logo: "/partners/university/northeastern.svg" },
  { company: "Stanford", logo: "/partners/university/stanford.svg" },
  { company: "USC", logo: "/partners/university/usc.svg" },
  { company: "UPenn", logo: "/partners/university/upenn.svg" },
]


export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <main>
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="flex flex-col space-y-5 ml-8 md:ml-16">
                <h1>
                  We make it easy for students to create <br />
                  <span>
                    <ReactTypingEffect
                      text={[
                        "innovative startups.",
                        "impactful nonprofits.",
                        "amazing events.",
                        "the next big thing.",
                      ]}
                      eraseSpeed="100"
                      speed="100"
                      typingDelay="300"
                    />
                  </span>
                </h1>
                <p className="text-gray text-lg">
                  Hack+ is an accessible nonprofit accelerator for student-led
                  impacts. In other words: we&apos;re here to help students
                  change the world.
                </p>
                <div className="flex space-x-3">
                  <Button href="/">Reach Out</Button>
                  <Button type={2} href="/">
                    Donate
                  </Button>
                </div>
                <a className="text-graymed text-sm">
                  Already a Hack+ member?{" "}
                  <span>
                    <Link href="/">
                      <a className="text-purple hover:text-gray">Sign In</a>
                    </Link>
                  </span>
                </a>
              </div>
              <div className="p-16">
                <img
                  src="/saas-3.svg"
                  alt="Person sitting in a chair chilling in at their desk"
                />
              </div>
            </div>
          </section>
          <svg
            className="fill-current w-full -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2469 239"
          >
            <path
              fill="#F7F5FF"
              d="M0 15.446S461-27.74 788.16 30.312c462.18 82.012 732.73 147.47 1196.24 89.548C2177.21 95.767 2469 15.446 2469 15.446V239H0V15.446z"
            ></path>
          </svg>
          <section className="px-8 md:px-24 lg:px-40 bg-purplelight py-10">
            <h2 className="text-black pb-7">
              We&apos;re a full-spectrum platform that enables students to
              launch startups, nonprofits, and events.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Card
                title="Events+"
                icon="calendar"
                textcolor="black"
                fillcolor="green"
                badgeText="Accepting applications"
                href="/events"
                cta="Learn more &rarr;"
              >
                Launch events, like hackathons or conferences, using our
                comprehensive platform. We&apos;ll provide legal backend,
                banking services, powerful equipment, and more.
              </Card>
              <Card
                title="Nonprofits+"
                icon="users"
                textcolor="black"
                fillcolor="green"
                badgeText="Accepting applications"
                href="mailto:hello@hackplus.io?subject=Applying for Nonprofits Program"
                cta="Reach out to apply"
              >
                Want to have a positive impact on your community or the world
                around you? We&apos;ll help you launch a nonprofit by providing
                legal/financial infrastructure, banking, and 501c3 status.
              </Card>
              <Card
                title="Startups+"
                icon="playButton"
                textcolor="white"
                fillcolor="purple"
                badgeText="Closed beta"
                href="mailto:hello@hackplus.io?subject=Applying for Startups Program"
                cta="Reach out to apply"
              >
                Students like you are coming up with the next unicorn startup
                ideas. We&apos;re here to provide the resources, software, and
                guidance you need to grow a scalable business.
              </Card>
            </div>
          </section>
          <svg
            className="fill-current w-full transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2469 239"
          >
            <path
              fill="#F7F5FF"
              d="M0 15.446S461-27.74 788.16 30.312c462.18 82.012 732.73 147.47 1196.24 89.548C2177.21 95.767 2469 15.446 2469 15.446V239H0V15.446z"
            ></path>
          </svg>
          <section>
            <div className="flex flex-col justify-center text-center space-y-5 pt-14">
              <h2>For students, by students.</h2>
              <p className="text-gray text-lg">
                Hack+ is a platform built by high school and college students.
                We&apos;ve aggregated millions of dollars of resources and even
                developed entire web and mobile apps to help you launch your
                dream venture.
              </p>
              <p className="text-gray font-semibold text-lg">
                We know what it&apos;s like to be a student with a crazy
                idea—and we&apos;re here to help.{" "}
              </p>
              <div className="pt-8 pb-14">
                <CountUp
                  end={1756382}
                  separator=","
                  suffix="+"
                  prefix="$"
                  className="text-purple text-5xl leading-loose font-semibold"
                />

                <p className="text-lg text-gray">
                  transacted for our student-run ventures to date
                </p>
                <p className="text-xs text-graymed italic">(as of Q4 2019)</p>
              </div>
            </div>
            <div className="border h-72 w-1/2 mx-auto">
              <p className="text-center">carousel</p>
            </div>
          </section>
          <section className="bg-purplelight">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-16 md:mx-24 pt-16">
              <div className="md:px-4 px-24">
                <img src="/saas-2.svg" alt="Person pointing at a whiteboard" />
              </div>
              <div>
                <div className="flex flex-col space-y-3">
                  <h3 className="font-medium">Join the Hack+ community.</h3>
                  <p className="text-gray">
                    Students in our programs get access to more than just a
                    platform. You&apos;ll find hundreds of other like-minded,
                    entrepreneurial, and passionate mentors and students waiting
                    to meet you and help your organization grow. Our network
                    also includes the best corporate partners, hoping to help
                    you launch the next big thing.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12">
                  <Perk
                    heading="Google"
                    description="Free G Suite, $3K in cloud credits"
                  >
                    <FaGoogle size={35} color="#7d5fff" />
                  </Perk>
                  <Perk
                    heading="Stripe"
                    description="Instant Atlas access, $20k in credits"
                  >
                    <FaStripeS size={35} color="#7d5fff" />
                  </Perk>
                  <Perk
                    heading="Amazon Web Services"
                    description="$5k in credits"
                  >
                    <FaAws size={35} color="#7d5fff" />
                  </Perk>

                  <Perk
                    heading="Microsoft"
                    description="Azure credits, Office 365"
                  >
                    <FaMicrosoft size={35} color="#7d5fff" />
                  </Perk>
                </div>
              </div>
            </div>
          </section>
          <svg
            className="fill-current w-full transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2469 239"
          >
            <path
              fill="#F7F5FF"
              d="M0 15.446S461-27.74 788.16 30.312c462.18 82.012 732.73 147.47 1196.24 89.548C2177.21 95.767 2469 15.446 2469 15.446V239H0V15.446z"
            ></path>
          </svg>
          <section className="flex flex-col justify-center text-center py-20 mx-8 md:mx-24">
            <div>
              <h2 className="text-5xl pb-6 md:mx-8">Powered by industry-leading partners.</h2>
              <p className="text-gray text-lg">
                Our community brings the brightest young minds from leading
                institutions together with the world&apos;s most
                forward-thinking companies, creating a mutual partnership
                that&apos;s fostering a new generation of innovators.
              </p>
            </div>
            <p className="text-gray text-lg pt-8 py-6">Corporate partners include</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {corporate.map(({ company, logo }) => (
                <div key={company} className="w-32">
                  <img src={logo} alt={company} />
                </div>
              ))}
            </div>
            <p className="text-gray text-lg pt-8 py-6">Schools include</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {schools.map(({ company, logo }) => (
                <div key={company} className="w-32">
                  <img src={logo} alt={company} />
                </div>
              ))}
            </div>
          </section>
          <svg
            className="fill-current w-full -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2469 239"
          >
            <path
              fill="#F7F5FF"
              d="M0 15.446S461-27.74 788.16 30.312c462.18 82.012 732.73 147.47 1196.24 89.548C2177.21 95.767 2469 15.446 2469 15.446V239H0V15.446z"
            ></path>
          </svg>
          <section className="bg-purplelight pb-24 pt-10">
            <h2 className="leading-loose mx-8 md:mx-24">Get started in days.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-8 md:mx-24">
              <div>
                <ol className="space-y-10">
                  <Step
                    heading="1. Reach out"
                    description="Apply for one of our programs by reaching out to our team."
                  />
                  <Step
                    heading="2. Fill out some simple paperwork"
                    description="Once accepted, fill out some basic paperwork so we can make things official."
                  />
                  <Step
                    heading="3. Get resources and launch your ventures"
                    description="Apply for one of our programs by reaching out to our team."
                  />
                </ol>
              </div>
              <div className="mx-20 pt-5 md:pt-0 md:mx-5">
                <img
                  src="/saas-4.svg"
                  alt="Two people working together on a computer screen"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-center relative mx-8 md:mx-24 z-10">
              <img
                src="/saas-1.svg"
                alt="Person looking at tablet screen while pointing in the northeast direction"
              />
            </div>
          </section>
          <svg
            className="fill-current w-full -mb-1 -mt-24 z-0"
            viewBox="0 0 2577 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 103S181.5 0 530.5 0C904 0 1326.5 81.672 1757 110.687c137.39 9.26 820 0 820 0V192H0v-89z"
              fill="#7d5fff"
            />
          </svg>
          <section className="bg-purple pt-16 pb-16">
            <h2 className="text-white text-center">
              Launch your dream organization now.
            </h2>
            <div className="flex flex-col md:flex-row justify-center mx-auto md:space-x-4">
              <input
                className="px-2 py-2 rounded-lg border-graylight w-96"
                placeholder="Email Address"
                type="email"
              />
              <Button type={3} href="mailto:hello@hackplus.io">
                Get Started
              </Button>
            </div>
            <p className="text-graylight text-xs text-center pt-6">
              Let us know what you&apos;re interested in starting, and
              we&apos;ll get talking!
            </p>
          </section>
        </main>
      </Layout>
    </div>
  );
}

const Step = ({ heading, description }) => {
  return (
    <li className="flex items-center space-x-6">
      <div className="p-1 rounded-full bg-purplemedium bg-opacity-50 w-min">
        <BsDot size={40} className="text-purple" />
      </div>
      <div>
        <h5 className="leading-6 pb-3">{heading}</h5>
        <p className="text-gray">{description}</p>
      </div>
    </li>
  );
};
