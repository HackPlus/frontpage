import CountUp from "react-countup";
import Badge from "../components/Badge";
import Layout from "../components/Layout";
import Team from "../components/Team";

export default function About() {
  return (
    <div>
      <Layout title="About">
        <main>
          <section className="bg-about-cover bg-cover bg-purple bg-blend-multiply h-96 -mb-10 md:-mb-24">
            <div
              data-aos="fade-up"
              className="text-white space-y-5 mx-12 pt-20 md:mx-24"
            >
              <h1 className="font-medium">About Hack+</h1>
              <p className="text-xl">
                We&apos;re a 501(c)(3) nonprofit that&apos;s looking to help
                students change the world.
              </p>
            </div>
          </section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2568 292"
            className="w-full fill-current relative z-20 -mb-2"
          >
            <path
              fill="#ffffff"
              d="M0 70.001S121.5 171.5 577.5 171.5c241.837 0 753.21-149.204 1222-171C2211 .5 2568 70.001 2568 70.001v222H0v-222z"
            ></path>
          </svg>
          {/* <svg
            className="fill-current w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg> */}
          {/* <svg
            className="fill-current w-full relative z-30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2469 239"
          >
            <path
              fill="#ffffff"
              d="M0 15.446S461-27.74 788.16 30.312c462.18 82.012 732.73 147.47 1196.24 89.548C2177.21 95.767 2469 15.446 2469 15.446V239H0V15.446z"
            ></path>
          </svg> */}
          <section className="py-16 relative z-40">
            <h3 className="mx-12 md:mx-32 leading-loose pb-7">At a glance</h3>
            <div className="grid grid-cols-2 gap-y-5 lg:grid-cols-4 mx-12 md:mx-32">
              <div>
                <CountUp
                  end={732}
                  className="text-5xl text-purple font-semibold"
                />
                <p className="text-black font-medium text-sm pt-2">
                  student founders
                </p>
              </div>
              <div>
                <CountUp
                  end={65}
                  className="text-5xl text-purple font-semibold"
                />
                <p className="text-black font-medium text-sm pt-2">
                  ventures launched
                </p>
              </div>
              <div>
                <CountUp
                  end={258}
                  className="text-5xl text-purple font-semibold"
                />
                <p className="text-black font-medium text-sm pt-2">
                  donors to date
                </p>
              </div>
              <div>
                <CountUp
                  end={60000}
                  separator=","
                  suffix="+"
                  className="text-5xl text-purple font-semibold"
                />

                <p className="text-black font-medium text-sm pt-2">
                  impacted annually
                </p>
              </div>
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
          <section className="bg-purplelight py-8">
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 space-y-10 mx-10 md:space-y-0 md:mx-24 md:grid-cols-2 md:space-x-8"
            >
              <div>
                <img
                  className="w-50 h-96 rounded-xl mx-auto md:mx-0"
                  src="/about.jpg"
                  alt="A group of students sitting and smiling"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <Badge fillcolor="purple">Our mission</Badge>
                <h2 className="font-medium">
                  {" "}
                  Creating an accessible accelerator for student-led impact.{" "}
                </h2>
                <p className="text-gray">
                  Hack+ is a full-spectrum platform that enables students to
                  launch and pursue startups, nonprofits, and events, with no
                  fees attached.{" "}
                </p>
                <p className="text-gray">
                  Through our programs, students gain access to valuable
                  resources, organization management software, equipment, and a
                  supportive community, all fusing together to create a cohesive
                  platform for creating scalable impacts.{" "}
                </p>
              </div>
            </div>
          </section>
          <svg
            className="fill-current w-full transform rotate-180"
            viewBox="0 0 2577 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 103S181.5 0 530.5 0C904 0 1326.5 81.672 1757 110.687c137.39 9.26 820 0 820 0V192H0v-89z"
              fill="#F7F5FF"
            />
          </svg>
          <section className="pb-8 mx-8 md:mx-24">
            <h3 className="pb-16 pt-8">Meet the Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Team
                src="/avatars/sanil.jpeg"
                name="Sanil Chawla"
                role="Executive Director"
                badgeFill="purple"
                badgeTextColor="white"
                badgeText="Founder"
              />
              <Team
                src="/avatars/jamsheed.jpg"
                name="Jamsheed Mistri"
                role="Operations"
                badgeFill="blue"
                badgeTextColor="black"
                badgeText="Director"
              />
              <Team
                src="/avatars/sam.jpg"
                name="Samuel Escapa"
                role="Engineering"
                badgeFill="blue"
                badgeTextColor="black"
                badgeText="Director"
              />

              <Team
                src="/avatars/leo.jpg"
                name="Leo Lin"
                role="Operations"
                badgeFill="green"
                badgeTextColor="black"
                badgeText="Staff"
              />
              <Team
                src="/avatars/jd.jpg"
                name="JD LeRoy"
                role="Events"
                badgeFill="green"
                badgeTextColor="black"
                badgeText="Staff"
              />
              <Team
                src="/avatars/lily.jpg"
                name="Lillian Zeng"
                role="Events"
                badgeFill="green"
                badgeTextColor="black"
                badgeText="Staff"
              />
              <Team
                src="/avatars/aaron.png"
                name="Aaron Wang"
                role="Engineering"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/ella.jpg"
                name="Ella Xu"
                role="Engineering"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/matthew.jpg"
                name="Matthew Lee"
                role="Engineering"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/raghav.jpg"
                name="Raghav Misra"
                role="Engineering"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/sydnie.jpg"
                name="Sydnie Chau"
                role="Engineering"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/yash.jpg"
                name="Yash Totale"
                role="Engineering"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/garima.jpg"
                name="Garima Sharma"
                role="Marketing"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
              <Team
                src="/avatars/jade.jpg"
                name="Jade Wang"
                role="Marketing"
                badgeFill="yellow"
                badgeTextColor="black"
                badgeText="Intern"
              />
            </div>
            <p className="text-sm py-8">
              Interested in joining our team?{" "}
              <a
                href="mailto:hello@hackplus.io"
                className="text-purple hover:text-indigo"
              >
                Reach out <span>&rarr;</span>
              </a>
            </p>
          </section>
        </main>
      </Layout>
    </div>
  );
}
