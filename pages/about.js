import CountUp from "react-countup";
import Badge from "../components/Badge";
import Layout from "../components/Layout";
import Team from "../components/Team";

export default function About() {
  return (
    <div>
      <Layout title="About">
        <main>
          <section className="-mb-8">
            <div className="bg-purple relative z-0">
              <div className="overflow-hidden w-full h-96"><img className="mix-blend-overlay opacity-70" src="/meeting.jpg" alt="Four people talking over a computer screen" /></div>
            </div>
            <div className="text-white space-y-5 mx-12 -mt-48 md:mx-24 absolute z-10">
              <h1 className="font-medium">About Hack+</h1>
              <p>We&apos;re a 501(c)(3) nonprofit that&apos;s looking to help students change the world.</p>
            </div>
          </section>
          <section className="py-16">
            <h3 className=" mx-12 md:mx-32 leading-loose pb-7">At a glance</h3>
            <div className="grid grid-cols-2 gap-y-5 lg:grid-cols-4 mx-12 md:mx-32">
              <div>
                <CountUp end={732} className="text-5xl text-purple font-semibold" />
                <p className="text-black font-medium text-sm pt-2">student founders</p>
              </div>
              <div>
                <CountUp end={65} className="text-5xl text-purple font-semibold" />
                <p className="text-black font-medium text-sm pt-2">ventures launched</p>
              </div>
              <div>
                <CountUp end={258} className="text-5xl text-purple font-semibold" />
                <p className="text-black font-medium text-sm pt-2">donors to date</p>
              </div>
              <div>

                <CountUp end={60000} separator="," suffix="+" className="text-5xl text-purple font-semibold" />

                <p className="text-black font-medium text-sm pt-2">impacted annually</p>
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
            <div className="grid grid-cols-1 space-y-10 mx-10 md:space-y-0 md:mx-24 md:grid-cols-2 md:space-x-8">
              <div>
                <img className="w-50 h-96 rounded-xl mx-auto md:mx-0" src="/about.jpg" alt="A group of students sitting and smiling" />
              </div>
              <div className="flex flex-col space-y-4">
                <Badge fillcolor="purple" textcolor="white">Our mission</Badge>
                <h2 className="font-medium"> Creating an accessible accelerator for student-led impact. </h2>
                <p className="text-gray">Hack+ is a full-spectrum platform that enables students to launch and pursue startups, nonprofits, and events, with no fees attached. </p>
                <p className="text-gray">Through our programs, students gain access to valuable resources, organization management software, equipment, and a supportive community, all fusing together to create a cohesive platform for creating scalable impacts. </p>
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

            </div>
            <p className="text-sm py-8">
              Interested in joining our team? <a href="mailto:hello@hackplus.io" className="text-purple hover:text-indigo">Reach out <span>&rarr;</span></a>
            </p>
          </section>
        </main>
      </Layout>
    </div>
  );
}
