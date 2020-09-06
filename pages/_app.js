import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "../styles/reset.css";
import "nprogress/nprogress.css";
import "../styles/global.css";
import * as gtag from "../utils/gtag";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteComplete = (url) => {
      NProgress.done();
      gtag.pageview(url);
    };

    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeError", () => NProgress.done());
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeStart", () => NProgress.start());
      router.events.off("routeChangeError", () => NProgress.done());
    };
  }, [router.events]);

  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
