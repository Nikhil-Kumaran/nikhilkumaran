import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/reset.css";
import "nprogress/nprogress.css";
import "../styles/global.css";
import "../styles/prismBase.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
