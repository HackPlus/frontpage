import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div>
      <Layout title="Contact">
        <main>
          <section>
            <div>
              <h1>Reach Out</h1>
              <p>
                Shoot us a message to talk about our programs,learn more about
                our story, or anything else.
              </p>
            </div>
          </section>
          <p>svg here</p>
          <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 place-items-center text-center">
              <div>
                <h4 className="text-black leading-9">Mail</h4>
                <p className="text-gray">
                  447 King Ave <br />
                  Fremont, CA 94536
                </p>
              </div>
              <div>
                <h4 className="text-black leading-9">Email</h4>
                <p>
                  <a className="text-purple" href="mailto:hello@hackplus.io">
                    hello@hackplus.io
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-black leading-9">Call</h4>
                <p>
                  <a href="tel:+14159388088" className="text-purple">
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
