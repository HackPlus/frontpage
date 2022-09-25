import Image from "next/image";
import CountUp from "react-countup";
import Badge from "../components/Badge";
import Layout from "../components/Layout";
import Team from "../components/Team";
import aboutImage from "../public/img/about.jpg";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";

export default function About() {
  return (
    <div>
      <Layout title="About">
        <main>
          <section className="relative overflow-hidden main-container bg-center bg-about-cover bg-cover bg-purple bg-blend-multiply bg-opacity-60 h-96 -mb-10 md:-mb-24">
            <svg
              className="hidden md:block opacity-100 absolute -right-48 top-2 w-full max-w-2xl text-cyan"
              viewBox="0 0 338 277"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M136.018 0.775024C143.338 0.998024 150.311 2.86002 157.217 4.90402C161.951 6.30502 166.533 8.21602 171.238 9.72702C177.683 11.799 184.205 13.642 190.654 15.704C198.047 18.067 205.496 20.302 212.734 23.077C219.181 25.549 225.818 26.16 232.576 26.624C242.613 27.313 252.408 29.541 262.14 31.958C267.613 33.318 273.015 35.013 278.376 36.777C286.159 39.338 292.769 43.771 298.435 49.705C300.869 52.253 303.482 54.662 306.224 56.875C310.91 60.658 314.185 65.568 317.597 70.391C317.999 70.957 318.31 71.699 318.861 72.031C323.925 75.085 326.72 80.024 329.47 84.928C331.605 88.738 333.45 92.72 335.236 96.711C335.974 98.361 336.533 100.215 336.629 102.006C336.979 108.465 337.936 114.881 337.352 121.411C336.889 126.604 336.916 131.868 337.11 137.086C337.676 152.284 335.641 167.235 333.401 182.2C331.815 192.802 330.878 203.502 329.278 214.101C328.417 219.807 327.28 225.578 325.321 230.976C323.759 235.279 321.196 239.409 318.317 243.006C311.585 251.42 303.104 257.68 292.893 261.414C288.381 263.064 283.952 265.016 279.332 266.275C273.076 267.98 266.711 269.338 260.33 270.509C250.605 272.292 240.844 273.878 231.07 275.381C220.672 276.98 210.306 277.306 199.939 274.719C194.33 273.32 188.527 272.723 182.869 271.504C166.828 268.049 151.043 263.651 135.754 257.669C130.918 255.776 126.25 253.478 122.199 249.956C118.49 246.731 113.928 244.469 110.316 241.155C103.357 234.766 96.6579 228.074 90.1249 221.245C84.3729 215.231 79.0449 208.814 73.4259 202.671C71.6229 200.7 69.3989 199.121 67.5219 197.212C61.8789 191.478 56.3579 185.624 50.6959 179.909C48.0139 177.202 45.0629 174.763 42.3439 172.091C39.7309 169.523 37.2799 166.791 34.7229 164.164C30.1899 159.507 25.8419 154.642 21.0319 150.288C14.4459 144.325 9.29194 137.288 4.85794 129.733C1.90494 124.702 0.404932 119.126 0.994932 113.109C1.35393 109.453 1.56894 105.873 3.02594 102.364C4.82294 98.043 7.59594 94.544 11.0199 91.581C16.4609 86.871 22.0179 82.28 27.7129 77.881C34.4159 72.703 41.2719 67.718 48.1519 62.774C53.0819 59.232 58.3649 56.157 63.1269 52.411C72.1059 45.348 81.2339 38.467 89.4079 30.405C96.0349 23.868 102.898 17.54 110.002 11.527C115.279 7.06004 121.135 3.23104 128.049 1.65704C130.639 1.07104 133.357 1.05302 136.018 0.775024ZM19.8459 102.8C15.5139 101.001 13.7579 101.522 12.1429 105.364C13.5239 105.867 14.8829 106.363 16.5709 106.978C16.7739 105.683 16.8949 104.912 16.9929 104.287C17.9989 103.763 18.9229 103.281 19.8479 102.799C21.2859 101.622 23.0749 100.717 23.4099 98.469C20.4119 98.883 20.4119 98.883 19.8459 102.8ZM118.352 15.815C117.153 17.925 116.342 19.402 117.231 21.328C119.746 19.487 119.773 19.382 118.352 15.815ZM36.2909 86.69C35.4119 88.799 34.8089 90.248 34.0939 91.961C37.8889 90.785 37.8889 90.785 36.2909 86.69ZM129.395 162.873C128.641 162.383 128.006 161.799 127.858 161.903C127.292 162.306 126.881 162.927 126.413 163.468C126.843 163.712 127.337 164.224 127.684 164.138C128.211 164.009 128.639 163.465 129.395 162.873ZM137.797 163.645C137.248 164.305 136.658 164.709 136.697 165.036C136.763 165.591 137.228 166.097 137.525 166.623C137.986 166.255 138.761 165.928 138.818 165.505C138.881 165.033 138.287 164.477 137.797 163.645ZM137.221 207.492C137.242 207.855 137.264 208.219 137.285 208.582C138.129 208.456 138.973 208.33 139.816 208.205C139.787 207.967 139.757 207.73 139.73 207.492C138.895 207.492 138.057 207.492 137.221 207.492ZM110.674 30.56C110.768 30.297 110.862 30.035 110.957 29.772C110.123 29.451 109.291 29.13 108.457 28.809C108.357 29.097 108.256 29.386 108.154 29.674C108.994 29.969 109.834 30.265 110.674 30.56ZM116.773 160.416C116.58 160.891 116.285 161.258 116.357 161.528C116.435 161.827 116.851 162.037 117.121 162.285C117.336 161.902 117.652 161.535 117.713 161.129C117.736 160.968 117.193 160.722 116.773 160.416ZM124.658 162.574C123.793 162.347 123.324 162.142 122.863 162.152C122.707 162.156 122.562 162.708 122.414 163.009C122.768 163.15 123.127 163.408 123.473 163.392C123.754 163.381 124.02 163.036 124.658 162.574ZM133.973 165.672C133.819 165.484 133.664 165.297 133.51 165.11C133.348 165.387 133.151 165.654 133.059 165.954C133.039 166.011 133.434 166.196 133.637 166.322C133.748 166.105 133.861 165.89 133.973 165.672ZM115.15 24.039C114.955 23.876 114.759 23.714 114.566 23.552C114.468 23.778 114.254 24.034 114.302 24.223C114.353 24.418 114.656 24.549 114.849 24.708C114.949 24.486 115.051 24.263 115.15 24.039Z"></path>
            </svg>
            <div
              data-aos="fade-up"
              className="main-content text-white space-y-5"
            >
              <div className="text-white text-sm h-16 flex items-center pb-20 pt-8">
                <Link href="/">
                  <a className="text-graylight font-medium hover:text-white">
                    Home
                  </a>
                </Link>{" "}
                <MdPlayArrow className="mx-2 h-3 w-3 text-graylight opacity-20" />{" "}
                <span className="text-white">About</span>
              </div>
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
            className="w-full fill-current relative z-20 max-h-32"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0 70.001S121.5 171.5 577.5 171.5c241.837 0 753.21-149.204 1222-171C2211 .5 2568 70.001 2568 70.001v222H0v-222z"
            ></path>
          </svg>

          <section className="main-container bg-white py-16 relative z-40 px-8 md:px-24">
            <div className="main-content">
              <h3 className="leading-loose pb-7">At a glance</h3>
              <div className="grid grid-cols-2 gap-y-5 lg:grid-cols-4">
                <div>
                  <CountUp
                    end={732}
                    delay={1.5}
                    className="text-4xl sm:text-5xl text-purple font-semibold"
                  />
                  <p className="text-black font-medium text-sm pt-2">
                    student founders
                  </p>
                </div>
                <div>
                  <CountUp
                    end={65}
                    delay={1.5}
                    className="text-4xl sm:text-5xl text-purple font-semibold"
                  />
                  <p className="text-black font-medium text-sm pt-2">
                    ventures launched
                  </p>
                </div>
                <div>
                  <CountUp
                    end={258}
                    delay={1.5}
                    className="text-4xl sm:text-5xl text-purple font-semibold"
                  />
                  <p className="text-black font-medium text-sm pt-2">
                    donors to date
                  </p>
                </div>
                <div>
                  <CountUp
                    end={60000}
                    delay={1.5}
                    separator=","
                    suffix="+"
                    className="text-4xl sm:text-5xl text-purple font-semibold"
                  />

                  <p className="text-black font-medium text-sm pt-2">
                    impacted annually
                  </p>
                </div>
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
          <section className="main-container bg-purplelight py-8">
            <div
              data-aos="fade-up"
              className="main-content flex flex-col items-center md:flex-row md:space-x-10"
            >
              <div className="w-3/4 md:w-full md:mx-0 mb-8 md:mb-0 mx-auto">
                <Image
                  className="rounded-xl"
                  src={aboutImage}
                  alt="A group of students sitting and smiling"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <Badge fillcolor="purple">Our mission</Badge>
                <h2 className="font-medium">
                  Creating an accessible accelerator for student-led impact.{" "}
                </h2>
                <p className="text-gray">
                  Hack+ is a full-spectrum platform that enables students to
                  launch and pursue startups, nonprofits, and events, with no
                  fees attached.
                </p>
                <p className="text-gray">
                  Through our programs, students gain access to valuable
                  resources, organization management software, equipment, and a
                  supportive community, all fusing together to create a cohesive
                  platform for creating scalable impacts.
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
          <section className="pb-8 main-container">
            <div className="main-content">
              <h3 className="pb-16 pt-8">Meet the Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Team
                  src="/img/avatars/sanil.jpeg"
                  name="Sanil Chawla"
                  role="Executive Director"
                  badgeFill="purple"
                  badgeTextColor="white"
                  badgeText="Founder"
                />
                <Team
                  src="/img/avatars/jamsheed.jpg"
                  name="Jamsheed Mistri"
                  role="Operations"
                  badgeFill="blue"
                  badgeTextColor="black"
                  badgeText="Director"
                />
                <Team
                  src="/img/avatars/sam.jpg"
                  name="Samuel Escapa"
                  role="Engineering"
                  badgeFill="blue"
                  badgeTextColor="black"
                  badgeText="Director"
                />
                <Team
                  src="/img/avatars/jd.jpg"
                  name="JD LeRoy"
                  role="Events"
                  badgeFill="green"
                  badgeTextColor="black"
                  badgeText="Staff"
                />
                <Team
                  src="/img/avatars/lily.jpg"
                  name="Lillian Zeng"
                  role="Events"
                  badgeFill="green"
                  badgeTextColor="black"
                  badgeText="Staff"
                />
                <Team
                  src="/img/avatars/evan.jpg"
                  name="Evan Tu"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/maggie.png"
                  name="Maggie Liu"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/manasa.jpeg"
                  name="Manasa Maddi"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/nima.jpg"
                  name="Nima Pourjafar"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/raghav.jpg"
                  name="Raghav Misra"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/shubham.jpg"
                  name="Shubham Patil"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/terry.jpg"
                  name="Terry Su"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/yash.jpg"
                  name="Yash Totale"
                  role="Engineering"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
                <Team
                  src="/img/avatars/jade.jpg"
                  name="Jade Wang"
                  role="Marketing"
                  badgeFill="yellow"
                  badgeTextColor="black"
                  badgeText="Intern"
                />
              </div>
              <p className="py-8 text-gray">
                Interested in joining our team?{" "}
                <a
                  href="mailto:hello@hackplus.io"
                  className="text-purple hover:text-indigo font-medium"
                >
                  Reach out <span>&rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
