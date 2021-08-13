import "../styles/global.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <motion.div
        key={router.route}
        transition={{ delay: 0.5 }}
        initial="pageInitial"
        animate="pageAnimate"
        className="flex items-center justify-center absolute inset-0"
        variants={{
          pageInitial: {
            opacity: 1,
          },
          pageAnimate: {
            opacity: 0,
          },
        }}
      >
        <div className="loading-animation"></div>
      </motion.div>
      <motion.div
        key={router.route}
        transition={{ delay: 0.5 }}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </motion.div>
    </>
  );
}

export default MyApp;
