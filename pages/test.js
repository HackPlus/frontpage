import { CarouselData } from "../components/Carousel/CarouselData";
import Carousel from "../components/Carousel/Slider";
import Layout from "../components/Layout";

export default function Test() {
  return (
    <div>
      <Layout title="Contact">
        <main>
          <section>
            <div className="flex justify-center mx-auto">
              <Carousel slides={CarouselData} />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
