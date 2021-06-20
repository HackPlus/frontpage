import Layout from "../components/Layout";
import Table from "../components/Table";

export default function Test() {
  return (
    <div>
      <Layout title="Contact">
        <main>
          <section>
            <div className="flex justify-center mx-auto">
              <Table />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
