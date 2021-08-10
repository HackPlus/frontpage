/* eslint-disable no-useless-escape */
import Card from "../components/Card";
import { CarouselData } from "../components/Carousel/CarouselData";
import Carousel from "../components/Carousel/Slider";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { BsDot } from "react-icons/bs";
import Perk from "../components/PerkCard";
import Link from "next/link";
import { FaStripeS, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
import saas1 from "../public/saas-1.svg";
import saas2 from "../public/saas-2.svg";
import saas3 from "../public/saas-3.svg";
import saas4 from "../public/saas-4.svg";
import Image from "next/image";

const corporate = [
  { company: "Google", logo: "/partners/corporate/google.svg" },
  { company: "Microsoft", logo: "/partners/corporate/microsoft.svg" },
  { company: "Amazon", logo: "/partners/corporate/amazon.svg" },
  { company: "Facebook", logo: "/partners/corporate/facebook.svg" },
  { company: "Atlassian", logo: "/partners/corporate/atlassian.svg" },
  { company: "Stripe", logo: "/partners/corporate/stripe.svg" },
  { company: "Salesforce", logo: "/partners/corporate/salesforce.svg" },
  { company: "Twosigma", logo: "/partners/corporate/twosigma.svg" },
  { company: "Vercel", logo: "/partners/corporate/vercel.svg" },
];

const schools = [
  { company: "Stanford", logo: "/partners/university/stanford.svg" },
  { company: "USC", logo: "/partners/university/usc.svg" },
  { company: "Berkeley", logo: "/partners/university/berkeley.svg" },
  { company: "MIT", logo: "/partners/university/mit.svg" },

  { company: "Calpoly SLO", logo: "/partners/university/calpolyslo.svg" },
  { company: "Northeastern", logo: "/partners/university/northeastern.svg" },
  {
    company: "Boston university",
    logo: "/partners/university/bostonuniversity.svg",
  },
  { company: "UPenn", logo: "/partners/university/upenn.svg" },
];

export default function Home() {
  const [countedUp, setCountedUp] = useState(false);
  useEffect(() => {
    console.log(`
    ___  ___  ________  ________  ___  __       
    |\  \|\  \|\   __  \|\   ____\|\  \|\  \     
    \ \  \\\  \ \  \|\  \ \  \___|\ \  \/  /|_   
     \ \   __  \ \   __  \ \  \    \ \   ___  \  
      \ \  \ \  \ \  \ \  \ \  \____\ \  \\ \  \ 
       \ \__\ \__\ \__\ \__\ \_______\ \__\\ \__\
        \|__|\|__|\|__|\|__|\|_______|\|__| \|__|
                                                 
                                                 
      hack+ is a nonprofit accelerator for student-led impacts
                                 
    `);
  });
  return (
    <div>
      <Layout title="Home">
        <main>
          <section className="main-container my-24">
            <div className="main-content">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex flex-col space-y-5 max-w-xl">
                  <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl">
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
                  <p className="text-gray text-lg md:text-xl font-normal">
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
                      <Link href="https://dash.hackplus.services">
                        <a className="text-purple hover:text-gray">
                          Sign in &rarr;
                        </a>
                      </Link>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-left" className="px-8">
                  <Image
                    src={saas3}
                    alt="Person sitting in a chair chilling in at their desk"
                  />
                </div>
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
          <section className="main-container bg-purplelight py-10">
            <div className="main-content">
              <h2 className="text-black pb-7 font-medium">
                We&apos;re a full-spectrum platform that enables students to
                launch startups, nonprofits, and events.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <span data-aos="fade-up">
                  <Card
                    title="Events+"
                    icon="calendar"
                    textcolor="black"
                    fillcolor="green"
                    badgeText="Accepting applications"
                    href="/events"
                    cta="Learn More &rarr;"
                  >
                    Launch events, like hackathons or conferences, using our
                    comprehensive platform. We&apos;ll provide legal backend,
                    banking services, powerful equipment, and more.
                  </Card>
                </span>
                <span data-aos="fade-up" data-aos-delay="300">
                  <Card
                    title="Nonprofits+"
                    icon="users"
                    textcolor="black"
                    fillcolor="green"
                    badgeText="Accepting applications"
                    href="mailto:hello@hackplus.io?subject=Applying for Nonprofits Program"
                    cta="Reach out to apply &rarr;"
                  >
                    Want to have a positive impact on your community or the
                    world around you? We&apos;ll help you launch a nonprofit by
                    providing legal/financial infrastructure, banking, and 501c3
                    status.
                  </Card>
                </span>
                <span data-aos="fade-up" data-aos-delay="600">
                  <Card
                    title="Startups+"
                    icon="playButton"
                    textcolor="white"
                    fillcolor="purple"
                    badgeText="Closed beta"
                    href="mailto:hello@hackplus.io?subject=Applying for Startups Program"
                    cta="Reach out to apply &rarr;"
                  >
                    Students like you are coming up with the next unicorn
                    startup ideas. We&apos;re here to provide the resources,
                    software, and guidance you need to grow a scalable business.
                  </Card>
                </span>
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
          <section className="main-container">
            <div className="main-content">
              <div className="flex flex-col justify-center text-center space-y-5 pt-14">
                <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl mx-auto lg:max-w-lg">
                  For students, by students.
                </h2>
                <p className="text-gray text-lg md:text-xl mx-auto max-w-2xl lg:max-w-3xl">
                  Hack+ is a platform built by high school and college students.
                  We&apos;ve aggregated millions of dollars of resources and
                  even developed entire web and mobile apps to help you launch
                  your dream venture.
                </p>
                <p className="text-gray font-semibold text-lg">
                  We know what it&apos;s like to be a student with a crazy
                  idea—and we&apos;re here to help.{" "}
                </p>
                <div className="pt-8 pb-14">
                  <VisibilitySensor
                    active={!countedUp}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setCountedUp(true);
                      }
                    }}
                  >
                    {({ isVisible }) => (
                      <div className="text-purple text-5xl leading-loose font-semibold">
                        {isVisible ? (
                          <CountUp
                            start={1250000}
                            end={1756382}
                            separator=","
                            suffix="+"
                            prefix="$"
                          />
                        ) : (
                          "$1,250,000+"
                        )}
                      </div>
                    )}
                  </VisibilitySensor>

                  <p className="text-lg text-gray">
                    transacted for our student-run ventures to date
                  </p>
                  <p className="text-xs text-graymed italic">(as of Q4 2019)</p>
                </div>
              </div>
              <div className="flex justify-center pb-8">
                <Carousel slides={CarouselData} />
              </div>
            </div>
          </section>
          <section className="bg-purplelight main-container">
            <div className="main-content">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-16">
                <div data-aos="fade-right" className="md:pr-4">
                  <Image src={saas2} alt="Person pointing at a whiteboard" />
                </div>
                <div>
                  <div className="flex flex-col space-y-3">
                    <h3 className="font-medium pt-8 md:pt-0">
                      Join the Hack+ community.
                    </h3>
                    <p className="text-gray">
                      Students in our programs get access to more than just a
                      platform. You&apos;ll find hundreds of other like-minded,
                      entrepreneurial, and passionate mentors and students
                      waiting to meet you and help your organization grow. Our
                      network also includes the best corporate partners, hoping
                      to help you launch the next big thing.
                    </p>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12"
                  >
                    <span data-aos="fade-left" data-aos-delay="100">
                      <Perk
                        heading="Google"
                        description="Free Google Workspace"
                      >
                        <FaGoogle size={35} color="#7d5fff" />
                      </Perk>
                    </span>
                    <span data-aos="fade-left" data-aos-delay="300">
                      <Perk
                        heading="Amazon Web Services"
                        description="$5k in credits"
                      >
                        <FaAws size={35} color="#7d5fff" />
                      </Perk>
                    </span>
                    <span data-aos="fade-left" data-aos-delay="200">
                      <Perk
                        heading="Stripe"
                        description="Instant Atlas access, $20k in credits"
                      >
                        <FaStripeS size={35} color="#7d5fff" />
                      </Perk>
                    </span>
                    <span data-aos="fade-left" data-aos-delay="400">
                      <Perk heading="Microsoft" description="Azure credits">
                        <FaMicrosoft size={35} color="#7d5fff" />
                      </Perk>
                    </span>
                  </div>
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
          <section className="flex flex-col justify-center text-center py-20 main-container">
            <div className="main-content">
              <div>
                <h2 className="md:text-5xl lg:text-6xl text-4xl pb-6 font-medium max-w-2xl mx-auto">
                  Powered by industry-leading partners.
                </h2>
                <p className="text-gray text-lg max-w-3xl mx-auto">
                  Our community brings the brightest young minds from leading
                  institutions together with the world&apos;s most
                  forward-thinking companies, creating a mutual partnership
                  that&apos;s fostering a new generation of innovators.
                </p>
              </div>
              <p className="text-gray text-xl pt-14 py-6">
                Corporate partners include
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center place-items-center">
                {corporate.map(({ company, logo }) => (
                  <div key={company} className="mx-auto">
                    <img src={logo} alt={company} className="h-14 md:h-16" />
                  </div>
                ))}
              </div>
              <p className="text-gray text-xl pt-14 py-6">Schools include</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center place-items-center">
                {schools.map(({ company, logo }) => (
                  <div key={company} className="mx-auto">
                    <img src={logo} alt={company} className="h-14 md:h-16" />
                  </div>
                ))}
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
          <section className="bg-purplelight pb-24 pt-10 main-container">
            <div className="main-content">
              <div className="flex flex-col md:flex-row items-center">
                <div>
                  <h2 className="leading-loose font-medium">
                    Get started in days.
                  </h2>
                  <ol className="space-y-14">
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
                      description="That's it! We'll hook you up with everything you need to build your company."
                    />
                  </ol>
                </div>
                <div
                  data-aos="fade-left"
                  className="mx-20 pt-5 md:pt-0 md:mx-5"
                >
                  <Image
                    src={saas4}
                    alt="Two people working together on a computer screen"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="pt-16">
            <div
              data-aos="fade-up"
              className="flex justify-center relative mx-8 z-10 sm:max-w-lg sm:mx-auto"
            >
              <Image
                src={saas1}
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
            <h2 className="text-white text-center pb-10 font-medium text-2xl sm:text-3xl md:text-4xl lg:max-w-xl xl:max-w-lg mx-auto">
              Launch your dream organization now.
            </h2>
            <div className="flex flex-col justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
              <input
                className="px-4 py-2 rounded-lg border-graylight w-96 mx-auto md:mx-0 md:text-xl"
                placeholder="Email Address"
                type="email"
              />
              <span className="mx-auto md:mx-0">
                <Button type={3} href="mailto:hello@hackplus.io">
                  Get Started
                </Button>
              </span>
            </div>
            <p className="text-graylight text-sm text-center pt-6">
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
    <li data-aos="fade-up" className="flex items-start space-x-6">
      <div className="p-1 rounded-full bg-purplemedium bg-opacity-30 w-min">
        <BsDot size={40} className="text-purple" />
      </div>
      <div>
        <h5 className="leading-6 pb-3 font-medium">{heading}</h5>
        <p className="text-gray">{description}</p>
      </div>
    </li>
  );
};
