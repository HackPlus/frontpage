import "../styles/global.css";
import "keen-slider/keen-slider.min.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AnimatePresence
        onExitComplete={() => {
          AOS.refresh();
        }}
      >
        <motion.div
          key={router.route + "loading"}
          transition={{ delay: 1 }}
          initial="pageInitial"
          animate="pageAnimate"
          className="flex items-center justify-center fixed inset-0"
          variants={{
            pageInitial: {
              opacity: 1,
            },
            pageAnimate: {
              opacity: 0,
              transitionEnd: {
                height: 0,
                width: 0,
              },
            },
          }}
        >
          <div className="loading-animation"></div>
        </motion.div>
        <motion.div
          key={router.route + "opacity"}
          transition={{ delay: 1 }}
          initial="pageInitial"
          animate="pageAnimate"
          exit="exit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            exit: {
              opacity: 0,
              transition: {
                delay: 0,
                duration: 0.4,
              },
            },
          }}
        >
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;
