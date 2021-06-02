import Layout from "../components/Layout";
import Team from "../components/Team";

export default function About() {
  return (
    <div>
      <Layout title="About">
        <main>
          <section>
            <h1>About</h1>
          </section>
          <section>
            <h2>Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              <Team src="/avatars/sanil.jpeg" name="Sanil Chawla" role="Executive Director" />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
