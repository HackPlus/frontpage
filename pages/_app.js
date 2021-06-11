import "../styles/global.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      transition={{ delay: 0.2 }}
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
  );
}

export default MyApp;
