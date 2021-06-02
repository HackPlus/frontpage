import Card from "../components/Card";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <main className="px-8 md:px-36 lg:px-40">
          <Button type={2} href="/">
            secondary
          </Button>
          <Button type={3} href="/">
            Get Started
          </Button>
          <Button href="/">primary</Button>
          <section id="services">
            <div className="flex flex-col md:flex-row gap-5">
              <Card
                title="Events+"
                textcolor="blue"
                fillcolor="green"
                badgeText="Accepting applications"
                href="/"
                cta="Learn more"
              >
                Launch events, like hackathons or conferences, using our
                comprehensive platform. We&apos;ll provide legal backend,
                banking services, powerful equipment, and more.
              </Card>
              <Card
                title="Events+"
                textcolor="blue"
                fillcolor="green"
                badgeText="Accepting applications"
                href="/"
                cta="Reach out to apply"
              >
                Launch events, like hackathons or conferences, using our
                comprehensive platform. We&apos;ll provide legal backend,
                banking services, powerful equipment, and more.
              </Card>
              <Card
                title="Events+"
                textcolor="blue"
                fillcolor="green"
                badgeText="Accepting applications"
                href="/"
                cta="Reach out to apply"
              >
                Launch events, like hackathons or conferences, using our
                comprehensive platform. We&apos;ll provide legal backend,
                banking services, powerful equipment, and more.
              </Card>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
