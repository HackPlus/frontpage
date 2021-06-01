import Footer from "./Footer";
import Meta from "./Meta";
import Nav from "./Nav";

export default function Layout({ title, children }) {
  return (
    <div>
      <Meta title={title} />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
