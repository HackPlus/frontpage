import Card from "../components/Card";
import Layout from "../components/Layout";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Layout title="Hack+">
        <main className="px-8 md:px-36 lg:px-40">
          <Button href="/">default</Button>
          <Button type={3} href="/">
            secondary
          </Button>
          <Button type={2} href="/">
            primary
          </Button>
          <section id="services">
            <div className="flex flex-col md:flex-row gap-5">
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
