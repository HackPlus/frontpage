import Footer from "./Footer";
import Meta from "./Meta";
import Nav from "./Nav";

export default function Layout({ layout, title, children }) {
  switch (layout) {
    case "document":
      return (
        <div>
          <Meta title={title} />
          <Nav />
          <div className="mx-8 md:mx-24 lg:mx-48 my-8">{children}</div>
          <Footer />
        </div>
      )
    default:
      return (
        <div>
          <Meta title={title} />
          <Nav />
          <div>{children}</div>
          <Footer />
        </div>
      )
  }
}

// use `layout="document"` for the text pages or pages that don't have other designs like svgs because there's a default margin
