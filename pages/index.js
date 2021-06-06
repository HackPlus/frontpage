import Card from "../components/Card";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Perk from "../components/PerkCard";
import { FaStripeS, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <main>
          {/* <svg
            className="fill-current w-full -mb-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2468 184"
          >
            <path
              fill="#fff"
              d="M2468 85.292S2294.18 184 1959.94 184c-357.7 0-762.33-78.269-1174.624-106.075C653.734 69.051 0 77.925 0 77.925V0h2468v85.292z"
            ></path>
          </svg> */}
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
                <p className="text-purple text-5xl leading-loose">
                  $1,756,382+
                </p>
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
          <section>
            <div>
              <h2>Powered by industry-leading partners.</h2>
              <p>
                Our community brings the brightest young minds from leading
                institutions together with the world&apos;s most
                forward-thinking companies, creating a mutual partnership
                that&apos;s fostering a new generation of innovators.
              </p>
            </div>
            <p>Corporate partners include</p>
            <div></div>
            <p>Schools include</p>
            <div></div>
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
          <section className="bg-purplelight">
            <h2>Get started in days.</h2>
            <div className="grid grid-cols-2 md:grid-cols-2">
              <div>
                <p>list</p>
              </div>
              <div>
                <img
                  src=""
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
