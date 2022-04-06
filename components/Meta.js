import Head from "next/head";

export default function Meta({ title }) {
  const description =
    "Hi! We're Hack+, a nonprofit organization that helps students launch amazing ventures.";
  const keywords =
    "entrepreneur, entrepreneurship, coding, cs, education, nonprofit, students, events, nonprofits, startups, college, high school";
  const author = "@HackPlusYou";
  const twitter = "@HackPlusYou";
  const image = "/img/logos/logo-banner.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title == "Home" ? "Hack+" : `${title} | Hack+`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content="https://hackplus.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1852" />
      <meta property="og:image:height" content="970" />
      <meta property="og:locale" content="en" />
      <meta name="twitter:title" content="Hack+" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="apple-mobile-web-app-title" content="Hack+" />
      <meta name="application-name" content="Hack+" />
      <meta name="msapplication-TileColor" content="#603cba" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link href="/site.webmanifest" rel="manifest" />
      <link href="/img/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link color="#7d5fff" href="/img/icons/safari-pinned-tab.svg" rel="mask-icon" />
      <link href="/img/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/img/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
    </Head>
  );
}
