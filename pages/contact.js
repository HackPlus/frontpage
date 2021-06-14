import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div>
      <Layout title="Contact">
        <main>
          <section>
            <div
              data-aos="fade-up"
              className="absolute z-20 text-white pt-8 md:pt-20 mx-8 md:mx-14"
            >
              <h1 className="text-4xl md:text-5xl font-medium leading-loose pb-4">
                Reach Out
              </h1>
              <p className="w-9/12 text-lg">
                Shoot us a message to talk about our programs, learn more about
                our story, or anything else.
              </p>
            </div>
            <div className="bg-gray relative z-0">
              <img
                src="/article-6.jpg"
                alt="Laptop"
                className="w-full h-80 mix-blend-overlay opacity-70"
              />
            </div>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2568 292"
            className="w-full fill-current relative z-20 -mb-2 -mt-14 md:-mt-18 lg:-mt-32"
          >
            <path
              fill="#ffffff"
              d="M0 70.001S121.5 171.5 577.5 171.5c241.837 0 753.21-149.204 1222-171C2211 .5 2568 70.001 2568 70.001v222H0v-222z"
            ></path>
          </svg>
          <section className="bg-white py-16 relative z-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 place-items-center text-center">
              <div>
                <h4 className="text-black leading-9 font-medium">Mail</h4>
                <p className="text-gray">
                  447 King Ave <br />
                  Fremont, CA 94536
                </p>
              </div>
              <div>
                <h4 className="text-black leading-9 font-medium">Email</h4>
                <p>
                  <a
                    className="text-purple font-medium"
                    href="mailto:hello@hackplus.io"
                  >
                    hello@hackplus.io
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-black leading-9 font-medium">Call</h4>
                <p>
                  <a
                    href="tel:+14159388088"
                    className="text-purple font-medium"
                  >
                    +1 (415) 938-8088
                  </a>
                </p>
                <p className="text-sm text-graymed">Leave a message anytime.</p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
